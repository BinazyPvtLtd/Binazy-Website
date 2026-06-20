import Navbar from "@/components/common/Navbar";
import Hero from "@/components/core/home/Hero";
import Footer from "@/components/common/Footer";
import WhyChooseUs from "@/components/core/home/WhyChooseUs";
import CTASection from "@/components/core/home/CTASection";
import Services from "@/components/core/home/Services";
import Industries from "@/components/core/home/Industries";
import TechStackSection from "@/components/core/about/TechStackSection";
import ProcessSection from "@/components/core/about/ProcessSection";
import SEO from "@/components/common/SEO";
import { Link } from "react-router-dom";
import Testimonials from "@/components/core/home/Testimonials";

const Home = () => {
  return (
    <>
      <SEO
        title="Binazy Pvt Ltd | Web, App, AI & Business Software Development"
        description="Binazy builds scalable websites, mobile apps, ERP systems, AI tools, and business software for startups and growing companies."
        path="/"
      />
      <Navbar />
      <main id="main-content" className="pt-16 ">
        <Hero />
        <Services />
        <Industries />
        <WhyChooseUs />
        <ProcessSection />
        <TechStackSection />
        <Testimonials />
        <CTASection />
      </main>
      <Footer />
    </>
  );
};

export default Home;
