import Home from "@/pages/Home";
import { Routes, Route, Navigate } from "react-router-dom";
import About from "@/pages/About";
import ContactPage from "@/pages/ContactPage";
import SubmitSuccess from "@/pages/SubmitSuccess";
import NotFound from "@/pages/NotFound";
import ServiceDetailsPage from "@/pages/services/ServiceDetailsPage";
import { serviceMenu } from "@/data/ServiceData";
import IndustryDetailsPage from "@/pages/industries/IndustryDetailsPage";
import LocationDetailsPage from "@/pages/locations/LocationDetailPage";
import BlogPage from "@/pages/blog/BlogPage";
import BlogDetailsPage from "@/pages/blog/BlogDetailsPage";
import Portfolio from "@/pages/Portfolio";
import ScrollToTop from "@/components/ScrollToTop";
import WhatsappButton from "@/components/WhatsappButton";
import CallButton from "@/components/CallButton";
import LeadFormPopup from "@/components/Leadformpopup";

const App = () => {
  const defaultServicePath = serviceMenu[0]?.to || "/";

  return (
    <>
      <LeadFormPopup />
      <WhatsappButton />
      <CallButton />
      <ScrollToTop />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact-us" element={<ContactPage />} />
        <Route path="/submitSuccess" element={<SubmitSuccess />} />
        <Route path="/portfolio" element={<Portfolio />} />
        <Route path="/blog" element={<BlogPage />} />
        <Route path="/blog/:blogId" element={<BlogDetailsPage />} />
        <Route path="/services/:serviceId" element={<ServiceDetailsPage />} />
        <Route
          path="/services"
          element={<Navigate to={defaultServicePath} replace />}
        />
        <Route
          path="/industries/:industriesId"
          element={<IndustryDetailsPage />}
        />
        <Route
          path="/industries"
          element={<Navigate to="/industries/real-estate" replace />}
        />
        <Route
          path="/industries/elearning"
          element={<Navigate to="/industries/education" replace />}
        />
        <Route
          path="/industries/retail"
          element={<Navigate to="/industries/ecommerce" replace />}
        />
        <Route
          path="/industries/finance"
          element={<Navigate to="/industries/fintech" replace />}
        />
        <Route
          path="/industries/logistics"
          element={<Navigate to="/industries/logistics-supply-chain" replace />}
        />
        <Route
          path="/industries/travel"
          element={<Navigate to="/industries/hospitality-tourism" replace />}
        />
        <Route
          path="/locations/:locationId"
          element={<LocationDetailsPage />}
        />
        <Route
          path="/locations"
          element={<Navigate to="/locations/australia" replace />}
        />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </>
  );
};

export default App;
