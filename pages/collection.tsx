import React from "react";
import { NextPage } from "next";
import Head from "next/head";
import "animate.css"


import Footer from "../components/Footer";
import Toolbar from "../components/Toolbar";
import landsJson from "../components/lands.json"
import LandCard from "../components/LandCard";


const FAQPage: NextPage = () => {
    return (
        <>
            <Head>
                <title>MGH - Collection</title>
                <meta name="description" content="Governance of metaverse related items, fair valuation and minting of NFT backed tokens and provision of metaverse market data." />
            </Head>

            <main className="flex flex-col items-center">
                <Toolbar dark={true} />

                <div className="flex flex-col items-center p-8 sm:p-10 w-full 2xl:max-w-screen-2xl">
                    <h1 className="text-5xl sm:text-7xl py-2 font-bold text-transparent bg-clip-text bg-gradient-to-b z-10 from-green-200 to-green-500 text-center m-20 mt-20 lg:mt-32">LANDs</h1>

                    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 place-content-start gap-5 w-full min-h-screen pb-20">
                        {landsJson.map((element, key) => {
                            return (
                                <LandCard key={key} classes="" img={element.image} title={element.title} link={element.link} />
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
