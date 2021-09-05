import React, { useState } from 'react';
import Head from 'next/head';
import { GetStaticProps } from 'next';
import { PageLink } from '@comp/links/link';
import { LinkData } from '@comp/links/linkData';

const Home = () => {
  const links = LinkData();
  return (
    <div className='container max-w-screen-md mx-auto text-sans'>
      <Head>
        <title>Tailwind CC - Links</title>
        <meta property='og:title' content='Tailwind CC' />
      </Head>

      <div className='w-full text-gray-900 p-4'>
        <div>
          <div className='text-lg font-bold pt-4'>Links</div>
          <div className='pl-4 grid grid-cols-3'>
            {links.map((link, index) => {
              return (
                <PageLink key={index} href={link.href} title={link.title} />
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
};

export const getStaticProps: GetStaticProps = async context => {
  return {
    props: {},
  };
}

export default Home;
