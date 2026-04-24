// src/App.jsx
import Home from "./pages/Home";
import { Routes, Route, Navigate } from "react-router-dom";
import About from "./pages/About";
import ContactPage from "./pages/ContactPage";
import NotFound from "./pages/NotFound";
import ServiceDetailsPage from "./pages/services/ServiceDetailsPage";
import IndustryDetailsPage from "./pages/industries/IndustryDetailsPage";

const App = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/about" element={<About />} />
      <Route path="/contact-us" element={<ContactPage />} />

      {/* Dynamic service routes */}
      <Route path="/services/:serviceId" element={<ServiceDetailsPage />} />

      {/* Redirect old service URL */}
      <Route
        path="/services/web-app-development"
        element={<Navigate to="/services/web-development" replace />}
      />

      {/* Dynamic industry routes */}
      <Route
        path="/industries/:industriesId"
        element={<IndustryDetailsPage />}
      />

      {/* Industries base route redirect */}
      <Route
        path="/industries"
        element={<Navigate to="/industries/real-estate" replace />}
      />

      {/* Redirect old industry URL */}
      <Route
        path="/industries/elearning"
        element={<Navigate to="/industries/education" replace />}
      />

      <Route path="*" element={<NotFound />} />
    </Routes>
  );
};

export default App;
