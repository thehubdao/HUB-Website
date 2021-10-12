import { IoIosArrowDown, IoIosArrowUp } from "react-icons/io"


const GovernanceIllustration = () => {
    return (
        <div className="relative flex items-center font-medium justify-center h-96 w-96 transform scale-70 sm:scale-110 2xl:scale-125 my-0 sm:my-10 lg:my-0">

            <div className="absolute bottom-0 border rounded-full p-2 flex justify-center items-center w-32">
                <p className="text-gray-200 text-center">Community</p>
            </div>

            <div className="h-18 w-10 absolute bottom-12 flex flex-col items-center">
                <IoIosArrowUp className="absolute top-0 text-white text-2xl z-10" />
                <div className="absolute bottom-0 border-l-2 border-white h-16 rounded-full" />

                <div className="absolute top-8 left-0 rounded-full py-1 px-2 transform -rotate-90 flex justify-center items-center z-10">
                    <p className="text-gray-200 text-xs">governs</p>
                </div>
            </div>

            <div className="absolute bottom-30 border rounded-full p-2 flex justify-center items-center w-24">
                <p className="text-gray-200 text-center leading-5">MGH DAO</p>
            </div>

            <div className="h-26 w-10 absolute top-30 right-22 flex flex-col items-center transform rotate-45">
                <IoIosArrowUp className="absolute top-0 text-white text-2xl z-10" />
                <div className="absolute bottom-0 border-l-2 border-white h-24 rounded-full" />

                <div className="absolute top-11 rounded-full py-1 px-2 bg-pink-300 w-18 flex justify-center items-center z-10 transform -rotate-90">
                    <p className="text-black text-xs leading-none text-center pt-0.5">NFT Analysis</p>
                </div>
            </div>

            <div className="h-26 w-10 absolute top-30 left-22 flex flex-col items-center transform -rotate-45">
                <IoIosArrowUp className="absolute top-0 text-white text-2xl z-10" />
                <div className="absolute bottom-0 border-l-2 border-white h-24 rounded-full" />

                <div className="absolute top-11 rounded-full py-1 px-0 bg-blue-300 w-18 flex justify-center items-center z-10 transform rotate-90">
                    <p className="text-black text-xs leading-none text-center pt-0.5">On-Chain Data</p>
                </div>
            </div>

            <div className="h-26 w-10 absolute top-24 flex flex-col items-center">
                <IoIosArrowUp className="absolute top-0 text-white text-2xl z-10" />
                <div className="absolute bottom-0 border-l-2 border-white h-24 rounded-full" />

                <div className="absolute top-10 rounded-full py-2 px-2 w-18 bg-gray-400 flex justify-center items-center z-10">
                    <p className="text-black text-xs leading-none text-center pt-0.5">Lands</p>
                </div>
            </div>

            <div className="absolute top-14 border rounded-full p-2 flex justify-center items-center w-32">
                <p className="text-gray-200 text-center">NFT Pools</p>
            </div>

            <div className="h-8 w-10 absolute top-4 flex flex-col items-center">
                <IoIosArrowUp className="absolute top-0 text-white text-2xl z-10" />
                <div className="absolute bottom-0 border-l-2 border-white h-6 rounded-full" />
            </div>

            <div className="absolute -top-10 border rounded-full p-2 flex justify-center items-center w-32">
                <p className="text-gray-200 text-center leading-5">Metaverse Development</p>
            </div>

            <div className="absolute top-14 -right-6 flex items-center justify-center h-28 w-28">
                <p className="text-pink-600 text-center leading-5 z-10">OCEAN Marketplace</p>
                <img src="/images/ocean.png" className="absolute opacity-10 w-4/5 inset-1/6"/>
            </div>

            <div className="absolute top-14 -left-6 flex items-center justify-center h-28 w-28">
                <p className="text-blue-600 text-center leading-5 z-10">Chainlink Marketplace</p>
                <img src="/images/chainlink_white.png" className="absolute opacity-10 w-4/5 inset-1/6"/>
            </div>

        </div>
    )
}

export default GovernanceIllustration


