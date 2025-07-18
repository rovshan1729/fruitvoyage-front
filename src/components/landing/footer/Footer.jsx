import React from 'react';
import {
  FaInstagram,
  FaFacebookF,
  FaVk,
  FaTelegramPlane,
  FaWhatsapp,
  FaLinkedinIn,
  FaPhoneAlt,
  FaMapMarkerAlt,
  FaEnvelope,
} from 'react-icons/fa';
import logo from '../../../1.png';
import { useTranslation } from 'react-i18next';

const Footer = () => {
  const { t } = useTranslation();
  return (
    <footer className='bg-[#101920f5] px-6 py-10 text-white'>
      <div className='mx-auto flex max-w-7xl flex-col gap-10 md:flex-row md:justify-between'>
        <div className='flex flex-col items-center gap-4 md:items-start'>
          <div className='flex items-center gap-3'>
            <img src={logo} alt='Logo' className='h-16 w-16 object-contain' />
            <h2 className='text-2xl font-bold'>FRUIT VOYAGE</h2>
          </div>
          <p className='text-center text-sm text-gray-300 md:text-left'>
            Copyright © 2017 - 2025 OOO "FRUIT VOYAGE GROUP"
          </p>
        </div>

        <div className='flex flex-col items-center gap-6 md:items-start'>
          <div className='flex gap-6'>
            <a href='https://instagram.com' target='_blank' className='hover:text-gray-300'>
              <FaInstagram size={20} />
            </a>
            <a href='https://facebook.com' target='_blank' className='hover:text-gray-300'>
              <FaFacebookF size={20} />
            </a>
            <a href='https://vk.com' target='_blank' className='hover:text-gray-300'>
              <FaVk size={20} />
            </a>
          </div>
          <div className='flex gap-6'>
            <a href='https://t.me' target='_blank' className='hover:text-gray-300'>
              <FaTelegramPlane size={20} />
            </a>
            <a href='https://wa.me' target='_blank' className='hover:text-gray-300'>
              <FaWhatsapp size={20} />
            </a>
            <a href='https://linkedin.com' target='_blank' className='hover:text-gray-300'>
              <FaLinkedinIn size={20} />
            </a>
          </div>
        </div>

        <div className='flex flex-col items-center gap-4 text-sm text-gray-300 md:items-start'>
          <div className='flex items-center gap-2'>
            <FaPhoneAlt className='text-white' />
            <span>+998 90 988 11 22 / +998 99 877 10 90</span>
          </div>
          <div className='flex items-center gap-2'>
            <FaEnvelope className='text-white' />
            <span> info@fruitvoyage.uz </span>
          </div>
          <div className='flex items-start gap-2 text-center md:text-left'>
            <FaMapMarkerAlt className='mt-1 text-white' />
            <span>{t('location')}</span>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
