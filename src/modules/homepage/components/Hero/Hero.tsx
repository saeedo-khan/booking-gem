import React from 'react';
import HeroImage from './HeroImage';
import HeroSearchDate from '../HeroSearchDate';

const Hero = () => {
  return (
    <div className='px-56'>
      <HeroImage />
      <div>
        <HeroSearchDate />
      </div>
    </div>
  );
};

export default Hero;
