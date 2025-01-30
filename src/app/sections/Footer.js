import Image from 'next/image';
import Link from 'next/link';
import React from 'react';

export default function Footer() {
  return (
    <div className=' '>


      <div className='bg-primary rounded-tl-lg rounded-tr-lg pt-20 pb-10 flex px-4 md:px-8 lg:px-12 2xl:px-20 text-white z-10 flex-col lg:flex-row gap-8 lg:gap-0'>
        <div className='w-full lg:w-1/4 flex flex-col gap-5 items-center lg:items-start'>
          <div className='flex justify-center w-3/4'>
            <Image
              src={'/images/logo white.png'}
              alt='Lone Star Exterior Solutions logo'
              width={250}
              height={250}
              className='rounded-xl'
            />
          </div>
        </div>
        <div className='w-full lg:w-1/4 flex flex-col gap-3 items-center lg:items-start'>
          <h2 className='text-xl font-bold uppercase '>Useful Link</h2>
          <Link href='/about-us' className='underline-animation-white w-max'>
            About Us
          </Link>
          <Link href='/products' className='underline-animation-white w-max'>
            Our Services
          </Link>

          <Link href='/projects' className='underline-animation-white w-max'>
            Projects
          </Link>
          <Link href='/contact-us' className='underline-animation-white w-max'>
            Contact Us
          </Link>
        </div>

        <div className='w-full lg:w-1/4 flex flex-col gap-3 items-center lg:items-start'>
          <h2 className='text-xl font-bold uppercase '>Contact Us</h2>
          <div className='flex flex-col gap-3'>
            <div className='flex gap-5 items-center flex-col lg:flex-row text-center lg:text-start'>
              <div className='bg-white rounded-full p-2'>
                <Image
                  src={'/images/icons/PhoneBlack.svg'}
                  alt='modern design'
                  width={20}
                  height={20}
                />
              </div>
              <div className='flex flex-col gap-1'>
                <h3 className='text-base font-bold '>Hotline</h3>
                <p className='text-xs'>512-387-1705</p>
                <p className='text-xs'>919-561-8351</p>
              </div>
            </div>
            <div className='flex gap-5 items-center flex-col lg:flex-row text-center lg:text-start'>
              <div className='bg-white rounded-full p-2'>
                <Image
                  src={'/images/icons/MailBlack.svg'}
                  alt='modern design'
                  width={21}
                  height={21}
                />
              </div>
              <div className='flex flex-col gap-1'>
                <h3 className='text-base font-bold '>Official Email</h3>
                <p className='text-xs'>costin@lonestarexteriorsolutions.com</p>
              </div>
            </div>

            <div className='flex gap-5 items-center flex-col lg:flex-row text-center lg:text-start'>
              <div className='bg-white rounded-full p-2'>
                <Image
                  src={'/images/icons/LocationBlack.svg'}
                  alt='modern design'
                  width={21}
                  height={21}
                />
              </div>
              <div className='flex flex-col gap-1'>
                <h3 className='text-base font-bold '>Our Location</h3>
                <p className='text-xs'>Austin, Texas</p>
              </div>
            </div>
          </div>
        </div>
        <div className='w-full lg:w-1/4 flex flex-col gap-3 items-center lg:items-start'>
          <h2 className='text-xl font-bold uppercase '>Social Links</h2>
          <div className='flex gap-3'>
            <Link href='#' className='w-max'>
              <Image
                src={'/images/icons/FacebookWhite.svg'}
                alt='facebook'
                width={40}
                height={40}
              />
            </Link>
            <Link href='#' className='w-max'>
              <Image
                src={'/images/icons/InstaWhite.svg'}
                alt='facebook'
                width={40}
                height={40}
              />
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
