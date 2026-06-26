import React, { useEffect, useRef, useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { ChevronDown, Menu, X } from "lucide-react";

import Logo from "@/assets/BinazyLogo.jpg";
import { serviceMenu } from "@/data/ServiceData";
import { industryNavItems } from "@/data/industriesData";

const dropdownMenus = {
  services: {
    label: "Services",
    path: "/services",
    desktopWidth: "min-w-64",
    scrollable: true,
    items: serviceMenu,
  },

  industries: {
    label: "Industries",
    path: "/industries",
    desktopWidth: "min-w-48",
    items: industryNavItems,
  },

  locations: {
    label: "Locations",
    path: "/locations",
    desktopWidth: "min-w-48",
    items: [
      { id: "australia", title: "Australia", to: "/locations/australia" },
      { id: "qatar", title: "Qatar", to: "/locations/qatar" },
      { id: "uae", title: "UAE", to: "/locations/uae" },
      { id: "saudi", title: "Saudi Arabia", to: "/locations/saudi-arabia" },
   
    ],
  },
};

const navLinks = [
  { label: "Home", to: "/" },
  { label: "About", to: "/about" },
];

const endLinks = [
  { label: "Portfolio", to: "/portfolio" },
  { label: "Blog", to: "/blog" },
];

const dropdownOrder = ["services", "industries", "locations"];

const Navbar = () => {
  const location = useLocation();

  const [mobileOpen, setMobileOpen] = useState(false);
  const [desktopDropdown, setDesktopDropdown] = useState(null);
  const [mobileDropdown, setMobileDropdown] = useState(null);

  const closeTimer = useRef(null);

  useEffect(() => {
    const handleEscape = (e) => {
      if (e.key === "Escape") closeAllMenus();
    };

    window.addEventListener("keydown", handleEscape);

    return () => {
      window.removeEventListener("keydown", handleEscape);
      clearTimeout(closeTimer.current);
    };
  }, []);

  const isActive = (path) => {
    if (path === "/") return location.pathname === "/";
    return location.pathname.startsWith(path);
  };

  const closeAllMenus = () => {
    setMobileOpen(false);
    setMobileDropdown(null);
    setDesktopDropdown(null);
  };

  const handleMouseEnter = (menuKey) => {
    clearTimeout(closeTimer.current);
    setDesktopDropdown(menuKey);
  };

  const handleMouseLeave = () => {
    closeTimer.current = setTimeout(() => {
      setDesktopDropdown(null);
    }, 150);
  };

  const desktopLinkClass = (active) =>
    `px-4 py-2 text-sm rounded-lg transition ${
      active
        ? "bg-brand-50 text-brand-700"
        : "text-slate-700 hover:bg-brand-50 hover:text-brand-700"
    }`;

  return (
    <nav className="fixed top-0 left-0 z-50 w-full bg-white/95 backdrop-blur-xl border-b border-slate-200 shadow-lg shadow-slate-950/5">
      <div className="max-w-7xl mx-auto h-16 px-4 sm:px-6 lg:px-8 flex items-center justify-between">
        {/* Logo */}
        <Link to="/" className="flex items-center gap-3">
          <img
            src={Logo}
            alt="Binazy Logo"
            className="w-10 h-10 rounded-full object-cover"
          />
          <span className="text-lg font-semibold text-slate-900">Binazy</span>
        </Link>

        {/* Desktop Navigation */}
        <div className="hidden lg:flex items-center gap-1">
          {navLinks.map((item) => (
            <Link
              key={item.to}
              to={item.to}
              className={desktopLinkClass(isActive(item.to))}>
              {item.label}
            </Link>
          ))}

          {dropdownOrder.map((menuKey) => {
            const menu = dropdownMenus[menuKey];
            const isOpen = desktopDropdown === menuKey;

            return (
              <div
                key={menuKey}
                className="relative"
                onMouseEnter={() => handleMouseEnter(menuKey)}
                onMouseLeave={handleMouseLeave}>
                <button
                  className={`${desktopLinkClass(
                    isActive(menu.path),
                  )} flex items-center gap-1`}>
                  {menu.label}
                  <ChevronDown
                    className={`w-4 h-4 transition ${
                      isOpen ? "rotate-180" : ""
                    }`}
                  />
                </button>

                {isOpen && (
                  <div className="absolute top-full left-1/2 -translate-x-1/2 pt-4 z-50">
                    <div
                      className={`${menu.desktopWidth} bg-white border border-slate-200 rounded-2xl p-2 shadow-2xl shadow-slate-950/15`}>
                      <div
                        className={`space-y-1 ${
                          menu.scrollable ? "max-h-[70vh] overflow-y-auto" : ""
                        }`}>
                        {menu.items.map((item) => (
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
            );
          })}

          {endLinks.map((item) => (
            <Link
              key={item.to}
              to={item.to}
              className={desktopLinkClass(isActive(item.to))}>
              {item.label}
            </Link>
          ))}
        </div>

        {/* Desktop Button */}
        <Link
          to="/contact-us"
          className="hidden lg:inline-flex items-center justify-center h-11 px-5 rounded-xl bg-brand-600 text-white text-sm font-medium hover:bg-brand-700 transition">
          Connect With Us
        </Link>

        {/* Mobile Toggle */}
        <button
          className="lg:hidden p-2 rounded-lg hover:bg-brand-50"
          onClick={() => setMobileOpen((prev) => !prev)}
          aria-label={mobileOpen ? "Close menu" : "Open menu"}>
          {mobileOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Menu */}
      {mobileOpen && (
        <div className="lg:hidden bg-white border-t border-slate-200 shadow-lg">
          <div className="px-4 py-5 space-y-3 max-h-[calc(100vh-4rem)] overflow-y-auto">
            {[...navLinks, ...endLinks].map((item) => (
              <Link
                key={item.to}
                to={item.to}
                onClick={closeAllMenus}
                className={`block py-2 text-sm ${
                  isActive(item.to)
                    ? "font-medium text-brand-700"
                    : "text-slate-700"
                }`}>
                {item.label}
              </Link>
            ))}

            {dropdownOrder.map((menuKey) => {
              const menu = dropdownMenus[menuKey];
              const isOpen = mobileDropdown === menuKey;

              return (
                <div key={menuKey}>
                  <button
                    className="w-full flex items-center justify-between py-2 text-sm text-slate-700"
                    onClick={() => setMobileDropdown(isOpen ? null : menuKey)}>
                    {menu.label}
                    <ChevronDown
                      className={`w-4 h-4 transition ${
                        isOpen ? "rotate-180" : ""
                      }`}
                    />
                  </button>

                  {isOpen && (
                    <div className="pl-4 mt-2 space-y-2">
                      {menu.items.map((item) => (
                        <Link
                          key={item.id}
                          to={item.to}
                          onClick={closeAllMenus}
                          className="block py-1.5 text-sm text-slate-600">
                          {item.title}
                        </Link>
                      ))}
                    </div>
                  )}
                </div>
              );
            })}

            <Link
              to="/contact-us"
              onClick={closeAllMenus}
              className="block py-2 text-sm font-medium text-brand-600">
              Contact Us
            </Link>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
