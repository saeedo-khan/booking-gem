'use client';
import React, { useState } from 'react';
import HeroSearchForm from './HeroSearchForm';
import { GuestsObject } from '../types';

const HeroSearchDate = () => {
  const [guestValue, setGuestValue] = useState<GuestsObject>({});
  const handleGuestsChangeWrapper = (data: GuestsObject) => {
    console.log(data);
  };
  return (
    <div>
      <HeroSearchForm
        defaultValue={guestValue}
        onChange={handleGuestsChangeWrapper}
      />
    </div>
  );
};

export default HeroSearchDate;
