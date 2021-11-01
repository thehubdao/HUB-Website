import LandCard from "./LandCard"
import NFTCard from "./NFTCard"


const Lands = () => {

    return (
        <div className="text-center w-full pt-20 xl:pt-0">
            <div className={` w-full min-h-screen flex flex-col xl:flex-row items-center justify-center p-8`}>

                <div className="w-full xl:w-2/4 flex flex-col items-center xl:items-start justify-center mb-10 xl:mb-0 ">
                    {/* <p className={`text-5xl sm:text-6xl lg:text-7xl xl:text-9xl font-bold text-transparent bg-clip-text bg-gradient-to-b from-pink-300 to-pink-600 mb-3`}>NFT</p>
                    <p className={`text-2xl lg:text-4xl xl:text-5xl font-bold text-gray-300`}>Artist Series</p> */}
                    <h1 className={`text-transparent bg-clip-text bg-gradient-to-b from-green-200 to-green-500`}>LANDs</h1>
                    <p className={`text-lg lg:text-2xl font-medium text-gray-200`}>Community developed & curated </p>

                    <div className="flex space-x-4">
                        <a href="/collection" target="_blank" className="button mt-5">
                            <p className="button-text">Show Collection</p>
                        </a>
                        <a href="/valuation" target="_blank" className="button mt-5 bg-white bg-opacity-20">
                            <p className="button-text">LAND Valuation</p>
                        </a>
                    </div>

                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2  md:grid-cols-4 gap-5 w-full xl:w-2/4 transform xl:-translate-x-36 max-w-6xl">
                    <LandCard classes="z-50 xl:scale-115 hover:xl:scale-120 w-full xl:w-64 opacity-95" img="/images/Lands/-154_-178.jpg" title="LAND (-154, -178)" link="https://opensea.io/assets/0x50f5474724e0ee42d9a4e711ccfb275809fd6d4a/10658" />
                    <LandCard classes="z-40 xl:scale-110 hover:xl:scale-120 w-full xl:w-64 opacity-95" img="/images/Lands/117_-28.jpg" title="LAND (117, -28)" link="https://opensea.io/assets/0x50f5474724e0ee42d9a4e711ccfb275809fd6d4a/72129" />
                    <LandCard classes="z-30 xl:scale-105 hover:xl:scale-120 w-full xl:w-64 opacity-95" img="/images/Lands/38_1.jpg" title="LAND (38, 1)" link="https://opensea.io/assets/0x50f5474724e0ee42d9a4e711ccfb275809fd6d4a/83882" />
                    <LandCard classes="z-20 xl:scale-100 hover:xl:scale-120 w-full xl:w-64 opacity-95" img="/images/Lands/136_4.jpg" title="LAND (136, 4)" link="https://opensea.io/assets/0x50f5474724e0ee42d9a4e711ccfb275809fd6d4a/85204" />
                </div>

            </div>
        </div>
    )
}

export default Lands