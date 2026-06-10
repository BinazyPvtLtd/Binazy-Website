import React, { useState, useEffect, useRef } from "react";
import { Link, useLocation } from "react-router-dom";
import {
  Menu,
  X,
  ChevronDown,
  ChevronRight,
  Code,
  Headphones,
  Cloud,
  BarChart3,
} from "lucide-react";
import Logo from "@/assets/BinazyLogo.jpg";

const navLinks = [
  { to: "/", label: "Home" },
  { to: "/about", label: "About" },
];

const NAVBAR_THEME_CLASS =
  "bg-brand-950/95 backdrop-blur-xl border-b border-white/10 shadow-lg shadow-slate-950/10";

// locations menu

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
    id: "software-and-app-development",
    title: "Website Development",
    description: "Websites, apps, platforms, and business software.",
    icon: Code,

    links: [
      {
        name: "Custom Web Applications",
        to: "/services/business-website-development",
      },
      {
        name: "Portal Development",
        to: "/services/online-store",
      },
      {
        name: "Progressive Web Apps (PWA)",
        to: "/services/ott-platform-development",
      },
      {
        name: "Enterprise Web Solutions",
        to: "/services/mobile-app-development",
      },
      {
        name: "API Development & Integration",
        to: "/services/booking-appointment-system",
      },

      {
        name: "ERP System Development",
        to: "/services/erp-system-development",
      },
      {
        name: "Custom Software Development",
        to: "/services/custom-software-development",
      },
    ],
  },

  {
    id: "it-support-and-managed-services",
    title: "Mobile App Development Services",
    description: "Support systems, helpdesk workflows, and monitoring.",
    icon: Headphones,
    links: [
      {
        name: "Android App Development",
        to: "/services/hr-payroll-system",
      },

      {
        name: "iOS App Development",
        to: "/services/24-7-helpdesk-support",
      },
      {
        name: "Flutter App Development",
        to: "/services/remote-monitoring",
      },
      {
        name: "React Native App Development",
        to: "/services/remote-monitoring",
      },
      {
        name: "Cross-Platform Applications",
        to: "/services/remote-monitoring",
      },
    ],
  },

  {
    id: "cloud-and-infrastructure-services",
    title: " Custom Software Development",
    description:
      "Learning platforms, portals, and scalable product foundations.",
    icon: Cloud,
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
    id: "data-and-analytics-solutions",
    title: " ERP System Development ",
    description: "Dashboards, automation tools, and AI assistants.",
    icon: BarChart3,
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
        name: "24/7 AI Customer Support Agent",
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
    id: "ecommerce-website-development",
    title: "Ecommerce Website Development",
    description: "Dashboards, automation tools, and AI assistants.",
    icon: BarChart3,
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
        name: "24/7 AI Customer Support Agent",
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
    id: "ott-platform-development",
    title: "OTT Platform Development",
    description: "Dashboards, automation tools, and AI assistants.",
    icon: BarChart3,
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
        name: "24/7 AI Customer Support Agent",
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
    id: "booking-appointment-systems",
    title: "Booking & Appointment Systems",
    description: "Dashboards, automation tools, and AI assistants.",
    icon: BarChart3,
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
        name: "24/7 AI Customer Support Agent",
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

// const locationMenu = [
//   { name: "Melbourne",
//     path: "/locations/melbourne"
//   }
//   ];

function ServicesMegaMenu({
  currentPath,
  data,
  id,
  onNavigate,
  onMouseEnter,
  onMouseLeave,
}) {
  return (
    <div
      id={id}
      className="fixed left-1/2 top-16 z-50 w-[min(76rem,calc(100vw-2rem))] -translate-x-1/2 pt-3"
      aria-label="Services menu"
      onMouseEnter={onMouseEnter}
      onMouseLeave={onMouseLeave}>
      <div className="max-h-[calc(100vh-5.5rem)] overflow-y-auto rounded-2xl border border-white/20 bg-white shadow-2xl shadow-brand-950/25 ring-1 ring-slate-950/5">
        <div className="bg-slate-50 p-4">
          <div className="grid grid-cols-2 gap-3 xl:grid-cols-4">
            {data.map((section) => {
              const Icon = section.icon;

              return (
                <div
                  key={section.id}
                  className="rounded-xl border border-slate-200 bg-white p-4 shadow-sm transition hover:-translate-y-0.5 hover:border-brand-200 hover:shadow-lg hover:shadow-brand-950/10">
                  <div className="flex min-h-12 items-start gap-3">
                    {Icon && (
                      <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-lg bg-brand-50 text-brand-700">
                        <Icon className="h-4 w-4" aria-hidden="true" />
                      </span>
                    )}

                    <div className="min-w-0">
                      <h3 className="text-sm font-semibold leading-5 text-slate-950">
                        {section.title}
                      </h3>
                    </div>
                  </div>

                  <div className="mt-4 space-y-1">
                    {section.links.map((item) => (
                      <Link
                        key={`${section.id}-${item.name}-${item.to}`}
                        to={item.to}
                        onClick={onNavigate}
                        aria-current={
                          currentPath === item.to ? "page" : undefined
                        }
                        className={`group flex min-h-9 items-center justify-between gap-2 rounded-lg px-3 py-2 text-sm leading-5 transition ${
                          currentPath === item.to
                            ? "bg-brand-50 font-semibold text-brand-700"
                            : "text-slate-600 hover:bg-brand-50 hover:text-brand-700"
                        }`}>
                        <span>{item.name}</span>
                        <ChevronRight
                          className="h-3.5 w-3.5 shrink-0 opacity-0 transition group-hover:translate-x-0.5 group-hover:opacity-100"
                          aria-hidden="true"
                        />
                      </Link>
                    ))}
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
}

const Navbar = () => {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [activeMega, setActiveMega] = useState(null);
  const [mobileDropdown, setMobileDropdown] = useState(null);
  const [mobileServiceGroup, setMobileServiceGroup] = useState(null);
  const megaCloseTimer = useRef(null);

  const location = useLocation();

  useEffect(() => {
    const handleEscape = (event) => {
      if (event.key === "Escape") {
        clearTimeout(megaCloseTimer.current);
        setActiveMega(null);
        setMobileOpen(false);
        setMobileDropdown(null);
        setMobileServiceGroup(null);
      }
    };

    window.addEventListener("keydown", handleEscape);
    return () => {
      clearTimeout(megaCloseTimer.current);
      window.removeEventListener("keydown", handleEscape);
    };
  }, []);

  const openMega = (menuName) => {
    clearTimeout(megaCloseTimer.current);
    setActiveMega(menuName);
  };

  const closeMegaWithDelay = () => {
    clearTimeout(megaCloseTimer.current);
    megaCloseTimer.current = setTimeout(() => {
      setActiveMega(null);
    }, 180);
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
    setMobileServiceGroup(null);
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

        {/* Desktop navigation links and mega menu */}

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

          {/* Desktop services mega menu trigger */}
          <div
            className="relative cursor-pointer"
            onMouseEnter={() => openMega("services")}
            onMouseLeave={closeMegaWithDelay}
            onFocus={() => openMega("services")}
            onBlur={closeMegaOnBlur}
            onKeyDown={closeMegaOnEscape}>
            <button
              type="button"
              aria-haspopup="true"
              aria-expanded={activeMega === "services"}
              aria-controls="services-mega-menu"
              onClick={() => setActiveMega("services")}
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
              <ServicesMegaMenu
                currentPath={location.pathname}
                data={servicesMenu}
                id="services-mega-menu"
                onNavigate={closeAllMenus}
                onMouseEnter={() => openMega("services")}
                onMouseLeave={closeMegaWithDelay}
              />
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
                  {servicesMenu.map((section) =>
                    section.links?.length ? (
                      <div key={section.id}>
                        <button
                          type="button"
                          onClick={() =>
                            setMobileServiceGroup((current) =>
                              current === section.id ? null : section.id,
                            )
                          }
                          className="flex w-full items-center justify-between py-2 text-left font-semibold text-white">
                          <span>{section.title}</span>
                          <ChevronDown
                            aria-hidden="true"
                            className={`h-4 w-4 transition ${
                              mobileServiceGroup === section.id
                                ? "rotate-180"
                                : ""
                            }`}
                          />
                        </button>

                        {mobileServiceGroup === section.id && (
                          <div className="space-y-1 pb-2 pl-3">
                            {section.links.map((item) => (
                              <Link
                                key={`${section.id}-${item.name}-${item.to}`}
                                to={item.to}
                                onClick={closeAllMenus}
                                aria-current={
                                  location.pathname === item.to
                                    ? "page"
                                    : undefined
                                }
                                className="block py-1 text-sm text-white/70">
                                {item.name}
                              </Link>
                            ))}
                          </div>
                        )}
                      </div>
                    ) : (
                      <Link
                        key={section.id}
                        to={section.to}
                        onClick={closeAllMenus}
                        aria-current={
                          location.pathname === section.to ? "page" : undefined
                        }
                        className="block py-2 font-semibold text-white">
                        {section.title}
                      </Link>
                    ),
                  )}
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
