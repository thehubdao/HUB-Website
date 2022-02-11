import React from "react";
import { NextPage } from "next";
import Head from "next/head";
import dynamic from "next/dynamic";

import Footer from "../components/general/Footer";
import Toolbar from "../components/general/Toolbar";
import Partner from "../components/section-element/Partner";
import TokenomicsPart from "../components/section-element/TokenomicsPart";
import { FiExternalLink } from "react-icons/fi";


const PriceChart = dynamic(
    () => import('../components/section-element/PriceChart'),
    { ssr: false }
)


const TokenPage: NextPage = ({ tokenData, chartData }: any) => {

    return (
        <>
            <Head>
                <title>MGH - Token</title>
                <meta name="description" content="Governance of metaverse related items, fair valuation and minting of NFT backed tokens and provision of metaverse market data." />
            </Head>
            <Toolbar dark={true} />

            <main className="flex flex-col items-center text-gray-200 select-none p-10 pt-64 w-full">

                <div className="flex flex-col w-full 2xl:max-w-screen-2xl ">
                    <div className="flex justify- items-center space-x-10 w-full pb-44">

                        <h1 className="text-transparent bg-clip-text bg-gradient-to-b from-blue-500 via-pink-500 to-pink-600 font-normal text-9xl">MGH Token</h1>

                        <div className="flex flex-col space-y-5 flex-grow pl-36">
                            {/* <a href="https://coinmarketcap.com/currencies/metagamehub-dao/" target="_blank" className="h-full w-44 cursor-pointer">
                                <img src="/images/Logos/cmc.png" className="object-scale-down w-full h-full" />
                            </a>
                            <a href="https://www.coingecko.com/coins/metagamehub-dao" target="_blank" className="h-full w-36  cursor-pointer">
                                <img src="/images/Logos/coingecko.svg" className="object-scale-down w-full h-full" />
                            </a> */}

                            <div className="flex space-x-20">
                                <div className="flex flex-col">
                                    <p className="text-2xl font-medium">MGH</p>
                                    <p className="text-gray-400 text-lg min-w-max flex-grow">Symbol</p>
                                </div>

                                <div className="flex flex-col">
                                    <p className="text-2xl font-medium">18</p>
                                    <p className="text-gray-400 text-lg min-w-max flex-grow">Decimals</p>
                                </div>
                            </div>



                            <div className="flex flex-col">
                                <div className="flex space-x-2 items-center">
                                    <p className="text-lg font-medium select-text">0x8765b1a0eb57ca49be7eacd35b24a574d0203656</p>
                                    <a href="https://etherscan.io/token/0x8765b1a0eb57ca49be7eacd35b24a574d0203656" target="_blank">
                                        <FiExternalLink className="mb-1.5 text-gray-400" />
                                    </a>
                                </div>
                                <p className="text-gray-400 text-lg min-w-max flex-grow">Contract</p>
                            </div>


                            <div className="flex font-medium items-center text-blue-500 space-x-10 pt-2">
                                <a href="https://coinmarketcap.com/currencies/metagamehub-dao/" target="_blank" className="h-full w-44 cursor-pointer">
                                    <img src="/images/Logos/cmc.png" className="object-scale-down w-full h-full" />
                                </a>
                                <a href="https://www.coingecko.com/coins/metagamehub-dao" target="_blank" className="h-full w-36  cursor-pointer">
                                    <img src="/images/Logos/coingecko.svg" className="object-scale-down w-full h-full" />
                                </a>
                                {/* <a href="/impressum" className=' hover:text-blue-400 transition ease-in-out pt-0.5 duration-300'>CoinMarketCap</a>
                                <hr className="border-gray-400 w-5 rotate-90" />
                                <a href="/datenschutz" className=' hover:text-blue-400 transition ease-in-out pt-0.5 duration-300'>CoinGecko</a> */}
                            </div>

                        </div>
                    </div>

                    <div id="chart" className="w-screen min-h-screen flex flex-col space-y-10 cursor-default -ml-10">
                        <PriceChart chartData={chartData} />
                        <div className="flex space-x-20 justify-center">
                            <div className="flex flex-col space-y-1">
                                <div className="flex items-end space-x-3">
                                    <p className="text-base sm:text-xl lg:text-3xl font-medium">$ {tokenData.market_data.current_price.usd.toLocaleString('en-GB', { maximumFractionDigits: 4 })}</p>
                                    <p className={`text-xl font-medium ${tokenData.market_data.price_change_percentage_24h > 0 ? "text-green-600" : "text-red-600"} `}>{tokenData.market_data.price_change_percentage_24h.toFixed(2)}%</p>
                                </div>
                                <p className="text-gray-400 text-base sm:text-lg lg:text-xl flex-grow">Price</p>
                            </div>

                            <div className="flex flex-col space-y-1">
                                <p className="text-base sm:text-xl lg:text-3xl font-medium">$ {tokenData.market_data.total_volume.usd.toLocaleString('en-GB')}</p>
                                <p className="text-gray-400 text-base sm:text-lg lg:text-xl flex-grow">24h Volume</p>
                            </div>

                            <div className="flex flex-col space-y-1">
                                <p className="text-base sm:text-xl lg:text-3xl font-medium">$ {tokenData.market_data.market_cap.usd.toLocaleString('en-GB')}</p>
                                <p className="text-gray-400 text-base sm:text-lg lg:text-xl flex-grow">Market Cap</p>
                            </div>

                            <div className="flex flex-col space-y-1">
                                <p className="text-base sm:text-xl lg:text-3xl font-medium">$ {tokenData.market_data.fully_diluted_valuation.usd.toLocaleString('en-GB')}</p>
                                <p className="text-gray-400 text-base sm:text-lg lg:text-xl flex-grow">Fully Diluted Market Cap</p>
                            </div>

                        </div>

                        <div className="w-full pt-20 flex space-x-5 self-center max-w-2xl">
                            <Partner link="https://app.uniswap.org/#/swap?inputCurrency=ETH&outputCurrency=0x8765b1a0eb57ca49be7eacd35b24a574d0203656" logo="/images/Logos/uniswap.svg.png" />
                            <Partner link="https://quickswap.exchange/#/swap?inputCurrency=0x0d500b1d8e8ef31e21c99d1db9a6444d3adf1270&outputCurrency=0xc3c604f1943b8c619c5d65cd11a876e9c8edcf10" logo="/images/Logos/quickswap.png" />
                            <Partner link="https://bilaxy.com/trade/MGH_ETH" logo="/images/Logos/bilaxy.png" />
                        </div>
                    </div>

                    <div className="min-h-screen relative w-full flex flex-col">

                        <div className={`w-full flex h-screen flex-col lg:flex-row items-center mt-20 justify-center`}>

                            {/* <div className="flex h-full w-1/2 items-center justify-center pb-10 lg:pb-0 p-3">
                                <img src="/images/tokenomics.png" className="w-full" />
                            </div> */}

                            <div className="flex flex-col items-center space-y-16 w-1/2 text-gray-200">

                                <div className="flex flex-col space-y-1 text-right">
                                    <p className="text-base sm:text-xl lg:text-4xl font-medium">{tokenData.market_data.circulating_supply.toLocaleString('en-GB', { maximumFractionDigits: 0 })}</p>
                                    <p className="text-gray-400 text-base sm:text-lg lg:text-2xl flex-grow">Circulating Supply</p>
                                </div>

                                <div className="flex flex-col space-y-1 text-right">
                                    <p className="text-base sm:text-xl lg:text-4xl font-medium">{tokenData.market_data.total_supply.toLocaleString('en-GB', { maximumFractionDigits: 0 })}</p>
                                    <p className="text-gray-400 text-base sm:text-lg lg:text-2xl flex-grow">Total Supply</p>
                                </div>

                            </div>

                            <div className="relative h-[85%] flex-grow">
                                <TokenomicsPart title="Sale/Liquidity" size={24} color="blue-800" distance={0} />
                                <TokenomicsPart title="Staking/Bonding" size={24} color="blue-700" distance={25} />
                                <TokenomicsPart title="Treasury" size={20} color="blue-600" distance={50} />
                                <TokenomicsPart title="Metaverse Rewards" size={16} color="blue-500" distance={71} />
                                <TokenomicsPart title="Early Contributors" size={6} color="blue-400" distance={88} />
                                <TokenomicsPart title="Initiators" size={6} color="blue-300" distance={95} />
                                <TokenomicsPart title="Marketing" size={4} color="blue-200" distance={102} />
                            </div>

                        </div>

                        {/* <div className="relative h-screen rotate-90">
                            <hr className="border-blue-800 w-[24%] border-2 absolute top-0 left-0" />
                            <hr className="border-blue-700 w-[24%] border-2 absolute top-0 left-[24%]" />
                            <hr className="border-blue-600 w-[20%] border-2 absolute top-0 left-[48%]" />
                            <hr className="border-blue-500 w-[16%] border-2 absolute top-0 left-[68%]" />
                            <hr className="border-blue-400 w-[6%] border-2 absolute top-0 left-[84%]" />
                            <hr className="border-blue-300 w-[6%] border-2 absolute top-0 left-[90%]" />
                            <hr className="border-blue-200 w-[4%] border-2 absolute top-0 left-[96%]" />
                        </div> */}


                        {/* <div className=" h-screen ">
                            <div className="relative h-[80%]">
                                <TokenomicsPart title="Sale/Liquidity" size={24} color="blue-800" distance={0} />
                                <TokenomicsPart title="Staking/Bonding" size={24} color="blue-700" distance={25} />
                                <TokenomicsPart title="Treasury" size={20} color="blue-600" distance={50} />
                                <TokenomicsPart title="Metaverse Rewards" size={16} color="blue-500" distance={71} />
                                <TokenomicsPart title="Early Contributors" size={6} color="blue-400" distance={88} />
                                <TokenomicsPart title="Initiators" size={6} color="blue-300" distance={95} />
                                <TokenomicsPart title="Marketing" size={4} color="blue-200" distance={102} />
                            </div>
                        </div> */}




                        {/* <div className="relative h-screen max-w-max flex flex-col">
                            <div className="absolute top-0 h-[24%] border-3 border-blue-800" />
                            <div className="absolute top-[25%] h-[24%] border-3 border-blue-700" />
                            <div className="absolute top-[50%] h-[20%] border-3 border-blue-600" />
                            <div className="absolute top-[71%] h-[16%] border-3 border-blue-500" />
                            <div className="absolute top-[88%] h-[6%] border-3 border-blue-400" />
                            <div className="absolute top-[95%] h-[6%] border-3 border-blue-300" />
                            <div className="absolute top-[102%] h-[4%] border-3 border-blue-200" />
                        </div> */}
                    </div>


                </div>
            </main>

            <Footer />


        </>
    )
};


export async function getServerSideProps() {
    const res1 = await fetch("https://api.coingecko.com/api/v3/coins/metagamehub-dao?localization=false&tickers=false&market_data=true&community_data=false&developer_data=false")
    const tokenData = await res1.json();

    const res2 = await fetch('https://api.coingecko.com/api/v3/coins/metagamehub-dao/market_chart?vs_currency=usd&days=max&interval=daily')
    const chartData = await res2.json();

    return {
        props: {
            tokenData,
            chartData
        },
    }
}

export default TokenPage;
