import React from "react";
import Head from "next/head";
import Nav from "../components/nav";
import { SampleBox, SampleBoxs, SampleItem,SampleColors,SampleFontFamilies,SampleFontStyles } from "../components/parts/sample";
import { PageLink } from "../components/links/link";

const Home = () => {
  
  return (
    <div className="container max-w-screen-md mx-auto text-sans">
      <Head>
        <title>Tailwind CC</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <div className="w-full text-center text-2xl font-bold">Tailwind CC</div>
      <div className="w-full text-gray-900 p-4">
        <div className="text-lg font-bold pt-4">Box</div>
        <div className="flex flex-row flex-wrap justify-center items-center">
          <SampleBox className="flex justify-center items-center" />
          <SampleBoxs className="flex justify-center items-center" />
          <SampleBoxs className="flex flex-col" />
          <SampleBoxs className="flex flex-row" />
          <SampleBoxs className="grid grid-cols-1" />
          <SampleBoxs className="grid grid-cols-2" />
          <SampleBoxs className="grid grid-cols-3" />
          <SampleBoxs className="grid grid-cols-4" />
          <SampleBoxs className="grid grid-cols-5" />
        </div>
        <div className="text-lg font-bold pt-4">Color</div>
        <SampleColors />
        <div className="text-lg font-bold pt-4">Font Family</div>
        <SampleFontFamilies />
        <div className="text-lg font-bold pt-4">Font Size</div>
        <SampleFontStyles styleItems={['text-xs','text-sm','text-base','text-lg','text-xl','text-2xl','text-3xl','text-4xl','text-5xl','text-6xl']}/>
        <div className="text-lg font-bold pt-4">Links</div>
        <div className="pl-4 grid grid-cols-3">
          <PageLink href="https://tailwindcss.com/" title="Tailwind.css" />
          <PageLink href="https://play.tailwindcss.com/f91h03y87s" title="Tailwind Play" />
          <PageLink href="https://umeshmk.github.io/Tailwindcss-cheatsheet/" title="Tailwindcss cheatsheet v-2.0" />
          <PageLink href="https://zenn.dev/junki555/articles/45614f64695b77a2ae78" title="TailwindCSS で モバイル縦画面表示時のみ消える要素を作る" />
          <PageLink href="https://tailwindcomponents.com/cheatsheet/" title="Tailwind Components cheatsheet" />
          <PageLink href="https://nerdcave.com/tailwind-cheat-sheet" title="Tailwind-Cheat-Sheet" />
          <PageLink href="https://tailblocks.cc/" title="Tailblocks" />
          <PageLink href="https://tailwindtemplates.io/" title="Tailwind Templates" />
          <PageLink href="https://daisyui.com/" title="Daisy UI" />
          <PageLink href="https://devdojo.com/tailwindcss/buttons" title="TailwindCSS Buttons" />
          <PageLink href="https://www.creative-tim.com/learning-lab/tailwind-starter-kit/presentation" title="TAILWIND STARTER KIT" />
          <PageLink href="https://marketplace.visualstudio.com/items?itemName=bradlc.vscode-tailwindcss" title="Tailwind CSS IntelliSense" />
          <PageLink href="https://chakra-ui.com/" title="Chakra UI" />
          <PageLink href="https://headlessui.dev/" title="headless UI" />
        </div>
        
      </div>
    </div>
  );
};

export async function getStaticProps() {
  return {
    props: {}
  };
}

export default Home;
