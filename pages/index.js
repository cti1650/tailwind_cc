import React from "react";
import Head from "next/head";
import Nav from "../components/nav";
import { SampleBox, SampleBoxs, SampleItem,SampleColors,SampleFontFamilies,SampleFontStyles } from "../components/parts/sample";
import { PageLink } from "../components/links/link";
import Link from "next/link";

const Home = () => {
  const links = [
    {href:"https://tailwindcss.com/",title:"Tailwind.css"},
    {href:"https://play.tailwindcss.com/f91h03y87s",title:"Tailwind Play"},
    {href:"https://umeshmk.github.io/Tailwindcss-cheatsheet/",title:"Tailwindcss cheatsheet v-2.0"},
    {href:"https://zenn.dev/junki555/articles/45614f64695b77a2ae78",title:"TailwindCSS で モバイル縦画面表示時のみ消える要素を作る"},
    {href:"https://tailwindcomponents.com/cheatsheet/",title:"Tailwind Components cheatsheet"},
    {href:"https://nerdcave.com/tailwind-cheat-sheet",title:"Tailwind-Cheat-Sheet"},
    {href:"https://tailblocks.cc/",title:"Tailblocks"},
    {href:"https://tailwindtemplates.io/",title:"Tailwind Templates"},
    {href:"https://daisyui.com/",title:"Daisy UI"},
    {href:"https://devdojo.com/tailwindcss/buttons",title:"TailwindCSS Buttons"},
    {href:"https://www.creative-tim.com/learning-lab/tailwind-starter-kit/presentation",title:"TAILWIND STARTER KIT"},
    {href:"https://marketplace.visualstudio.com/items?itemName=bradlc.vscode-tailwindcss",title:"Tailwind CSS IntelliSense"},
    {href:"https://chakra-ui.com/",title:"Chakra UI"},
    {href:"https://headlessui.dev/",title:"headless UI"},
  ]
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
        <SampleFontStyles styleItems={['text-xs','text-sm','text-base','text-lg','text-xl','text-2xl','text-3xl','text-4xl','text-5xl','text-6xl']} optionStyle="items-center h-full" />
        <div className="text-lg font-bold pt-4">Font Weight</div>
        <SampleFontStyles styleItems={['font-hairline','font-thin','font-light','font-normal','font-medium','font-semibold','font-bold','font-extrabold','font-black']} optionStyle="items-center h-full" />
        <div className="text-lg font-bold pt-4">Rounded</div>
        <SampleFontStyles styleItems={['rounded-none','rounded-sm','rounded','rounded-md','rounded-lg','rounded-xl','rounded-2xl','rounded-3xl','rounded-full']} optionStyle="p-2" />
        <div className="text-lg font-bold pt-4">Links</div>
        <div className="pl-4 grid grid-cols-3">
          {links.map((link)=>{
            return (<PageLink href={link.href} title={Link.title} />)
          })}
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
