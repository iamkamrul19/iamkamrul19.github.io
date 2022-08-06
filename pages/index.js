import Head from "next/head";
import React from "react";
import Hero from "../components/Hero/Hero";
const index = () => {
  return (
    <>
      <Head>
        <title>Home</title>
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
      </Head>
      <main>
        <Hero />
      </main>
    </>
  );
};

export default index;
