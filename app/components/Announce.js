import React from 'react';
import Link from 'next/link';

const Announce = () => {
  return (
    <div className='bg-[#373737] text-center text-white py-2 text-sm'>
      FREE SHIPPING ON ORDERS OVER $25{' '}
      <Link href="#" className='underline'>
        SHOP NOW
      </Link>
    </div>
  );
};

export default Announce;
