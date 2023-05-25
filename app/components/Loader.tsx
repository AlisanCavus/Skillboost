import React from 'react';

export function Loader() {
  return (
    <div className='absolute right-1/2 bottom-1/2  transform translate-x-1/2 translate-y-1/2 '>
      <div className='border-t-transparent border-solid animate-spin  rounded-full border-brandPrimary border-8 h-20 w-20'></div>
    </div>
  );
}