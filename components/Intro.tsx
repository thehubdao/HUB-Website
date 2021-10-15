import Image from "next/image"

import Toolbar from "./Toolbar"


const Intro = ({ scroll }: any) => {

    return (
        <div className="text-center w-full" style={{ height: "3000px" }}>

            <div className={`sticky top-0 h-screen w-full`}>
                <Toolbar dark={true} />

                <div className={`absolute top-0 right-0 h-screen w-full xl:w-4/5 opacity-75`}>
                    {/* <div className="absolute top-0 left-0 w-full h-full bg-black bg-opacity-40 z-10" /> */}
                    <Image src="/images/background/space-2.jpg" layout="fill" className="transform scale-125 rotate-180 animate__animated animate__zoomIn space-img z-0 object-scale-down" />
                    {/* <div className="absolute top-0 left-0 w-full h-full bg-black bg-opacity-40 z-10" />
                    <Image src="/images/background/stars-1.jpg" width="2848" height="1899" className="animate__animated animate__zoomIn space-img z-0" /> */}
                </div>
                {/* MeTagaMeHUb DaO from-blue-400 via-pink-400 to-pink-600 */}
                <div className={`absolute top-0 h-screen w-full z-20 flex justify-center items-center`}>
                    <div className={`${scroll > 10 && "transition-all duration-1000 transform xl:translate-x-64 xl:-translate-y-0 -translate-y-20"} flex flex-col items-center xl:items-start`}>
                        <h6 className={`${scroll > 10 ? "xl:text-6xl" : "xl:text-8xl"} transition-all duration-1000 text-transparent bg-clip-text bg-gradient-to-b from-blue-500 via-pink-500 to-pink-600 px-2`}>MeTagaMeHUb DaO</h6>

                        <div className="flex flex-col sm:flex-row space-x-0 sm:space-x-10">
                            <button className={`${scroll > 10 ? "opacity-100 transition-opacity delay-1000" : "opacity-100 xl:opacity-0"} mt-5 transition-all duration-300 ease-in-out bg-black bg-opacity-50 border border-white border-opacity-25 hover:border-opacity-70 hover:shadow-color px-4 xl:px-6 py-2 xl:py-3 rounded-full`}>
                                <a href="https://t.me/metagamehub_dao" className="cursor-pointer" target="_blank" >
                                    <span className="text-gray-200 text-lg xl:text-xl font-medium mt-1">Join Community!</span>
                                </a>
                            </button>

                            <button className={`${scroll > 10 ? "opacity-100 transition-opacity delay-1000" : "opacity-100 xl:opacity-0"} mt-5 transition-all duration-300 ease-in-out bg-white bg-opacity-20 border border-white border-opacity-25 hover:border-opacity-70 hover:shadow-color px-4 xl:px-6 py-2 xl:py-3 rounded-full`}>
                                <a href="https://www.thedap.space/membership/mgh" className="cursor-pointer" target="_blank" >
                                    <span className="text-gray-200 text-lg xl:text-xl font-medium mt-1">Join public membership!</span>
                                </a>
                            </button>
                        </div>


                    </div>

                </div>

                <div className={`absolute font-medium top-0 h-screen w-full xl:w-2/4 z-10 flex justify-center items-center transition-all duration-500 ${scroll > 10 ? "animate__animated animate__zoomIn animate__delay-1s" : "hidden"}`}>
                    <span className={`w-full mt-60 xl:mt-0 sm:w-1/2 max-w-sm px-8 text-lg lg:text-xl xl:text-2xl leading-normal text-gray-200 ${scroll > 10 ? scroll < 1500 ? "block animate__animated animate__zoomIn animate_delay-0s" : "animate__animated animate__zoomOut animate_slower hidden" : "hidden"}`}>Utility, governance and data combined in one ecosystem</span>
                    <span className={`w-full mt-60 xl:mt-0 sm:w-1/2 max-w-xs px-8 texl-lg lg:text-xl xl:text-2xl leading-normal text-gray-200 ${scroll > 1500 ? scroll < 3000 ? "block animate__animated animate__zoomIn animate_delay-0s" : "animate__animated animate__zoomOut animate_slower hidden" : "hidden"}`}>AI NFT Pricing Oracle, Collaborative NFT Governance & Transparent NFT Pricing</span>
                    {/* <span className={`w-full mt-20 xl:mt-0 sm:w-1/2 px-8 text-lg xl:text-2xl leading-normal text-gray-200 ${scroll > 4000 ? "block animate__animated animate__zoomIn animate_delay-0s" : "hidden"}`}>Providing accessibility and transparent NFT valuation</span> */}
                </div>

            </div>
        </div>
    )
}

export default Intro