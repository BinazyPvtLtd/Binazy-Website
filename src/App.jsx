// src/App.jsx
import Home from "./pages/Home";
import { Routes, Route, Navigate } from "react-router-dom";
import About from "./pages/About";
import ContactPage from "./pages/ContactPage";
import NotFound from "./pages/NotFound";
import ServiceDetailsPage from "./pages/services/ServiceDetailsPage";
import IndustryDetailsPage from "./pages/industries/IndustryDetailsPage";
import LocationDetailsPage from "@/pages/Locations/LocationDetailPage";
import BlogPage from "@/pages/blog/BlogPage";
import BlogDetailsPage from "@/pages/blog/BlogDetailsPage";
import ScrollToTop from "./components/ScrollToTop";
import ScrollToTopButton from "./components/ScrollToTopButton";
import WhatsappButton from "./components/WhatsappButton";
import CallButton from "./components/CallButton";

const App = () => {
  return (
    <>
      <WhatsappButton />
      <CallButton />
      <ScrollToTop />
      {/* <ScrollToTopButton /> */}
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact-us" element={<ContactPage />} />
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
