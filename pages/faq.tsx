import React from "react";
import { NextPage } from "next";
import Head from "next/head";

import faqJson from "../data/faq.json"

import Footer from "../components/general/Footer";
import Toolbar from "../components/general/Toolbar";
import Question from "../components/section-element/Question";


const FAQPage: NextPage = () => {
  return (
    <>
      <Head>
        <title>MGH - FAQ</title>
        <meta name="description" content="Any questions regarding the MetaGameHub DAO? You will find the answer here!" />
      </Head>
      <Toolbar dark={false} />

      <main className="flex flex-col items-center bg-gray-100 pt-28 lg:pt-48 pb-20">

        <div className="flex flex-col items-center text-black opacity-90 px-2 sm:px-10 w-full max-w-screen-2xl">
          <h1 className="text-transparent bg-clip-text bg-gradient-to-br from-green-500 to-yellow-500 text-center mb-10 sm:mb-20">Any Questions?</h1>

          <div className="flex flex-col divide-y divide-gray-300 w-full lg:w-3/5 items-center min-h-screen">

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
