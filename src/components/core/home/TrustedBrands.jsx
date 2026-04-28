import React from "react";
import northpeakLogo from "@/assets/northpeak.svg";
import aureviaLogo from "@/assets/aurevia.svg";
import veloraLogo from "@/assets/velora.svg";
import stratlineLogo from "@/assets/stratline.svg";
import lumantaLogo from "@/assets/lumanta.svg";
import klyraLogo from "@/assets/klyra.svg";

export default function TrustedBrands() {
  const logos = [
    {
      name: "Northpeak Labs",
      logo: northpeakLogo,
    },
    {
      name: "Aurevia Commerce",
      logo: aureviaLogo,
    },
    {
      name: "Velora Systems",
      logo: veloraLogo,
    },
    {
      name: "Stratline Health",
      logo: stratlineLogo,
    },
    {
      name: "Lumanta Media",
      logo: lumantaLogo,
    },
    {
      name: "Klyra Retail",
      logo: klyraLogo,
    },
  ];

  return (
    <div className="w-full py-8 lg:py-12 overflow-hidden ">
      <div className="section-container">
        <div className="flex flex-col md:grid md:grid-cols-5 items-center gap-8">
          {/* Left Text */}
          <div className="text-center md:text-left text-base sm:text-lg font-medium ">
            Trusted by fast-growing <br className="hidden sm:block" />
            brands worldwide
          </div>

          {/* Scrolling Logos */}
          <div className="w-full md:col-span-4 overflow-hidden relative">
            <div className="flex w-max animate-scroll gap-10 sm:gap-14">
              {/* First Set */}
              {logos.map((logo, i) => (
                <LogoItem key={i} logo={logo} />
              ))}

              {/* Duplicate Set for seamless loop */}
              {logos.map((logo, i) => (
                <LogoItem key={`dup-${i}`} logo={logo} />
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

/* Logo Item */
function LogoItem({ logo }) {
  return (
    <div className="flex items-center gap-2.5 sm:gap-3 whitespace-nowrap group">
      <img
        src={logo.logo}
        alt={`${logo.name} placeholder logo`}
        className="w-7 h-7 sm:w-8 sm:h-8 object-contain transition-all duration-300"
      />
      <span className="font-medium text-sm sm:text-base group-hover:text-slate-700 transition-colors duration-300">
        {logo.name}
      </span>
    </div>
  );
}
