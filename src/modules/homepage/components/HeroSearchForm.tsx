'use client';
import { Popover, PopoverContent, PopoverTrigger } from '@nextui-org/react';
import React, { useState } from 'react';
import NcInputNumber from './NcInputNumber';
import { GuestsObject } from '../types';

export interface GuestsInputProps {
  defaultValue: GuestsObject;
  onChange?: (data: GuestsObject) => void;
  fieldClassName?: string;
  className?: string;
  buttonSubmitHref?: any;
  hasButtonSubmit?: boolean;
}

const HeroSearchForm = ({
  defaultValue,
  onChange,
  fieldClassName,
  className,
  buttonSubmitHref,
  hasButtonSubmit,
}: GuestsInputProps) => {
  const [guestAdultsInputValue, setGuestAdultsInputValue] = useState(
    defaultValue?.guestsAdults || 0
  );
  const [guestChildrenInputValue, setGuestChildrenInputValue] = useState(
    defaultValue?.guestsChildren || 0
  );
  const [guestInfantsInputValue, setGuestInfantsInputValue] = useState(
    defaultValue?.guestsInfants || 0
  );
  const handleChangeData = (value: number, type: keyof GuestsObject) => {
    let newValue = {
      guestsAdults: guestAdultsInputValue,
      guestsChildren: guestChildrenInputValue,
      guestsInfants: guestInfantsInputValue,
    };

    if (type === 'guestsAdults') {
      setGuestAdultsInputValue(value);
      newValue.guestsAdults = value;
    }
    if (type === 'guestsChildren') {
      setGuestChildrenInputValue(value);
      newValue.guestsChildren = value;
    }
    if (type === 'guestsInfants') {
      setGuestInfantsInputValue(value);
      newValue.guestsInfants = value;
    }
    onChange && onChange(newValue);
  };

  const getTotalGuests =
    guestAdultsInputValue + guestChildrenInputValue + guestInfantsInputValue;

  return (
    <Popover className={`flex relative ${className}`} placement='bottom'>
      <PopoverTrigger className={`flex-1 flex text-left ${fieldClassName}`}>
        <div className='flex items-center gap-3 p-4 cursor-pointer'>
          <div className='text-neutral-300 dark:text-neutral-400 w-7 h-7'>
            <svg
              xmlns='http://www.w3.org/2000/svg'
              className='nc-icon-field'
              fill='none'
              viewBox='0 0 24 24'
              stroke='currentColor'
            >
              <path
                strokeLinecap='round'
                strokeLinejoin='round'
                strokeWidth={1.5}
                d='M18 9v3m0 0v3m0-3h3m-3 0h-3m-2-5a4 4 0 11-8 0 4 4 0 018 0zM3 20a6 6 0 0112 0v1H3v-1z'
              />
            </svg>
          </div>
          <div className='flex flex-col'>
            <span>{getTotalGuests || 0} Guests</span>
            <span className='text-default-500 text-small'>Guests</span>
          </div>
        </div>
      </PopoverTrigger>
      <PopoverContent>
        <p className='w-96 py-5 px-2 space-y-4'>
          <NcInputNumber
            defaultValue={guestAdultsInputValue}
            max={8}
            min={1}
            label='Adults'
            desc='Ages 13 or above'
            onChange={(value) => handleChangeData(value, 'guestsAdults')}
          />
          <NcInputNumber
            defaultValue={guestChildrenInputValue}
            max={8}
            label='Children'
            desc='Ages 2-12'
            onChange={(value) => handleChangeData(value, 'guestsChildren')}
          />
          <NcInputNumber
            defaultValue={guestInfantsInputValue}
            max={8}
            label='Infants'
            desc='Ages 0-2'
            onChange={(value) => handleChangeData(value, 'guestsInfants')}
          />
        </p>
      </PopoverContent>
    </Popover>
  );
};

export default HeroSearchForm;
