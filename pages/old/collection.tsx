import React from "react";
import { NextPage } from "next";
import Head from "next/head";
import "animate.css"


import Footer from "../../components/general/Footer";
import Toolbar from "../../components/general/Toolbar";
import landsJson from "../../data/lands.json"
import assetsJson from "../../data/assets.json"
import LandCard from "../../components/section-element/LandCard";
import AssetCard from "../../components/section-element/AssetCard";


const LandPage: NextPage = () => {
    return (
        <>
            <Head>
                <title>MGH - Collection</title>
                <meta name="description" content="Governance of metaverse related items, fair valuation and minting of NFT backed tokens and provision of metaverse market data." />
            </Head>

            <main className="flex flex-col items-center">
                <Toolbar dark={true} />

                <div className="flex flex-col items-center p-8 sm:p-10 w-full 2xl:max-w-screen-2xl">
                    <h1 className="text-transparent bg-clip-text bg-gradient-to-b from-green-200 to-green-500 text-center mt-20 lg:mt-32">LANDs</h1>
                    <p className={`text-lg lg:text-2xl font-medium text-gray-200 text-center`}>Community developed & curated </p>

                    <div className="flex space-x-4 mt-5 mb-20">
                        <a href="https://opensea.io/0x2a9da28bcbf97a8c008fd211f5127b860613922d" target="_blank" className="button mt-5">
                            <p className="button-text">Visit on Opensea</p>
                        </a>
                        <a href="https://app.metagamehub.io/valuation" target="_blank" className="button mt-5 bg-white bg-opacity-20">
                            <p className="button-text">LAND Valuation</p>
                        </a>
                    </div>


                    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 place-content-start gap-5 w-full min-h-screen pb-20">
                        {landsJson.map((element, key) => {
                            return (
                                <LandCard key={key} classes="" img={element.image} title={element.title} link={element.link} metaverse={element.metaverse} />
                            );
                        })}
                    </div>

                    <h2 className="text-gray-400 self-start my-5">Assets</h2>

                    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 place-content-start gap-5 w-full pb-20">
                        {assetsJson.map((element, key) => {
                            return (
                                <AssetCard key={key} classes="" img={element.image} title={element.title} link={element.link} metaverse={element.metaverse} />
                            );
                        })}
                    </div>

                </div>

            </main>

            <Footer />


        </>
    )
};

export default LandPage;
