import React from "react";
import Navbar from "./common/Navbar";

const New = () => {
  return (
    <>
    <Navbar/>
      <div>
        <section className="flex h-87.5 items-center bg-[#0f2070] text-white md:h-112.5 lg:h-150">
          <div className="section-container py-10">
            <div className="max-w-4xl">
              <h1 className="text-3xl font-bold leading-[1.02] tracking-tight sm:text-5xl lg:text-7xl">
                Business Websites Built to Win Trust
                <br />
                <span className="text-blue-300">It is Costing You Money</span>
              </h1>
              <p className="mt-4 max-w-2xl text-sm leading-relaxed text-slate-200 sm:mt-6 sm:text-lg lg:text-xl">
                We design and develop websites that actually convert visitors
                into customers without relying on ads alone
              </p>
            </div>
          </div>
        </section>
      </div>
    </>
  );
};

export default New;
