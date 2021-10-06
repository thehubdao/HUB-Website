import React from "react";
import { NextPage } from "next";
import Head from "next/head";

import { AiOutlineMinus, AiOutlinePlus } from "react-icons/ai"

import Footer from "../components/Footer";
import Toolbar from "../components/Toolbar";


const FAQPage: NextPage = () => {
  return (
    <>
      <Head>
        <title>MGH - FAQ</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className="flex flex-col items-center h-screen">
        <Toolbar />

        <div className="flex flex-col items-center text-gray-200 p-10 w-full 2xl:max-w-screen-2xl">
          <h1 className="text-5xl md:text-7xl font-bold text-gray-200 text-center m-20">Cooming soon!</h1>
          {/* <div className="tab border">
            <input type="checkbox" id="chck1" className="appearance-none w-6 h-6 border bg-white peer checked:bg-blue-600" />
            <p className="tab-label peer-checked:bg-blue-500 bg-red-500"  >Item 1</p>
            <div className="hidden peer-checked:block">
              Lorem ipsum dolor sit amet consectetur, adipisicing elit.Ipsum, reiciendis!
            </div>
          </div> */}

          {/* <div className="flex flex-col divide-y divide-gray-200 w-full items-center min-h-screen border">

            <div className=" p-3 cursor-pointer w-1/2 select-none">
              <label className=" cursor-pointer grid grid-cols-12 place-items-center">
                <input type="checkbox" className="hidden peer" />

                <AiOutlinePlus className="block text-gray-200 text-3xl peer-checked:hidden" />

                <AiOutlineMinus className=" text-gray-200 text-3xl hidden peer-checked:block max-w-min peer-checked:mb-3" />

                <p className=" font-medium text-2xl peer-checked:mb-3 ml-3 col-span-11">Who owns the IP? yijsdfj sdofjsdöfjoi aäoj or research teams)?</p>

                <div className="hidden peer-checked:block text-gray-400 col-span-full">
                  Lorem ipsum dolor sit amet consectetur, adipisicing elit.Ipsum, reiciendis!
                </div>
              </label>
            </div>

          </div> */}

        </div>

      </main>

      <Footer />


    </>
  )
};

export default FAQPage;
