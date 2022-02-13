import React from "react";
import { NextPage } from "next";
import Head from "next/head";

import wgJSON from "../data/workingGroups.json"

import Footer from "../components/general/Footer";
import Toolbar from "../components/general/Toolbar";
import Button from "../components/elements/Button";
import WorkingGroupCard from "../components/section-element/WorkingGroupCard";


const ContributePage: NextPage = () => {
    return (
        <>
            <Head>
                <title>MGH - Working Groups</title>
                <meta name="description" content="Governance of metaverse related items, fair valuation and minting of NFT backed tokens and provision of metaverse market data." />
            </Head>
            <Toolbar dark={true} />

            <main className="flex flex-col items-center text-gray-200 select-none pt-28 lg:pt-48 w-full">

                <div className="flex flex-col items-center w-full max-w-screen-2xl px-5 sm:px-10">

                    <div className="flex flex-col lg:flex-row justify-between items-center space-x-0 lg:space-x-10 space-y-10 lg:space-y-0 w-full mb-10">

                        <h1 className="text-transparent bg-clip-text bg-gradient-to-b from-blue-500 via-pink-500 to-pink-600 font-normal max-w-full lg:max-w-min text-center lg:text-left">Working Groups</h1>

                        <div className="flex flex-col items-center space-y-10 w-full lg:w-1/2">
                            <p className={`text-base lg:text-lg text-center max-w-2xl`}>MGH is a Decentralized Autonomous Organization, which means that MGH is community-driven. Implementing the MGH working groups is a huge step towards more contributions from the community side and from everyone who is interested in contributing to MGH’s ecosystem by earning rewards in form of MGH tokens. At MGH, we envision working groups of the next generation of employment and are looking very forward to your application. Visit the <a href="https://www.notion.so/13613b99202d4829865e3e199490e8cf?v=f1d9d6776ed64cfbaac6959ce7fb1a67" target="_blank" className={`text-pink-600`}>Operations Board</a> of the working groups to learn more about what MGH DAO is working on.</p>
                            <Button text="Apply" link="https://forms.gle/QCf3hYRR9dn7Ztzj7" />
                        </div>

                    </div>

                    <div className="flex overflow-x-auto pt-32 pb-16 no-scroll-bar max-w-full">

                        {wgJSON.map((element, key) => {
                            return (
                                <WorkingGroupCard key={key} title={element.title} description={element.description} />
                            );
                        })}
                    </div>

                    <Button text="Apply" link="https://forms.gle/QCf3hYRR9dn7Ztzj7" />

                </div>

            </main>

            <Footer />
        </>
    )
};

export default ContributePage;
