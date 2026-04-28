import Navbar from "../components/common/Navbar";
import Hero from "../components/core/home/Hero";
import TrustedBrands from "../components/core/home/TrustedBrands";
import Features from "../components/core/home/Features";
import Footer from "../components/common/Footer";
import WhyChooseUs from "@/components/core/home/WhyChooseUs";
import Testimonials from "@/components/core/home/Testimonials";
import ProjectPortfolio from "@/components/core/home/ProjectPortfolio";
import FAQSection from "@/components/common/FAQSection";
import CTASection from "@/components/core/home/CTASection";
import SolutionsSection from "@/components/core/home/SolutionsSection";
import DigitalJourney from "@/components/core/home/DigitalJourney";
import TechStackSection from "@/components/core/about/TechStackSection";
import LocationTemplate from "@/pages/Locations/LocationTemplate";

const Home = () => {
  return (
    <>
      <Navbar />
      <main id="main-content" className="pt-16 ">
        <Hero />
        <TrustedBrands />
        <DigitalJourney />
        <SolutionsSection />
        <TechStackSection />
        <Testimonials />
        <Features />

        <ProjectPortfolio />
        <WhyChooseUs />

        <FAQSection />
        <CTASection />
        <LocationTemplate />
      </main>
      <Footer />
    </>
  );
};

export default Home;
