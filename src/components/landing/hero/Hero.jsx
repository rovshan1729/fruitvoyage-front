import Navbar from '@components/ui/Navbar';
import React from 'react';

const Hero = () => {
  return (
    <>
      <Navbar />
      <div className='mx-auto max-w-7xl px-4 sm:px-6 lg:px-12 py-16 sm:py-20 md:py-24 flex flex-col items-center justify-center text-center'>
        <h1 className='text-3xl sm:text-4xl md:text-5xl font-semibold text-gray-800 leading-tight'>
          Only <span className='text-red-500 font-bold'>natural</span>, <span className='text-red-500 font-bold'>fresh</span> and healthy dried fruits.
        </h1>
        <p className='mt-6 text-xl sm:text-2xl md:text-3xl font-medium text-gray-700'>
          <span className='text-red-500 font-bold'>High-quality products</span> and reliable delivery — all for you
        </p>
      </div>
    </>
  );
};

export default Hero;
