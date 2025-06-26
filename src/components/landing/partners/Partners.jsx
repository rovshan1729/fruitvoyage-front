import React from 'react';
import magnitlogo from './../../../../public/Magnit_logo.svg.png';
import cooplogo from './../../../../public/Coop_logo.svg.png';
import perekrostoklogo from './../../../../public/perekrestok.png';
import miratorglogo from './../../../../public/miratorg_f.png';

const Partners = () => {
  return (
    <section className='w-full py-12'>
      <div className='mx-auto max-w-7xl px-4 text-center'>
        <div className='grid grid-cols-1 items-center justify-items-center gap-10 sm:grid-cols-2 lg:grid-cols-4'>
          <img
            src={magnitlogo}
            alt='Magnit Logo'
            className='w-52 object-contain transition-transform duration-300 hover:scale-105 sm:w-56'
          />
          <img
            src={cooplogo}
            alt='Coop Logo'
            className='w-48 object-contain transition-transform duration-300 hover:scale-105 sm:w-52'
          />
          <img
            src={perekrostoklogo}
            alt='Perekrestok Logo'
            className='w-60 object-contain transition-transform duration-300 hover:scale-105 sm:w-64'
          />
          <img
            src={miratorglogo}
            alt='Miratorg Logo'
            className='w-52 object-contain transition-transform duration-300 hover:scale-105 sm:w-56'
          />
        </div>
      </div>
    </section>
  );
};

export default Partners;
