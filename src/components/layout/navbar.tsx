import Link from 'next/link';
import React from 'react';
import { TailwindSearch } from '../search/tailwind';

export default function Navbar({ children }) {
  return (
    <>
      <div className='w-full'>
        <div className='w-full py-2 sm:py-6 text-center text-4xl font-bold'>
          Tailwind CC
        </div>
        <ol className='w-full py-2 sm:py-4 flex justify-center items-center content-center space-x-6 text-gray-800'>
          <li>
            <Link href='/'>
              <a className='px-4 py-1 bg-white hover:bg-gray-200 rounded'>
                Home
              </a>
            </Link>
          </li>
          <li>
            <Link href='/site'>
              <a className='px-4 py-1 bg-white hover:bg-gray-200 rounded'>
                Links
              </a>
            </Link>
          </li>
        </ol>
        <TailwindSearch />
      </div>
    </>
  );
}
