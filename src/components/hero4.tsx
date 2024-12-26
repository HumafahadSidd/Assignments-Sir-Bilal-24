'use client'
import React from 'react';
import Slider from '@/components/Slider';

const Hero4: React.FC = () => {
  const images = [
    '/images/slideShow1.jpg',
    '/images/slideShow2.jpg',
    '/images/slideShow3.jpg',
    '/images/slideShow4.jpg',
    '/images/slideShow5.jpg',
    '/images/slideShow6.jpg',
    '/images/slideShow7.jpg',
  ];

  return (
    <div className='h-screen mt-5 ml-10'>
      <Slider images={images} />
    </div>
  );
};

export default Hero4;
