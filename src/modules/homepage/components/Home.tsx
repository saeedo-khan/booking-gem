import places from '@/common/constant/places';
import { cn } from '@/utils/cn';
import React from 'react';
import HeroSearchForm from './HeroSearchForm';
import HeroSearchDate from './HeroSearchDate';
import CardItem from '@/common/components/CardItem/CardItem';
import Hero from './Hero/Hero';

const Home = () => {
  return (
    <div className='space-y-10'>
      <div className='pt-14 mb-80'>
        <Hero />
      </div>
      <div
        className={cn(
          'my-auto grid max-w-7xl mx-auto grid-cols-1 gap-5 p-4 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5'
        )}
      >
        {places.map((place) => (
          <CardItem key={place.id} {...place} />
        ))}
      </div>
    </div>
  );
};

export default Home;
