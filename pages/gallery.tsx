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
            "https://mgh-webside-assets.s3.eu-central-1.amazonaws.com/Images/Gallery/Sandbox/1.png",
            "https://mgh-webside-assets.s3.eu-central-1.amazonaws.com/Images/Gallery/Sandbox/2.png",
            "https://mgh-webside-assets.s3.eu-central-1.amazonaws.com/Images/Gallery/Sandbox/3.png",
            "https://mgh-webside-assets.s3.eu-central-1.amazonaws.com/Images/Gallery/Sandbox/4.png.webp",
            "https://mgh-webside-assets.s3.eu-central-1.amazonaws.com/Images/Gallery/Sandbox/5.png.webp",
            "https://mgh-webside-assets.s3.eu-central-1.amazonaws.com/Images/Gallery/Sandbox/6.png.webp",
            "https://mgh-webside-assets.s3.eu-central-1.amazonaws.com/Images/Gallery/Sandbox/7.png.webp",
            "https://mgh-webside-assets.s3.eu-central-1.amazonaws.com/Images/Gallery/Sandbox/8.webp",
            "https://mgh-webside-assets.s3.eu-central-1.amazonaws.com/Images/Gallery/Sandbox/9.png",
            "https://mgh-webside-assets.s3.eu-central-1.amazonaws.com/Images/Gallery/Sandbox/10.webp",
            "https://mgh-webside-assets.s3.eu-central-1.amazonaws.com/Images/Gallery/Sandbox/11.png.webp",
            "https://mgh-webside-assets.s3.eu-central-1.amazonaws.com/Images/Gallery/Sandbox/12.png.webp",
            "https://mgh-webside-assets.s3.eu-central-1.amazonaws.com/Images/Gallery/Sandbox/13.png.webp",
            "https://mgh-webside-assets.s3.eu-central-1.amazonaws.com/Images/Gallery/Sandbox/14.png.webp",
            "https://mgh-webside-assets.s3.eu-central-1.amazonaws.com/Images/Gallery/Sandbox/15.png.webp",
            "https://mgh-webside-assets.s3.eu-central-1.amazonaws.com/Images/Gallery/Sandbox/16.png.webp",
            "https://mgh-webside-assets.s3.eu-central-1.amazonaws.com/Images/Gallery/Sandbox/17.png.webp",
            "https://mgh-webside-assets.s3.eu-central-1.amazonaws.com/Images/Gallery/Sandbox/18.png.webp",
            "https://mgh-webside-assets.s3.eu-central-1.amazonaws.com/Images/Gallery/Sandbox/19.png.webp",
            "https://mgh-webside-assets.s3.eu-central-1.amazonaws.com/Images/Gallery/Sandbox/20.png.webp",
        ]
    }

    const Decentraland = {
        title: "Decentraland",
        images: [
            "https://mgh-webside-assets.s3.eu-central-1.amazonaws.com/Images/Gallery/Decentraland/1.jpg.webp",
            "https://mgh-webside-assets.s3.eu-central-1.amazonaws.com/Images/Gallery/Decentraland/2.jpg.webp",
            "https://mgh-webside-assets.s3.eu-central-1.amazonaws.com/Images/Gallery/Decentraland/3.jpg.webp",
            "https://mgh-webside-assets.s3.eu-central-1.amazonaws.com/Images/Gallery/Decentraland/4.jpg.webp",
            "https://mgh-webside-assets.s3.eu-central-1.amazonaws.com/Images/Gallery/Decentraland/5.jpg.webp",
            "https://mgh-webside-assets.s3.eu-central-1.amazonaws.com/Images/Gallery/Decentraland/6.jpg.webp",
            "https://mgh-webside-assets.s3.eu-central-1.amazonaws.com/Images/Gallery/Decentraland/7.jpg.webp",
            "https://mgh-webside-assets.s3.eu-central-1.amazonaws.com/Images/Gallery/Decentraland/8.jpg.webp",
            "https://mgh-webside-assets.s3.eu-central-1.amazonaws.com/Images/Gallery/Decentraland/9.jpg.webp",
            "https://mgh-webside-assets.s3.eu-central-1.amazonaws.com/Images/Gallery/Decentraland/10.jpg.webp",
            "https://mgh-webside-assets.s3.eu-central-1.amazonaws.com/Images/Gallery/Decentraland/11.jpg.webp",
            "https://mgh-webside-assets.s3.eu-central-1.amazonaws.com/Images/Gallery/Decentraland/12.jpg.webp",
        ]
    }

    const SomniumSpace = {
        title: "Somnium Space",
        images: [
            "https://mgh-webside-assets.s3.eu-central-1.amazonaws.com/Images/Gallery/SomniumSpace/1.png.webp",
            "https://mgh-webside-assets.s3.eu-central-1.amazonaws.com/Images/Gallery/SomniumSpace/2.png.webp",
            "https://mgh-webside-assets.s3.eu-central-1.amazonaws.com/Images/Gallery/SomniumSpace/3.png.webp",
            "https://mgh-webside-assets.s3.eu-central-1.amazonaws.com/Images/Gallery/SomniumSpace/4.png.webp",
            "https://mgh-webside-assets.s3.eu-central-1.amazonaws.com/Images/Gallery/SomniumSpace/5.png.webp",
            "https://mgh-webside-assets.s3.eu-central-1.amazonaws.com/Images/Gallery/SomniumSpace/6.png.webp",
            "https://mgh-webside-assets.s3.eu-central-1.amazonaws.com/Images/Gallery/SomniumSpace/7.png.webp",
            "https://mgh-webside-assets.s3.eu-central-1.amazonaws.com/Images/Gallery/SomniumSpace/8.png.webp",
            "https://mgh-webside-assets.s3.eu-central-1.amazonaws.com/Images/Gallery/SomniumSpace/9.png.webp",
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
