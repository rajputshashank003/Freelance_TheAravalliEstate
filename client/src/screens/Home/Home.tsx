import PageLayout from '../../common/PageLayout/PageLayout'
import BrandBanner from './components/BrandBanner'
import HeroSection from './components/HeroSection'
import TrustStrip from './components/TrustStrip'
import PromiseSection from './components/PromiseSection'
import ServicesSection from './components/ServicesSection'
import AreasSection from './components/AreasSection'
import ProcessSection from './components/ProcessSection'
import FaqSection from './components/FaqSection'
import ContactSection from './components/ContactSection'
import HomeContext from './context'
import useHome from './useHome'

function HomeComp() {
    return (
        <PageLayout>
            <BrandBanner />
            <HeroSection />
            <TrustStrip />
            <PromiseSection />
            <ServicesSection />
            <AreasSection />
            <ProcessSection />
            <FaqSection />
            <ContactSection />
        </PageLayout>
    )
}

export default function Home() {
    const value = useHome()
    return (
        <HomeContext.Provider value={value}>
            <HomeComp />
        </HomeContext.Provider>
    )
}
