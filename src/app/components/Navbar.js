'use client';

import { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import TopBar from '../sections/TopBar';
// import Button from './Button';

export default function Navbar() {
  const [isMobileNavOpen, setIsMobileNavOpen] = useState(false);
  const [activeAccordion, setActiveAccordion] = useState(null);

  const toggleMobileNav = () => {
    setIsMobileNavOpen(!isMobileNavOpen);
  };

  const toggleAccordion = (accordionIndex) => {
    setActiveAccordion((prev) =>
      prev === accordionIndex ? null : accordionIndex
    );
  };

  const closeMobileNav = () => {
    if (activeAccordion === 1) {
      toggleAccordion(1);
    }
    setIsMobileNavOpen(false); // Close the mobile nav when a link is clicked
  };

  return (
    <>
      <nav className='bg-white text-primaryDark z-50 shadow-md '>
        <div className='w-full flex justify-between items-center '>
          <div className='w-1/2 lg:w-1/3 bg-primaryLight py-2 px-6 lg:px-20 logoPart'>
            <Image
              src={'/images/logo.png'}
              alt='Lone Star Exterior Solutions Logo'
              width={130}
              height={120}
              
            />
          </div>
          <div className='w-1/2 lg:w-2/3 container mx-auto px-6 lg:px-4 flex items-center justify-between h-16'>
            {/* Desktop Nav */}
            <div className='flex items-center justify-center w-full'>
              <div className='hidden xl:flex items-center space-x-8 text-lg font-semibold'>
                <Link href='/' className=' py-3 underline-animation'>
                  Home
                </Link>
                <Link href='/about-us' className='py-3 underline-animation'>
                  About Us
                </Link>

                <Link href='/services' className='py-3 underline-animation'>
                  Our Services
                </Link>

                <Link href='/contact-us' className=' py-3 underline-animation'>
                  Contact Us
                </Link>
              </div>
              <div className='hidden md:flex justify-end'>
                <div className='flex items-center space-x-4'>
                  <a
                    href='https://facebook.com'
                    target='_blank'
                    rel='noopener noreferrer'
                  >
                    <img
                      src='/images/icons/FacebookWhite.svg'
                      alt='Facebook'
                      className='h-8 w-8'
                    />
                  </a>

                  <a
                    href='https://instagram.com'
                    target='_blank'
                    rel='noopener noreferrer'
                  >
                    <img
                      src='/images/icons/InstaWhite.svg'
                      alt='Instagram'
                      className='h-8 w-8'
                    />
                  </a>
                </div>
              </div>
            </div>

            {/* Mobile Toggle Button */}
            <div className='xl:hidden'>
              <button onClick={toggleMobileNav}>
                <span className='text-2xl'>&#9776;</span>
              </button>
            </div>
          </div>
        </div>
        {/* Mobile Drawer */}
        <div
          className={`fixed inset-0 bg-white z-50 transform transition-transform duration-300 max-h-screen overflow-scroll ${
            isMobileNavOpen ? 'translate-x-0' : 'translate-x-full'
          }`}
        >
          {/* Close Button */}
          <div className='flex justify-end p-4'>
            <button onClick={toggleMobileNav} className='text-2xl text-black'>
              &times;
            </button>
          </div>

          {/* Mobile Links */}
          <div className='flex flex-col items-center text-black px-4'>
            <Link
              href='/'
              className='text-base font-medium border-b w-full text-start py-2'
              onClick={closeMobileNav}
            >
              Home
            </Link>
            <Link
              href='/about-us'
              className='text-base font-medium border-b w-full text-start py-2'
              onClick={closeMobileNav}
            >
              About Us
            </Link>
            <Link
              href='/services'
              className='text-base font-medium border-b w-full text-start py-2'
              onClick={closeMobileNav}
            >
              Our Services
            </Link>
            <Link
              href='/contact-us'
              className='text-base font-medium border-b w-full text-start py-3'
              onClick={closeMobileNav}
            >
              Contact Us
            </Link>
            {/* <Link
              href='/contact-us'
              className='w-full flex justify-center'
              onClick={closeMobileNav}
            >
              <Button
                className='p-3 !w-2/3 my-10 mx-auto !text-lg  bg-secondary text-white capitalize font-bold'
                text={'Book Now'}
              />
            </Link> */}
          </div>

          {/* Social Links */}
          <div className='absolute bottom-4 w-full flex justify-center space-x-6 px-4'>
            <a
              href='https://facebook.com'
              target='_blank'
              rel='noopener noreferrer'
              className='hover:opacity-80'
            >
              <img
                src='/images/icons/FacebookIcon.svg'
                alt='Facebook'
                className='h-6 w-6'
              />
            </a>
       
            <a
              href='https://instagram.com'
              target='_blank'
              rel='noopener noreferrer'
              className='hover:opacity-80'
            >
              <img
                src='/images/icons/InstaIcon.svg'
                alt='Instagram'
                className='h-6 w-6'
              />
            </a>
          </div>
        </div>
      </nav>
    </>
  );
}
