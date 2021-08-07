import React, { useState } from 'react';
import Head from 'next/head';
import Nav from '../components/nav';
import {
  SampleBox,
  SampleBoxs,
  SampleInlineStyles,
  SampleItem,
  SampleColors,
  SampleFontFamilies,
  SampleFontStyles,
} from '../components/parts/sample';
import { PageLink } from '../components/links/link';
import Link from 'next/link';
import { Popup } from '../components/popup/pop';
import { LinkData } from '../components/links/linkData';

const Home = () => {
  const [comment, setComment] = useState('');
  const handleCopy = (text) => {
    setComment(text);
  };
  const links = LinkData();
  return (
    <div className='container max-w-screen-md mx-auto text-sans'>
      <Head>
        <title>Tailwind CC</title>
        <link rel='icon' href='/favicon.ico' />
      </Head>

      <div className='w-full text-center text-2xl font-bold'>Tailwind CC</div>
      <div className='w-full text-gray-900 p-4'>
        <div>
          <div className='text-lg font-bold pt-4'>Box</div>
          <div className='flex flex-row flex-wrap justify-center items-center'>
            <SampleBox
              onCopy={handleCopy}
              className='container mx-auto'
              dammyStyle='flex justify-center items-center px-5'
            />
            <SampleBox
              onCopy={handleCopy}
              className='flex justify-center items-center content-center'
              size='small'
            />
            <SampleBox
              onCopy={handleCopy}
              className='flex justify-center items-center'
            />
            <SampleBoxs
              onCopy={handleCopy}
              className='flex justify-center items-center'
            />
            <SampleBoxs onCopy={handleCopy} className='flex flex-col' />
            <SampleBoxs onCopy={handleCopy} className='flex flex-row' />
            <SampleBoxs onCopy={handleCopy} className='grid grid-cols-1' />
            <SampleBoxs onCopy={handleCopy} className='grid grid-cols-2' />
            <SampleBoxs onCopy={handleCopy} className='grid grid-cols-3' />
            <SampleBoxs onCopy={handleCopy} className='grid grid-cols-4' />
            <SampleBoxs onCopy={handleCopy} className='grid grid-cols-5' />
          </div>
        </div>
        <div>
          <div className='text-lg font-bold pt-4'>Color</div>
          <SampleColors onCopy={handleCopy} />
        </div>
        <div>
          <div className='text-lg font-bold pt-4'>Font Family</div>
          <SampleFontFamilies onCopy={handleCopy} />
        </div>
        <div>
          <div className='text-lg font-bold pt-4'>Font Size</div>
          <SampleFontStyles
            onCopy={handleCopy}
            styleItems={[
              'text-xs',
              'text-sm',
              'text-base',
              'text-lg',
              'text-xl',
              'text-2xl',
              'text-3xl',
              'text-4xl',
              'text-5xl',
              'text-6xl',
            ]}
            optionStyle='items-center h-full'
          />
        </div>
        <div>
          <div className='text-lg font-bold pt-4'>Font Weight</div>
          <SampleFontStyles
            onCopy={handleCopy}
            styleItems={[
              'font-hairline',
              'font-thin',
              'font-light',
              'font-normal',
              'font-medium',
              'font-semibold',
              'font-bold',
              'font-extrabold',
              'font-black',
            ]}
            optionStyle='items-center h-full'
          />
        </div>
        <div>
          <div className='text-lg font-bold pt-4'>Rounded</div>
          <SampleFontStyles
            onCopy={handleCopy}
            styleItems={[
              'rounded-none',
              'rounded-sm',
              'rounded',
              'rounded-md',
              'rounded-lg',
              'rounded-xl',
              'rounded-2xl',
              'rounded-3xl',
              'rounded-full',
            ]}
            baseStyle='p-2'
          />
        </div>
        <div>
          <div className='text-lg font-bold pt-4'>Text Align</div>
          <SampleFontStyles
            onCopy={handleCopy}
            styleItems={[
              'text-left',
              'text-right',
              'text-center',
              'text-justify',
            ]}
            baseStyle='p-2'
          />
        </div>
        <div>
          <div className='text-lg font-bold pt-4'>Shadow</div>
          <SampleFontStyles
            onCopy={handleCopy}
            styleItems={[
              'shadow-inner',
              'shadow-sm',
              'shadow',
              'shadow-md',
              'shadow-lg',
              'shadow-xl',
              'shadow-2xl',
            ]}
            baseStyle='p-2'
          />
        </div>
        <div>
          <div className='text-lg font-bold pt-4'>Links</div>
          <div className='pl-4 grid grid-cols-3'>
            {links.map((link, index) => {
              return (
                <PageLink key={index} href={link.href} title={Link.title} />
              );
            })}
          </div>
        </div>
        <Popup comment={comment} />
      </div>
    </div>
  );
};

export async function getStaticProps() {
  return {
    props: {},
  };
}

export default Home;
