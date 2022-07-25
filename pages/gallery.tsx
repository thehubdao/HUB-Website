import React from "react";
import { NextPage } from "next";
import Head from "next/head";

import Footer from "../components/general/Footer";
import Toolbar from "../components/general/Toolbar";
import MetaFi from "../components/section/MetaFi";
import Dataverse from "../components/section/Dataverse";


const GalleryPage: NextPage = () => {

    return (
        <>
            <Head>
                <title>MGH - Metaverse Gallery</title>
                <meta name="description" content="Governance of metaverse related items, fair valuation and minting of NFT backed tokens and provision of metaverse market data." />
            </Head>
            <Toolbar dark={true} />

            <main className="flex flex-col items-center text-gray-200 pt-28 lg:pt-48 w-full bg-[#111111]">

                <div className="flex flex-col items-center space-y-44 w-full 2xl:max-w-screen-2xl px-5 sm:px-10">

                    <h1 className="text-gray-200">MGH METAVERSE GALLERY</h1>

                    <div className="flex flex-col lg:flex-row space-y-5 lg:space-y-0 w-full items-stretch">
                        <div className="relative flex items-end w-full lg:w-1/3 backdrop-blur-lg -mr-10 z-10 pr-10 rounded min-w-[30%] min-h-96">
                            <h3 className="font-normal text-blue-500">THE<br />SNADBOX</h3>
                            <img src="/images/Logos/Cryptos/webp/SAND.webp" className="absolute top-0 right-0 lg:left-0 h-full lg:h-2/3 grayscale opacity-10" />
                        </div>
                        <div className=" flex space-x-5 overflow-x-auto no-scroll-bar snap-x snap-mandatory">
                            <img src="/images/Gallery/Sandbox/1.png" className="lg:h-72 w-5/6 lg:w-full h-auto object-cover snap-center snap-always rounded" />
                            <img src="/images/Gallery/Sandbox/2.png" className="lg:h-72 w-5/6 lg:w-full h-auto object-cover snap-center snap-always rounded" />
                            <img src="/images/Gallery/Sandbox/3.png" className="lg:h-72 w-5/6 lg:w-full h-auto object-cover snap-center snap-always rounded" />
                            <img src="/images/Gallery/Sandbox/5.png.webp" className="lg:h-72 w-5/6 lg:w-full h-auto object-cover snap-center snap-always rounded" />
                            <img src="/images/Gallery/Sandbox/6.png.webp" className="lg:h-72 w-5/6 lg:w-full h-auto object-cover snap-center snap-always rounded" />
                            <img src="/images/Gallery/Sandbox/7.png.webp" className="lg:h-72 w-5/6 lg:w-full h-auto object-cover snap-center snap-always rounded" />
                            <img src="/images/Gallery/Sandbox/8.webp" className="lg:h-72 w-5/6 lg:w-full h-auto object-cover snap-center snap-always rounded" />
                            <img src="/images/Gallery/Sandbox/9.png" className="lg:h-72 w-5/6 lg:w-full h-auto object-cover snap-center snap-always rounded" />
                            <img src="/images/Gallery/Sandbox/10.webp" className="lg:h-72 w-5/6 lg:w-full h-auto object-cover snap-center snap-always rounded" />
                            <img src="/images/Gallery/Sandbox/11.png.webp" className="lg:h-72 w-5/6 lg:w-full h-auto object-cover snap-center snap-always rounded" />
                            <img src="/images/Gallery/Sandbox/12.png.webp" className="lg:h-72 w-5/6 lg:w-full h-auto object-cover snap-center snap-always rounded" />
                            <img src="/images/Gallery/Sandbox/13.png.webp" className="lg:h-72 w-5/6 lg:w-full h-auto object-cover snap-center snap-always rounded" />
                            <img src="/images/Gallery/Sandbox/14.png.webp" className="lg:h-72 w-5/6 lg:w-full h-auto object-cover snap-center snap-always rounded" />
                            <img src="/images/Gallery/Sandbox/15.png.webp" className="lg:h-72 w-5/6 lg:w-full h-auto object-cover snap-center snap-always rounded" />
                            <img src="/images/Gallery/Sandbox/16.png.webp" className="lg:h-72 w-5/6 lg:w-full h-auto object-cover snap-center snap-always rounded" />
                            <img src="/images/Gallery/Sandbox/17.png.webp" className="lg:h-72 w-5/6 lg:w-full h-auto object-cover snap-center snap-always rounded" />
                            <img src="/images/Gallery/Sandbox/18.png.webp" className="lg:h-72 w-5/6 lg:w-full h-auto object-cover snap-center snap-always rounded" />
                            <img src="/images/Gallery/Sandbox/19.png.webp" className="lg:h-72 w-5/6 lg:w-full h-auto object-cover snap-center snap-always rounded" />
                            <img src="/images/Gallery/Sandbox/20.png.webp" className="lg:h-72 w-5/6 lg:w-full h-auto object-cover snap-center snap-always rounded" />
                        </div>
                        <div className="flex items-center w-72 backdrop-blur-lg -ml-5 z-10 rounded" />
                    </div>

                    <div className="flex flex-col lg:flex-row space-y-5 lg:space-y-0 w-full items-stretch">
                        <div className="relative flex items-end w-full lg:w-1/3 backdrop-blur-lg -mr-10 z-10 pr-10 rounded min-w-[30%] min-h-96">
                            <h3 className="font-normal text-red-500">DECENTRALAND</h3>
                            <img src="/images/Logos/Cryptos/webp/MANA.webp" className="absolute top-0 right-0 lg:left-0 h-full lg:h-2/3 grayscale opacity-10" />
                        </div>
                        <div className=" flex space-x-5 overflow-x-auto no-scroll-bar snap-x snap-mandatory">
                            <img src="/images/Gallery/Decentraland/1.jpg.webp" className="lg:h-72 w-5/6 lg:w-full h-auto object-cover snap-center snap-always rounded" />
                            <img src="/images/Gallery/Decentraland/2.jpg.webp" className="lg:h-72 w-5/6 lg:w-full h-auto object-cover snap-center snap-always rounded" />
                            <img src="/images/Gallery/Decentraland/3.jpg.webp" className="lg:h-72 w-5/6 lg:w-full h-auto object-cover snap-center snap-always rounded" />
                            <img src="/images/Gallery/Decentraland/4.jpg.webp" className="lg:h-72 w-5/6 lg:w-full h-auto object-cover snap-center snap-always rounded" />
                            <img src="/images/Gallery/Decentraland/5.jpg.webp" className="lg:h-72 w-5/6 lg:w-full h-auto object-cover snap-center snap-always rounded" />
                            <img src="/images/Gallery/Decentraland/6.jpg.webp" className="lg:h-72 w-5/6 lg:w-full h-auto object-cover snap-center snap-always rounded" />
                            <img src="/images/Gallery/Decentraland/7.jpg.webp" className="lg:h-72 w-5/6 lg:w-full h-auto object-cover snap-center snap-always rounded" />
                            <img src="/images/Gallery/Decentraland/8.jpg.webp" className="lg:h-72 w-5/6 lg:w-full h-auto object-cover snap-center snap-always rounded" />
                            <img src="/images/Gallery/Decentraland/9.jpg.webp" className="lg:h-72 w-5/6 lg:w-full h-auto object-cover snap-center snap-always rounded" />
                            <img src="/images/Gallery/Decentraland/10.jpg.webp" className="lg:h-72 w-5/6 lg:w-full h-auto object-cover snap-center snap-always rounded" />
                            <img src="/images/Gallery/Decentraland/11.jpg.webp" className="lg:h-72 w-5/6 lg:w-full h-auto object-cover snap-center snap-always rounded" />
                            <img src="/images/Gallery/Decentraland/12.jpg.webp" className="lg:h-72 w-5/6 lg:w-full h-auto object-cover snap-center snap-always rounded" />

                        </div>
                        <div className="flex items-center w-44 backdrop-blur-lg -ml-5 z-10 rounded" />
                    </div>

                    <div className="flex flex-col lg:flex-row space-y-5 lg:space-y-0 w-full items-stretch">
                        <div className="relative flex flex-col sm:flex-row sm:items-end w-full lg:w-1/3 backdrop-blur-lg -mr-10 z-10 pr-10 rounded min-w-[30%] min-h-96">
                            <h3 className="font-normal text-white">SOMINIUM<br />SPACE</h3>
                            <img src="/images/Logos/webp/somnium-space-logo.webp" className="relative sm:absolute top-0 right-0 lg:left-0 max-h-24 sm:max-h-full sm:h-full lg:h-1/2 grayscale opacity-10" />
                        </div>
                        <div className=" flex space-x-5 overflow-x-auto no-scroll-bar snap-x snap-mandatory">
                            <img src="/images/Gallery/SomniumSpace/1.png.webp" className="lg:h-72 w-5/6 lg:w-full h-auto object-cover snap-center snap-always rounded" />
                            <img src="/images/Gallery/SomniumSpace/2.png.webp" className="lg:h-72 w-5/6 lg:w-full h-auto object-cover snap-center snap-always rounded" />
                            <img src="/images/Gallery/SomniumSpace/3.png.webp" className="lg:h-72 w-5/6 lg:w-full h-auto object-cover snap-center snap-always rounded" />
                            <img src="/images/Gallery/SomniumSpace/4.png.webp" className="lg:h-72 w-5/6 lg:w-full h-auto object-cover snap-center snap-always rounded" />
                            <img src="/images/Gallery/SomniumSpace/5.png.webp" className="lg:h-72 w-5/6 lg:w-full h-auto object-cover snap-center snap-always rounded" />
                            <img src="/images/Gallery/SomniumSpace/6.png.webp" className="lg:h-72 w-5/6 lg:w-full h-auto object-cover snap-center snap-always rounded" />
                            <img src="/images/Gallery/SomniumSpace/7.png.webp" className="lg:h-72 w-5/6 lg:w-full h-auto object-cover snap-center snap-always rounded" />
                            <img src="/images/Gallery/SomniumSpace/8.png.webp" className="lg:h-72 w-5/6 lg:w-full h-auto object-cover snap-center snap-always rounded" />
                            <img src="/images/Gallery/SomniumSpace/9.png.webp" className="lg:h-72 w-5/6 lg:w-full h-auto object-cover snap-center snap-always rounded" />

                        </div>
                        <div className="flex items-center w-44 backdrop-blur-lg -ml-5 z-10 rounded" />
                    </div>

                </div>
            </main>

            <Footer />


        </>
    )
};


export default GalleryPage;
