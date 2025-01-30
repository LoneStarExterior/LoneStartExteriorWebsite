import React from 'react';
import './styles/Header.css';
import Image from 'next/image';
import ServicePoint from '../components/ServicePoint';

export default function Services() {
  return (
    <div className='flex flex-col p-4 md:p-8 lg:p-12 2xl:p-20 bg-primaryLight '>
      <div className='lg:w-max mx-auto text-center flex flex-col gap-3 px-4 md:px-8 lg:px-12 2xl:px-20'>
        <h2 className='text-sm md:text-base lg:text-xl mx-auto fancy-text font-light text-primary'>
          Our Services
        </h2>
        <h3 className='text-2xl md:text-3xl lg:text-5xl font-bold'>
          Revitalize Your Property with Professional Cleaning
        </h3>
      </div>

      <div className='flex justify-between gap-20 lg:gap-10 mt-16 lg:mt-24 flex-col lg:flex-row'>
        <div className='w-full lg:w-1/2 min-h-80 slide1Bg relative rounded-lg serviceCard'>
          {/* Icon Container */}
          <div className='absolute -top-10 left-5 bg-white p-5 rounded-full z-40 border-4 border-white serviceIcon'>
            <Image
              src={'/images/icons/exterior cleaning service.svg'}
              alt='exterior cleaning service'
              width={60}
              height={60}
            />
          </div>

          <div className='w-full h-full absolute top-0 left-0 bg-primary z-0 opacity-30 rounded-lg'></div>

          {/* Inner body with group for hover */}
          <div className='min-h-80 relative w-full h-full p-5 innerBody group overflow-hidden z-30 rounded-lg'>
            {/* Hover Sliding Overlay */}
            <div className='absolute top-0 p-5 z-30 left-0 w-full h-full bg-white rounded-lg transform -translate-y-[150%] transition-transform duration-500 ease-in-out group-hover:translate-y-0'>
              <div className='flex flex-col gap-4'>
                <h2 className='uppercase text-2xl md:text-3xl  lg:text-4xl font-bold mt-16 text-primary relative'>
                  exterior cleaning
                </h2>
                <p className='text-gray-300 text-xs lg:text-sm w-full lg:w-4/5'>
                  Restore the beauty of your home or business with our top-rated
                  exterior cleaning services. We remove mold, algae, dirt, and
                  stains, making your property look brand new.
                </p>

                <div className='flex gap-10'>
                  <div className='flex flex-col gap-3'>
                    <ServicePoint name={'House siding & walls'} />
                    <ServicePoint name={'Deck & patio cleaning'} />
                    <ServicePoint name={'Gutter cleaning'} />
                  </div>
                  <div className='flex flex-col gap-3'>
                    <ServicePoint name={'Roof soft washing'} />
                    <ServicePoint name={'Window cleaning'} />
                  </div>
                </div>
              </div>
            </div>

            {/* Title */}
            <h2 className='uppercase text-3xl md:text-3xl  lg:text-4xl font-bold mt-16 text-white relative z-20'>
              exterior cleaning
            </h2>

            {/* Background Overlay */}
          </div>
        </div>
        <div className='w-full lg:w-1/2 min-h-80 slide2Bg relative rounded-lg serviceCard'>
          {/* Icon Container */}
          <div className='absolute -top-10 left-5 bg-white p-5 rounded-full z-40 border-4 border-white serviceIcon'>
            <Image
              src={'/images/icons/pressure wash service.svg'}
              alt='pressure wash service service'
              width={60}
              height={60}
            />
          </div>

          <div className='w-full h-full absolute top-0 left-0 bg-primary z-0 opacity-30 rounded-lg'></div>

          {/* Inner body with group for hover */}
          <div className='min-h-80 relative w-full h-full p-5 innerBody group overflow-hidden z-30 rounded-lg'>
            {/* Hover Sliding Overlay */}
            <div className='absolute top-0 p-5 z-30 left-0 w-full h-full bg-white rounded-lg transform -translate-y-[150%] transition-transform duration-500 ease-in-out group-hover:translate-y-0'>
              <div className='flex flex-col gap-4'>
                <h2 className='uppercase text-2xl md:text-3xl  lg:text-4xl font-bold mt-16 text-primary relative'>
                  pressure wash service
                </h2>
                <p className='text-gray-300 text-xs lg:text-sm w-full lg:w-4/5'>
                  Our high-powered pressure washing removes deep-seated grime
                  from hard surfaces, giving them a fresh, clean appearance.
                </p>

                <div className='flex gap-10'>
                  <div className='flex flex-col gap-3'>
                    <ServicePoint name={'Driveways & sidewalks'} />
                    <ServicePoint name={'Concrete & stone surfaces'} />
                    <ServicePoint name={'Parking lots'} />
                  </div>
                  <div className='flex flex-col gap-3'>
                    <ServicePoint name={'Fences & brick walls'} />
                    <ServicePoint name={'Pool decks'} />
                  </div>
                </div>
              </div>
            </div>

            {/* Title */}
            <h2 className='uppercase text-3xl md:text-3xl  lg:text-4xl font-bold mt-16 text-white relative z-20'>
            pressure wash service
            </h2>

            {/* Background Overlay */}
          </div>
        </div>
      </div>
    </div>
  );
}
