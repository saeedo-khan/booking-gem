import Image from 'next/image';
import React from 'react';

const HeroImage = () => {
  return (
    <div className='relative' style={{ height: '800px' }}>
      <Image
        alt='hero1'
        src='/images/hero2.jpg'
        fill={true}
        sizes='100vw, 100vh'
        className='h-full w-full rounded-xl '
      />
      <div className='absolute inset-0 top-1/3 text-center'>
        <h3 className='text-5xl'>Helping Others</h3>
        <h1 className='text-8xl font-bold leading-normal'>LIVE & TRAVEL</h1>
        <p className='text-xl font-semibold leading-normal'>
          Special offers to suit your plan
        </p>
      </div>
    </div>
  );
};

export default HeroImage;
