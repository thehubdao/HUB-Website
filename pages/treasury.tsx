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
    const [totalXoneValue, setTotalXoneValue] = useState(0)
    const [totalUniswapValue, setTotalUniswapValue] = useState(0)
    const [totalENSValue, setTotalENSValue] = useState(0)
    const [totalNFTValue, setTotalNFTValue] = useState(0)
    const [totalOceanValue, setTotalOceanValue] = useState(0)
    const [totalQuickswapValue, setTotalQuickswapValue] = useState(0)
    const [totalAssetsValue, setTotalAssetsValue] = useState(0)


    useEffect(() => {

        const cryptoSum = cryptoValues.filter((token: { symbol: string; }) => !["Ocean Data LPs", "Quickswap LPs"].includes(token.symbol)).reduce((acc: any, curr: any) => acc + curr.value, 0)
        setTotalCryptoValue(cryptoSum)

        const sandboxLandSum = landValues.filter((land: { metaverse: string; }) => land.metaverse === "sandbox").reduce((acc: any, curr: any) => acc + curr.priceUsd, 0)
        const sandboxAssetsSum = nftValues.find((nft: { name: string; }) => nft.name === "the-sandbox-assets").value_7
        const sandboxSumRounded = Math.round(sandboxLandSum + sandboxAssetsSum)
        setTotalSandboxValue(sandboxSumRounded)

        const decentralandSum = landValues.filter((land: { metaverse: string; }) => land.metaverse === "decentraland").reduce((acc: any, curr: any) => acc + curr.priceUsd, 0)
        const decentralandSumRounded = Math.round(decentralandSum)
        setTotalDecentralandValue(decentralandSumRounded)


        const flufSum = nftValues.filter((nft: { name: string; }) => ["fluf-world-thingies", "partybear", "asm-aifa-all-stars", "fluf-world", "asm-brains", "fluf-world-burrows"].includes(nft.name)).reduce((acc: any, curr: any) => acc + curr.value_7, 0)
        const flufSumRounded = Math.round(flufSum)
        setTotalFlufValue(flufSumRounded)

        const somniumSum = nftValues.find((nft: { name: string; }) => nft.name === "somnium-space").value_7
        const somniumSumRounded = Math.round(somniumSum)
        setTotalSomniumValue(somniumSumRounded)

        const xoneSum = nftValues.find((nft: { name: string; }) => nft.name === "xones").value_7
        const xoneSumRounded = Math.round(xoneSum)
        setTotalXoneValue(xoneSumRounded)

        const ensSum = nftValues.find((nft: { name: string; }) => nft.name === "ens").value_7
        const ensSumRounded = Math.round(ensSum)
        setTotalENSValue(ensSumRounded)

        const uniswapSum = nftValues.find((nft: { name: string; }) => nft.name === "uniswap-v3-positions").value_7
        const uniswapSumRounded = Math.round(uniswapSum)
        setTotalUniswapValue(uniswapSumRounded)

        const nftSum = sandboxSumRounded + decentralandSumRounded + somniumSumRounded + flufSumRounded + xoneSumRounded + ensSumRounded + uniswapSumRounded
        setTotalNFTValue(nftSum)


        const quickswapSum = cryptoValues.find((token: { symbol: string; }) => token.symbol === "Quickswap LPs").value
        const quickswapSumRounded = Math.round(quickswapSum)
        setTotalQuickswapValue(quickswapSumRounded)

        const oceanSum = cryptoValues.find((token: { symbol: string; }) => token.symbol === "Ocean Data LPs").value
        const oceanSumRounded = Math.round(oceanSum)
        setTotalOceanValue(oceanSumRounded)

        const assetsSum = quickswapSumRounded + oceanSumRounded
        setTotalAssetsValue(assetsSum)

        setTotalTreasuryValue(cryptoSum + nftSum + assetsSum)


    }, [cryptoValues, landValues])



    const handleClick = (category: string) => {
        if (showLands === "" || showLands !== category) {
            setShowLands(category)
        } else {
            setShowLands("")
        }
    }

    assetsJson.map((element, key) => {
        if (element.metaverse === "XONE") {
            return (
                <SmallLandCard key={key} classes="" img={element.image} title={element.title} link={element.link} metaverse={element.metaverse} />
            );
        }
    })

    var xones = [];
    for (var i = 1159; i < 1213; i++) {
        xones.push(<SmallLandCard key={i} classes="" img="/images/Assets/xone.png" title={`XONE #${i}`} link={`https://opensea.io/assets/0x9ec46a3dd227fd5977c7f1997c043122a703ff2a/${i}`} metaverse="XONE" />);
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

                        {cryptoValues.filter((token: { symbol: string; }) => !["Ocean Data LPs", "Quickswap LPs"].includes(token.symbol)).map((element: any, key: any) => {
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

                        <div onClick={() => handleClick("XONE")} className={`${showLands === "XONE" ? "bg-gray-400 bg-opacity-20" : "bg-grey-darkest"} select-none flex flex-col m-2 items-center justify-center space-y-1 sm:space-y-2 rounded-xl shadow-button cursor-pointer p-2 px-3 pt-4 w-32 sm:w-40 h-32 sm:h-40`}>
                            <img src="/images/Logos/xone-logo.png" className={`h-12 md:h-14 object-contain`} />
                            <p className="font-medium text-gray-400 text-xs md:text-sm pt-1">XONE</p>
                            <p className="font-medium text-gray-200 text-lg sm:text-xl pt-2">${totalXoneValue.toLocaleString('en-GB')}</p>
                        </div>

                        <div onClick={() => handleClick("ENS")} className={`${showLands === "ENS" ? "bg-gray-400 bg-opacity-20" : "bg-grey-darkest"} select-none flex flex-col m-2 items-center justify-center space-y-1 sm:space-y-2 rounded-xl shadow-button cursor-pointer p-2 px-3 pt-4 w-32 sm:w-40 h-32 sm:h-40`}>
                            <img src="/images/Assets/ens.png" className={`h-12 md:h-14 group-hover:grayscale-0 transition duration-300 ease-in-out`} />
                            <p className="font-medium text-gray-400 text-xs md:text-sm pt-1">ENS Domains</p>
                            <p className="font-medium text-gray-200 text-lg sm:text-xl pt-2">${totalENSValue.toLocaleString('en-GB')}</p>
                        </div>

                        <a href="https://opensea.io/assets/0xc36442b4a4522e871399cd717abdd847ab11fe88/153816" target="_blank" className={`relative flex flex-col m-2 items-center select-none justify-center space-y-1 sm:space-y-2 rounded-xl bg-grey-darkest shadow-button p-2 px-3 pt-4 w-32 sm:w-40 h-32 sm:h-40`}>
                            <img src="/images/Assets/uniswap-positions.svg" className={`h-10 md:h-14 group-hover:grayscale-0 transition duration-300 ease-in-out`} />
                            <p className="font-medium text-gray-400 text-xs md:text-sm pt-1 text-center min-w-max">Uniswap V3 Positions</p>
                            <p className="font-medium text-gray-200 text-lg sm:text-xl pt-2">${totalUniswapValue.toLocaleString('en-GB')}</p>
                        </a>

                    </div>


                    {showLands === "Sandbox" &&
                        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 lg:grid-cols-6 xl:grid-cols-8 place-content-start gap-5 w-full my-5 pl-2">
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
                        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 lg:grid-cols-6 xl:grid-cols-8 place-content-start gap-5 w-full my-5 pl-2">
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
                        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 lg:grid-cols-6 xl:grid-cols-8 place-content-start gap-5 w-full my-5 pl-2">
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
                        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 lg:grid-cols-6 xl:grid-cols-8 place-content-start gap-5 w-full my-5 pl-2">
                            {assetsJson.map((element, key) => {
                                if (element.metaverse === "FLUFWorld") {
                                    return (
                                        <SmallLandCard key={key} classes="" img={element.image} title={element.title} link={element.link} metaverse={element.metaverse} />
                                    );
                                }
                            })}
                        </div>
                    }

                    {showLands === "XONE" &&
                        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 lg:grid-cols-6 xl:grid-cols-8 place-content-start gap-5 w-full my-5 pl-2">

                            {xones}
                        </div>
                    }

                    {showLands === "ENS" &&
                        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 lg:grid-cols-6 xl:grid-cols-8 place-content-start gap-5 w-full my-5 pl-2">
                            <SmallLandCard classes="text-xs" img="/images/Assets/ens.png" title="mghdao.eth" link="https://opensea.io/assets/0x57f1887a8bf19b14fc0df6fd9b2acc9af147ea85/65094968028965490667962940604995070354564234685879228165394497380248733853575" />
                            <SmallLandCard classes="text-xs" img="/images/Assets/ens.png" title="metagamehub.eth" link="https://opensea.io/assets/0x57f1887a8bf19b14fc0df6fd9b2acc9af147ea85/65976217577879806189239991483658207330501404736298853056691685243794338078597" />
                        </div>
                    }


                    <div className="flex items-center space-x-5 w-full max-w-3xl self-start mb-7 pl-0 sm:pl-1 mt-10">
                        <hr className="border-green-600 rounded-full h-12 sm:h-7 lg:h-10 border-4" />
                        <div className="flex flex-col sm:flex-row w-full">
                            <p className="text-gray-200 text-base sm:text-xl lg:text-3xl font-medium min-w-max pt-1.5 flex-grow">Assets</p>
                            <p className="text-gray-400 text-base sm:text-xl lg:text-3xl font-medium pt-1.5">${totalAssetsValue.toLocaleString('en-GB')}</p>
                        </div>
                    </div>

                    <div className="flex flex-wrap items-center self-start ml-0 sm:ml-2">

                        <a href="https://info.quickswap.exchange/#/account/0x16d0F35b8A4bfc49391d9c374d5AF4ec2dFB25bc" target="_blank" className={`bg-grey-darkest select-none flex flex-col m-2 items-center justify-center space-y-1 sm:space-y-2 rounded-xl shadow-button p-2 px-3 pt-4 w-32 sm:w-40 h-32 sm:h-40`}>
                            <img src="/images/Logos/Cryptos/Quickswap LPs.png" className={`h-12 md:h-14 group-hover:grayscale-0 transition duration-300 ease-in-out`} />
                            <p className="font-medium text-gray-400 text-xs md:text-sm pt-1">Quickswap LPs</p>
                            <p className="font-medium text-gray-200 text-lg sm:text-xl pt-2">${totalQuickswapValue.toLocaleString('en-GB')}</p>
                        </a>

                        <a href="https://market.oceanprotocol.com/asset/did:op:8331D69bF312604542D5f5f41D859dA27568B7cd" target="_blank" className={`bg-grey-darkest select-none flex flex-col m-2 items-center justify-center space-y-1 sm:space-y-2 rounded-xl shadow-button p-2 px-3 pt-4 w-32 sm:w-40 h-32 sm:h-40`}>
                            <img src="/images/Logos/Cryptos/Ocean Data LPs.png" className={`h-12 md:h-14 group-hover:grayscale-0 transition duration-300 ease-in-out`} />
                            <p className="font-medium text-gray-400 text-xs md:text-sm pt-1">Ocean Data LPs</p>
                            <p className="font-medium text-gray-200 text-lg sm:text-xl pt-2">${totalOceanValue.toLocaleString('en-GB')}</p>
                        </a>

                        <a href="https://market.link/data-providers/5a443923-252a-4208-8b4e-b01c04ff6fa4/integrations" target="_blank" className={`bg-grey-darkest select-none flex flex-col m-2 items-center justify-center space-y-1 sm:space-y-2 rounded-xl shadow-button p-2 px-3 pt-4 w-32 sm:w-40 h-32 sm:h-40`}>
                            <img src="/images/Logos/Cryptos/LINK.png" className={`h-12 md:h-14 group-hover:grayscale-0 transition duration-300 ease-in-out`} />
                            <p className="font-medium text-gray-400 text-xs md:text-sm pt-1 text-center">Metaverse Valuation Node</p>
                        </a>

                    </div>

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
