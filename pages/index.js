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

    <h1>Tailwind CC</h1>
    <div className="w-full text-gray-900 p-4">
      <SampleBox className="flex justify-center items-center" />
    </div>
  </div>
);

export default Home;
