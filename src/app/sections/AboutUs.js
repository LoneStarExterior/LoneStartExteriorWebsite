import Image from 'next/image';
import React from 'react';

export default function AboutUs() {
  return (
    <div className='flex items-center pb-10 p-4 md:p-8 lg:p-12 2xl:p-20 flex-col lg:flex-row gap-10 lg:gap-0'>
      <div className='w-full lg:w-1/2 flex flex-col gap-4'>
        <h2 className='text-primary text-xl uppercase font-semibold fancy-text'>
          Who We Are
        </h2>
        <h3 className='text-4xl md:text-4xl xl:text-5xl font-bold text-secondary'>
          Austin’s Trusted Exterior Cleaning Specialists
        </h3>
        <p>
          At
          <span className='text-primary font-bold fancy-text '>
            Lone Star Exterior Solutions
          </span>
          , we are dedicated to delivering top-tier exterior cleaning and
          pressure washing services that enhance the beauty and longevity of
          your property. With years of experience and a passion for perfection,
          we take pride in restoring homes and businesses across Austin, TX. Our
          team uses state-of-the-art equipment and eco-friendly solutions to
          remove dirt, mold, and grime leaving your surfaces spotless and
          well-maintained.
          <br />
          <br />
          Whether it’s a driveway, patio, siding, or commercial building, we
          guarantee exceptional results with a customer-first approach. Your
          satisfaction is our priority, and we’re here to make your property
          look brand new again!
        </p>

        <button className='mt-4 bg-secondary p-3 text-white font-semibold w-max rounded-xl'>Contact Now</button>
      </div>
      <div className='w-full lg:w-1/2'>
        <div className='relative flex justify-center'>
          <Image
            src={'/images/aboutusSide.webp'}
            alt='aboutUs img'
            width={600}
            height={600}
            className='z-20 rounded-3xl'
          />
          <div className='absolute -top-8 left-[20%] xl:left-[28%] bg-primaryLight w-9/12 h-[110%] -rotate-12 rounded-3xl'></div>
          <div className='z-30 flex items-center bg-white rounded-3xl absolute bottom-10 left-[10%] p-4 gap-3'>
            <Image
              src={'/images/icons/years of experience.svg'}
              alt='years of experience icon'
              width={40}
              height={40}
            />
            <h3 className='text-center text-sm lg:text-base text-primary font-bold capitalize fancy-text '>
              25 years of <br /> quality service
            </h3>
          </div>
        </div>
      </div>
    </div>
  );
}
