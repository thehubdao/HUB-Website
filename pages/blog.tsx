import React from "react";
import { NextPage } from "next";
import Head from "next/head";

import Footer from "../components/Footer";


const BlogPage: NextPage = () => {
  return (
    <>
      <Head>
        <title>MGH - Blog</title>
        <link rel="icon" href="/favicon.ico" />
        <meta name="description" content="Stay on point about news, public launch, NFT drops and more." />
      </Head>

      <main className="flex flex-col items-center bg-white h-screen">

        <div className="text-gray-200 p-10 max-w-full 2xl:max-w-screen-2xl">
          <h1 className="text-5xl md:text-7xl font-bold mb-10 text-black text-center">Cooming soon!</h1>

        </div>

      </main>

      <Footer />


    </>
  )
};

export default BlogPage;
