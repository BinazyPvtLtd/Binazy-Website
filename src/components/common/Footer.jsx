import { Link } from "react-router-dom";
import Logo from "../../assets/BinazyLogo.jpg";
import React from "react";
import SocialLinks from "./SocialLinks";

const footerLinks = {
  Services: [
    { label: "Website Development", to: "/services/web-development" },
    { label: "Mobile App Development", to: "/services/app-development" },
    { label: "Full Stack Development", to: "/services/full-stack-development" },
    { label: "Custom Development", to: "/services/custom-software" },
  ],
  Industries: [
    { label: "Healthcare", to: "/industries/healthcare" },
    { label: "E-learning", to: "/industries/education" },
    { label: "Fintech", to: "/industries/fintech" },
    { label: "Real Estate", to: "/industries/real-estate" },
  ],
  Pages: [
    { label: "Home", to: "/" },
    { label: "About Us", to: "/about" },
    { label: "Services", to: "/services/web-development" },
    { label: "Contact Us", to: "/contact-us" },
  ],
  "Quick Links": [
    { label: "Why Choose Us", to: "/" },
    { label: "Solutions", to: "/services/custom-software" },
    { label: "Technologies", to: "/about" },
    { label: "Industries", to: "/industries" },
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
              src="https://www.google.com/maps?q=Near%20Engineering%20College%20Chauraha%2C%20JSV%20Hyundai%20Building%2C%202nd%20Floor%2C%20CP-53%2C%20near%20CNG%20Petrol%20Pump%2C%20Lucknow%2C%20Uttar%20Pradesh%20226021&z=15&output=embed"
              className="h-full w-full border-0"
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            />

            <div className="absolute inset-x-4 bottom-4 rounded-2xl border border-white/70 bg-white/92 px-5 py-4 text-slate-700 shadow-xl backdrop-blur-sm sm:inset-x-auto sm:right-4 sm:max-w-xs">
              <h3 className="font-semibold text-sm text-slate-900">INDIA</h3>
              <p className="mt-1.5 text-xs leading-relaxed text-slate-500">
                Near Engineering College Chauraha, JSV Hyundai Building, 2nd
                Floor, CP-53, near CNG Petrol Pump
                <br />
                Lucknow, Uttar Pradesh 226021
              </p>
              <a
                href="https://www.google.com/maps/search/?api=1&query=Near%20Engineering%20College%20Chauraha%2C%20JSV%20Hyundai%20Building%2C%202nd%20Floor%2C%20CP-53%2C%20near%20CNG%20Petrol%20Pump%2C%20Lucknow%2C%20Uttar%20Pradesh%20226021"
                target="_blank"
                rel="noreferrer"
                className="mt-3 inline-flex text-xs font-semibold uppercase tracking-[0.16em] text-brand-600 transition-colors hover:text-brand-700">
                Open In Google Maps
              </a>
            </div>
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
