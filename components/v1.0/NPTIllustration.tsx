import { IoIosArrowDown, IoIosArrowUp } from "react-icons/io"


const NPTIllustration = () => {
    return (
        <div className="relative flex font-medium items-center justify-center h-96 w-96 transform scale-110 xl:scale-125">

            <div className="absolute bottom-10 border rounded-full py-2 px-8 flex justify-center items-center w-52">
                <p className="text-gray-200 text-center">NFT Holders</p>
            </div>

            <div className="absolute left-24 border rounded-full py-2 px-3 flex justify-center items-center">
                <p className="text-gray-200 text-center text-xs">Price Oracle</p>
            </div>

            <div className="absolute top-10 border rounded-full py-2 px-8 flex justify-center items-center w-52">
                <p className="text-gray-200 text-center">NFT Pool</p>
            </div>

            <div className="h-52 w-10 absolute bottom-20 right-24 flex flex-col items-center">

                <div className=" border-l-2 border-white h-48 rounded-full" />
                <IoIosArrowDown className="absolute bottom-1 text-white text-3xl " />

                <div className="absolute top-18 rounded-full h-10 w-10 bg-pink-300 flex justify-center items-center z-10">
                    <p className="text-black pt-1">NPT</p>
                </div>
            </div>

            <div className="h-18 w-10 absolute bottom-24 left-32 flex flex-col items-center">
                <IoIosArrowUp className="absolute top-0 text-white text-2xl z-10" />
                <div className="absolute bottom-0 border-l-2 border-white h-16 rounded-full" />

                <div className="absolute top-7 rounded-full h-7 w-7 bg-blue-300 flex justify-center items-center z-10">
                    <p className="text-black text-xs pt-0.5">NFT</p>
                </div>
            </div>

            <div className="h-18 w-10 absolute top-22 left-32 flex flex-col items-center">
                <IoIosArrowUp className="absolute top-0 text-white text-2xl z-10" />
                <div className="absolute bottom-0 border-l-2 border-white h-16 rounded-full" />

                <div className="absolute top-7 rounded-full h-7 w-7 bg-blue-300 flex justify-center items-center z-10">
                    <p className="text-black text-xs pt-0.5">NFT</p>
                </div>
            </div>

        </div>

    )
}

export default NPTIllustration


