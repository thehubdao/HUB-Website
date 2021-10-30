import React, { useState } from "react";
import { NextPage } from "next";
import Head from "next/head";
import "animate.css"
import Image from "next/image";
import { HiOutlineSearch } from "react-icons/hi"
import { BsQuestionCircle } from "react-icons/bs"


import Footer from "../components/Footer";
import Toolbar from "../components/Toolbar";
import PriceCard from "../components/PriceCard";


const ValuationPage: NextPage = ({ prices }: any) => {
    const [ethPrice, setETHPrice] = useState("");
    const [usdPrice, setUSDPrice] = useState("");
    const [sandPrice, setSANDPrice] = useState("");
    const [name, setName] = useState("");
    const [tokenID, setTokenID] = useState("");
    const [imageLink, setImageLink] = useState("");
    const [openseaLink, setOpenseaLink] = useState("");
    const [sandboxLink, setSandboxLink] = useState("");

    const [idProcessing, setIdProcessing] = useState(false);
    const [coordinatesProcessing, setCoordinatesProcessing] = useState(false);
    const [showCard, setShowCard] = useState(false);
    const [idError, setIdError] = useState("");
    const [coordinatesError, setCoordinatesError] = useState("");


    const convertPrices = (eth: number) => {
        const ethUSD = prices.ethereum.usd;
        const sandUSD = prices["the-sandbox"].usd;
        const USDfromETH = Math.round(eth * ethUSD);
        const SANDfromETH = Math.round(USDfromETH / sandUSD);
        return [USDfromETH, SANDfromETH]
    }

    const handleCoordinatesSubmit = async (ev: any) => {
        ev.preventDefault();

        const X = (document.getElementById('X') as HTMLInputElement).value
        const Y = (document.getElementById('Y') as HTMLInputElement).value

        setCoordinatesProcessing(true);
        setUSDPrice("")
        setSANDPrice("")
        setImageLink("")

        try {
            const res = await fetch("/api/getLandData", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json"
                },
                body: JSON.stringify({ X: X, Y: Y })
            });
            const data = await res.json()
            if (data.err) {
                setCoordinatesError("Invalid Coordinates")
                setShowCard(false);
            } else {
                setName(data.name);
                setTokenID(data.tokenId);
                setImageLink(data.images.image_url)
                setOpenseaLink(data.opensea_link)
                setSandboxLink(data.external_link)
                const price = data.prices.predicted_price;
                const [USDfromETH, SANDfromETH] = convertPrices(price)
                setETHPrice(price.toLocaleString({ maximumFractionDigits: 4 }))
                setSANDPrice(SANDfromETH.toLocaleString())
                setUSDPrice(USDfromETH.toLocaleString())
                setShowCard(true);
            }
            setCoordinatesProcessing(false);

        } catch (e) {
            setCoordinatesError("Something went wrong, please try again later");
            setShowCard(false);
            setCoordinatesProcessing(false);
        }

    }

    const handleIDSubmit = async (ev: any) => {
        ev.preventDefault();

        const tokenID = (document.getElementById('tokenID') as HTMLInputElement).value

        setIdProcessing(true);
        setUSDPrice("")
        setSANDPrice("")
        setImageLink("")

        try {
            const res = await fetch("/api/getLandData", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json"
                },
                body: JSON.stringify({ tokenID: tokenID })
            });
            const data = await res.json()
            if (data.err) {
                setIdError("Invalid token ID")
                setShowCard(false);
            } else {
                setName(data.name);
                setTokenID(data.tokenId);
                setImageLink(data.images.image_url)
                setOpenseaLink(data.opensea_link)
                setSandboxLink(data.external_link)
                const price = data.prices.predicted_price;
                const [USDfromETH, SANDfromETH] = convertPrices(price)
                setETHPrice(price.toLocaleString({ maximumFractionDigits: 4 }))
                setSANDPrice(SANDfromETH.toLocaleString())
                setUSDPrice(USDfromETH.toLocaleString())
                setShowCard(true);
            }
            setIdProcessing(false);

        } catch (e) {
            setIdError("Something went wrong, please try again later");
            setShowCard(false);
            setIdProcessing(false);
        }
    }

    return (
        <>
            <Head>
                <title>MGH - LAND valuation</title>
                <meta name="description" content="Governance of metaverse related items, fair valuation and minting of NFT backed tokens and provision of metaverse market data." />
            </Head>

            <main className="flex flex-col items-center pb-20">
                <Toolbar dark={true} />

                <div className="flex flex-col xl:flex-row min-h-screen items-center p-2 xs:p-8 w-full 2xl:max-w-screen-2xl">

                    <div className="z-10 flex flex-col justify-center w-full xl:w-1/2 pr-0 xl:pr-28 text-center xl:text-left items-center xl:items-start mt-32">
                        <h2 className="text-transparent bg-clip-text bg-gradient-to-b from-blue-500 via-green-400 to-green-500">LAND Valuation</h2>
                        <p className={`text-lg xl:text-xl font-medium text-gray-200 mb-10`}>Find the real value of The Sandbox LANDs with our machine learning pricing algorithm.</p>

                        <div className="flex flex-wrap items-center mb-1 pl-2 text-left w-full max-w-sm">
                            <p className="font-medium text-gray-300 pt-1">Find by Token ID</p>
                            <BsQuestionCircle className="text-gray-300 cursor-pointer peer ml-3" />
                            <p className="font-medium text-xs text-gray-400 hidden peer-hover:block mt-2 mb-1">Find LAND on Opensea &gt; Details &gt; Token ID</p>
                        </div>
                        <form onSubmit={handleIDSubmit} onInput={() => { setIdError(""); setCoordinatesError("") }} className="relative flex items-center w-full rounded-xl max-w-sm">
                            <input required id="tokenID" type="text" placeholder="Enter Token ID of LAND" className={`bg-transparent w-full text-white font-bold py-4 px-4 focus:outline-none border ${idError ? "border-red-500 border-opacity-100" : "border-opacity-40 "} hover:border-opacity-100 focus:border-opacity-100 transition duration-300 ease-in-out rounded-xl placeholder-white placeholder-opacity-75`} />
                            
                            <button type="submit" className="absolute flex items-center justify-around bg-gray-200 hover:bg-white transition ease-in-out duration-500 right-0 h-4/5 rounded-lg mr-1.5 w-12 xs:w-28">
                                <svg className={`${idProcessing ? "block" : "hidden"} animate-spin-slow h-6 w-6 border-4 border-t-gray-300 border-l-gray-300 border-gray-800 rounded-full " viewBox="0 0 24 24`} />
                                <span className="text-black font-medium pt-1 hidden xs:block">Search</span>
                                <HiOutlineSearch className={`${idProcessing ? "hidden" : "block"} xs:hidden text-2xl`} />
                            </button>
                        </form>
                        <p className="font-medium text-xs text-red-500 mt-1 pl-2 text-left w-full max-w-sm">{idError}</p>

                        <p className="font-medium  text-gray-300 mt-6 mb-1 pl-2 text-left w-full max-w-sm">Find by Coordinates</p>
                        <form onSubmit={handleCoordinatesSubmit} onInput={() => { setIdError(""); setCoordinatesError("") }} className="relative flex items-stretch justify-between space-x-5 w-full rounded-xl max-w-sm pr-2">
                            <input required id="X" type="text" placeholder="X" className={`bg-transparent w-1/3 text-white font-bold py-4 px-4 focus:outline-none border ${coordinatesError ? "border-red-500 border-opacity-100" : "border-opacity-40 "} hover:border-opacity-100 focus:border-opacity-100 transition duration-300 ease-in-out rounded-xl placeholder-white placeholder-opacity-75`} />
                            <input required id="Y" type="text" placeholder="Y" className={`bg-transparent w-1/3 text-white font-bold py-4 px-4 focus:outline-none border ${coordinatesError ? "border-red-500 border-opacity-100" : "border-opacity-40 "} hover:border-opacity-100 focus:border-opacity-100 transition duration-300 ease-in-out rounded-xl placeholder-white placeholder-opacity-75`} />

                            <button type="submit" className="flex items-center justify-around bg-gray-200 hover:bg-white transition ease-in-out duration-500 rounded-xl m-1 shadow-color w-12 xs:w-28">
                                <svg className={`${coordinatesProcessing ? "block" : "hidden"} animate-spin-slow h-6 w-6 border-4 border-t-gray-300 border-l-gray-300 border-gray-800 rounded-full " viewBox="0 0 24 24`} />
                                <span className="text-black font-medium pt-1 hidden xs:block">Search</span>
                                <HiOutlineSearch className={`${coordinatesProcessing ? "hidden" : "block"} xs:hidden text-2xl`} />
                            </button>
                        </form>
                        <p className="font-medium text-xs text-red-500 mt-1 pl-2 text-left w-full max-w-sm">{coordinatesError}</p>
                    </div>


                    <div className="relative z-0 flex flex-col h-96 w-full  xl:w-1/2 max-w-3xl items-center justify-center mt-24 xl:mt-32 ">
                        <PriceCard showCard={showCard} processing={idProcessing || coordinatesProcessing} name={name} imageLink={imageLink} openseaLink={openseaLink} sandboxLink={sandboxLink} tokenID={tokenID} ethPrice={ethPrice} sandPrice={sandPrice} usdPrice={usdPrice} />
                        <div className={`${showCard ? "block  animate__fadeIn" : "hidden"} absolute animate__animated h-full w-screen xl:w-full bg-black bg-opacity-70 z-30 scale-y-150`} />

                        <div className={`hidden md:block absolute bottom-0 left-64 rounded-md h-56 w-56 z-0 opacity-60 scale-90 animate__animated animate__zoomIn`}>
                            <Image src="/images/Lands/unnamed-9.jpg" layout="fill" className="z-0 rounded-md object-contain" />
                        </div>

                        <div className={`absolute top-4 left-4 rounded-md h-56 w-56 z-0 opacity-60 scale-90 animate__animated animate__zoomIn`}>
                            <Image src="/images/Lands/unnamed-5.jpg" layout="fill" className="z-0 rounded-md object-contain" />
                        </div>

                        <div className={`absolute bottom-12 left-32 rounded-md h-56 w-56 z-0 opacity-70 shadow-color scale-90 animate__animated animate__zoomIn`}>
                            <Image src="/images/Lands/unnamed-2.jpg" layout="fill" className="z-0 rounded-md object-contain" />
                        </div>

                        <div className={`hidden md:block absolute -top-10 left-52 rounded-md h-56 w-56 z-0 opacity-80 shadow-color scale-90 animate__animated animate__zoomIn`}>
                            <Image src="/images/Lands/unnamed.jpg" layout="fill" className="z-0 rounded-md object-contain" />
                        </div>

                        <div className={`hidden sm:block absolute -bottom-8 left-16 rounded-md h-56 w-56 z-0 opacity-90 shadow-color scale-100 animate__animated animate__zoomIn`}>
                            <Image src="/images/Lands/unnamed-4.jpg" layout="fill" className="z-0 rounded-md object-contain" />
                        </div>

                        <div className={`absolute top-0 right-0 rounded-md h-56 w-56 z-0 opacity-70 scale-90 animate__animated animate__zoomIn`}>
                            <Image src="/images/Lands/unnamed-6.jpg" layout="fill" className="z-0 rounded-md object-contain" />
                        </div>

                        <div className={`absolute -bottom-16 right-16 rounded-md h-56 w-56 z-0 opacity-80 shadow-color scale-100 animate__animated animate__zoomIn`}>
                            <Image src="/images/Lands/unnamed-7.jpg" layout="fill" className="z-0 rounded-md object-contain" />
                        </div>

                        <div className={`absolute top-16 right-32 rounded-md h-56 w-56 z-0 opacity-95 shadow-color scale-100 animate__animated animate__zoomIn`}>
                            <Image src="/images/Lands/unnamed-8.jpg" layout="fill" className="z-0 rounded-md object-contain" />
                        </div>
                    </div>


                </div>

            </main>

            <Footer />


        </>
    )
};

export async function getStaticProps() {
    const res = await fetch("https://api.coingecko.com/api/v3/simple/price?ids=ethereum%2Cthe-sandbox&vs_currencies=usd")
    const prices = await res.json();

    return {
        props: {
            prices,
        },
    }
}

export default ValuationPage;
