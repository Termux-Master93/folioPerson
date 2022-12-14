import React from 'react';
import { DetailedHTMLProps, forwardRef, InputHTMLAttributes } from 'react';

export const FloatingInput = forwardRef<
  HTMLInputElement,
  DetailedHTMLProps<InputHTMLAttributes<HTMLInputElement>, HTMLInputElement>
>(({ ...props }, ref) => {
  return (
    <div className='relative w-full'>
      <input
        ref={ref /* Pass ref */}
        className='input input-md w-full mb-4 block px-2.8 pb-2.5 pt-4 text-sm text-gray-900 bg-transparent rounded-lg border-1 border-gray-300 appearance-none focus:outline-none focus:ring-0 focus:border-blue-600 peer'
        {...props}
      />
      <label
        htmlFor={props.id}
        className='absolute text-md text-gray-500 duration-300 transform -translate-y-4 scale-75 top-2 z-10 origin-[0] bg-white  px-2 peer-focus:px-2 peer-focus:text-blue-600 peer-placeholder-shown:scale-100 peer-placeholder-shown:-translate-y-1/2 peer-placeholder-shown:top-1/2 peer-focus:top-1 peer-focus:scale-75 peer-focus:-translate-y-4 left-1 pointer-events-none '
      >
        {props.placeholder}
      </label>
    </div>
  );
});
