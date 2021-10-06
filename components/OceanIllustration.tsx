import { IoIosArrowDown, IoIosArrowUp } from "react-icons/io"
import { BsArrowRight, BsArrowUp } from "react-icons/bs";


const OceanIllustration = () => {
    return (
        <div className="relative flex items-center justify-center h-96 w-96 transform scale-110 xl:scale-125 border">

            <div className="absolute bottom-0 border rounded-full py-2 px-8 flex justify-center items-center w-52">
                <p className="text-gray-200 text-center">MGH DAO</p>
            </div>

            <BsArrowUp className="absolute bottom-12 left-32 text-white text-3xl" />

            <div className="absolute bottom-20 left-20 border rounded-full py-2 px-3 flex justify-center items-center w-32">
                <p className="text-gray-200 text-center text-xs">NFT Analysis Algorithm</p>
            </div>

            <div className="h-18 w-10 absolute bottom-36 left-28 flex flex-col items-center">
                <IoIosArrowUp className="absolute top-0 text-white text-2xl z-10" />
                <div className="absolute bottom-0 border-l-2 border-white h-16 rounded-full" />

                <div className="absolute top-7 rounded-full h-8 w-8 bg-blue-300 flex justify-center items-center z-10">
                    <p className="text-black text-xs">Data</p>
                </div>
            </div>

            <div className="h-40 w-10 absolute bottom-10 right-24 flex flex-col items-center">

                <div className=" border-l-2 border-white h-36 rounded-full" />
                <IoIosArrowDown className="absolute bottom-1 text-white text-3xl " />

                <div className="absolute top-12 rounded-full p-2 bg-pink-300 flex justify-center items-center z-10">
                    <p className="text-black text-xs">Rewards</p>
                </div>
            </div>

            <div className="absolute top-32 border rounded-full py-2 px-8 flex justify-center items-center w-52">
                <p className="text-gray-200 text-center">Datapool</p>
            </div>

            <div className="h-18 w-10 absolute top-12 left-28 flex flex-col items-center">
                <IoIosArrowUp className="absolute top-0 text-white text-2xl z-10" />
                <div className="absolute bottom-0 border-l-2 border-white h-16 rounded-full" />

                <div className="absolute top-7 rounded-full h-8 w-8 bg-blue-300 flex justify-center items-center z-10">
                    <p className="text-black text-xs">Data</p>
                </div>
            </div>

            <div className="h-20 w-10 absolute top-12 right-24 flex flex-col items-center">

                <div className=" border-l-2 border-white h-16 rounded-full" />
                <IoIosArrowDown className="absolute bottom-1 text-white text-2xl " />

                <div className="absolute top-6 rounded-full p-1 bg-pink-300 flex justify-center items-center z-10">
                    <p className="text-black text-xs">Ocean</p>
                </div>
            </div>

            <div className="absolute top-0 border rounded-full py-2 px-8 flex justify-center items-center w-52">
                <p className="text-gray-200 text-center">User</p>
            </div>


        </div>

    )
}

export default OceanIllustration


