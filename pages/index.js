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
      <main className=" lg:[100vh] overflow-hidden">
        <div className="container md:mx-auto mx-3">
          <Hero />
        </div>
      </main>
    </>
  );
};

export default index;
