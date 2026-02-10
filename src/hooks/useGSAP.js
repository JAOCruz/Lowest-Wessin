import { useEffect, useRef } from 'react'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

gsap.registerPlugin(ScrollTrigger)

export function useFadeUp(options = {}) {
  const ref = useRef(null)

  useEffect(() => {
    if (!ref.current) return
    const ctx = gsap.context(() => {
      gsap.fromTo(
        ref.current,
        { y: 40, autoAlpha: 0 },
        {
          y: 0,
          autoAlpha: 1,
          duration: 0.8,
          ease: 'power2.out',
          scrollTrigger: {
            trigger: ref.current,
            start: 'top 85%',
            toggleActions: 'play none none none',
          },
          ...options,
        }
      )
    })
    return () => ctx.revert()
  }, [])

  return ref
}

export function useStaggerReveal(selector = '.stagger-child', options = {}) {
  const containerRef = useRef(null)

  useEffect(() => {
    if (!containerRef.current) return
    const children = containerRef.current.querySelectorAll(selector)
    if (!children.length) return
    const ctx = gsap.context(() => {
      gsap.fromTo(
        children,
        { y: 30, autoAlpha: 0 },
        {
          y: 0,
          autoAlpha: 1,
          duration: 0.6,
          stagger: 0.15,
          ease: 'power2.out',
          scrollTrigger: {
            trigger: containerRef.current,
            start: 'top 85%',
            toggleActions: 'play none none none',
          },
          ...options,
        }
      )
    }, containerRef)
    return () => ctx.revert()
  }, [])

  return containerRef
}

export function useCountUp(target) {
  const ref = useRef(null)

  useEffect(() => {
    if (!ref.current) return
    const obj = { val: 0 }
    const ctx = gsap.context(() => {
      gsap.to(obj, {
        val: target,
        duration: 2,
        ease: 'power1.out',
        scrollTrigger: {
          trigger: ref.current,
          start: 'top 90%',
          toggleActions: 'play none none none',
        },
        onUpdate: () => {
          if (ref.current) {
            ref.current.textContent = Math.round(obj.val)
          }
        },
      })
    })
    return () => ctx.revert()
  }, [target])

  return ref
}

export function useHeaderScroll() {
  const headerRef = useRef(null)

  useEffect(() => {
    if (!headerRef.current) return

    const onScroll = () => {
      if (!headerRef.current) return
      if (window.scrollY > 50) {
        headerRef.current.classList.add('bg-white', 'shadow-md')
        headerRef.current.classList.remove('bg-transparent')
      } else {
        headerRef.current.classList.remove('bg-white', 'shadow-md')
        headerRef.current.classList.add('bg-transparent')
      }
    }

    window.addEventListener('scroll', onScroll, { passive: true })
    onScroll()
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  return headerRef
}
