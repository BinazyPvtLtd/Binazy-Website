import { Link } from "react-router-dom";
import Logo from "@/assets/BinazyLogo.jpg";
import React from "react";
import SocialLinks from "./SocialLinks";

const footerLinks = {
  Services: [
    {
      label: "Business Website",
      to: "/services/business-website-development",
    },
    { label: "Mobile App Development", to: "/services/mobile-app-development" },
    {
      label: "ERP System Development",
      to: "/services/erp-system-development",
    },
    {
      label: "Custom Software Development",
      to: "/services/custom-software-development",
    },
  ],
  Industries: [
    { label: "Healthcare", to: "/industries/healthcare" },
    { label: "Education", to: "/industries/education" },
    { label: "Fintech", to: "/industries/fintech" },
    { label: "Real Estate", to: "/industries/real-estate" },
  ],
  Locations: [
    { label: "Australia", to: "/locations/australia" },
    { label: "Qatar", to: "/locations/qatar" },
    { label: "UAE", to: "/locations/uae" },
    { label: "Saudi Arabia", to: "/locations/saudi-arabia" },
  ],
  Pages: [
    { label: "Home", to: "/" },
    { label: "About Us", to: "/about" },
    { label: "Services", to: "/services/business-website-development" },
    { label: "Industries", to: "/industries/real-estate" },
    { label: "Locations", to: "/locations/australia" },
    { label: "Blog", to: "/blog" },
    { label: "Contact Us", to: "/contact-us" },
  ],
};

const Footer = () => {
  return (
    <footer className="bg-slate-50 border-t border-slate-200">
      {/* Links Grid */}
      <div className="responsive-container pt-16 lg:pt-20 pb-10">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-10">
          {Object.entries(footerLinks).map(([heading, links]) => (
            <div key={heading}>
              <h3 className="text-slate-900 text-sm font-semibold uppercase tracking-[0.16em] mb-4">
                {heading}
              </h3>
              <ul className="space-y-2.5">
                {links.map((link) => (
                  <li key={link.label}>
                    <Link
                      to={link.to}
                      className="text-base text-slate-500 hover:text-brand-600 transition-colors duration-200">
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>

      {/* Company Info + Map Section */}
      <section className="section-padding border-t border-slate-200">
        <div className="section-container grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <div>
            <div className="flex items-center gap-3 mb-4">
              <img
                src={Logo}
                alt="Binazy Logo"
                className="w-10 h-10 rounded-full object-contain"
              />
              <div className="text-xl font-bold tracking-tight text-slate-900">
                Binazy
              </div>
            </div>

            <p className="text-slate-600 text-base sm:text-lg leading-relaxed mb-6 max-w-md">
              We deliver innovative technology solutions to businesses and
              industries worldwide. The value of blockchain and modern IT
              solutions has been widely demonstrated, leading to their adoption
              across diverse sectors.
            </p>

            <Link
              to="/contact-us"
              className="inline-flex items-center justify-center gap-2 bg-slate-900 hover:bg-slate-800 text-white px-8 py-4 rounded-xl font-semibold transition">
              Connect with Us
              {/* <ArrowRight className="w-4 h-4" /> */}
            </Link>

            <div className="mt-8 max-w-lg">
              <SocialLinks compact title="Follow Binazy" />
            </div>
          </div>

          {/* Right Map */}
          <div className="relative h-80 overflow-hidden rounded-[1.75rem] border border-slate-200 bg-slate-100 shadow-lg lg:h-96">
            <iframe
              title="Binazy office location"
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3557.776503447378!2d80.94414187522425!3d26.910587276648425!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3999570056116fa9%3A0x95db1b5f9246f4d8!2sBinazy%20Pvt%20Ltd!5e0!3m2!1sen!2sin!4v1777963922999!5m2!1sen!2sin"
              className="h-full w-full border-0"
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            />
          </div>
        </div>
      </section>

      {/* Bottom Bar */}
      <div className="border-t border-slate-200 py-5 text-center text-xl text-slate-400">
        &copy; Binazy Pvt Ltd. All rights reserved.
      </div>
    </footer>
  );
};

export default Footer;
