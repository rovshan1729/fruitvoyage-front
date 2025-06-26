import React, { useState } from 'react';
import { Select } from 'antd';
import { FiMenu } from 'react-icons/fi';
import logotype from './../../../public/1.png';

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  const navLinks = [
    { name: 'Home', href: '#home' },
    { name: 'Products', href: '#products' },
    { name: 'Contact', href: '#contact' },
  ];

  const linkClass =
    'hover:text-red-500 hover:border hover:bg-red-50 border border-transparent rounded-full px-4 py-2 transition-all duration-300 ease-in-out';

  return (
    <nav className='relative'>
      <div className='mx-auto flex max-w-7xl items-center justify-between px-4 py-4'>
        <a href='#home' className='flex items-center justify-center gap-2'>
          <img src={logotype} alt='logotype' className='h-15 w-15' />
        </a>

        <div className='hidden items-center gap-10 xl:flex'>
          <ul className='flex items-center gap-9 text-lg text-gray-500'>
            {navLinks.map((link) => (
              <li key={link.name}>
                <a href={link.href} className={linkClass}>
                  {link.name}
                </a>
              </li>
            ))}
          </ul>

          <Select
            defaultValue='English'
            showSearch
            filterOption={(input, option) => {
              return (option?.label ?? '').toLowerCase().includes(input.toLowerCase());
            }}
            options={[
              { value: 'English', label: 'Eng' },
              { value: 'Russian', label: 'Rus' },
            ]}
          />
        </div>

        <button
          onClick={() => setMenuOpen(!menuOpen)}
          className='block text-2xl text-gray-700 xl:hidden'
        >
          <FiMenu />
        </button>
      </div>

      {menuOpen && (
        <div className='absolute top-full right-4 mt-2 w-48 rounded-lg bg-white p-4 shadow-lg xl:hidden'>
          <ul className='flex flex-col gap-4 text-gray-700'>
            {navLinks.map((link) => (
              <li key={link.name}>
                <a href={link.href} className='block hover:text-red-500'>
                  {link.name}
                </a>
              </li>
            ))}
          </ul>

          <div className='mt-4'>
            <Select
              defaultValue='English'
              className='w-full'
              options={[
                { value: 'English', label: 'Eng' },
                { value: 'Uzbek', label: 'Uzb' },
                { value: 'Russian', label: 'Rus' },
              ]}
            />
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
