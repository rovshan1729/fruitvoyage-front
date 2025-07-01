import React, { useState } from 'react';
import { Select } from 'antd';
import { FiMenu } from 'react-icons/fi';
import logotype from './../../../public/1.png';
import { useTranslation } from 'react-i18next';
import i18n from './../../i18n';

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const { t } = useTranslation();

  const navLinks = [
    { name: t('Home'), href: '#home' },
    { name: t('Products'), href: '#products' },
    { name: t('Contact'), href: '#contact' },
  ];

  const handleChangeLanguage = (value) => {
    i18n.changeLanguage(value);
  };

  const linkClass =
    'hover:text-red-500 hover:border hover:bg-red-50 border border-transparent rounded-full px-4 py-2 transition-all duration-300 ease-in-out';

  return (
    <nav className='relative bg-[#101920f5]'>
      <div className='mx-auto flex max-w-7xl items-center justify-between px-4 py-4'>
        <a href='#home' className='flex items-center justify-center gap-2'>
          <img src={logotype} alt='logotype' className='h-14 w-14 sm:h-16 sm:w-16 md:h-18 md:w-18' />
        </a>

        <div className='hidden items-center gap-10 xl:flex'>
          <ul className='flex items-center gap-9 text-lg text-white'>
            {navLinks.map((link) => (
              <li key={link.href}>
                <a href={link.href} className={linkClass}>
                  {link.name}
                </a>
              </li>
            ))}
          </ul>

          <Select
            defaultValue={i18n.language}
            style={{ width: 100 }}
            onChange={handleChangeLanguage}
            options={[
              { value: 'en', label: 'Eng' },
              { value: 'ru', label: 'Рус' },
            ]}
          />
        </div>

        <button
          onClick={() => setMenuOpen(!menuOpen)}
          className='block text-2xl text-white xl:hidden'
        >
          <FiMenu />
        </button>
      </div>

      {menuOpen && (
        <div className='absolute top-full right-4 mt-2 w-48 rounded-lg bg-white p-4 shadow-lg xl:hidden'>
          <ul className='flex flex-col gap-4 text-gray-700'>
            {navLinks.map((link) => (
              <li key={link.href}>
                <a
                  href={link.href}
                  className='block hover:text-red-500'
                  onClick={() => setMenuOpen(false)}
                >
                  {link.name}
                </a>
              </li>
            ))}
          </ul>

          <div className='mt-4'>
            <Select
              defaultValue={i18n.language}
              className='w-full'
              onChange={(value) => {
                handleChangeLanguage(value);
                setMenuOpen(false);
              }}
              options={[
                { value: 'en', label: 'Eng' },
                { value: 'ru', label: 'Рус' },
              ]}
            />
          </div>
        </div>
      )}

    </nav>
  );
};

export default Navbar;
