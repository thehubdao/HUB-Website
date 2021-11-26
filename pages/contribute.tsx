import React from "react";
import { NextPage } from "next";
import Head from "next/head";
import "animate.css"


import Footer from "../components/Footer";
import Toolbar from "../components/Toolbar";
import WorkingGroupCard from "../components/WorkingGroupCard";
import wgJSON from "../data/workingGroups.json"



const ContributePage: NextPage = () => {
    return (
        <>
            <Head>
                <title>MGH - Working Groups</title>
                <meta name="description" content="Governance of metaverse related items, fair valuation and minting of NFT backed tokens and provision of metaverse market data." />
            </Head>

            <main className="flex flex-col items-center">
                <Toolbar dark={true} />
                {/* <div className="h-72 w-72 rounded-full border bg-gradient-to-br from-yellow-500 to-blue-600 blur-3xl absolute bottom-0 right-0 opacity-80" /> */}


                <div className="flex flex-col items-center p-4 sm:p-10 w-full 2xl:max-w-screen-2xl z-10">
                    <h1 className="text-transparent bg-clip-text bg-gradient-to-b from-blue-500 to-pink-800 text-center mt-20 lg:mt-32 mb-5">Working Groups</h1>
                    <p className={`text-base lg:text-lg text-grey text-center max-w-5xl px-2`}>MGH is a Decentralized Autonomous Organization, which means that MGH is community-driven. Implementing the MGH working groups is a huge step towards more contributions from the community side and from everyone who is interested in contributing to MGH’s ecosystem by earning rewards in form of MGH tokens. At MGH, we envision working groups of the next generation of employment and are looking very forward to your application.</p>

                    <a href="https://forms.gle/6cN6Dvxumu4Roadq5" target="_blank" className={`relative mt-5 md:mt-10 mb-20 w-52 flex items-center transform scale-75 sm:scale-85 lg:scale-90 xl:scale-100 justify-center cursor-pointer text-gray-200 font-medium text-xl rounded-3xl py-3 px-5 bg-gray-500 bg-opacity-80 group shadow-colorbottom overflow-hidden transition-all ease-in-out duration-500`}>
                        <div className="h-full w-full absolute bg-gradient-to-br from-grey-dark to-grey-darkest rounded-xl blur-none group-hover:blur-md transition-all ease-in-out duration-300" />
                        <span className="pt-1 z-10">Apply</span>
                    </a>

                    <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 justify-items-center gap-10 w-full pb-20 pt-10">

                        {wgJSON.map((element, key) => {
                            return (
                                <WorkingGroupCard key={key} title={element.title} description={element.description} />
                            );
                        })}

                    </div>

                </div>

            </main>

            <Footer />


        </>
    )
};

export default ContributePage;
