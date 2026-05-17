import Navbar from '@/components/Navbar'
import Hero from '@/components/sections/Hero'
import Problem from '@/components/sections/Problem'
import Solution from '@/components/sections/Solution'
import Services from '@/components/sections/Services'
import MarketingComparison from '@/components/sections/MarketingComparison'
import Packages from '@/components/sections/Packages'
import BusinessTypePricing from '@/components/sections/BusinessTypePricing'
import Portfolio from '@/components/sections/Portfolio'
import Maintenance from '@/components/sections/Maintenance'
import AddOns from '@/components/sections/AddOns'
import Process from '@/components/sections/Process'
import WhyUs from '@/components/sections/WhyUs'
import Industries from '@/components/sections/Industries'
import CtaSection from '@/components/sections/CtaSection'
import Contact from '@/components/sections/Contact'
import Footer from '@/components/Footer'

export default function Home() {
  return (
    <main className="bg-white dark:bg-[#0C0A1E] transition-colors duration-300">
      <Navbar />
      <Hero />
      <Problem />
      <Solution />
      <Services />
      <MarketingComparison />
      <Packages />
      <BusinessTypePricing />
      <Portfolio />
      <Maintenance />
      <AddOns />
      <Process />
      <WhyUs />
      <Industries />
      <CtaSection />
      <Contact />
      <Footer />
    </main>
  )
}
