import React, { useState, useEffect, useRef } from "react";
import { Link, useLocation } from "react-router-dom";
import { Menu, X, ChevronDown, ChevronRight, ArrowRight } from "lucide-react";
import Logo from "@/assets/BinazyLogo.jpg";

const Navbar = () => {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState(null);
  const [mobileDropdown, setMobileDropdown] = useState(null);
  const [activeServiceCategory, setActiveServiceCategory] = useState(null);
  const [mobileServiceCategory, setMobileServiceCategory] = useState(null);
  const closeTimer = useRef(null);
  const location = useLocation();

  // Services Menu
  const servicesMenu = [
    
    {
      id: "web-commerce",
      title: "Software & App Development",
      links: [
        {
          name: "Business Websites",
          to: "/services/business-website-development",
        },
        { name: "Ecommerce Websites", to: "/services/online-store" },
        { name: "OTT Platforms", to: "/services/ott-platform-development" },
        {
          name: "Booking Systems",
          to: "/services/booking-appointment-system",
        },
      ],
    },
    {
      id: "software-apps",
      title: "Software & Apps",
      links: [
        { name: "Mobile Apps", to: "/services/mobile-app-development" },
        {
          name: "Custom Software",
          to: "/services/custom-software-development",
        },
        { name: "ERP Systems", to: "/services/erp-system-development" },
        { name: "HR & Payroll", to: "/services/hr-payroll-system" },
      ],
    },
    {
      id: "support-infrastructure",
      title: "Support & Growth",
      links: [
        { name: "24/7 Helpdesk", to: "/services/24-7-helpdesk-support" },
        { name: "Remote Monitoring", to: "/services/remote-monitoring" },
        {
          name: "Social Media Management",
          to: "/services/social-media-management",
        },
      ],
    },
    {
      id: "learning-edtech",
      title: "Learning & EdTech",
      links: [
        {
          name: "Online Learning",
          to: "/services/online-learning-platform",
        },
        {
          name: "Training Portal",
          to: "/services/student-staff-training-portal",
        },
        { name: "EdTech Product", to: "/services/edtech-product" },
      ],
    },
    {
      id: "analytics-ai",
      title: "Analytics & AI",
      links: [
        { name: "Business Dashboards", to: "/services/business-dashboard" },
        {
          name: "Sales Reports",
          to: "/services/sales-inventory-reports",
        },
        {
          name: "AI Support Agent",
          to: "/services/ai-customer-support-agent",
        },
        {
          name: "Smart Document Processing",
          to: "/services/smart-document-processing",
        },
        { name: "AI Sales Assistant", to: "/services/ai-sales-assistant" },
      ],
    },
  ];

  // Industries Data
  const industriesMenu = [
    { id: "healthcare", title: "Healthcare", to: "/industries/healthcare" },
    { id: "education", title: "Education", to: "/industries/education" },
    { id: "retail", title: "Retail & Ecommerce", to: "/industries/retail" },
    { id: "finance", title: "Finance", to: "/industries/finance" },
    { id: "logistics", title: "Logistics", to: "/industries/logistics" },
    { id: "real-estate", title: "Real Estate", to: "/industries/real-estate" },
  ];

  // Locations Data
  const locationMenu = [
    { id: "australia", title: "Australia", to: "/locations/australia" },
    { id: "qatar", title: "Qatar", to: "/locations/qatar" },
    { id: "uae", title: "UAE", to: "/locations/uae" },
    { id: "saudi", title: "Saudi Arabia", to: "/locations/saudi-arabia" },
  ];

  const currentServiceCategoryId = servicesMenu.find((item) =>
    item.links.some((link) => link.to === location.pathname),
  )?.id;

  const activeServiceMenu =
    servicesMenu.find(
      (item) =>
        item.id ===
        (activeServiceCategory ||
          currentServiceCategoryId ||
          servicesMenu[0].id),
    ) || servicesMenu[0];

  useEffect(() => {
    const handleEscape = (e) => {
      if (e.key === "Escape") {
        setActiveDropdown(null);
        setMobileOpen(false);
        setMobileDropdown(null);
        setMobileServiceCategory(null);
      }
    };
    window.addEventListener("keydown", handleEscape);
    return () => window.removeEventListener("keydown", handleEscape);
  }, []);

  const handleMouseEnter = (dropdown) => {
    clearTimeout(closeTimer.current);
    setActiveDropdown(dropdown);
    if (dropdown === "services") {
      setActiveServiceCategory(currentServiceCategoryId || servicesMenu[0].id);
    }
  };

  const handleMouseLeave = () => {
    closeTimer.current = setTimeout(() => {
      setActiveDropdown(null);
      setActiveServiceCategory(null);
    }, 150);
  };

  const isActive = (path) => {
    if (path === "/") return location.pathname === "/";
    return location.pathname.startsWith(path);
  };

  const closeAllMenus = () => {
    setMobileOpen(false);
    setMobileDropdown(null);
    setMobileServiceCategory(null);
    setActiveDropdown(null);
    setActiveServiceCategory(null);
  };

  return (
    <nav className="fixed top-0 left-0 w-full z-50 bg-white/95 backdrop-blur-xl border-b border-slate-200 shadow-lg shadow-slate-950/5">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-16 flex justify-between items-center">
        {/* Logo */}
        <Link to="/" className="flex items-center gap-2.5">
          <img
            src={Logo}
            alt="Binazy Logo"
            className="w-10 h-10 rounded-full object-cover"
          />
          <span className="text-slate-900 font-semibold text-lg">Binazy</span>
        </Link>

        {/* Desktop Navigation */}
        <div className="hidden lg:flex items-center gap-1">
          <Link
            to="/"
            className={`text-sm px-4 py-2 rounded-lg transition ${
              isActive("/")
                ? "bg-brand-50 text-brand-700"
                : "text-slate-700 hover:text-brand-700 hover:bg-brand-50"
            }`}>
            Home
          </Link>

          <Link
            to="/about"
            className={`text-sm px-4 py-2 rounded-lg transition ${
              isActive("/about")
                ? "bg-brand-50 text-brand-700"
                : "text-slate-700 hover:text-brand-700 hover:bg-brand-50"
            }`}>
            About
          </Link>

          {/* Services Dropdown */}
          <div
            className="relative"
            onMouseEnter={() => handleMouseEnter("services")}
            onMouseLeave={handleMouseLeave}>
            <button
              className={`text-sm px-4 py-2 rounded-lg transition flex items-center gap-1 ${
                isActive("/services")
                  ? "bg-brand-50 text-brand-700"
                  : "text-slate-700 hover:text-brand-700 hover:bg-brand-50"
              }`}>
              Services
              <ChevronDown
                className={`w-4 h-4 transition ${activeDropdown === "services" ? "rotate-180" : ""}`}
              />
            </button>

            {activeDropdown === "services" && (
              <div className="absolute left-1/2 top-full pt-4 -translate-x-1/2 z-50">
                <div className="flex items-start gap-4 bg-white rounded-2xl border border-slate-200 p-2 shadow-2xl shadow-slate-950/15">
                  {/* Left Column - Categories */}
                  <div className="w-64 space-y-1">
                    {servicesMenu.map((section) => (
                      <button
                        key={section.id}
                        onMouseEnter={() =>
                          setActiveServiceCategory(section.id)
                        }
                        className={`flex w-full items-center justify-between gap-4 rounded-xl px-4 py-3 text-left text-sm font-medium transition ${
                          activeServiceMenu.id === section.id
                            ? "bg-brand-600 text-white shadow-lg shadow-brand-600/20"
                            : "text-slate-700 hover:bg-slate-50 hover:text-brand-700"
                        }`}>
                        <span>{section.title}</span>
                        <ChevronRight className="h-4 w-4 shrink-0" />
                      </button>
                    ))}
                  </div>

                  {/* Right Column - Links */}
                  <div className="w-72 max-h-100 space-y-1 overflow-y-auto">
                    {activeServiceMenu.links.map((link) => (
                      <Link
                        key={link.to}
                        to={link.to}
                        onClick={closeAllMenus}
                        className={`group flex items-center justify-between gap-3 rounded-xl px-3 py-2.5 text-sm transition ${
                          location.pathname === link.to
                            ? "bg-brand-50 text-brand-700"
                            : "text-slate-700 hover:bg-slate-50 hover:text-brand-700"
                        }`}>
                        <span>{link.name}</span>
                        <ArrowRight className="h-3.5 w-3.5 shrink-0 opacity-0 transition group-hover:translate-x-0.5 group-hover:opacity-100" />
                      </Link>
                    ))}
                  </div>
                </div>
              </div>
            )}
          </div>

          {/* Industries Dropdown */}
          <div
            className="relative"
            onMouseEnter={() => handleMouseEnter("industries")}
            onMouseLeave={handleMouseLeave}>
            <button
              className={`text-sm px-4 py-2 rounded-lg transition flex items-center gap-1 ${
                isActive("/industries")
                  ? "bg-brand-50 text-brand-700"
                  : "text-slate-700 hover:text-brand-700 hover:bg-brand-50"
              }`}>
              Industries
              <ChevronDown
                className={`w-4 h-4 transition ${activeDropdown === "industries" ? "rotate-180" : ""}`}
              />
            </button>

            {activeDropdown === "industries" && (
              <div className="absolute left-1/2 top-full pt-4 -translate-x-1/2 z-50">
                <div className="min-w-48 bg-white rounded-2xl border border-slate-200 p-2 shadow-2xl shadow-slate-950/15">
                  <div className="space-y-1">
                    {industriesMenu.map((item) => (
                      <Link
                        key={item.id}
                        to={item.to}
                        onClick={closeAllMenus}
                        className={`block rounded-xl px-4 py-2.5 text-sm transition ${
                          location.pathname === item.to
                            ? "bg-brand-50 text-brand-700"
                            : "text-slate-700 hover:bg-slate-50 hover:text-brand-700"
                        }`}>
                        {item.title}
                      </Link>
                    ))}
                  </div>
                </div>
              </div>
            )}
          </div>

          {/* Locations Dropdown */}
          <div
            className="relative"
            onMouseEnter={() => handleMouseEnter("locations")}
            onMouseLeave={handleMouseLeave}>
            <button
              className={`text-sm px-4 py-2 rounded-lg transition flex items-center gap-1 ${
                isActive("/locations")
                  ? "bg-brand-50 text-brand-700"
                  : "text-slate-700 hover:text-brand-700 hover:bg-brand-50"
              }`}>
              Locations
              <ChevronDown
                className={`w-4 h-4 transition ${activeDropdown === "locations" ? "rotate-180" : ""}`}
              />
            </button>

            {activeDropdown === "locations" && (
              <div className="absolute left-1/2 top-full pt-4 -translate-x-1/2 z-50">
                <div className="min-w-48 bg-white rounded-2xl border border-slate-200 p-2 shadow-2xl shadow-slate-950/15">
                  <div className="space-y-1">
                    {locationMenu.map((item) => (
                      <Link
                        key={item.id}
                        to={item.to}
                        onClick={closeAllMenus}
                        className={`block rounded-xl px-4 py-2.5 text-sm transition ${
                          location.pathname === item.to
                            ? "bg-brand-50 text-brand-700"
                            : "text-slate-700 hover:bg-slate-50 hover:text-brand-700"
                        }`}>
                        {item.title}
                      </Link>
                    ))}
                  </div>
                </div>
              </div>
            )}
          </div>

          <Link
            to="/blog"
            className={`text-sm px-4 py-2 rounded-lg transition ${
              isActive("/blog")
                ? "bg-brand-50 text-brand-700"
                : "text-slate-700 hover:text-brand-700 hover:bg-brand-50"
            }`}>
            Blog
          </Link>
          <Link
            to="/new"
            className={`text-sm px-4 py-2 rounded-lg transition ${
              isActive("/new")
                ? "bg-brand-50 text-brand-700"
                : "text-slate-700 hover:text-brand-700 hover:bg-brand-50"
            }`}>
            New
          </Link>
        </div>

        {/* CTA Button */}
        <Link
          to="/contact-us"
          className="hidden lg:inline-flex items-center justify-center px-5 h-11 rounded-xl bg-brand-600 text-white text-sm font-medium transition hover:bg-brand-700">
          Connect With Us
        </Link>

        {/* Mobile Menu Button */}
        <button
          onClick={() => setMobileOpen(!mobileOpen)}
          className="lg:hidden p-2 -mr-2 rounded-lg hover:bg-brand-50 transition"
          aria-label={mobileOpen ? "Close menu" : "Open menu"}>
          {mobileOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Navigation */}
      {mobileOpen && (
        <div className="lg:hidden bg-white border-t border-slate-200 shadow-lg">
          <div className="px-4 py-5 max-h-[calc(100vh-4rem)] overflow-y-auto">
            <div className="space-y-3">
              <Link
                to="/"
                onClick={closeAllMenus}
                className={`block text-sm py-2 transition ${
                  isActive("/")
                    ? "text-brand-700 font-medium"
                    : "text-slate-700"
                }`}>
                Home
              </Link>

              <Link
                to="/about"
                onClick={closeAllMenus}
                className={`block text-sm py-2 transition ${
                  isActive("/about")
                    ? "text-brand-700 font-medium"
                    : "text-slate-700"
                }`}>
                About
              </Link>

              {/* Mobile Services */}
              <div>
                <button
                  onClick={() =>
                    setMobileDropdown(
                      mobileDropdown === "services" ? null : "services",
                    )
                  }
                  className="w-full text-left flex items-center justify-between text-sm py-2 text-slate-700">
                  Services
                  <ChevronDown
                    className={`w-4 h-4 transition ${mobileDropdown === "services" ? "rotate-180" : ""}`}
                  />
                </button>

                {mobileDropdown === "services" && (
                  <div className="pl-4 mt-2 space-y-3">
                    {servicesMenu.map((section) => (
                      <div key={section.id}>
                        <button
                          onClick={() =>
                            setMobileServiceCategory(
                              mobileServiceCategory === section.id
                                ? null
                                : section.id,
                            )
                          }
                          className="w-full text-left flex items-center justify-between text-sm font-medium py-2 text-slate-800">
                          {section.title}
                          <ChevronDown
                            className={`w-4 h-4 transition ${mobileServiceCategory === section.id ? "rotate-180" : ""}`}
                          />
                        </button>

                        {mobileServiceCategory === section.id && (
                          <div className="pl-4 space-y-2">
                            {section.links.map((link) => (
                              <Link
                                key={link.to}
                                to={link.to}
                                onClick={closeAllMenus}
                                className="block text-sm text-slate-600 py-1.5">
                                {link.name}
                              </Link>
                            ))}
                          </div>
                        )}
                      </div>
                    ))}
                  </div>
                )}
              </div>

              {/* Mobile Industries */}
              <div>
                <button
                  onClick={() =>
                    setMobileDropdown(
                      mobileDropdown === "industries" ? null : "industries",
                    )
                  }
                  className="w-full text-left flex items-center justify-between text-sm py-2 text-slate-700">
                  Industries
                  <ChevronDown
                    className={`w-4 h-4 transition ${mobileDropdown === "industries" ? "rotate-180" : ""}`}
                  />
                </button>

                {mobileDropdown === "industries" && (
                  <div className="pl-4 mt-2 space-y-2">
                    {industriesMenu.map((item) => (
                      <Link
                        key={item.id}
                        to={item.to}
                        onClick={closeAllMenus}
                        className="block text-sm text-slate-600 py-1.5">
                        {item.title}
                      </Link>
                    ))}
                  </div>
                )}
              </div>

              {/* Mobile Locations */}
              <div>
                <button
                  onClick={() =>
                    setMobileDropdown(
                      mobileDropdown === "locations" ? null : "locations",
                    )
                  }
                  className="w-full text-left flex items-center justify-between text-sm py-2 text-slate-700">
                  Locations
                  <ChevronDown
                    className={`w-4 h-4 transition ${mobileDropdown === "locations" ? "rotate-180" : ""}`}
                  />
                </button>

                {mobileDropdown === "locations" && (
                  <div className="pl-4 mt-2 space-y-2">
                    {locationMenu.map((item) => (
                      <Link
                        key={item.id}
                        to={item.to}
                        onClick={closeAllMenus}
                        className="block text-sm text-slate-600 py-1.5">
                        {item.title}
                      </Link>
                    ))}
                  </div>
                )}
              </div>

              <Link
                to="/blog"
                onClick={closeAllMenus}
                className={`block text-sm py-2 transition ${
                  isActive("/blog")
                    ? "text-brand-700 font-medium"
                    : "text-slate-700"
                }`}>
                Blog
              </Link>

              <Link
                to="/contact-us"
                onClick={closeAllMenus}
                className="block text-sm py-2 text-brand-600 font-medium">
                Contact Us
              </Link>
            </div>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
