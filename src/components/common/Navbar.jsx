import React, { useState, useEffect, useRef } from "react";
import { Link, useLocation } from "react-router-dom";
import { Menu, X, ChevronDown, ChevronRight } from "lucide-react";
import Logo from "@/assets/BinazyLogo.jpg";

const navLinks = [
  { to: "/", label: "Home" },
  { to: "/about", label: "About" },
];

const NAVBAR_THEME_CLASS =
  "bg-brand-950/95 backdrop-blur-xl border-b border-white/10 shadow-lg shadow-slate-950/10";

const locationMenu = [
  {
    id: "australia",
    title: "Australia",
    to: "/locations/australia",
  },
  {
    id: "qatar",
    title: "Qatar",
    to: "/locations/qatar",
  },
  {
    id: "uae",
    title: "UAE",
    to: "/locations/uae",
  },
  {
    id: "saudi",
    title: "Saudi Arabia",
    to: "/locations/saudi-arabia",
  },
];
/* SERVICES MENU */

const servicesMenu = [
  {
    id: "web-commerce",
    title: " Website Development Services",
    links: [
      {
        name: "Business Website Development",
        to: "/services/business-website-development",
      },
      {
        name: "Ecommerce Website Development",
        to: "/services/online-store",
      },
      {
        name: "OTT Platform Development",
        to: "/services/ott-platform-development",
      },
      {
        name: "Booking & Appointment Systems",
        to: "/services/booking-appointment-system",
      },
    ],
  },
  {
    id: "software-apps",
    title: "Mobile App Development Services",
    links: [
      {
        name: "Mobile App Development",
        to: "/services/mobile-app-development",
      },
      {
        name: "Custom Software Development",
        to: "/services/custom-software-development",
      },
      {
        name: "ERP System Development",
        to: "/services/erp-system-development",
      },
      {
        name: "HR & Payroll System",
        to: "/services/hr-payroll-system",
      },
    ],
  },
  {
    id: "support-infrastructure",
    title: "ERP System Development",
    links: [
      {
        name: "24/7 Helpdesk Support",
        to: "/services/24-7-helpdesk-support",
      },
      {
        name: "Remote Monitoring",
        to: "/services/remote-monitoring",
      },
      {
        name: "Social Media Management",
        to: "/services/social-media-management",
      },
    ],
  },
  {
    id: "learning-edtech",
    title: "Ecommerce Website Development",
    links: [
      {
        name: "Online Learning Platform",
        to: "/services/online-learning-platform",
      },
      {
        name: "Student & Staff Training Portal",
        to: "/services/student-staff-training-portal",
      },
      {
        name: "EdTech Product",
        to: "/services/edtech-product",
      },
    ],
  },
  {
    id: "analytics-ai",
    title: " OTT Platform Development",
    links: [
      {
        name: "Business Dashboard",
        to: "/services/business-dashboard",
      },
      {
        name: "Sales & Inventory Reports",
        to: "/services/sales-inventory-reports",
      },
      {
        name: "Marketing Performance Tracking",
        to: "/services/marketing-performance-tracking",
      },
      {
        name: "AI Customer Support Agent",
        to: "/services/ai-customer-support-agent",
      },
      {
        name: "Smart Document Processing",
        to: "/services/smart-document-processing",
      },
      {
        name: "AI Sales Assistant",
        to: "/services/ai-sales-assistant",
      },
    ],
  },
  {
    id: "booking",
    title: " Booking & Appointment Systems",
    links: [
     
      {
        name: "Sales & Inventory Reports",
        to: "/services/sales-inventory-reports",
      },
      {
        name: "Marketing Performance Tracking",
        to: "/services/marketing-performance-tracking",
      },
      {
        name: "AI Customer Support Agent",
        to: "/services/ai-customer-support-agent",
      },
      {
        name: "Smart Document Processing",
        to: "/services/smart-document-processing",
      },
      {
        name: "AI Sales Assistant",
        to: "/services/ai-sales-assistant",
      },
    ],
  },
];

const industriesMenu = [
  {
    id: "real-estate",
    title: "Real Estate",
    to: "/industries/real-estate",
  },
  {
    id: "ecommerce",
    title: "eCommerce",
    to: "/industries/ecommerce",
  },
  {
    id: "travel",
    title: "Tour & Travel",
    to: "/industries/travel",
  },
  {
    id: "healthcare",
    title: "Healthcare",
    to: "/industries/healthcare",
  },
  {
    id: "fintech",
    title: "Fintech",
    to: "/industries/fintech",
  },
  {
    id: "education",
    title: "E-Learning",
    to: "/industries/education",
  },
  {
    id: "manufacturing",
    title: "Manufacturing",
    to: "/industries/manufacturing",
  },
];

const Navbar = () => {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [activeMega, setActiveMega] = useState(null);
  const [mobileDropdown, setMobileDropdown] = useState(null);
  const [activeServiceCategory, setActiveServiceCategory] = useState(null);
  const [mobileServiceCategory, setMobileServiceCategory] = useState(null);
  const megaCloseTimer = useRef(null);

  const location = useLocation();
  const currentServiceCategoryId = servicesMenu.find((item) =>
    item.links.some((link) => link.to === location.pathname),
  )?.id;
  const activeServiceMenu =
    servicesMenu.find((item) => item.id === activeServiceCategory) || null;
  const currentServiceMenu =
    servicesMenu.find((item) => item.id === currentServiceCategoryId) || null;
  const visibleServiceMenu =
    activeServiceMenu || currentServiceMenu || servicesMenu[0];

  useEffect(() => {
    const handleEscape = (event) => {
      if (event.key === "Escape") {
        clearTimeout(megaCloseTimer.current);
        setActiveMega(null);
        setActiveServiceCategory(null);
        setMobileOpen(false);
        setMobileDropdown(null);
        setMobileServiceCategory(null);
      }
    };

    window.addEventListener("keydown", handleEscape);
    return () => {
      clearTimeout(megaCloseTimer.current);
      window.removeEventListener("keydown", handleEscape);
    };
  }, []);

  const closeMegaWithDelay = () => {
    clearTimeout(megaCloseTimer.current);
    megaCloseTimer.current = setTimeout(() => {
      setActiveMega(null);
    }, 180);
  };

  const openServicesMenu = () => {
    clearTimeout(megaCloseTimer.current);
    setActiveMega("services");
    setActiveServiceCategory(
      (current) => current || currentServiceCategoryId || servicesMenu[0].id,
    );
  };

  const closeMegaOnBlur = (event) => {
    if (!event.currentTarget.contains(event.relatedTarget)) {
      closeMegaWithDelay();
    }
  };

  const closeMegaOnEscape = (event) => {
    if (event.key === "Escape") {
      clearTimeout(megaCloseTimer.current);
      setActiveMega(null);
      event.currentTarget.querySelector("button, a")?.focus();
    }
  };

  const closeAllMenus = () => {
    clearTimeout(megaCloseTimer.current);
    setMobileOpen(false);
    setMobileDropdown(null);
    setActiveServiceCategory(null);
    setMobileServiceCategory(null);
    setActiveMega(null);
  };

  const isNavLinkActive = (to) => {
    if (to === "/") return location.pathname === "/";
    if (to === "/blog") return location.pathname.startsWith("/blog");
    return location.pathname === to;
  };

  return (
    <nav
      aria-label="Primary navigation"
      className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${NAVBAR_THEME_CLASS}`}>
      <a href="#main-content" className="skip-link">
        Skip to main content
      </a>

      {/* Top navigation bar shell */}
      <div className="responsive-container h-16 flex justify-between items-center">
        {/* Brand area */}
        <Link
          to="/"
          className="flex items-center gap-2.5 rounded-lg focus-visible:bg-white/10">
          <img
            src={Logo}
            alt="Binazy Logo"
            className="w-10 h-10 rounded-full object-cover"
          />
          <span className="text-white font-semibold text-lg">Binazy</span>
        </Link>

        {/* Desktop navigation links and dropdowns */}

        <div className="hidden lg:flex items-center gap-1 xl:gap-2 relative min-w-0">
          {navLinks.map((link) => (
            <Link
              key={link.to}
              to={link.to}
              aria-current={isNavLinkActive(link.to) ? "page" : undefined}
              className={`text-sm px-3 xl:px-4 py-2 rounded-lg transition ${
                isNavLinkActive(link.to)
                  ? "bg-white/10 text-white"
                  : "text-white/80 hover:text-white hover:bg-white/10"
              }`}>
              {link.label}
            </Link>
          ))}

          {/* Desktop services dropdown trigger */}
          <div
            className="relative cursor-pointer"
            onMouseEnter={openServicesMenu}
            onMouseLeave={() => {
              closeMegaWithDelay();
            }}
            onFocus={openServicesMenu}
            onBlur={closeMegaOnBlur}
            onKeyDown={closeMegaOnEscape}>
            <button
              type="button"
              aria-haspopup="true"
              aria-expanded={activeMega === "services"}
              aria-controls="services-mega-menu"
              onClick={() => {
                if (activeMega === "services") {
                  setActiveMega(null);
                  return;
                }

                openServicesMenu();
              }}
              className={`text-sm px-3 xl:px-4 py-2 rounded-lg transition flex items-center gap-1 ${
                location.pathname.startsWith("/services")
                  ? "bg-white/10 text-white"
                  : "text-white/80 hover:text-white hover:bg-white/10"
              }`}>
              Services
              <ChevronDown
                aria-hidden="true"
                className={`w-4 h-4 transition ${
                  activeMega === "services" ? "rotate-180" : ""
                }`}
              />
            </button>

            {activeMega === "services" && (
              <div
                id="services-mega-menu"
                className="absolute left-0 top-full z-50 pt-4"
                aria-label="Services menu">
                <div
                  className="relative w-80 overflow-visible rounded-2xl border border-gray-100 bg-white p-2 shadow-2xl"
                  onMouseEnter={openServicesMenu}>
                  <div className="space-y-1">
                    {servicesMenu.map((item) => {
                      const isActive = visibleServiceMenu.id === item.id;

                      return (
                        <div key={item.id} className="relative">
                          <button
                            type="button"
                            onMouseEnter={() =>
                              setActiveServiceCategory(item.id)
                            }
                            onFocus={() => setActiveServiceCategory(item.id)}
                            onClick={() => setActiveServiceCategory(item.id)}
                            aria-expanded={isActive}
                            className={`flex w-full items-center justify-between gap-3 rounded-xl px-3 py-2.5 text-left text-sm font-medium transition ${
                              isActive
                                ? "bg-brand-50 text-brand-700"
                                : "text-slate-700 hover:bg-slate-50 hover:text-brand-600"
                            }`}>
                            <span>{item.title}</span>
                            <ChevronRight
                              className="h-4 w-4 shrink-0"
                              aria-hidden="true"
                            />
                          </button>

                          {isActive && (
                            <div className="absolute left-full top-0 z-50 ml-2 w-80 rounded-2xl border border-gray-100 bg-white p-2 shadow-2xl">
                              <div className="max-h-[calc(100vh-9rem)] space-y-1 overflow-y-auto pt-2">
                                {item.links.map((link) => (
                                  <Link
                                    key={`${item.id}-${link.name}`}
                                    to={link.to}
                                    onClick={closeAllMenus}
                                    aria-current={
                                      location.pathname === link.to
                                        ? "page"
                                        : undefined
                                    }
                                    className={`flex items-center justify-between gap-3 rounded-xl px-3 py-2.5 text-sm transition ${
                                      location.pathname === link.to
                                        ? "bg-brand-50 text-brand-700"
                                        : "text-slate-700 hover:bg-slate-50 hover:text-brand-600"
                                    }`}>
                                    <span>{link.name}</span>
                                  </Link>
                                ))}
                              </div>
                            </div>
                          )}
                        </div>
                      );
                    })}
                  </div>
                </div>
              </div>
            )}
          </div>

          {/* Desktop industries dropdown trigger */}
          <div
            className="relative cursor-pointer"
            onMouseEnter={() => setActiveMega("industries")}
            onMouseLeave={() => setActiveMega(null)}
            onFocus={() => setActiveMega("industries")}
            onBlur={closeMegaOnBlur}
            onKeyDown={closeMegaOnEscape}>
            <button
              type="button"
              aria-haspopup="true"
              aria-expanded={activeMega === "industries"}
              aria-controls="industries-mega-menu"
              onClick={() => setActiveMega("industries")}
              className={`text-sm px-3 xl:px-4 py-2 rounded-lg transition flex items-center gap-1 ${
                location.pathname.startsWith("/industries")
                  ? "bg-white/10 text-white"
                  : "text-white/80 hover:text-white hover:bg-white/10"
              }`}>
              Industries
              <ChevronDown
                aria-hidden="true"
                className={`w-4 h-4 transition ${
                  activeMega === "industries" ? "rotate-180" : ""
                }`}
              />
            </button>

            {activeMega === "industries" && (
              <div
                id="industries-mega-menu"
                className="absolute top-full left-1/2 -translate-x-1/2 pt-4 z-50"
                aria-label="Industries menu">
                <div className="min-w-48 overflow-visible rounded-2xl border border-gray-100 bg-white p-3 shadow-2xl">
                  <div className="space-y-1">
                    {industriesMenu.map((item) => (
                      <Link
                        key={item.id}
                        to={item.to}
                        onClick={closeAllMenus}
                        aria-current={
                          location.pathname === item.to ? "page" : undefined
                        }
                        className={`block rounded-xl px-3 py-2.5 text-sm transition ${
                          location.pathname === item.to
                            ? "bg-brand-50 text-brand-700"
                            : "text-slate-700 hover:bg-slate-50 hover:text-brand-600"
                        }`}>
                        {item.title}
                      </Link>
                    ))}
                  </div>
                </div>
              </div>
            )}
          </div>

          {/* Desktop locations dropdown trigger */}
          <div
            className="relative cursor-pointer"
            onMouseEnter={() => setActiveMega("locations")}
            onMouseLeave={() => setActiveMega(null)}
            onFocus={() => setActiveMega("locations")}
            onBlur={closeMegaOnBlur}
            onKeyDown={closeMegaOnEscape}>
            <button
              type="button"
              aria-haspopup="true"
              aria-expanded={activeMega === "locations"}
              aria-controls="locations-dropdown"
              onClick={() => setActiveMega("locations")}
              className={`text-sm px-3 xl:px-4 py-2 rounded-lg transition flex items-center gap-1 ${
                location.pathname.startsWith("/locations")
                  ? "bg-white/10 text-white"
                  : "text-white/80 hover:text-white hover:bg-white/10"
              }`}>
              Locations
              <ChevronDown
                aria-hidden="true"
                className={`w-4 h-4 transition ${
                  activeMega === "locations" ? "rotate-180" : ""
                }`}
              />
            </button>

            {activeMega === "locations" && (
              <div
                id="locations-dropdown"
                className="absolute top-full left-1/2 -translate-x-1/2 pt-4 z-50"
                aria-label="Locations menu">
                <div className="min-w-48 overflow-visible rounded-2xl border border-gray-100 bg-white p-3 shadow-2xl">
                  <div className="space-y-1">
                    {locationMenu.map((item) => (
                      <Link
                        key={item.id}
                        to={item.to}
                        onClick={closeAllMenus}
                        aria-current={
                          location.pathname === item.to ? "page" : undefined
                        }
                        className={`block rounded-xl px-3 py-2.5 text-sm transition ${
                          location.pathname === item.to
                            ? "bg-brand-50 text-brand-700"
                            : "text-slate-700 hover:bg-slate-50 hover:text-brand-600"
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
            aria-current={isNavLinkActive("/blog") ? "page" : undefined}
            className={`text-sm px-3 xl:px-4 py-2 rounded-lg transition ${
              isNavLinkActive("/blog")
                ? "bg-white/10 text-white"
                : "text-white/80 hover:text-white hover:bg-white/10"
            }`}>
            Blog
          </Link>

          {/* <Link
            to="/contact-us"
            aria-current={
              location.pathname === "/contact-us" ? "page" : undefined
            }
            className="text-sm px-3 xl:px-4 py-2 rounded-lg text-white/80 hover:text-white hover:bg-white/10">
            Contact Us
          </Link> */}
        </div>

        {/* Desktop CTA */}
        <Link
          to="/contact-us"
          aria-current={
            location.pathname === "/contact-us" ? "page" : undefined
          }
          className="uppercase hidden xl:inline-flex items-center justify-center px-5 h-11 rounded-xl border border-white/20 bg-white/10 text-white text-sm font-medium tracking-wide backdrop-blur-md transition-all duration-300 hover:bg-white hover:text-brand-950 hover:border-white hover:shadow-lg">
          Connect With Us
        </Link>

        {/* Mobile menu toggle */}
        <div className="lg:hidden">
          <button
            type="button"
            onClick={() => setMobileOpen(!mobileOpen)}
            className="text-white p-2 -mr-2 rounded-lg hover:bg-white/10 transition"
            aria-label={
              mobileOpen ? "Close navigation menu" : "Open navigation menu"
            }
            aria-controls="mobile-navigation"
            aria-expanded={mobileOpen}>
            {mobileOpen ? (
              <X aria-hidden="true" />
            ) : (
              <Menu aria-hidden="true" />
            )}
          </button>
        </div>
      </div>

      {/* Mobile navigation drawer */}
      {mobileOpen && (
        <div
          id="mobile-navigation"
          className="lg:hidden overflow-hidden transition-all duration-300 max-h-[calc(100vh-4rem)] opacity-100">
          {/* Mobile navigation content */}
          <div className="bg-brand-950 px-4 sm:px-6 py-5 flex max-h-[calc(100vh-4rem)] flex-col gap-2 overflow-y-auto border-t border-white/10">
            <Link
              to="/"
              onClick={closeAllMenus}
              aria-current={location.pathname === "/" ? "page" : undefined}
              className="text-white py-2">
              Home
            </Link>

            <Link
              to="/about"
              onClick={closeAllMenus}
              aria-current={location.pathname === "/about" ? "page" : undefined}
              className="text-white py-2">
              About
            </Link>

            {/* Mobile services accordion */}
            <div>
              <button
                type="button"
                onClick={() =>
                  setMobileDropdown(
                    mobileDropdown === "services" ? null : "services",
                  )
                }
                aria-controls="mobile-services-menu"
                aria-expanded={mobileDropdown === "services"}
                className="w-full text-white py-2 flex items-center justify-between text-left">
                Services
                <ChevronDown
                  aria-hidden="true"
                  className={`w-4 h-4 transition ${
                    mobileDropdown === "services" ? "rotate-180" : ""
                  }`}
                />
              </button>

              {mobileDropdown === "services" && (
                <div
                  id="mobile-services-menu"
                  className="pl-3 sm:pl-4 pt-2 flex flex-col gap-2">
                  {servicesMenu.map((section) => (
                    <div key={section.id}>
                      <button
                        type="button"
                        onClick={() =>
                          setMobileServiceCategory((current) =>
                            current === section.id ? null : section.id,
                          )
                        }
                        aria-expanded={mobileServiceCategory === section.id}
                        className="flex w-full items-center justify-between py-2 text-left text-sm font-semibold text-white">
                        <span>{section.title}</span>
                        <ChevronDown
                          aria-hidden="true"
                          className={`h-4 w-4 transition ${
                            mobileServiceCategory === section.id
                              ? "rotate-180"
                              : ""
                          }`}
                        />
                      </button>

                      {mobileServiceCategory === section.id && (
                        <div className="space-y-1 pb-2 pl-3">
                          {section.links.map((item) => (
                            <Link
                              key={`${section.id}-${item.name}`}
                              to={item.to}
                              onClick={closeAllMenus}
                              aria-current={
                                location.pathname === item.to
                                  ? "page"
                                  : undefined
                              }
                              className="block text-white/70 text-sm py-1">
                              {item.name}
                            </Link>
                          ))}
                        </div>
                      )}
                    </div>
                  ))}
                </div>
              )}
            </div>

            {/* Mobile industries accordion */}
            <div>
              <button
                type="button"
                onClick={() =>
                  setMobileDropdown(
                    mobileDropdown === "industries" ? null : "industries",
                  )
                }
                aria-controls="mobile-industries-menu"
                aria-expanded={mobileDropdown === "industries"}
                className="w-full text-white py-2 flex items-center justify-between text-left">
                Industries
                <ChevronDown
                  aria-hidden="true"
                  className={`w-4 h-4 transition ${
                    mobileDropdown === "industries" ? "rotate-180" : ""
                  }`}
                />
              </button>

              {mobileDropdown === "industries" && (
                <div
                  id="mobile-industries-menu"
                  className="pl-3 sm:pl-4 pt-2 flex flex-col gap-2">
                  {industriesMenu.map((item) => (
                    <Link
                      key={item.id}
                      to={item.to}
                      onClick={closeAllMenus}
                      aria-current={
                        location.pathname === item.to ? "page" : undefined
                      }
                      className="block text-white/70 text-sm py-1">
                      {item.title}
                    </Link>
                  ))}
                </div>
              )}
            </div>

            {/* Mobile locations accordion */}
            <div>
              <button
                type="button"
                onClick={() =>
                  setMobileDropdown(
                    mobileDropdown === "locations" ? null : "locations",
                  )
                }
                aria-controls="mobile-locations-menu"
                aria-expanded={mobileDropdown === "locations"}
                className="w-full text-white py-2 flex items-center justify-between text-left">
                Locations
                <ChevronDown
                  aria-hidden="true"
                  className={`w-4 h-4 transition ${
                    mobileDropdown === "locations" ? "rotate-180" : ""
                  }`}
                />
              </button>

              {mobileDropdown === "locations" && (
                <div
                  id="mobile-locations-menu"
                  className="pl-3 sm:pl-4 pt-2 flex flex-col gap-2">
                  {locationMenu.map((item) => (
                    <Link
                      key={item.id}
                      to={item.to}
                      onClick={closeAllMenus}
                      aria-current={
                        location.pathname === item.to ? "page" : undefined
                      }
                      className="block text-white/70 text-sm py-1">
                      {item.title}
                    </Link>
                  ))}
                </div>
              )}
            </div>

            <Link
              to="/blog"
              onClick={closeAllMenus}
              aria-current={
                location.pathname.startsWith("/blog") ? "page" : undefined
              }
              className="text-white py-2">
              Blog
            </Link>

            <Link
              to="/contact-us"
              onClick={closeAllMenus}
              aria-current={
                location.pathname === "/contact-us" ? "page" : undefined
              }
              className="text-white py-2">
              Contact Us
            </Link>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
