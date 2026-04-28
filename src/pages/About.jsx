import Navbar from "../components/common/Navbar";
import Footer from "../components/common/Footer";
import AboutHeader from "../components/core/about/AboutHeader";
import Purpose from "../components/core/about/Purpose";
import GrowthSection from "@/components/core/about/GrowthSection";
import TechStackSection from "../components/core/about/TechStackSection";
import ProcessSection from "../components/core/about/ProcessSection";
import StatsSection from "../components/common/StatsSection";
import ImageGallery from "../components/core/about/ImageGallery";
import Founder from "../components/core/about/Founder";
import FAQSection from "@/components/common/FAQSection";


const About = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />

      <main id="main-content">
        <AboutHeader />
        <Purpose />
        <GrowthSection />
        <TechStackSection />
        <ProcessSection />
        <StatsSection />
        <ImageGallery />
        <Founder />
        <FAQSection />
      </main>

      <Footer />
    </div>
  );
};

export default About;
