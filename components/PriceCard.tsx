import { FiExternalLink } from "react-icons/fi"

const PriceCard = ({ showCard, processing, name, imageLink, link, tokenID, ethPrice, sandPrice, usdPrice }: any) => {
    return (



        <div className={`${showCard ? "animate__zoomIn animate__fast" : "hidden"} ${processing && "animate__zoomOut"} animate__animated shadow-white w-64 h-96 transform scale-100 xl:scale-120 relative flex flex-col pt-4 pb-2 items-center backdrop-filter backdrop-blur-2xl rounded-xl  border-l border-t border-opacity-30 z-50 `}>
            {/* <div className=" text-center w-28 h-28">
                <Image className="rounded-lg object-cover" src="/images/land.jpg" layout="fill" />
            </div> */}
            <a href={link} target="_blank">
                <img src={imageLink} className="w-30 h-30 rounded-xl object-cover" />
            </a>
            <p className="text-2xl font-bold text-gray-200 pt-4">
                {name}
            </p>
            <p className="text-xs text-gray-400 pb-4">
                Token ID: {tokenID}
            </p>

            <p className="text-gray-300 font-medium text-xs pb-1 w-full px-4">
                Price Estimation:
            </p>

            <div className="flex space-x-4 items-center w-full justify-start px-4 py-1.5 h-full">
                <img src="/images/ethereum-eth-logo.png" className="rounded-full h-8 w-8  p-1 shadow-button" />
                <p className="text-lg font-medium text-gray-300 pt-0.5">
                    {ethPrice}
                </p>
            </div>
            <div className={`flex ${!sandPrice && "invisible"} space-x-4 items-center w-full justify-start px-4 py-1.5 h-full`}>
                <img src="/images/the-sandbox-sand-logo.png" className="rounded-full h-8 w-8  p-1 shadow-button" />
                <p className="text-lg font-medium text-gray-300 pt-0.5">
                    {sandPrice}
                </p>
            </div>
            <div className={`flex ${!usdPrice && "invisible"} space-x-4 items-center w-full justify-start px-4 py-1.5 h-full`}>
                <img src="/images/usd-coin-usdc-logo.png" className="rounded-full h-8 w-8  p-1 shadow-button" />
                <p className="text-lg font-medium text-gray-300 pt-0.5">
                    {usdPrice}
                </p>
            </div>



            <a href={link} target="_blank" className="flex items-center absolute bottom-1 right-2 space-x-1 text-gray-300 text-xxs xl:text-xs hover:text-blue-400 transition duration-300 ease-in-out" >
                <p className="">Opensea</p>
                <FiExternalLink className="mb-0.5" />
            </a>


        </div>
    )
}

export default PriceCard


