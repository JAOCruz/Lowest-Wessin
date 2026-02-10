import SEOHead from '../components/shared/SEOHead'
import HeroSection from '../components/home/HeroSection'
import AuthorityBlock from '../components/home/AuthorityBlock'
import WhyLegalProtection from '../components/home/WhyLegalProtection'
import ServicesOverview from '../components/home/ServicesOverview'
import MeetGonzalo from '../components/home/MeetGonzalo'
import FeaturedProperties from '../components/home/FeaturedProperties'
import InvestmentProcess from '../components/home/InvestmentProcess'
import TestimonialCarousel from '../components/home/TestimonialCarousel'
import LeadMagnet from '../components/home/LeadMagnet'
import FAQ from '../components/home/FAQ'
import ClosingCTA from '../components/home/ClosingCTA'

export default function HomePage() {
  return (
    <>
      <SEOHead
        title="Independent Real Estate Legal Due Diligence - Dominican Republic"
        description="For over a decade, Cana Law has advised foreign investors on legal risk, project verification, and real estate decision-making throughout the Dominican Republic."
        canonicalPath="/"
      />
      <HeroSection />
      <AuthorityBlock />
      <WhyLegalProtection />
      <ServicesOverview />
      <MeetGonzalo />
      <FeaturedProperties />
      <InvestmentProcess />
      <TestimonialCarousel />
      <LeadMagnet />
      <FAQ />
      <ClosingCTA />
    </>
  )
}
