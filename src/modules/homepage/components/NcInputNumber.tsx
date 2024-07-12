'use client';
import { cn } from '@/utils/cn';
import { Button } from '@nextui-org/react';
import React, { useState } from 'react';
import { Icon } from '@iconify/react';
interface INcInputNumber {
  className?: string;
  defaultValue?: number;
  min?: number;
  max?: number;
  onChange?: (value: number) => void;
  label?: string;
  desc?: string;
}

const NcInputNumber = React.forwardRef<HTMLDivElement, INcInputNumber>(
  (
    {
      className,
      defaultValue = 0,
      min = 0,
      max,
      onChange,
      label,
      desc,
      ...props
    },
    ref
  ) => {
    const [value, setValue] = useState(defaultValue);

    const handleClickIncrement = () => {
      if (max && max <= value) return;
      setValue((prev) => prev + 1);
      onChange && onChange(value + 1);
    };

    const handleClickDecrement = () => {
      if (min && min >= value) return;
      setValue((prev) => prev - 1);
      onChange && onChange(value - 1);
    };

    const renderLabel = () => {
      return (
        <div className='flex flex-col'>
          <span className='text-gray-600'>{label}</span>
          {desc && <span className='text-gray-400'>{desc}</span>}
        </div>
      );
    };

    return (
      <div
        ref={ref}
        className={cn('flex items-center justify-between', className)}
        {...props}
      >
        {label && renderLabel()}
        <div className='flex items-center gap-5'>
          <Button
            isIconOnly
            radius='full'
            onPress={handleClickIncrement}
            isDisabled={max ? max <= value : false}
          >
            <Icon icon='ic:baseline-plus' width={16} />
          </Button>
          <span className='text-medium text-black'>{value}</span>
          <Button
            isIconOnly
            radius='full'
            onPress={handleClickDecrement}
            isDisabled={Boolean(min! >= value!)}
          >
            <Icon icon='ic:baseline-minus' width={16} />
          </Button>
        </div>
      </div>
    );
  }
);

NcInputNumber.displayName = 'NcInputNumber';

export default NcInputNumber;
