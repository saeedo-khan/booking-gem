'use client';
import React, { useState } from 'react';
import { cn } from '@/utils/cn';
import type { PlaceItem } from '@/common/types/places';
import { Button, Image } from '@nextui-org/react';
import { Icon } from '@iconify/react';
export type PlaceListItemProps = Omit<
  React.HTMLAttributes<HTMLDivElement>,
  'id'
> & {
  isPopular?: boolean;
  isLoading?: boolean;
  removeWrapper?: boolean;
} & PlaceItem;

const CardItem = React.forwardRef<HTMLDivElement, PlaceListItemProps>(
  (
    {
      name,
      price,
      rating,
      isLoading,
      description,
      imageSrc,
      removeWrapper,
      className,
      ...props
    },
    ref
  ) => {
    const [isLike, setIsLike] = useState(false);
    return (
      <div
        ref={ref}
        className={cn(
          'relative flex w-full flex-none flex-col gap-3',
          {
            'rounded-none bg-background shadow-none': removeWrapper,
          },
          className
        )}
        {...props}
      >
        <Button
          isIconOnly
          className='absolute right-3 top-3 z-20'
          radius='full'
          size='sm'
          variant='flat'
          onPress={() => setIsLike(!isLike)}
        >
          <Icon
            className={cn('text-default-900', {
              'text-danger-400': isLike,
            })}
            icon='solar:heart-bold'
            width={16}
            data-testid='like-icon'
          />
        </Button>
        <Image
          isBlurred
          isZoomed
          alt={name}
          className='aspect-square w-full hover:scale-110'
          isLoading={isLoading}
          src={imageSrc}
        />
        <div className='flex flex-col items-start justify-between gap-1'>
          <h3 className='text-small font-medium text-default-700'>{name}</h3>
          {rating && (
            <div className='flex items-center gap-1'>
              <Icon
                className='text-default-500'
                icon='solar:star-bold'
                width={16}
              />
              <span className='text-small text-default-500'>{rating}</span>
            </div>
          )}
          {description && (
            <p className='text-small text-default-500'>{description}</p>
          )}
          <p className='text-small font-medium text-default-500'>${price}</p>
        </div>
      </div>
    );
  }
);

CardItem.displayName = 'CardItem';

export default CardItem;
