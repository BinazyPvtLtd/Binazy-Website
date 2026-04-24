import React from 'react'
import OFFICE from "../../../assets/OFFICE.jpg";

const ImageGallery = () => {
  return (
    <section className="section-padding bg-white">
      <div className="section-container text-center mb-12 lg:mb-16">
        <h2 className="section-heading text-navy-900 leading-tight">
          Life at <span className="text-brand-600">Binazy</span>
        </h2>

        <p className="section-subheading max-w-2xl mx-auto mt-5 text-slate-500">
          A glimpse into our collaborative workspace and the team behind the innovation.
        </p>
      </div>
      <div className="section-container">
        <div className="relative group overflow-hidden rounded-[2rem] shadow-2xl">
          <img 
            src={OFFICE} 
            className="w-full h-[400px] md:h-auto object-cover md:object-contain rounded-[2rem] transition-transform duration-1000 group-hover:scale-105" 
            alt="Binazy Office" 
          />
        </div>
      </div>
    </section>
  )
}

export default ImageGallery
