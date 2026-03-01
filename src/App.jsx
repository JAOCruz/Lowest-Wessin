import { useState } from 'react'
import { Routes, Route } from 'react-router-dom'
import Layout from './components/layout/Layout'
import ScrollToTop from './components/shared/ScrollToTop'
import Preloader from './components/shared/Preloader'
import ScrollProgress from './components/shared/ScrollProgress'
import HomePage from './pages/HomePage'
import ServicesPage from './pages/ServicesPage'
import DueDiligencePage from './pages/DueDiligencePage'
import AboutPage from './pages/AboutPage'
import ContactPage from './pages/ContactPage'
import PropertiesPage from './pages/PropertiesPage'
import PropertyDetailPage from './pages/PropertyDetailPage'
import NotFoundPage from './pages/NotFoundPage'

export default function App() {
  const [preloaderDone, setPreloaderDone] = useState(false)

  return (
    <>
      <Preloader onComplete={() => setPreloaderDone(true)} />
      <ScrollProgress />
      <div
        style={{
          opacity: preloaderDone ? 1 : 0,
          transition: 'opacity 0.3s ease',
        }}
      >
        <ScrollToTop />
        <Routes>
          <Route element={<Layout />}>
            <Route index element={<HomePage />} />
            <Route path="services" element={<ServicesPage />} />
            <Route path="real-estate-due-diligence-dominican-republic" element={<DueDiligencePage />} />
            <Route path="about" element={<AboutPage />} />
            <Route path="contact" element={<ContactPage />} />
            <Route path="properties" element={<PropertiesPage />} />
            <Route path="properties/:slug" element={<PropertyDetailPage />} />
            <Route path="*" element={<NotFoundPage />} />
          </Route>
        </Routes>
      </div>
    </>
  )
}
