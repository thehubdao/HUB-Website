import { BsArrowDown, BsArrowLeft, BsArrowRight, BsArrowUp } from "react-icons/bs"
import { AiOutlineMinus } from 'react-icons/ai'


const NPTIllustration = () => {
    return (
        // <Zoom>
            <div className="relative lg:self-end text-xs font-light flex items-center justify-center h-96 w-96 transform lg:-translate-x-20 xl:-translate-x-28 scale-60 sm:scale-100 lg:scale-110 xl:scale-125">


                <div className="absolute top-40 left-36 border rounded-full py-2 px-4 flex justify-center items-center w-36">
                    <p className="text-gray-200 w-5/5 text-center">MGH & NFT Holders</p>
                </div>
                <div className="absolute top-40 -left-10 border rounded-full py-2 px-3 flex justify-center items-center w-28">
                    <p className="text-gray-200 w-5/5 text-center">Staking Rewards</p>
                </div>

                <BsArrowLeft className="absolute top-40 left-20 text-white text-2xl" />
                <div className="absolute top-40 left-24 rounded-full h-6 w-6 bg-blue-300 flex justify-center items-center z-10">
                    <p className="text-black text-xxs">LPT</p>
                </div>
                <AiOutlineMinus className="absolute top-40 left-28 text-white text-2xl" />

                <AiOutlineMinus className="absolute top-48 left-20 text-white text-2xl" />
                <div className="absolute top-48 left-24 rounded-full h-6 w-6 bg-gradient-to-br from-blue-400 to-pink-400 flex justify-center items-center z-10">
                    <p className="text-black text-xxs">MGH</p>
                </div>
                <BsArrowRight className="absolute top-48 left-28 text-white text-2xl" />



                <BsArrowUp className="absolute left-40 top-56 text-white text-2xl" />
                <div className="absolute top-60 left-40 rounded-full h-6 w-6 bg-blue-300 flex justify-center items-center z-10">
                    <p className="text-black text-xxs">LPT</p>
                </div>
                <AiOutlineMinus className="absolute top-64 left-40 text-white text-2xl transform rotate-90" />

                <AiOutlineMinus className="absolute top-56 left-52 text-white text-2xl transform rotate-90" />
                <div className="absolute top-60 left-52 rounded-full h-6 w-6 bg-gradient-to-br from-blue-400 to-pink-400 flex justify-center items-center z-10">
                    <p className="text-black text-xxs">MGH</p>
                </div>
                <BsArrowDown className="absolute top-64 left-52 text-white text-2xl" />

                <AiOutlineMinus className="absolute top-56 left-60 text-white text-2xl transform rotate-90" />
                <div className="absolute top-60 left-60 rounded-full h-6 w-6 bg-pink-300 flex justify-center items-center z-10">
                    <p className="text-black text-xxs">NPT</p>
                </div>
                <BsArrowDown className="absolute top-64 left-60 text-white text-2xl" />


                <div className="absolute top-72 left-36 border rounded-full py-2 px-4 flex justify-center items-center w-36">
                    <p className="text-gray-200 w-3/5 text-center">Liquidity Pools</p>
                </div>
                <div className="absolute top-72 -left-10 border rounded-full py-2 px-3 flex justify-center items-center w-28">
                    <p className="text-gray-200 w-4/5 text-center">MGH Holders</p>
                </div>

                <BsArrowLeft className="absolute top-72 left-20 text-white text-2xl" />
                <div className="absolute top-72 left-24 rounded-full h-6 w-6 bg-pink-300 flex justify-center items-center z-10">
                    <p className="text-black text-xxs">NPT</p>
                </div>
                <AiOutlineMinus className="absolute top-72 left-28 text-white text-2xl" />

                <AiOutlineMinus className="absolute top-80 left-20 text-white text-2xl" />
                <div className="absolute top-80 left-24 rounded-full h-6 w-6 bg-gradient-to-br from-blue-400 to-pink-400 flex justify-center items-center z-10">
                    <p className="text-black text-xxs">MGH</p>
                </div>
                <BsArrowRight className="absolute top-80 left-28 text-white text-2xl" />



                <BsArrowUp className="absolute left-44 top-24 text-white text-2xl" />
                <div className="absolute top-28 left-44 rounded-full h-6 w-6 bg-gray-200 flex justify-center items-center z-10">
                    <p className="text-black text-xxs">NFT</p>
                </div>
                <AiOutlineMinus className="absolute top-32 left-44 text-white text-2xl transform rotate-90" />

                <AiOutlineMinus className="absolute top-24 right-32 text-white text-2xl transform rotate-90" />
                <div className="absolute top-28 right-32 rounded-full h-6 w-6 bg-gradient-to-br from-blue-400 to-pink-400 flex justify-center items-center z-10">
                    <p className="text-black text-xxs">MGH</p>
                </div>
                <BsArrowDown className="absolute top-32 right-32 text-white text-2xl" />

                <div className="absolute top-14 left-36 border rounded-full py-2 px-4 flex justify-center items-center w-36">
                    <p className="text-gray-200 w-5/5 text-center">NFT Pool</p>
                </div>
                <div className="absolute top-14 -right-14 w-28 border rounded-full py-2 px-3 flex justify-center items-center">
                    <p className="text-gray-200 w-5/5 text-center">Price Oracle</p>
                </div>

                <BsArrowLeft className="absolute right-16 top-15 text-white text-2xl" />

                <AiOutlineMinus className="absolute top-24 -right-2 text-white text-2xl transform rotate-90" />
                <div className="absolute top-28 -right-2 rounded-full h-6 w-6 bg-gray-400 flex justify-center items-center z-10">
                    <p className="text-black text-xxs">Data</p>
                </div>
                <BsArrowDown className="absolute top-32 -right-2 text-white text-2xl" />

                <div className="absolute top-40 -right-14 w-28 border rounded-full py-2 px-3 flex justify-center items-center">
                    <p className="text-gray-200 w-full text-center">Community</p>
                </div>

            </div>

        // </Zoom>

    )
}

export default NPTIllustration


