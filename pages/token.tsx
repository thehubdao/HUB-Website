import React from "react";
import { NextPage } from "next";
import Head from "next/head";
import dynamic from "next/dynamic";
import { FiExternalLink } from "react-icons/fi";

import Footer from "../components/general/Footer";
import Toolbar from "../components/general/Toolbar";
import Partner from "../components/section-element/Partner";
import TokenomicsPart from "../components/section-element/TokenomicsPart";

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

            <main className="flex flex-col items-center text-gray-200 pt-28 lg:pt-48 w-full">

                <div className="flex flex-col items-center w-full max-w-screen-2xl px-5 sm:px-10">

                    <div className="flex flex-col lg:flex-row items-center space-x-0 lg:space-x-20 space-y-10 sm:space-y-20 lg:space-y-0 w-full pb-44">

                        <h1 className="text-transparent bg-clip-text bg-gradient-to-b from-blue-500 via-pink-500 to-pink-600 font-normal">MGH Token</h1>

                        <div className="flex flex-col space-y-5 flex-grow pl-0 lg:pl-20 xl:pl-40">
                            <div className="flex space-x-5 sm:space-x-20">
                                <div className="flex flex-col">
                                    <p className="text-lg sm:text-2xl font-medium">MGH</p>
                                    <p className="text-gray-400 text-sm sm:text-lg min-w-max flex-grow">Symbol</p>
                                </div>

                                <div className="flex flex-col">
                                    <p className="text-lg sm:text-2xl font-medium">18</p>
                                    <p className="text-gray-400 text-sm sm:text-lg min-w-max flex-grow">Decimals</p>
                                </div>
                            </div>

                            <div className="flex flex-col">
                                <div className="flex space-x-2 items-center">
                                    <p className="text-xxs sm:text-lg font-medium select-text">0x8765b1a0eb57ca49be7eacd35b24a574d0203656</p>
                                    <a href="https://etherscan.io/token/0x8765b1a0eb57ca49be7eacd35b24a574d0203656" target="_blank">
                                        <FiExternalLink className="mb-1.5 text-gray-400" />
                                    </a>
                                </div>
                                <p className="text-gray-400 text-sm sm:text-lg min-w-max flex-grow">Ethereum Contract</p>
                            </div>

                            <div className="flex flex-col">
                                <div className="flex space-x-2 items-center">
                                    <p className="text-xxs sm:text-lg font-medium select-text">0xc3C604F1943B8C619c5D65cd11A876e9C8eDCF10</p>
                                    <a href="https://polygonscan.com/token/0xc3C604F1943B8C619c5D65cd11A876e9C8eDCF10" target="_blank">
                                        <FiExternalLink className="mb-1.5 text-gray-400" />
                                    </a>
                                </div>
                                <p className="text-gray-400 text-sm sm:text-lg min-w-max flex-grow">Polygon Contract</p>
                            </div>


                            <div className="flex font-medium items-center text-blue-500 space-x-10 pt-2">
                                <a href="https://coinmarketcap.com/currencies/metagamehub-dao/" target="_blank" className="h-full w-32 sm:w-44 cursor-pointer">
                                    <img src="/images/Logos/webp/cmc.webp" className="object-scale-down w-full h-full" />
                                </a>
                                <a href="https://www.coingecko.com/coins/metagamehub-dao" target="_blank" className="h-full w-28 sm:w-36 cursor-pointer">
                                    <img src="/images/Logos/coingecko.svg" className="object-scale-down w-full h-full" />
                                </a>
                            </div>

                        </div>
                    </div>

                    <div id="chart" className="w-screen min-h-screen flex flex-col space-y-10 cursor-default">
                        <PriceChart chartData={chartData} />

                        <div className="flex flex-col md:flex-row space-x-0 md:space-x-10 lg:space-x-20 space-y-5 md:space-y-0 justify-center px-5 md:px-10">
                            <div className="flex flex-col space-y-1">
                                <div className="flex items-end space-x-3">
                                    <p className="text-base md:text-xl lg:text-3xl font-medium">$ {tokenData.market_data.current_price.usd.toLocaleString('en-GB', { maximumFractionDigits: 4 })}</p>
                                    <p className={`text-sm md:text-lg lg:text-xl font-medium ${tokenData.market_data.price_change_percentage_24h > 0 ? "text-green-600" : "text-red-600"} `}>{tokenData.market_data.price_change_percentage_24h.toFixed(2)}%</p>
                                </div>
                                <p className="text-gray-400 text-sm md:text-base lg:text-xl flex-grow">Price</p>
                            </div>

                            <div className="flex flex-col space-y-1">
                                <p className="text-base md:text-xl lg:text-3xl font-medium">$ {tokenData.market_data.total_volume.usd.toLocaleString('en-GB')}</p>
                                <p className="text-gray-400 text-sm md:text-base lg:text-xl flex-grow">24h Volume</p>
                            </div>

                            <div className="flex flex-col space-y-1">
                                <p className="text-base md:text-xl lg:text-3xl font-medium">$ {tokenData.market_data.market_cap.usd.toLocaleString('en-GB')}</p>
                                <p className="text-gray-400 text-sm md:text-base lg:text-xl flex-grow">Market Cap</p>
                            </div>

                            <div className="flex flex-col space-y-1">
                                <p className="text-base md:text-xl lg:text-3xl font-medium">$ {tokenData.market_data.fully_diluted_valuation.usd.toLocaleString('en-GB')}</p>
                                <p className="text-gray-400 text-sm md:text-base lg:text-xl flex-grow">Fully Diluted Market Cap</p>
                            </div>

                        </div>

                        <div className="flex flex-col items-center space-y-5 pt-10">
                            <p className={`text-3xl text-center`}>Available on:</p>

                            <div className="flex flex-col sm:flex-row space-x-0 sm:space-x-2 space-y-2 sm:space-y-0 self-center">
                                <Partner classes="max-w-[14rem]" link="https://app.uniswap.org/#/swap?inputCurrency=ETH&outputCurrency=0x8765b1a0eb57ca49be7eacd35b24a574d0203656" logo="/images/Logos/webp/uniswap.svg.webp" />
                                <Partner classes="max-w-[14rem]" link="https://quickswap.exchange/#/swap?inputCurrency=0x0d500b1d8e8ef31e21c99d1db9a6444d3adf1270&outputCurrency=0xc3c604f1943b8c619c5d65cd11a876e9c8edcf10" logo="/images/Logos/webp/quickswap.webp" />
                                <Partner classes="max-w-[14rem]" link="https://bilaxy.com/trade/MGH_ETH" logo="/images/Logos/webp/bilaxy.webp" />
                            </div>
                        </div>


                    </div>


                    {/* <div className="min-h-screen relative w-full flex flex-col">

                        <div className={`w-full flex h-screen flex-col md:flex-row space-y-20 md:space-y-0 items-center mt-20 justify-center`}>

                            <div className="flex flex-col items-center space-y-10 lg:space-y-16 w-full md:w-1/2">

                                <div className="flex flex-col space-y-1 text-center md:text-right w-1/2">
                                    <p className="text-lg sm:text-xl lg:text-4xl font-medium">{tokenData.market_data.circulating_supply.toLocaleString('en-GB', { maximumFractionDigits: 0 })}</p>
                                    <p className="text-gray-400 text-sm sm:text-lg lg:text-2xl flex-grow">Circulating Supply</p>
                                </div>

                                <div className="flex flex-col space-y-1 text-center md:text-right w-1/2">
                                    <p className="text-lg sm:text-xl lg:text-4xl font-medium">{tokenData.market_data.total_supply.toLocaleString('en-GB', { maximumFractionDigits: 0 })}</p>
                                    <p className="text-gray-400 text-sm sm:text-lg lg:text-2xl flex-grow">Total Supply</p>
                                </div>

                            </div>

                            <div className="relative h-[85%] flex-grow self-start md:self-center">
                                <TokenomicsPart title="Sale/Liquidity" classes="top-0 h-[24%] text-blue-800" borderColor="border-blue-800" size={24} />
                                <TokenomicsPart title="Staking/Bonding" classes="top-[25%] h-[24%] text-blue-700" borderColor="border-blue-700" size={24} />
                                <TokenomicsPart title="Treasury" classes="top-[50%] h-[20%] text-blue-600" borderColor="border-blue-600" size={20} />
                                <TokenomicsPart title="Metaverse Rewards" classes="top-[71%] h-[16%] text-blue-500" borderColor="border-blue-500" size={16} />
                                <TokenomicsPart title="Early Contributors" classes="top-[88%] h-[6%] text-blue-400" borderColor="border-blue-400" size={6} />
                                <TokenomicsPart title="Initiators" classes="top-[95%] h-[6%] text-blue-300" borderColor="border-blue-300" size={6} />
                                <TokenomicsPart title="Marketing" classes="top-[102%] h-[4%] text-blue-200" borderColor="border-blue-200" size={4} />
                            </div>

                        </div>

                    </div> */}


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
