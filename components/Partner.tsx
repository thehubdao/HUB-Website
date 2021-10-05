import Image from "next/image";

import chainlink_logo from "../public/images/Partner/chainlink_logo.png"
import amazingblocks_logo from "../public/images/Partner/amazingblocks_logo.svg"
import pec_logo from "../public/images/Partner/pec_logo.png"
import haytic_logo from "../public/images/Partner/HAYTIC.png"
import itrm_logo from "../public/images/Partner/ITRM.png"


const Partner = () => {

    return (

        <>
            <div className="w-full">
                <div className={`w-full flex flex-col items-center justify-start p-8`}>

                    <span className={`col-span-full text-5xl sm:text-6xl lg:text-7xl font-bold text-transparent bg-clip-text bg-gradient-to-b z-10 from-gray-400 via-gray-400 to-gray-900 mb-10`}>Partners</span>

                    <div className="relative w-full flex flex-col md:flex-row justify-center items-center">
                        <div className="m-5 max-w-sm ">
                            <Image src={chainlink_logo} className="object-scale-down h-36 filter grayscale hover:grayscale-0 transition ease-in-out duration-500 cursor-pointer"/>
                        </div>
                        <div className="m-5 max-w-sm ">
                            <Image src={amazingblocks_logo} className="object-scale-down h-36 filter grayscale hover:grayscale-0 transition ease-in-out duration-500 cursor-pointer"/>
                        </div>
                        <div className="m-5 max-w-sm ">
                        <img src="/images/Partner/myreality_logo.png" className="object-scale-down h-36 filter grayscale hover:grayscale-0 transition ease-in-out duration-500 cursor-pointer"/>
                        </div>
                        <div className="m-5 max-w-sm ">
                            <Image src={pec_logo} className="object-scale-down h-36 filter grayscale hover:grayscale-0 transition ease-in-out duration-500 cursor-pointer"/>
                        </div>
                        <div className="m-5 max-w-sm ">
                            <Image src={haytic_logo} className="object-scale-down h-36 filter grayscale hover:grayscale-0 transition ease-in-out duration-500 cursor-pointer"/>
                        </div>
                        <div className="m-5 max-w-sm ">
                            <Image src={itrm_logo} className="object-scale-down h-36 filter grayscale hover:grayscale-0 transition ease-in-out duration-500 cursor-pointer"/>
                        </div>
                    </div>

                </div>
            </div></>
    )
}

export default Partner