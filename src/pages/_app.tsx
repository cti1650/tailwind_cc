import 'tailwindcss/tailwind.css';

import React from 'react';
import App, { AppProps } from 'next/app';
import Layout from '@comp/layout/layout';
import Head from 'next/head';
import { usePageView } from '@hooks/usePageView';

const TailwindApp = (props: AppProps) => {
  const { Component, pageProps } = props;
  usePageView();
  return (
    <Layout>
      <Head>
        <title>Tailwind CC</title>
        <link rel='icon' href='/icon/tailwind_cc-128x128.ico' />
        <meta name='viewport' content='user-scalable=no' />
        <meta
          name='viewport'
          content='width=device-width,initial-scale=1.0,minimum-scale=1.0'
        ></meta>
        <meta
          name='description'
          content='Tailwind.cssを使ったレイアウトの方法や文字など見た目を確認しながらclassをコピペできるようにしたチートシートです！'
        />
        <meta name='keywords' content='HTML,CSS,Tailwind.css'></meta>
        <meta property='og:title' content='Tailwind CC' />
        <meta
          property='og:description'
          content='Tailwind.cssを使ったレイアウトの方法や文字など見た目を確認しながらclassをコピペできるようにしたチートシートです！'
        />
        <meta property='og:type' content='website' />
        <meta property='og:url' content='https://tailwind-cc.vercel.app/' />
        <meta property='og:image' content='/icon/tailwind_cc-128x128.ico' />
        <meta property='og:site_name' content='Tailwind CC' />
        <meta property='og:locale' content='ja_JP' />
      </Head>
      <Component {...pageProps} />
    </Layout>
  );
};

export default TailwindApp;
