import Home from "@/pages/Home";
import { Routes, Route, Navigate } from "react-router-dom";
import About from "@/pages/About";
import ContactPage from "@/pages/ContactPage";
import SubmitSuccess from "@/pages/SubmitSuccess";
import NotFound from "@/pages/NotFound";
import ServiceDetailsPage from "@/pages/services/ServiceDetailsPage";
import IndustryDetailsPage from "@/pages/industries/IndustryDetailsPage";
import LocationDetailsPage from "@/pages/locations/LocationDetailPage";
import BlogPage from "@/pages/blog/BlogPage";
import BlogDetailsPage from "@/pages/blog/BlogDetailsPage";
import ScrollToTop from "@/components/ScrollToTop";
import WhatsappButton from "@/components/WhatsappButton";
import CallButton from "@/components/CallButton";
import New from "@/components/New";

const App = () => {
  return (
    <>
      <WhatsappButton />    
      <CallButton />
      <ScrollToTop />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact-us" element={<ContactPage />} />
        <Route path="/submitSuccess" element={<SubmitSuccess />} />
        <Route path="/blog" element={<BlogPage />} />
        <Route path="/blog/:blogId" element={<BlogDetailsPage />} />
        <Route path="/services/:serviceId" element={<ServiceDetailsPage />} />
        <Route
          path="/services/web-app-development"
          element={<Navigate to="/services/web-development" replace />}
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
        <Route path="/new" element={<New />} />
      </Routes>
    </>
  );
};

export default App;
