import dynamic from 'next/dynamic'

const PriceChart = dynamic(
  () => import('../section-element/PriceChart'),
  { ssr: false }
)

const Tokenomics = ({ tokenData }: any) => {

    return (

        <div className="min-h-screen relative w-full py-10 px-10 flex flex-col">
            <h1 className={`text-transparent bg-clip-text bg-gradient-to-br from-pink-600 max-w-max to-blue-500 text-9xl`}>MGH Token</h1>
            <img src="/images/Logos/MGH/mgh_logo.png" className="grayscale h-1/2 absolute top-0 right-0 opacity-[0.15]" />

            <div className={`w-full flex flex-col lg:flex-row items-center justify-center pb-20 lg:pb-10`}>

                <div className="flex h-full w-full max-w-lg lg:max-w-xl lg:w-1/2 items-center justify-center pb-10 lg:pb-0 p-3">
                    <img src="/images/tokenomics.png" className="w-full" />
                </div>

                <div className="flex flex-col h-full w-full lg:w-1/2 items-center justify-center px-3 xs:px-8">

                    <div className="flex flex-col space-y-3 mb-16 w-full max-w-md font-medium text-xl text-gray-200">

                        <div className="flex space-x-5 justify-between mb-2 text-3xl items-center">
                            <p className="text-gray-400 text-2xl">Price:</p>
                            <div className="flex flex-col items-end">
                                <p className="">${tokenData.market_data.current_price.usd.toLocaleString('en-GB', { maximumFractionDigits: 4 })}</p>
                                <p className={`text-lg ${tokenData.market_data.price_change_percentage_24h > 0 ? "text-green-600" : "text-red-600"} `}>{tokenData.market_data.price_change_percentage_24h.toFixed(2)}%</p>
                            </div>
                        </div>

                        <div className="flex space-x-5 justify-between items-center">
                            <p className="text-gray-400 text-lg">Market Cap:</p>
                            <p className="">${tokenData.market_data.market_cap.usd.toLocaleString('en-GB')}</p>
                        </div>

                        <div className="flex space-x-5 justify-between items-center">
                            <p className="text-gray-400 text-lg">24h Volume:</p>
                            <p className="">${tokenData.market_data.total_volume.usd.toLocaleString('en-GB')}</p>
                        </div>

                        <div className="flex space-x-5 justify-between items-center">
                            <p className="text-gray-400 text-lg">All Time High:</p>
                            <p className="">${tokenData.market_data.ath.usd.toLocaleString('en-GB', { maximumFractionDigits: 4 })}</p>
                        </div>

                        <div className="flex space-x-5 justify-between items-center">
                            <p className="text-gray-400 text-lg">Circulating Supply:</p>
                            <p className="">{tokenData.market_data.circulating_supply.toLocaleString('en-GB', { maximumFractionDigits: 0 })}</p>
                        </div>

                        <div className="flex space-x-5 justify-between items-center">
                            <p className="text-gray-400 text-lg">Fully Diluted Market Cap:</p>
                            <p className="">${tokenData.market_data.fully_diluted_valuation.usd.toLocaleString('en-GB')}</p>
                        </div>

                    </div>


                    <p className="text-gray-400 mb-2 font-medium">Visit on</p>
                    <div className="flex flex-col sm:flex-row space-x-0 sm:space-x-10 space-y-5 sm:space-y-0 items-center">
                        <a href="https://coinmarketcap.com/currencies/metagamehub-dao/" target="_blank" className="h-full w-44 cursor-pointer">
                            <img src="/images/Logos/cmc.png" className="object-scale-down w-full h-full" />
                        </a>
                        <a href="https://www.coingecko.com/coins/metagamehub-dao" target="_blank" className="h-full w-36  cursor-pointer">
                            <img src="/images/Logos/coingecko.svg" className="object-scale-down w-full h-full" />
                        </a>
                    </div>
                </div>

            </div>


            <div className="border w-screen h-screen">
                <PriceChart />
            </div>
        </div>
    )
}

export default Tokenomics
