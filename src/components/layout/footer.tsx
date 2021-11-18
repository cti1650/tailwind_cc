import React from 'react';

type typeProps = {
  children?: JSX.Element;
};

export default function Footer({ children }: typeProps) {
  return (
    <>
      <div className='pt-10 pb-4 text-center text-xs font-thin text-gray-800'>
        Copyright ©2021 cti All rights reserved.
      </div>
    </>
  );
}
