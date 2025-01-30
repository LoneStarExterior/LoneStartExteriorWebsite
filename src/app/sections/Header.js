'use client';
import React from 'react';
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, A11y, Autoplay } from 'swiper/modules';
import './styles/Header.css';
// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/autoplay';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';
import Image from 'next/image';
import Link from 'next/link';
export default function Header() {
  return (
    <div className='w-full relative overflow-x-hidden '>
      {/* Bubbles Animation Wrapper */}
      {/* <div className='absolute top-0 left-0 w-full h-full opacity-15 overflow-hidden flex z-20'>
        <Image
          src='/images/bubble bg.png'
          alt='bubbles'
          width={1000} // Double the width for smooth transition
          height={400}
          className='animate-bubbles aspect-auto'
        />
        <Image
          src='/images/bubble bg.png'
          alt='bubbles'
          width={1000}
          height={400}
          className='animate-bubbles aspect-auto'
        />
      </div> */}
      <Swiper
        modules={[Navigation, Pagination, A11y, Autoplay]}
        spaceBetween={0}
        slidesPerView={1}
        draggable
        autoplay={{ delay: 5000 }}
        loop={true}
        navigation={{
          nextEl: '.swiper-button-next',
          prevEl: '.swiper-button-prev',
        }}
        className='h-[600px] lg:!h-[720px] z-10 '
      >
        <SwiperSlide>
          <div className='w-full h-full  flex items-center slide1Bg bubble-bg'>
            <div className='w-full h-full flex py-40 xl:py-0 xl:items-center justify-center px-4 '>
              <div className='flex flex-col items-center gap-5  lg:gap-6 w-full md:w-11/12 lg:w-5/6'>
                <div className='flex flex-col items-center gap-5  lg:gap-6 text-center text-white'>
                  <h2 className='text-base lg:text-3xl fancy-text font-light'>
                    Revitalize Your Home's Curb Appeal
                  </h2>
                  <h3 className='text-3xl md:text-4xl lg:text-7xl font-extrabold !leading-tight uppercase '>
                    Austin’s Trusted Exterior Cleaning Experts
                  </h3>
                </div>
                <Link href={'#contact'} className='cursor-pointer'>
                  <button className='bg-white rounded-full p-2 lg:p-3 px-4 lg:px-6 w-max text-xs lg:text-sm font-semibold uppercase'>
                    Get a Free Quote Today
                  </button>
                </Link>
              </div>
            </div>
          </div>
        </SwiperSlide>

        <SwiperSlide>
          <div className='w-full h-full  flex items-center slide2Bg bubble-bg'>
            <div className='w-full h-full flex py-40 xl:py-0 xl:items-center justify-center px-4 '>
              <div className='flex flex-col items-center gap-5  lg:gap-6 z-20 w-full md:w-11/12 lg:w-5/6'>
                <div className='flex flex-col items-center gap-5  lg:gap-6 text-center text-white'>
                  <h2 className='text-base lg:text-3xl fancy-text font-light '>
                    Driveways, Patios, Roofs & More
                  </h2>
                  <h3 className='text-3xl md:text-4xl lg:text-7xl font-extrabold !leading-tight uppercase '>
                    Comprehensive Pressure Washing Services
                  </h3>
                </div>
                <Link href={'#contact'} className='cursor-pointer'>
                  <button className='bg-white rounded-full p-2 lg:p-3 px-4 lg:px-6 w-max text-xs lg:text-sm font-semibold uppercase'>
                    Schedule Your Cleaning Now
                  </button>
                </Link>
              </div>
            </div>
          </div>
        </SwiperSlide>

        <SwiperSlide>
          <div className='w-full h-full  flex items-center slide3Bg bubble-bg'>
            <div className='w-full h-full flex py-40 xl:py-0 xl:items-center justify-center px-4 '>
              <div className='flex flex-col items-center gap-5  lg:gap-6 z-20 w-full md:w-11/12 lg:w-5/6'>
                <div className='flex flex-col items-center gap-5  lg:gap-6 text-center text-white'>
                  <h2 className='text-base lg:text-3xl fancy-text font-light '>
                    Boost Your Property Value Instantly
                  </h2>
                  <h3 className='text-3xl md:text-4xl lg:text-7xl font-extrabold !leading-tight uppercase '>
                    Transform Your Home’s Exterior with Ease
                  </h3>
                </div>
                <Link href={'#contact'} className='cursor-pointer'>
                  <button className='bg-white rounded-full p-2 lg:p-3 px-4 lg:px-6 w-max text-xs lg:text-sm font-semibold uppercase'>
                    Book Your Service Today
                  </button>
                </Link>
              </div>
            </div>
          </div>
        </SwiperSlide>

        <SwiperSlide>
          <div className='w-full h-full  flex items-center slide4Bg bubble-bg'>
            <div className='w-full h-full flex py-40 xl:py-0 xl:items-center justify-center px-4 '>
              <div className='flex flex-col items-center gap-5  lg:gap-6 z-20 w-full md:w-11/12 lg:w-5/6'>
                <div className='flex flex-col items-center gap-5  lg:gap-6 text-center text-white'>
                  <h2 className='text-base lg:text-3xl fancy-text font-light '>
                    100% Satisfaction Guaranteed
                  </h2>
                  <h3 className='text-3xl md:text-4xl lg:text-7xl font-extrabold !leading-tight uppercase '>
                    Affordable & Eco-Friendly Cleaning
                  </h3>
                </div>
                <Link href={'#contact'} className='cursor-pointer'>
                  <button className='bg-white rounded-full p-2 lg:p-3 px-4 lg:px-6 w-max text-xxs lg:text-sm font-semibold uppercase'>
                    Get a Free Estimate Now
                  </button>
                </Link>
              </div>
            </div>
          </div>
        </SwiperSlide>

        <div className='swiper-button-next !hidden md:!block'></div>
        <div className='swiper-button-prev !hidden md:!block'></div>
      </Swiper>

      <Image
        src={'/images/svg.png'}
        alt='wave'
        width={800}
        height={400}
        className='absolute bottom-0 left-0 z-20 w-full h-40'
      />
    </div>
  );
}
