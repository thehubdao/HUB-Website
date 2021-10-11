import LandCard from "./LandCard"
import NFTCard from "./NFTCard"


const Lands = () => {

    return (
        <div className="text-center w-full">
            <div className={` w-full min-h-screen flex flex-col xl:flex-row items-center justify-center p-8 pt-20`}>
                
                <div className="w-full xl:w-2/4 flex flex-col items-center xl:items-start justify-center mb-10 xl:mb-0 ">
                    {/* <p className={`text-5xl sm:text-6xl lg:text-7xl xl:text-9xl font-bold text-transparent bg-clip-text bg-gradient-to-b from-pink-300 to-pink-600 mb-3`}>NFT</p>
                    <p className={`text-2xl lg:text-4xl xl:text-5xl font-bold text-gray-300`}>Artist Series</p> */}
                    <div className=" flex space-x-5 items-center">
                        <span className={`text-6xl sm:text-7xl lg:text-8xl font-bold text-transparent bg-clip-text bg-gradient-to-b from-green-200 to-green-500`}>LANDs</span>
                    </div>

                    <div className="mt-5 text-center rounded-full px-6 py-2 drop-shadow bg-gray-400 bg-opacity-10 transform hover:scale-105 transition duration-300 ease-in-out hover:shadow-color border border-white border-opacity-20 hover:border-opacity-70 cursor-pointer">
                        <a href="/collection" target="_blank">
                            <span className="text-gray-200">Discover All</span>
                        </a>
                    </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2  md:grid-cols-4 gap-5 w-full xl:w-2/4 transform xl:-translate-x-36 max-w-6xl">
                    <LandCard classes="z-50 xl:scale-115 hover:xl:scale-120 w-full xl:w-64 opacity-95" img="/images/Lands/-154_-178.jpg" title="LAND (-154, -178)" link="https://opensea.io/assets/0x50f5474724e0ee42d9a4e711ccfb275809fd6d4a/10658" />
                    <LandCard classes="z-40 xl:scale-110 hover:xl:scale-120 w-full xl:w-64 opacity-95" img="/images/Lands/117_-28.jpg" title="LAND (117, -28)" link="https://opensea.io/assets/0x50f5474724e0ee42d9a4e711ccfb275809fd6d4a/72129" />
                    <LandCard classes="z-30 xl:scale-105 hover:xl:scale-120 w-full xl:w-64 opacity-95" img="/images/Lands/38_1.jpg" title="LAND (38, 1)" link="https://opensea.io/assets/0x50f5474724e0ee42d9a4e711ccfb275809fd6d4a/83882"/>
                    <LandCard classes="z-20 xl:scale-100 hover:xl:scale-120 w-full xl:w-64 opacity-95" img="/images/Lands/136_4.jpg" title="LAND (136, 4)" link="https://opensea.io/assets/0x50f5474724e0ee42d9a4e711ccfb275809fd6d4a/85204"/>
                </div>

            </div>
        </div>
    )
}

export default Lands