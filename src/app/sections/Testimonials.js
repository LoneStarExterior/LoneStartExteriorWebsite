'use client';
import React from 'react';
import Image from 'next/image';

// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, A11y, Autoplay } from 'swiper/modules';
// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/autoplay';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';
import TestimonialCard from '../components/TestimonialCard';
export default function Testimonials() {
  return (
    <div className='flex my-20 pb-52 lg:pb-0 p-4 lg:p-10 testimonials relative flex-col-reverse lg:flex-row'>
      <Image
        src={'/images/bubbles side.png'}
        alt='bubbles side'
        width={200}
        height={200}
        className='absolute bottom-0 lg:-bottom-40 xl:bottom-0 left-10 z-20 floating opacity-60'
      />

      <div className='w-full lg:w-1/2 lg:p-5 xl:p-10 mt-10 lg:mt-0'>
        <div className='flex flex-col gap-3'>
          <h2 className='text-primary text-xl uppercase font-semibold fancy-text'>
          What Our Clients Are Saying
          </h2>
          <h3 className='text-3xl md:text-4xl lg:text-5xl font-bold'>
          How We Deliver Unmatched Results
          </h3>
        </div>
        <div className='flex justify-end'>
          <Swiper
            modules={[Navigation, Pagination, A11y, Autoplay]}
            spaceBetween={30}
            slidesPerView={1}
            draggable
            autoHeight
            autoplay={{ delay: 5000 }}
            loop={true}
            className='!h-auto mt-5 w-full lg:w-4/5 z-10'
          >
            <SwiperSlide>
              <TestimonialCard
                desc='Absolutely amazing service! My driveway and patio look brand new. Professional, on time, and affordable!'
                name='Jessica M.'
                place='Austin'
              />
            </SwiperSlide>
            <SwiperSlide>
              <TestimonialCard
                desc='Best exterior cleaning company I’ve hired. The team was friendly, efficient, and did an incredible job on my siding and windows.'
                name='David S.'
                place='Austin'
              />
            </SwiperSlide>
            <SwiperSlide>
              <TestimonialCard
                desc='Highly recommend! They removed years of grime from my home’s exterior, and it looks fantastic.'
                name='Linda T.'
                place='Austin'
              />
            </SwiperSlide>
          </Swiper>
        </div>
      </div>
      <div className='w-full lg:w-1/2 mt-5 lg:mt-0'>
        <Image
          src={'/images/testimonial-side.webp'}
          alt='testimonial side img'
          width={1000}
          height={1000}
          className='h-full w-full rounded-lg z-10'
        />
      </div>
    </div>
  );
}
