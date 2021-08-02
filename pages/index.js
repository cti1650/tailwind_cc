import React from "react";
import Head from "next/head";
import Nav from "../components/nav";
import { SampleBox, SampleBoxs, SampleItem,tw_colors } from "../components/parts/sample";

const Home = () => {
  const colors = tw_colors();
  return (
    <div className="container max-w-screen-md mx-auto text-sans">
      <Head>
        <title>Tailwind CC</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <div className="w-full text-center text-2xl font-bold">Tailwind CC</div>
      <div className="w-full text-gray-900 p-4">
        <div className="text-lg font-bold">Box</div>
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
        <div className="text-lg font-bold">Color</div>
        <div className="grid grid-cols-10">
          {colors.map((color,index) => {
            return (
                <div key={index} className="h-8 rounded-xl">
                  <SampleItem className={color} />
                </div>
              );
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
