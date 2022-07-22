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

            <main className="flex flex-col items-center text-gray-200 pt-28 lg:pt-48 w-full bg-[#111111]">

                <div className="flex flex-col items-center w-full max-w-screen-lg px-10 sm:px-10">

                    <div className="flex flex-col lg:items-center space-x-0 space-y-10 w-full mb-10">

                        <div className="block">
                            <h1 className="text-gray-200 font-normal max-w-full text-center text-15/2xl sm:text-16/2xl md:text-17/2xl pb-0">WORKING</h1>
                            <h2 className="text-pink-500 text-center pt-0 text-6xl sm:text-8xl md:text-9xl">GROUPS</h2>
                        </div>
                        <div className="flex flex-col relative text-center max-w-full p-10 items-center rounded-xl bg-[#292929]  border-transparent border-opacity-5 ">
                            <p className={`text-sm text-center max-w-xl mb-6`}>MGH is a Decentralized Autonomous Organization, which means that MGH is community-driven. Implementing the MGH working groups is a huge step towards more contributions from the community side and from everyone who is interested in contributing to MGH’s ecosystem by earning rewards in form of MGH tokens. At MGH, we envision working groups of the next generation of employment and are looking very forward to your application. Visit the <a href="https://www.notion.so/13613b99202d4829865e3e199490e8cf?v=f1d9d6776ed64cfbaac6959ce7fb1a67" target="_blank" className={`text-pink-600`}>Operations Board</a> of the working groups to learn more about what MGH DAO is working on.</p>
                            <div className="flex items-center space-x-0 sm:space-x-10 flex-col sm:flex-row">
                                <Button classes="text-sm" text="Apply" link="https://forms.gle/QCf3hYRR9dn7Ztzj7" />
                                <Button classes="text-sm" text="Learn more" link="https://docs.metagamehub.io/governance/bounties/team-definition/working-group-wg" />
                            </div>
                        </div>

                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 mb-5 mt-20">

                        {wgJSON.map((element, key) => {
                            return (
                                <WorkingGroupCard key={key} title={element.title} description={element.description} />
                            );
                        })}


                    </div>


                    <div className="items-center space-y-6 flex-col sm:flex-row">
                        <Button classes="text-sm" text="Apply" link="https://forms.gle/QCf3hYRR9dn7Ztzj7" />
                        <Button classes="text-sm" text="Learn more" link="https://docs.metagamehub.io/governance/bounties/team-definition/working-group-wg" />
                    </div>
                </div>
            </main>
            <Footer />
        </>
    )
};

export default ContributePage;
