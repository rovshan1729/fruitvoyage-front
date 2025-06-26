import Contact from '@components/landing/contact/Contact';
import Experience from '@components/landing/experience/Experience';
import Footer from '@components/landing/footer/Footer';
import Hero from '@components/landing/hero/Hero';
import Partners from '@components/landing/partners/Partners';
import Products from '@components/landing/products/Products';
import React from 'react';

const Landing = () => {
  return (
    <div>
      <section id='home'>
        <Hero />
      </section>
      <Partners />
      <Experience />
      <section id='products'>
        <Products />
      </section>
      <section id='contact'>
        <Contact />
      </section>
      <Footer />
    </div>
  );
};

export default Landing;
