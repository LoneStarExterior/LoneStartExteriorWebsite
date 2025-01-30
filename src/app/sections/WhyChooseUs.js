import Image from 'next/image';
import React from 'react';

export default function WhyChooseUs() {
  return (
    <div className='whyChooseUs flex py-4 md:py-8 lg:py-12 2xl:py-20 relative'>
      <div className='absolute  top-0 left-0 w-5/12 h-full rounded-tr-3xl rounded-br-3xl bg-primary z-10'>
        <div className='relative flex justify-end h-full'>
          <Image
            src={'/images/wave side.png'}
            alt='wave'
            width={100}
            height={400}
            className='absolute top-0 -right-14 h-full'
          />
        </div>
      </div>
      <div className='w-full lg:w-1/2 bg-white p-10 py-20 rounded-3xl m-4 lg:m-20  z-20 '>
        <div className='flex flex-col gap-4'>
          <h2 className='text-primary text-sm md:text-base lg:text-xl uppercase font-semibold fancy-text'>
            Why Choose Us
          </h2>
          <h3 className='text-2xl md:text-3xl xl:text-4xl font-bold text-secondary'>
            Your Trusted Partner for Exceptional Exterior Cleaning
          </h3>
          <div className='flex flex-col gap-10 mt-5'>
            <div className='flex gap-6 group flex-col lg:flex-row'>
              <div className='p-5 lg:p-7 relative'>
                <Image
                  src={'/images/icons/We Are Experts.svg'}
                  alt='We Are Experts'
                  width={70}
                  height={70}
                  className=' relative z-20'
                />
                <Image
                  src={'/images/choice.png'}
                  alt='choice '
                  width={100}
                  height={100}
                  className='absolute top-0 left-0 z-20 transform group-hover:scale-x-[-1] transition-transform duration-500'
                />
              </div>
              <div className='flex flex-col gap-3'>
                <h2 className='text-xl font-bold'>We Are Experts</h2>
                <p className='text-gray-300'>
                  We specialize in exterior cleaning for both residential and
                  commercial properties, ensuring a spotless finish every time.
                </p>
              </div>
            </div>
            <div className='flex gap-6 group flex-col lg:flex-row'>
              <div className='p-5 lg:p-7 relative'>
                <Image
                  src={'/images/icons/Leading Technologies.svg'}
                  alt='Leading Technologies'
                  width={70}
                  height={70}
                  className=' relative z-20'
                />
                <Image
                  src={'/images/choice.png'}
                  alt='choice background'
                  width={100}
                  height={100}
                  className='absolute top-0 left-0 z-20  transform group-hover:scale-x-[-1] transition-transform duration-500 '
                />
              </div>
              <div className='flex flex-col gap-3'>
                <h2 className='text-xl font-bold'>Leading Technologies</h2>
                <p className='text-gray-300'>
                  We use the latest pressure washing equipment and eco-friendly
                  solutions to deliver efficient, high-quality cleaning results.{' '}
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
