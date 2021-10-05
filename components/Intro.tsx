import Image from "next/image"

import Toolbar from "./Toolbar"


const Intro = ({ scroll }: any) => {

    return (
        <div className="text-center w-full" style={{ height: "4000px" }}>

            <div className={`sticky top-0 h-screen w-full`}>
                <Toolbar />

                <div className={`absolute top-0 right-0 h-screen w-full xl:w-3/4`}>
                    {/* <div className="absolute top-0 left-0 w-full h-full bg-black bg-opacity-40 z-10" /> */}
                    <Image src="/images/background/space-1.jpg" layout="fill" className="transform scale-125 rotate-180 animate__animated animate__zoomIn space-img z-0 object-scale-down" />
                    {/* <div className="absolute top-0 left-0 w-full h-full bg-black bg-opacity-40 z-10" />
                    <Image src="/images/background/stars-1.jpg" width="2848" height="1899" className="animate__animated animate__zoomIn space-img z-0" /> */}
                </div>

                <div className={`absolute top-0 h-screen w-full z-20 flex justify-center items-center`}>
                    <div className={`${scroll > 10 ? "transition-all duration-1000 transform xl:translate-x-56 xl:-translate-y-0 -translate-y-32" : ""} flex flex-col items-center xl:items-start`}>
                        <p className={`${scroll > 10 ? "xl:text-7xl" : "xl:text-9xl"} transition-all duration-1000 text-4xl sm:text-5xl lg:text-6xl font-bold text-transparent bg-clip-text bg-gradient-to-b from-gray-200  to-blue-500`}>MetaGameHub</p>

                        <button className={`${scroll > 10 ? "opacity-100 transition-opacity delay-1000" : "opacity-100 xl:opacity-0"} mt-5 transition-all duration-300 ease-in-out bg-black bg-opacity-50 border border-white border-opacity-25 hover:border-opacity-70 hover:shadow-color px-4 xl:px-6 py-2 xl:py-4 rounded-full`}>
                            <a href="https://t.me/metagamehub_dao" className="cursor-pointer" target="_blank" >
                                <span className="text-gray-200 text-lg xl:text-xl">Join Community!</span>

                            </a>
                        </button>

                    </div>

                </div>

                <div className={`absolute top-0 h-screen w-full xl:w-2/4 z-10 flex justify-center items-center transition-all duration-500 ${scroll > 10 ? "animate__animated animate__zoomIn animate__delay-1s" : "hidden"}`}>
                    <span className={`w-full mt-20 xl:mt-0 sm:w-1/2 px-8 text-lg xl:text-2xl leading-normal text-gray-200 ${scroll > 10 ? scroll < 2000 ? "block animate__animated animate__zoomIn animate_delay-0s" : "animate__animated animate__zoomOut animate_slower hidden" : "hidden"}`}>Utility, governance and data combined in one DAO and token</span>
                    <span className={`w-full mt-20 xl:mt-0 sm:w-1/2 px-8 text-lg xl:text-2xl leading-normal text-gray-200 ${scroll > 2000 ? scroll < 4000 ? "block animate__animated animate__zoomIn animate_delay-0s" : "animate__animated animate__zoomOut animate_slower hidden" : "hidden"}`}>AI NFT Pricing Oracle, Collaborative NFT Governance & Transparent NFT Pricing</span>
                    {/* <span className={`w-full mt-20 xl:mt-0 sm:w-1/2 px-8 text-lg xl:text-2xl leading-normal text-gray-200 ${scroll > 4000 ? "block animate__animated animate__zoomIn animate_delay-0s" : "hidden"}`}>Providing accessibility and transparent NFT valuation</span> */}
                </div>

            </div>
        </div>
    )
}

export default Intro