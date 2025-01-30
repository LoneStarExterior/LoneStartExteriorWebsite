import Image from 'next/image';
import Link from 'next/link';
import React from 'react';

export default function TopBar() {
  return (
    <div className='z-50 w-full flex  text-white bg-white'>
      <div className='w-full lg:w-2/3 flex items-center px-6 bg-secondary logoPart'>
        <div className='w-full md:w-11/12 flex justify-between md:justify-between  items-center py-2 '>
          <div className='flex gap-10 '>
            <div className='flex gap-2 items-center'>
              <Image
                src={'/images/icons/Location.svg'}
                alt='relaxing-Food-email'
                width={40}
                height={40}
                className='rounded-full p-2'
              />
              <p className='text-sm lg:text-lg'> Austin, Texas</p>
            </div>
            <div className='flex gap-2 items-center'>
              <Image
                src={'images/icons/PhoneWhite.svg'}
                alt='relaxing-Food-email'
                width={43}
                height={43}
                className='rounded-full p-2'
              />
              <p className='text-sm lg:text-lg'> 512-387-1705</p>
            </div>
          </div>

          <div className='hidden md:flex justify-end py-2 '>
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
      </div>
      <div className='w-1/3 py-3 hidden md:flex justify-center items-center bg-white'>
      <Link href={'/contact-us'} className='cursor-pointer'>
        <button className='text-base text-primary border-primary border-2 rounded-lg p-3 font-bold hover:bg-primary hover:text-white duration-300'>
          Get A Free Quote
        </button>
        </Link>
      </div>
    </div>
  );
}
