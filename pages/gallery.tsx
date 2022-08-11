import React from "react";
import { NextPage } from "next";
import Head from "next/head";

import Footer from "../components/general/Footer";
import Toolbar from "../components/general/Toolbar";
import CarrouselGallery from "../components/section/CarrouselGallery";

//data import
import Sandbox from "../data/Gallery/Sandbox.json"
import Decentraland from "../data/Gallery/Decentraland.json"
import SomniumSpace from "../data/Gallery/SomniumSpace.json"


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

                    <h1 className="text-gray-200 md:text-8xl">
                        MGH<span className="text-pink-reco"> METAVERSE GALLERY</span>
                    </h1>

                    <CarrouselGallery dataCarrousel={Sandbox}/>
                    <CarrouselGallery dataCarrousel={Decentraland}/>
                    <CarrouselGallery dataCarrousel={SomniumSpace} />

                </div>
            </main>

            <Footer />


        </>
    )
};


export default GalleryPage;
