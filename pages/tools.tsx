import React from "react";
import { NextPage } from "next";
import Head from "next/head";

import Footer from "../components/general/Footer";
import Toolbar from "../components/general/Toolbar";
import MetaFi from "../components/section/MetaFi";
import Dataverse from "../components/section/Dataverse";


const TokenPage: NextPage = () => {

    return (
        <>
            <Head>
                <title>MGH - Metaverse Tools</title>
                <meta name="description" content="Governance of metaverse related items, fair valuation and minting of NFT backed tokens and provision of metaverse market data." />
            </Head>
            <Toolbar dark={true} />

            <main className="flex flex-col items-center text-gray-200 select-none p-10 pt-64 w-full">

                <div className="flex flex-col space-y-44 w-full 2xl:max-w-screen-2xl">

                    <div className="flex items-center space-x-10 w-full pb-20">
                        <h1 className="text-transparent bg-clip-text bg-gradient-to-b from-blue-500 to-pink-600 font-normal">We provide you with all the tools to have a seamless metaverse experience!</h1>
                    </div>

                    <Dataverse />
                    <MetaFi />

                </div>
            </main>

            <Footer />


        </>
    )
};


export default TokenPage;
