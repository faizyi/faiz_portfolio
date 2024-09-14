import React from 'react';
import Link from 'next/link';

const ContactButton = () => {
  return (
    <Link href="/about#contact" passHref>
      <div
        className='mt-5 bg-sh-dark-500 border-2 border-sh-dark rounded-3xl
        px-3 py-3 hover:shadow-lg transition-transform transform ease-in hover:scale-105 cursor-pointer
        max-w-[150px]' // Limit the button width and center it
      >
        <h3 className='text-center text-white text-xl'>Contact Me</h3> {/* Center the text */}
      </div>
    </Link>
  );
};

export default ContactButton;
