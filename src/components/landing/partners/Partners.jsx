import React from 'react';
import magnitlogo from './../../../../public/Magnit_logo.svg.png';
import cooplogo from './../../../../public/Coop_logo.svg.png';
import perekrostoklogo from './../../../../public/Magnit_logo.svg.png';
import miratorglogo from './../../../../public/miratorg_f.png';

const logos = [magnitlogo, cooplogo, perekrostoklogo, miratorglogo];

const Partners = () => {
  return (
    <section className="w-full py-12 bg-white overflow-hidden">
      <div className="mx-auto max-w-7xl px-4 text-center relative h-[120px]">
        <div className="logo-track flex gap-16 absolute animate-scroll">
          {[...logos, ...logos].map((logo, index) => (
            <img
              key={index}
              src={logo}
              alt="Partner Logo"
              className="h-12 w-70 sm:h-20 object-contain transition-transform duration-300 hover:scale-105"
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Partners;