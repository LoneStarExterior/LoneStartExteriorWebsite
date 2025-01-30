import Image from 'next/image';
import Link from 'next/link';
import React from 'react';

export default function AttachedPromo() {
  return (
    <div className='flex items-center px-4 lg:px-0 py-20 attached-promo flex-col lg:flex-row bg-primary relative overflow-hidden'>
      <Image
        src={'/images/bubble bg.png'}
        alt='bubbles'
        width={1000}
        height={400}
        className='absolute top-0 left-0 z-10 w-full opacity-20'
      />

      <div className='w-full lg:w-1/2 flex justify-center mb-10 lg:mb-0 z-20'>
        <p className='text-3xl md:text-5xl lg:text-4xl xl:text-5xl text-white font-bold text-center !leading-tight'>
          Experience the
          <span className='fancy-text px-2 text-secondary'>Power</span>
          of Professional Cleaning
        </p>
      </div>
      <div className='w-full lg:w-1/2 flex justify-center items-center z-20'>
        <Link href={'#contact'}>
          <button className='bg-white rounded-lg p-4 text-secondary w-max mx-auto text-sm md:text-base font-bold'>
            Get Your Free Estimate Today!
          </button>
        </Link>
      </div>
    </div>
  );
}
