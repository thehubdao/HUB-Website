import Image from "next/image";

import chainlink_logo from "../public/images/Partner/chainlink.png"
import amazingblocks_logo from "../public/images/Partner/amazingblocks.svg"
import pec_logo from "../public/images/Partner/pec.png"
import haytic_logo from "../public/images/Partner/HAYTIC.png"
import itrm_logo from "../public/images/Partner/itrm.png"


const Partner = () => {

    return (

        <>
            <div className="w-full">
                <div className={`w-full flex flex-col items-center justify-start p-8`}>

                    <h2 className={`col-span-full uppercase text-transparent bg-clip-text bg-gradient-to-b z-10 from-gray-200 to-gray-600 mb-5`}>Partners</h2>

                    <div className="relative w-full flex flex-col md:flex-row space-y-10 md:space-y-0 space-x-0 md:space-x-10 lg:space-x-24 justify-evenly items-center">
                        <div className="m-0 max-w-sm">
                            <img src="/images/Partner/chainlink.png" className="object-scale-down w-52 h-auto md:w-auto md:h-28 max-w-10 filter grayscale hover:grayscale-0 transition ease-in-out duration-500 cursor-pointer" />
                        </div>
                        <div className="m-0 max-w-sm">
                            <img src="/images/Partner/amazingblocks.svg" className="object-scale-down w-52 h-auto md:w-auto md:h-28 filter grayscale hover:grayscale-0 transition ease-in-out duration-500 cursor-pointer" />
                        </div>
                        <div className="m-0 max-w-sm">
                            <img src="/images/Partner/myreality.png" className="object-scale-down h-20 w-auto md:h-28 filter grayscale hover:grayscale-0 transition ease-in-out duration-500 cursor-pointer" />
                        </div>
                        <div className="m-0 max-w-sm">
                            <img src="/images/Partner/pec.png" className="object-scale-down h-20 w-auto md:h-28 filter grayscale hover:grayscale-0 transition ease-in-out duration-500 cursor-pointer" />
                        </div>
                        {/* <div className="m-5 max-w-sm ">
                            <Image src={haytic_logo} className="object-scale-down h-28 filter grayscale hover:grayscale-0 transition ease-in-out duration-500 cursor-pointer"/>
                        </div> */}
                        <div className="m-0 max-w-sm">
                            <img src="/images/Partner/itrm.png" className="object-scale-down h-20 w-auto md:h-28 filter grayscale hover:grayscale-0 transition ease-in-out duration-500 cursor-pointer" />
                        </div>
                        <div className="m-0 max-w-sm">
                            <img src="/images/Partner/defitimes.svg" className="object-scale-down h-20 w-auto md:h-28 filter grayscale hover:grayscale-0 transition ease-in-out duration-500 cursor-pointer" />
                        </div>
                    </div>

                </div>
            </div></>
    )
}

export default Partner