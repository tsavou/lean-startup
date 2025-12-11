import Benefits from '@/components/landing/benefits';
import Cta from '@/components/landing/cta';
import Faq from '@/components/landing/faq';
import Footer from '@/components/landing/footer';
import Hero from '@/components/landing/hero';
import HowItWorks from '@/components/landing/howitworks';
import Navbar from '@/components/landing/navbar';
import Partners from '@/components/landing/partners';
import Pricing from '@/components/landing/pricing';

const LandingPage = () => {
    // Design Tokens - kept for reference if needed globally, but used classes mostly
    const colors = {
        bg: 'bg-white',
        primary: 'text-black',
    };

    return (
        <div
            className={`min-h-screen ${colors.bg} ${colors.primary} font-sans selection:bg-[#DCECD7]`}
        >
            <Navbar />
            <Hero />
            <Partners />
            <Benefits />
            <HowItWorks />
            <Pricing />
            <Faq />
            <Cta />
            <Footer />
        </div>
    );
};

export default LandingPage;
