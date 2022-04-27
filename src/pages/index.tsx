import React, { useState } from 'react';
import Head from 'next/head';
import {
  SampleBox,
  SampleBoxs,
  SampleInlineStyles,
  SampleItem,
  SampleColors,
  SampleFontFamilies,
  SampleFontStyles,
  SampleFlexBoxs,
} from '@comp/parts';
import { GetStaticProps } from 'next';
import { Popup } from '@comp/popup/pop';
import { LinkData } from '@comp/links/linkData';
import { Section } from '@comp/layout/Section';

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
        <meta property='og:title' content='Tailwind CC' />
      </Head>

      <div className='w-full text-gray-900 p-4'>
        <Section title='Box Layout'>
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
            <SampleBoxs
              onCopy={handleCopy}
              className='grid grid-rows-[auto,1fr,auto]'
              boxCount={3}
            >
              <div className='min-h-[10px] bg-blue-400 m-[1px] rounded'></div>
            </SampleBoxs>
            <SampleBoxs
              onCopy={handleCopy}
              className='fixed bottom-0 left-0 w-full flex flex-row text-center'
              dammyStyle='absolute bottom-0 left-0 w-full flex flex-row text-center'
              boxCount={3}
              size='h-8'
            >
              <div className='w-full h-full border bg-blue-400 text-lg text-white'>
                ・
              </div>
            </SampleBoxs>
            <SampleBoxs
              onCopy={handleCopy}
              className='absolute top-0 left-0 w-full flex flex-row text-center'
              dammyStyle='absolute top-0 left-0 w-full flex flex-row text-center'
              boxCount={3}
              size='h-8'
            >
              <div className='w-full h-full border bg-blue-400 text-lg text-white'>
                ・
              </div>
            </SampleBoxs>
            <SampleBoxs
              onCopy={handleCopy}
              className='fixed bottom-0 left-0 w-full flex flex-row divide-x-2 divide-blue-400 text-center'
              dammyStyle='absolute bottom-0 left-0 w-full flex flex-row divide-x-2 divide-blue-400 text-center'
              boxCount={3}
              size='h-8'
            >
              <div className='w-full h-full border-0 bg-white text-lg text-blue-400'>
                ・
              </div>
            </SampleBoxs>
            <SampleBoxs
              onCopy={handleCopy}
              className='absolute top-0 left-0 w-full flex flex-row divide-x-2 divide-blue-400 text-center'
              dammyStyle='absolute top-0 left-0 w-full flex flex-row divide-x-2 divide-blue-400 text-center'
              boxCount={3}
              size='h-8'
            >
              <div className='w-full h-full border-0 bg-white text-lg text-blue-400'>
                ・
              </div>
            </SampleBoxs>
            <SampleBoxs
              onCopy={handleCopy}
              className='fixed top-0 left-0 h-full text-center'
              dammyStyle='absolute top-0 left-0 h-full text-center'
              boxCount={6}
              size='w-8'
            >
              <div className='w-full h-2 border bg-blue-400 text-lg text-white'></div>
            </SampleBoxs>
            <SampleBoxs
              onCopy={handleCopy}
              className='fixed top-0 left-0 h-full divide-y-2 divide-blue-400 text-center'
              dammyStyle='absolute top-0 left-0 h-full divide-y-2 divide-blue-400 text-center'
              boxCount={6}
              size='w-8'
            >
              <div className='w-full h-2 border-0 bg-white text-lg text-blue-400'></div>
            </SampleBoxs>
          </div>
        </Section>
        <Section title='Color'>
          <SampleColors onCopy={handleCopy} />
        </Section>

        <Section title='Flex Option'>
          <SampleFlexBoxs
            onCopy={handleCopy}
            className='flex flex-row'
            childClasses={['flex-none w-1/5', 'flex-grow', 'flex-none w-1/5']}
          />
        </Section>

        <Section title='Font Family'>
          <SampleFontFamilies onCopy={handleCopy} />
        </Section>
        <Section title='Font Size'>
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
        </Section>
        <Section title='Font Weight'>
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
        </Section>
        <Section title='Rounded'>
          <SampleFontStyles
            onCopy={handleCopy}
            styleItems={[
              'rounded-none',
              'rounded-sm',
              'rounded',
              'rounded-md',
              'rounded-lg',
              'rounded-xl',
              'rounded-full',
            ]}
            baseStyle='p-2'
          />
        </Section>
        <Section title='Border'>
          <SampleFontStyles
            onCopy={handleCopy}
            styleItems={[
              'border-0',
              'border',
              'border-2',
              'border-4',
              'border-8',
            ]}
            baseStyle='p-2'
          />
        </Section>
        <Section title='Border Style'>
          <SampleFontStyles
            onCopy={handleCopy}
            styleItems={[
              'border-solid',
              'border-dashed',
              'border-dotted',
              'border-double',
              'border-none',
            ]}
            baseStyle='p-2 border-2'
          />
        </Section>
        <Section title='Text Align'>
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
        </Section>
        <Section title='Shadow'>
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
        </Section>
        <Popup comment={comment} />
      </div>
    </div>
  );
};

export const getStaticProps: GetStaticProps = async (context) => {
  return {
    props: {},
  };
};

export default Home;
