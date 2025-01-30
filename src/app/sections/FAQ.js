import Image from 'next/image';
import React from 'react';
import Accordion from '../components/Accordion';

export default function FAQ() {
  const faqs = [
    {
      title: '1. How often should I get pressure washing done?',
      content:
        'It depends on your property, but we recommend at least once a year to maintain curb appeal and prevent long-term damage.',
    },
    {
      title: '2. Is pressure washing safe for all surfaces?',
      content:
        'Yes! We adjust pressure levels and use soft washing for delicate surfaces like roofs and siding.',
    },
    {
      title: '3. Will pressure washing damage my paint or siding?',
      content:
        'No, we use the correct pressure settings and techniques to clean without causing damage.',
    },
    {
      title: '4.  How long does a typical pressure washing service take?',
      content:
        'Most jobs take 1-3 hours, depending on the size of your property and the level of cleaning needed.',
    },
  ];

  return (
    <div className='flex p-4 md:p-8 lg:p-12 2xl:p-20 bg-primaryLight overflow-x-hidden flex-col lg:flex-row'>
      <div className='w-full lg:w-1/2'>
        <Image
          src={'/images/faq-side.webp'}
          alt='faq side img'
          width={1000}
          height={600}
        />
      </div>
      <div className='w-full lg:w-1/2'>
        <div className='flex flex-col gap-3'>
          <h2 className='text-sm md:text-base lg:text-xl fancy-text font-bold text-primary'>
            FAQ
          </h2>
          <h3 className='text-3xl md:text-4xl lg:text-5xl font-bold text-secondary'>
            Frequently Asked Questions.
          </h3>
        </div>

        <div className='mt-5'>
          {faqs.map((faq, index) => (
            <Accordion
              key={index}
              title={faq.title}
              className='bg-white rounded-lg p-5 py-7 my-4'
            >
              <div className='bg-white px-3'>
                <p>{faq.content}</p>
              </div>
            </Accordion>
          ))}
        </div>
      </div>
    </div>
  );
}
