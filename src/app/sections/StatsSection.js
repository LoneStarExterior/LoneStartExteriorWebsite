'use client';
import React, { useEffect, useRef, useState } from 'react';
import Counter from '../components/CounterPart';
import Image from 'next/image';

const StatsSection = () => {
  const [startCounting, setStartCounting] = useState(false);
  const sectionRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setStartCounting(true);
        }
      },
      { threshold: 0.2 } // Trigger when 20% of the section is in view
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => {
      if (sectionRef.current) observer.unobserve(sectionRef.current);
    };
  }, []);

  const stats = [
    {
      value: 500,
      label: 'Happy Clients',
      symbol: '+',
      animation: 'fade-up',
      icon: '/images/icons/happyclients.svg',
    },
    {
      value: 1000,
      label: 'Properties Cleaned',
      symbol: '+',
      animation: 'fade-down',
      icon: '/images/icons/buildings.svg',
    },
    {
      value: 900,
      label: '5 Stars',
      animation: 'fade-up',
      icon: '/images/icons/5stars.svg',
    },
  ];

  return (
    <div className='p-4 md:p-8 lg:p-12 xl:p-20 relative'>
      <Image
        src={'/images/service side bg.png'}
        alt='stats side bg'
        width={400}
        height={400}
        className='absolute top-0 right-0 z-10  opacity-40'
      />
      <Image
        src={'/images/buble.png'}
        alt='bubble img'
        width={150}
        height={150}
        className='absolute bottom-10 left-10 z-30 floating opacity-60'
      />

      <section
        ref={sectionRef}
        className='my-20 py-10  bg-white rounded-lg shadow-xl relative z-20'
      >
        <div className='container mx-auto grid grid-cols-1 sm:grid-cols-3 lg:grid-cols-3 gap-1 '>
          {stats.map((stat, index) => (
            <div
              key={index}
              className={`p-8 flex flex-col items-center text-center  border-r-2 border-gray-200 ${
                index === 0 ? 'rounded-tl-xl rounded-bl-xl' : ''
              } ${
                index === stats.length - 1
                  ? 'rounded-tr-xl rounded-br-xl  !border-r-0'
                  : ''
              }`}
              data-aos={stat.animation}
              data-aos-delay={index * 100}
            >
              <Image
                src={stat.icon}
                alt={`${stat.label} icon`}
                width={80}
                height={80}
              />
              <h3 className='text-4xl font-bold text-primary my-3'>
                {stat.prefix || ''}
                <Counter endValue={stat.value} start={startCounting} />
                {stat.symbol || ''}
              </h3>
              <p className=' text-primary font-bold'>{stat.label}</p>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
};

export default StatsSection;
