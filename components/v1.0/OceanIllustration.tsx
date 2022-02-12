import { IoIosArrowDown, IoIosArrowUp } from "react-icons/io"


const OceanIllustration = () => {
    return (
        <div className="relative font-medium flex items-center justify-center h-96 w-96 transform scale-110 my-10 lg:my-0 2xl:scale-125">

            <div className="absolute bottom-0 border rounded-full py-2 px-8 flex justify-center items-center w-52">
                <p className="text-gray-200 text-center">MGH DAO</p>
            </div>

            <div className="h-8 w-10 absolute bottom-12 left-32 flex flex-col items-center">
                <IoIosArrowUp className="absolute top-0 text-white text-2xl z-10" />
                <div className="absolute bottom-0 border-l-2 border-white h-6 rounded-full" />
            </div>

            <div className="absolute bottom-20 left-20 border rounded-full py-2 px-3 flex justify-center items-center w-32">
                <p className="text-gray-200 text-center text-xs">NFT Analysis Algorithm</p>
            </div>

            <div className="h-18 w-10 absolute bottom-34 left-32 flex flex-col items-center">
                <IoIosArrowUp className="absolute top-0 text-white text-2xl z-10" />
                <div className="absolute bottom-0 border-l-2 border-white h-16 rounded-full" />

                <div className="absolute top-7 rounded-full h-8 w-8 bg-blue-300 flex justify-center items-center z-10">
                    <p className="text-black text-xs pt-0.5">Data</p>
                </div>
            </div>

            <div className="h-40 w-10 absolute bottom-10 right-24 flex flex-col items-center">

                <div className="border-l-2 border-white h-36 rounded-full" />
                <IoIosArrowDown className="absolute bottom-1 text-white text-3xl " />

                <div className="absolute top-12 rounded-full p-2 bg-pink-300 flex justify-center items-center z-10">
                    <p className="text-black text-xs pt-0.5">Rewards</p>
                </div>
            </div>

            <div className="absolute top-30 border border-pink-600 z-10 rounded-full py-3 px-8 flex justify-center items-center w-52">
            <p className="absolute bottom-1 text-right right-4 text-pink-600 text-xxs">OCEAN<br/>Platform</p>
                <p className="text-gray-200 text-center mr-20">Datapool</p>
            </div>

            <div className="h-18 w-10 absolute top-10 left-32 flex flex-col items-center">
                <IoIosArrowUp className="absolute top-0 text-white text-2xl z-10" />
                <div className="absolute bottom-0 border-l-2 border-white h-16 rounded-full" />

                <div className="absolute top-7 rounded-full h-8 w-8 bg-blue-300 flex justify-center items-center z-10">
                    <p className="text-black text-xs pt-0.5">Data</p>
                </div>
            </div>

            <div className="h-19 w-10 absolute top-12 right-24 flex flex-col items-center">

                <div className=" border-l-2 border-white h-16 rounded-full" />
                <IoIosArrowDown className="absolute bottom-1 text-white text-2xl " />

                <div className="absolute top-4 rounded-full p-1 bg-pink-600 flex justify-center items-center z-10">
                    <p className="text-black text-xs pt-0.5">OCEAN</p>
                </div>
            </div>

            <div className="absolute top-0 border rounded-full py-2 px-8 flex justify-center items-center w-52">
                <p className="text-gray-200 text-center">User</p>
            </div>

            <div className="absolute top-31 right-32 z-0 w-11 h-11 opacity-20">
                <img src="/images/Logos/ocean.png"/>
            </div>


        </div>

    )
}

export default OceanIllustration


