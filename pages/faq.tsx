import React from "react";
import { NextPage } from "next";
import Head from "next/head";
import "animate.css"


import Footer from "../components/Footer";
import Toolbar from "../components/Toolbar";
import Question from "../components/Question";
import faqJson from "../components/faq.json"


const FAQPage: NextPage = () => {
  return (
    <>
      <Head>
        <title>MGH - FAQ</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className="flex flex-col items-center bg-gray-100">
        <Toolbar dark={false} />

        <div className="flex flex-col items-center text-black opacity-90 p-2 sm:p-10 w-full 2xl:max-w-screen-2xl">
          <h1 className="text-5xl md:text-7xl py-2 font-bold text-transparent bg-clip-text bg-gradient-to-r z-10 from-green-500 to-yellow-500 text-center m-20">Any Questions?</h1>

          <div className="flex flex-col divide-y divide-gray-300 w-full lg:w-3/5 items-center min-h-screen pb-10">

            {faqJson.map((element, key) => {
              return (
                <Question key={key} question={element.question} answer={element.answer} />
              );
            })}

          </div>

        </div>

      </main>

      <Footer />


    </>
  )
};

export default FAQPage;
