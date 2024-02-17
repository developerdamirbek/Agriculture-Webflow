import React from 'react';
import { useState } from 'react';
import { Button } from '../../../../components/ui/button';

export const OrganicCard = ({ img, name }) => {

  return (
    <div
      className='w-[612px] h-[583px] flex items-center justify-center'
      style={{backgroundImage: `url(${img})`}}
    >
      <Button className='bg-white font-roboto font-medium text-[25px] text-text-color' variant='primary'>
        {name}
      </Button>
    </div>
  );
};
