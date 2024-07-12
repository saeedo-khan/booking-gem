import React from 'react';
import { AcmeIcon } from './social';
import { Spacer } from '@nextui-org/react';

const Footer = () => {
  return (
    <footer>
      <div>
        <div className='flex items-center justify-center'>
          <AcmeIcon size={44} />
          <span>Door</span>
        </div>
        <Spacer y={4} />
      </div>
    </footer>
  );
};

export default Footer;
