import React from "react";
import Head from "next/head";
import Nav from "../components/nav";
import { SampleBox } from "../components/parts/sample";

const Home = () => (
  <div className="text-sans">
    <Head>
      <title>Tailwind CC</title>
      <link rel="icon" href="/favicon.ico" />
    </Head>

    <div className="w-full text-center text-lg font-bold">Tailwind CC</div>
    <div className="w-full text-gray-900 p-4">
      <div className="flex flex-row flex-wrap justify-center items-center">
        <SampleBox className="flex justify-center items-center" />
        <SampleBox className="flex justify-center items-center" />
        <SampleBox className="flex justify-center items-center" />
        <SampleBox className="flex justify-center items-center" />
        <SampleBox className="flex justify-center items-center" />
        <SampleBox className="flex justify-center items-center" />
        <SampleBox className="flex justify-center items-center" />
        <SampleBox className="flex justify-center items-center" />
      </div>
    </div>
  </div>
);

export default Home;
