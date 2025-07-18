import React from 'react';
import { useTranslation } from 'react-i18next';

import Contact from '@components/landing/contact/Contact';
import Experience from '@components/landing/experience/Experience';
import Footer from '@components/landing/footer/Footer';
import Hero from '@components/landing/hero/Hero';
import News from '@components/landing/news/News';
import Partners from '@components/landing/partners/Partners';
import Products from '@components/landing/products/Products';
import Certificates from '@components/landing/certificate/Certificate';

const Landing = () => {
  const { i18n } = useTranslation();

  return (
    <div>
      <section id="home">
        <Hero key={i18n.language} />
      </section>
      <Partners />
      <Experience />
      <section id="products">
        <Products />
      </section>
      <section id="news">
        <News />
      </section>
      <section id="contact">
        <Contact />
      </section>
      <section id="certificates">
        <Certificates />
      </section>
      <Footer />
    </div>
  );
};

export default Landing;
