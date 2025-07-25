import React, { useState } from 'react';
import { Select } from 'antd';
import { FiMenu } from 'react-icons/fi';
import logotype from '../../1.png';
import { useTranslation } from 'react-i18next';
import i18n from './../../i18n';
import { HashLink as Link } from 'react-router-hash-link';

const languageOptions = [
  {
    value: 'en',
    label: (
      <span className='flex items-center gap-2'>
        <img
          src='/flags/Flag_of_the_United_Kingdom_(1-2).svg.png'
          alt='en'
          className='h-5 w-5 rounded-full object-cover'
        />
        Eng
      </span>
    ),
  },
  {
    value: 'ru',
    label: (
      <span className='flex items-center gap-2'>
        <img
          src='/flags/Flag_of_Russia.png'
          alt='ru'
          className='h-5 w-5 rounded-full object-cover'
        />
        Рус
      </span>
    ),
  },
];

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const { t } = useTranslation();

  const navLinks = [
    { name: t('Home'), to: '/#home' },
    { name: t('Products'), to: '/#products' },
    { name: t('News'), to: '/#news' },
    { name: t('Contact'), to: '/#contact' },
  ];

  const handleChangeLanguage = (value) => {
    i18n.changeLanguage(value);
  };

  const linkClass =
    'hover:text-red-500 hover:border hover:bg-red-50 border border-transparent rounded-full px-4 py-2 transition-all duration-300 ease-in-out';

  return (
    <>
      <nav className='fixed top-0 left-0 z-50 w-full bg-[#101920d9] shadow'>
        <div className='mx-auto flex max-w-7xl items-center justify-between px-4 py-4'>
          <Link smooth to='/#home' className='flex items-center gap-2'>
            <img src={logotype} alt='logotype' className='h-14 w-14 sm:h-16 sm:w-16' />
          </Link>

          <div className='hidden items-center gap-10 xl:flex'>
            <ul className='flex items-center gap-9 text-lg text-white'>
              {navLinks.map((link) => (
                <li key={link.to}>
                  <Link smooth to={link.to} className={linkClass}>
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>

            <Select
              defaultValue={i18n.language}
              style={{ width: 120 }}
              onChange={handleChangeLanguage}
              options={languageOptions}
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
                <li key={link.to}>
                  <Link
                    smooth
                    to={link.to}
                    className='block hover:text-red-500'
                    onClick={() => setMenuOpen(false)}
                  >
                    {link.name}
                  </Link>
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
                options={languageOptions}
              />
            </div>
          </div>
        )}
      </nav>

      <div className='h-[80px]'></div>
    </>
  );
};

export default Navbar;
