import { ArrowLeft } from 'lucide-react'
import SEOHead from '../components/shared/SEOHead'
import Container from '../components/ui/Container'
import Button from '../components/ui/Button'

export default function NotFoundPage() {
  return (
    <>
      <SEOHead title="Page Not Found" description="The page you are looking for does not exist." />

      <section className="pt-36 pb-24">
        <Container>
          <div className="text-center py-20 max-w-lg mx-auto">
            <div className="font-display text-8xl font-bold text-gold/20 mb-6">404</div>
            <h1 className="font-display text-3xl font-bold text-navy mb-4">
              Page Not Found
            </h1>
            <p className="text-body/60 mb-8">
              The page you are looking for doesn&rsquo;t exist or has been moved.
            </p>
            <Button to="/" variant="outline">
              <ArrowLeft size={16} className="mr-2" />
              Back to Home
            </Button>
          </div>
        </Container>
      </section>
    </>
  )
}
