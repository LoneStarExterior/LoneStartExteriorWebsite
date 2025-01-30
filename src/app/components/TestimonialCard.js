import Image from 'next/image';
import React from 'react';

export default function TestimonialCard({ desc, name, place }) {
  return (
    <div className='bg-primaryLight rounded-lg p-4 relative'>
      <Image
        src='/images/icons/QuotesIcon.svg'
        alt='quotes'
        width={30}
        height={30}
        className='absolute top-2 left-2'
      />
      <Image
        src='/images/icons/QuoteInvert.svg'
        alt='quotes'
        width={30}
        height={30}
        className='absolute bottom-2 right-2'
      />

      <div className='pt-8 px-2 flex flex-col gap-5'>
        <p className='text-sm md:text-base'>{desc}</p>

        <div className='flex w-full xl:w-1/2 items-center gap-5'>
          <div className='flex flex-col gap-1'>
            <h3 className='text-base lg:text-lg font-bold'>{name}</h3>
            <p className='text-sm lg:text-base'>{place}</p>
          </div>
        </div>
      </div>
    </div>
  );
}
