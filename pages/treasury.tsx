import React, { useEffect, useState } from "react";
import { NextPage } from "next";
import Head from "next/head";
import "animate.css"

import { createConnection } from "mysql2/promise";


import Footer from "../components/Footer";
import Toolbar from "../components/Toolbar";
import landsJson from "../data/lands.json"
import assetsJson from "../data/assets.json"
import SmallLandCard from "../components/SmallLandCard";
import CryptoCard from "../components/CryptoCard";


const TreasuryPage: NextPage = ({ cryptoValues, landValues, nftValues }: any) => {
    const [showLands, setShowLands] = useState("")
    const [totalTreasuryValue, setTotalTreasuryValue] = useState(0)
    const [totalCryptoValue, setTotalCryptoValue] = useState(0)
    const [totalSandboxValue, setTotalSandboxValue] = useState(0)
    const [totalDecentralandValue, setTotalDecentralandValue] = useState(0)
    const [totalSomniumValue, setTotalSomniumValue] = useState(0)
    const [totalFlufValue, setTotalFlufValue] = useState(0)
    const [totalOtherValue, setTotalOtherValue] = useState(0)
    const [totalNFTValue, setTotalNFTValue] = useState(0)

    useEffect(() => {

        const cryptoSum = cryptoValues.reduce((acc: any, curr: any) => acc + curr.value, 0)
        setTotalCryptoValue(cryptoSum)

        const sandboxSum = landValues.filter((land: { metaverse: string; }) => land.metaverse === "sandbox").reduce((acc: any, curr: any) => acc + curr.priceUsd, 0)
        const sandboxSumRounded = Math.round(sandboxSum)
        setTotalSandboxValue(sandboxSumRounded)

        const decentralandSum = landValues.filter((land: { metaverse: string; }) => land.metaverse === "decentraland").reduce((acc: any, curr: any) => acc + curr.priceUsd, 0)
        const decentralandSumRounded = Math.round(decentralandSum)
        setTotalDecentralandValue(decentralandSumRounded)

        const somniumSum = nftValues.filter((nft: { name: string; }) => nft.name === "somnium-space").reduce((acc: any, curr: any) => acc + curr.value_7, 0)
        const somniumSumRounded = Math.round(somniumSum)
        setTotalSomniumValue(somniumSumRounded)

        const flufSum = nftValues.filter((nft: { name: string; }) => ["fluf-world-thingies", "partybear", "asm-aifa-all-stars", "fluf-world", "asm-brains", "fluf-world-burrows"].includes(nft.name)).reduce((acc: any, curr: any) => acc + curr.value_7, 0)
        const flufSumRounded = Math.round(flufSum)
        setTotalFlufValue(flufSumRounded)

        const otherSum = nftValues.filter((nft: { name: string; }) => ["ens", "uniswap-v3-positions"].includes(nft.name)).reduce((acc: any, curr: any) => acc + curr.value_7, 0)
        const otherSumRounded = Math.round(otherSum)
        setTotalOtherValue(otherSumRounded)

        const nftSum = sandboxSumRounded + decentralandSumRounded + somniumSumRounded + flufSumRounded + otherSumRounded

        setTotalNFTValue(nftSum)

        setTotalTreasuryValue(cryptoSum + nftSum)

        return () => { setTotalCryptoValue(0) }

    }, [cryptoValues, landValues])



    const handleClick = (category: string) => {
        if (showLands === "" || showLands !== category) {
            setShowLands(category)
        } else {
            setShowLands("")
        }
    }

    return (
        <>
            <Head>
                <title>MGH - Treasury</title>
                <meta name="description" content="Governance of metaverse related items, fair valuation and minting of NFT backed tokens and provision of metaverse market data." />
            </Head>

            <main className="flex flex-col items-center pb-40">
                <Toolbar dark={true} />

                <div className="flex flex-col items-center p-5 sm:p-10 w-full 2xl:max-w-screen-2xl">
                    <h1 className="text-transparent bg-clip-text bg-gradient-to-b from-blue-600 to-pink-600 text-center mt-20 lg:mt-32">Treasury</h1>
                    <a href="https://gnosis-safe.io/app/eth:0x2a9Da28bCbF97A8C008Fd211f5127b860613922D/balances" target="_blank" className="button mt-5 mb-20">
                        <p className="button-text">View Treasury</p>
                    </a>

                    <div className="flex flex-col sm:flex-row items-start space-x-0 sm:space-x-5 w-full max-w-3xl self-start mb-10">
                        <p className="text-gray-200 text-lg sm:text-2xl lg:text-4xl font-bold min-w-max flex-grow">Total Treasury Value</p>
                        <p className="text-gray-400 text-lg sm:text-2xl lg:text-4xl font-bold">${totalTreasuryValue.toLocaleString('en-GB')}</p>
                    </div>

                    <div className="flex items-center space-x-5 w-full max-w-3xl self-start mb-7 pl-0 sm:pl-1">
                        <hr className="border-pink-600 rounded-full h-12 sm:h-7 lg:h-10 border-4" />
                        <div className="flex flex-col sm:flex-row w-full">
                            <p className="text-gray-200 text-base sm:text-xl lg:text-3xl font-medium min-w-max pt-1.5 flex-grow">Cryptocurrencies</p>
                            <p className="text-gray-400 text-base sm:text-xl lg:text-3xl font-medium pt-1.5">${totalCryptoValue.toLocaleString('en-GB')}</p>
                        </div>
                    </div>



                    <div className="flex w-full flex-wrap items-center self-start ml-0 sm:ml-2 ">

                        {cryptoValues.map((element: any, key: any) => {
                            if (element.value > 0) {
                                return (
                                    <CryptoCard key={key} name={element.symbol} value={element.value} />
                                );
                            }
                        })}

                    </div>


                    <div className="flex items-center space-x-5 w-full max-w-3xl self-start mb-7 pl-0 sm:pl-1 mt-10">
                        <hr className="border-blue-500 rounded-full h-12 sm:h-7 lg:h-10 border-4" />
                        <div className="flex flex-col sm:flex-row w-full">
                            <p className="text-gray-200 text-base sm:text-xl lg:text-3xl font-medium min-w-max pt-1.5 flex-grow">NFTs</p>
                            <p className="text-gray-400 text-base sm:text-xl lg:text-3xl font-medium pt-1.5">${totalNFTValue.toLocaleString('en-GB')}</p>
                        </div>
                    </div>

                    <div className="flex flex-wrap items-center self-start ml-0 sm:ml-2">

                        <div onClick={() => handleClick("Sandbox")} className={`relative flex flex-col m-2 items-center select-none justify-center space-y-1 sm:space-y-2 rounded-xl ${showLands === "Sandbox" ? "bg-gray-400 bg-opacity-20" : "bg-grey-darkest"} shadow-button cursor-pointer p-2 px-3 pt-4 w-32 sm:w-40 h-32 sm:h-40`}>
                            <img src="/images/Logos/Cryptos/SAND.png" className={`h-10 md:h-14 group-hover:grayscale-0 transition duration-300 ease-in-out`} />
                            <p className="font-medium text-gray-400 text-xs md:text-sm pt-1">Sandbox</p>
                            <p className="font-medium text-gray-200 text-lg sm:text-xl pt-2">${totalSandboxValue.toLocaleString('en-GB')}</p>
                        </div>

                        <div onClick={() => handleClick("Decentraland")} className={`${showLands === "Decentraland" ? "bg-gray-400 bg-opacity-20" : "bg-grey-darkest"} select-none flex flex-col m-2 items-center justify-center space-y-1 sm:space-y-2 rounded-xl shadow-button cursor-pointer p-2 px-3 pt-4 w-32 sm:w-40 h-32 sm:h-40`}>
                            <img src="/images/Logos/Cryptos/MANA.png" className={`h-12 md:h-14 group-hover:grayscale-0 transition duration-300 ease-in-out`} />
                            <p className="font-medium text-gray-400 text-xs md:text-sm pt-1">Decentraland</p>
                            <p className="font-medium text-gray-200 text-lg sm:text-xl pt-2">${totalDecentralandValue.toLocaleString('en-GB')}</p>
                        </div>

                        <div onClick={() => handleClick("Somnium")} className={`${showLands === "Somnium" ? "bg-gray-400 bg-opacity-20" : "bg-grey-darkest"} select-none flex flex-col m-2 items-center justify-center space-y-1 sm:space-y-2 rounded-xl shadow-button cursor-pointer p-2 px-3 pt-4 w-32 sm:w-40 h-32 sm:h-40`}>
                            <img src="/images/Logos/somnium-space-logo.png" className={`h-12 md:h-14 object-contain`} />
                            <p className="font-medium text-gray-400 text-xs md:text-sm pt-1">Somnium Space</p>
                            <p className="font-medium text-gray-200 text-lg sm:text-xl pt-2">${totalSomniumValue.toLocaleString('en-GB')}</p>
                        </div>

                        <div onClick={() => handleClick("FLUF")} className={`${showLands === "FLUF" ? "bg-gray-400 bg-opacity-20" : "bg-grey-darkest"} select-none flex flex-col m-2 items-center justify-center space-y-1 sm:space-y-2 rounded-xl shadow-button cursor-pointer p-2 px-3 pt-4 w-32 sm:w-40 h-32 sm:h-40`}>
                            <img src="/images/Logos/flufworld-logo.png" className={`h-12 md:h-14 object-contain`} />
                            <p className="font-medium text-gray-400 text-xs md:text-sm pt-1">FLUF World</p>
                            <p className="font-medium text-gray-200 text-lg sm:text-xl pt-2">${totalFlufValue.toLocaleString('en-GB')}</p>
                        </div>

                        <div onClick={() => handleClick("Other")} className={`${showLands === "Other" ? "bg-gray-400 bg-opacity-20" : "bg-grey-darkest"} select-none flex flex-col m-2 items-center justify-center space-y-1 sm:space-y-2 rounded-xl shadow-button cursor-pointer p-2 px-3 pt-4 w-32 sm:w-40 h-32 sm:h-40`}>
                            <img src="/images/Logos/nft-logo.png" className={`h-12 md:h-14 group-hover:grayscale-0 transition duration-300 ease-in-out`} />
                            <p className="font-medium text-gray-400 text-xs md:text-sm pt-1">Other</p>
                            <p className="font-medium text-gray-200 text-lg sm:text-xl pt-2">${totalOtherValue.toLocaleString('en-GB')}</p>
                        </div>

                    </div>


                    {showLands === "Sandbox" &&
                        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 lg:grid-cols-6 xl:grid-cols-8 place-content-start gap-5 w-full mt-10 pl-2">
                            {landsJson.map((element, key) => {
                                if (element.metaverse === "Sandbox") {
                                    return (
                                        <SmallLandCard key={key} classes="" img={element.image} title={element.title} link={element.link} metaverse={element.metaverse} />
                                    );
                                }
                            })}

                            {assetsJson.map((element, key) => {
                                if (element.metaverse === "Sandbox") {
                                    return (
                                        <SmallLandCard key={key} classes="" img={element.image} title={element.title} link={element.link} metaverse={element.metaverse} />
                                    );
                                }
                            })}
                        </div>
                    }

                    {showLands === "Decentraland" &&
                        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 lg:grid-cols-6 xl:grid-cols-8 place-content-start gap-5 w-full mt-10 pl-2">
                            {landsJson.map((element, key) => {
                                if (element.metaverse === "Decentraland") {
                                    return (
                                        <SmallLandCard key={key} classes="" img={element.image} title={element.title} link={element.link} metaverse={element.metaverse} />
                                    );
                                }
                            })}
                        </div>
                    }

                    {showLands === "Somnium" &&
                        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 lg:grid-cols-6 xl:grid-cols-8 place-content-start gap-5 w-full mt-10 pl-2">
                            {landsJson.map((element, key) => {
                                if (element.metaverse === "Somnium") {
                                    return (
                                        <SmallLandCard key={key} classes="" img={element.image} title={element.title} link={element.link} metaverse={element.metaverse} />
                                    );
                                }
                            })}
                        </div>
                    }

                    {showLands === "FLUF" &&
                        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 lg:grid-cols-6 xl:grid-cols-8 place-content-start gap-5 w-full mt-10 pl-2">
                            {assetsJson.map((element, key) => {
                                if (element.metaverse === "FLUFWorld") {
                                    return (
                                        <SmallLandCard key={key} classes="" img={element.image} title={element.title} link={element.link} metaverse={element.metaverse} />
                                    );
                                }
                            })}
                        </div>
                    }

                    {showLands === "Other" &&
                        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 lg:grid-cols-6 xl:grid-cols-8 place-content-start gap-5 w-full mt-10 pl-2">
                            <SmallLandCard classes="text-xs" img="/images/Assets/ens.png" title="mghdao.eth ENS Domain" link="https://opensea.io/assets/0x57f1887a8bf19b14fc0df6fd9b2acc9af147ea85/65094968028965490667962940604995070354564234685879228165394497380248733853575" />
                            <SmallLandCard classes="text-xs" img="/images/Assets/uniswap-positions.svg" title="Uniswap V3 Positions" link="https://opensea.io/assets/0xc36442b4a4522e871399cd717abdd847ab11fe88/153816" />
                        </div>
                    }



                    {/* <h1 className="text-transparent bg-clip-text bg-gradient-to-b from-blue-600 to-pink-600 text-center mt-36">Staking</h1>
                    <a href="https://app.metagamehub.io/stake" target="_blank" className="button mt-5 mb-20">
                        <p className="button-text">Stake now</p>
                    </a>

                    <div className="flex flex-col sm:flex-row items-start space-x-0 sm:space-x-5 w-full max-w-3xl self-start mb-10">
                        <p className="text-gray-200 text-lg sm:text-2xl lg:text-4xl font-bold min-w-max flex-grow">Total rewards claimed</p>
                        <p className="text-gray-400 text-lg sm:text-2xl lg:text-4xl font-bold">$3,000,000</p>
                    </div>

                    <div className="flex flex-wrap items-center self-start ml-0 sm:ml-2">

                        <div className={`flex flex-col m-2 items-center justify-center space-y-3 sm:space-y-5 rounded-xl select-none cursor-default bg-grey-darkest shadow-button p-2 px-3 pt-4 w-32 sm:w-40 h-32 sm:h-40`}>
                            <div className="flex space-x-2 sm:space-x-4 items-center">
                                <img src="/images/Logos/Cryptos/MATIC.png" className={`h-9 sm:h-11 group-hover:grayscale-0 transition duration-300 ease-in-out`} />
                                <div className="flex flex-col space-y-0.5">
                                    <p className="font-medium text-gray-400 pt-0.5 text-xs md:text-sm min-w-max">Polygon</p>
                                    <hr className="border-gray-600 w-12" />
                                    <p className="font-medium text-gray-400 text-xs md:text-sm pt-1">APR: 70%</p>
                                </div>
                            </div>
                            <p className="font-medium text-gray-200 text-lg sm:text-xl pt-2">$100,000</p>
                        </div>

                        <div className={`flex flex-col m-2 items-center justify-center space-y-3 sm:space-y-5 rounded-xl select-none cursor-default bg-grey-darkest shadow-button p-2 px-3 pt-4 w-32 sm:w-40 h-32 sm:h-40`}>
                            <div className="flex space-x-2 sm:space-x-4 items-center">
                                <img src="/images/Logos/Cryptos/ETH.png" className={`h-9 sm:h-10 group-hover:grayscale-0 transition duration-300 ease-in-out`} />
                                <div className="flex flex-col space-y-0.5">
                                    <p className="font-medium text-gray-400 pt-0.5 text-xs md:text-sm min-w-max">Hodler</p>
                                    <hr className="border-gray-600 w-12" />
                                    <p className="font-medium text-gray-400 text-xs md:text-sm pt-1">APR: 70%</p>
                                </div>
                            </div>
                            <p className="font-medium text-gray-200 text-lg sm:text-xl pt-2">$100,000</p>
                        </div>

                        <div className={`flex flex-col m-2 items-center justify-center space-y-3 sm:space-y-5 rounded-xl select-none cursor-default bg-grey-darkest shadow-button p-2 px-3 pt-4 w-32 sm:w-40 h-32 sm:h-40`}>
                            <div className="flex space-x-2 sm:space-x-4 items-center">
                                <img src="/images/Logos/Cryptos/ETH.png" className={`h-9 sm:h-10 group-hover:grayscale-0 transition duration-300 ease-in-out`} />
                                <div className="flex flex-col space-y-0.5">
                                    <p className="font-medium text-gray-400 pt-0.5 text-xs md:text-sm min-w-max">Degen</p>
                                    <hr className="border-gray-600 w-12" />
                                    <p className="font-medium text-gray-400 text-xs md:text-sm pt-1">APR: 70%</p>
                                </div>
                            </div>
                            <p className="font-medium text-gray-200 text-lg sm:text-xl pt-2">$100,000</p>
                        </div>

                        <div className={`flex flex-col m-2 items-center justify-center space-y-3 sm:space-y-5 rounded-xl select-none cursor-default bg-grey-darkest shadow-button p-2 px-3 pt-4 w-32 sm:w-40 h-32 sm:h-40`}>
                            <div className="flex space-x-2 sm:space-x-4 items-center">
                                <img src="/images/Logos/Cryptos/ETH.png" className={`h-9 sm:h-10 group-hover:grayscale-0 transition duration-300 ease-in-out`} />
                                <div className="flex flex-col space-y-0.5">
                                    <p className="font-medium text-gray-400 pt-0.5 text-xs md:text-sm min-w-max">Ape</p>
                                    <hr className="border-gray-600 w-12" />
                                    <p className="font-medium text-gray-400 text-xs md:text-sm pt-1">APR: 70%</p>
                                </div>
                            </div>
                            <p className="font-medium text-gray-200 text-lg sm:text-xl pt-2">$100,000</p>
                        </div>

                        <div className={`flex flex-col m-2 items-center justify-center space-y-3 sm:space-y-5 rounded-xl select-none cursor-default bg-grey-darkest shadow-button p-2 px-3 pt-4 w-32 sm:w-40 h-32 sm:h-40`}>
                            <div className="flex space-x-2 sm:space-x-4 items-center">
                                <img src="/images/Logos/Cryptos/ETH.png" className={`h-9 sm:h-10 group-hover:grayscale-0 transition duration-300 ease-in-out`} />
                                <div className="flex flex-col space-y-0.5">
                                    <p className="font-medium text-gray-400 pt-0.5 text-xs md:text-sm min-w-max">Hong Long</p>
                                    <hr className="border-gray-600 w-12" />
                                    <p className="font-medium text-gray-400 text-xs md:text-sm pt-1">APR: 70%</p>
                                </div>
                            </div>
                            <p className="font-medium text-gray-200 text-lg sm:text-xl pt-2">$100,000</p>
                        </div>

                    </div> */}

                </div>

            </main>

            <Footer />


        </>
    )
};

export async function getServerSideProps() {
    const connection = await createConnection({
        host: "mgh-frankfurt-do-user-10576482-0.b.db.ondigitalocean.com",
        user: "doadmin",
        password: "UlI7z3f7XfE4PQvS",
        database: 'defaultdb',
        port: 25060
    });
    connection.connect();

    const cryptoSQL = "SELECT symbol, value FROM defaultdb.tokens;"
    const cryptoValues = (await connection.query(cryptoSQL))[0]

    const landsSQL = "SELECT metaverse, priceUsd FROM defaultdb.lands;"
    const landValues = (await connection.query(landsSQL))[0]

    const nftsSQL = "SELECT name, value_7 FROM defaultdb.nfts;"
    const nftValues = (await connection.query(nftsSQL))[0]

    connection.end();

    return {
        props: {
            cryptoValues,
            landValues,
            nftValues
        },
    }

}

export default TreasuryPage;
