import React from "react";
import { NextPage } from "next";
import Head from "next/head";

import Footer from "../components/general/Footer";
import Toolbar from "../components/general/Toolbar";
import CarrouselGallery from "../components/section/CarrouselGallery";


const GalleryPage: NextPage = () => {

    const Sandbox = {
        title: "The Sandbox",
        images: [
            "/images/Gallery/Sandbox/1.png",
            "/images/Gallery/Sandbox/2.png",
            "/images/Gallery/Sandbox/3.png",
            "/images/Gallery/Sandbox/4.png.webp",
            "/images/Gallery/Sandbox/5.png.webp",
            "/images/Gallery/Sandbox/6.png.webp",
            "/images/Gallery/Sandbox/7.png.webp",
            "/images/Gallery/Sandbox/8.webp",
            "/images/Gallery/Sandbox/9.png",
            "/images/Gallery/Sandbox/10.webp",
            "/images/Gallery/Sandbox/11.png.webp",
            "/images/Gallery/Sandbox/12.png.webp",
            "/images/Gallery/Sandbox/13.png.webp",
            "/images/Gallery/Sandbox/14.png.webp",
            "/images/Gallery/Sandbox/15.png.webp",
            "/images/Gallery/Sandbox/16.png.webp",
            "/images/Gallery/Sandbox/17.png.webp",
            "/images/Gallery/Sandbox/18.png.webp",
            "/images/Gallery/Sandbox/19.png.webp",
            "/images/Gallery/Sandbox/20.png.webp",
        ]
    }

    const Decentraland = {
        title: "Decentraland",
        images: [
            "/images/Gallery/Decentraland/1.jpg.webp",
            "/images/Gallery/Decentraland/2.jpg.webp",
            "/images/Gallery/Decentraland/3.jpg.webp",
            "/images/Gallery/Decentraland/4.jpg.webp",
            "/images/Gallery/Decentraland/5.jpg.webp",
            "/images/Gallery/Decentraland/6.jpg.webp",
            "/images/Gallery/Decentraland/7.jpg.webp",
            "/images/Gallery/Decentraland/8.jpg.webp",
            "/images/Gallery/Decentraland/9.jpg.webp",
            "/images/Gallery/Decentraland/10.jpg.webp",
            "/images/Gallery/Decentraland/11.jpg.webp",
            "/images/Gallery/Decentraland/12.jpg.webp",
        ]
    }

    const SomniumSpace = {
        title: "Somnium Space",
        images: [
            "/images/Gallery/SomniumSpace/1.png.webp",
            "/images/Gallery/SomniumSpace/2.png.webp",
            "/images/Gallery/SomniumSpace/3.png.webp",
            "/images/Gallery/SomniumSpace/4.png.webp",
            "/images/Gallery/SomniumSpace/5.png.webp",
            "/images/Gallery/SomniumSpace/6.png.webp",
            "/images/Gallery/SomniumSpace/7.png.webp",
            "/images/Gallery/SomniumSpace/8.png.webp",
            "/images/Gallery/SomniumSpace/9.png.webp",
        ]
    }

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
