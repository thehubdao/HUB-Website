const PriceCard = ({ showCard, name, imageLink, tokenID, ethPrice, sandPrice, usdPrice }: any) => {
    return (



        <div className={`${showCard ? "animate__zoomIn animate__fast" : "hidden"} animate__animated shadow-white w-64 h-96 transform scale-100 xl:scale-120 relative flex flex-col pt-5 pb-2 items-center backdrop-filter backdrop-blur-2xl rounded-xl  border-l border-t border-opacity-30 z-50 `}>
            {/* <div className=" text-center w-28 h-28">
                <Image className="rounded-lg object-cover" src="/images/land.jpg" layout="fill" />
            </div> */}
            <img src={imageLink} className="w-32 h-32 rounded-xl object-cover" />
            <p className="text-2xl font-bold text-gray-300 pt-5">
                {name}
            </p>
            <p className="text-xs text-gray-400 pb-3">
                Token ID: {tokenID}
            </p>

            <div className="flex space-x-3 items-center w-full justify-start px-4 py-1.5 h-full">
                <img src="/images/ethereum-eth-logo.png" className="rounded-full h-8 w-8  p-1 shadow-button" />
                <p className="text-lg font-medium text-gray-300 pt-0.5">
                    {ethPrice}
                </p>
            </div>
            <div className="flex space-x-3 items-center w-full justify-start px-4 py-1.5 h-full">
                <img src="/images/the-sandbox-sand-logo.png" className="rounded-full h-8 w-8  p-1 shadow-button" />
                <p className="text-lg font-medium text-gray-300 pt-0.5">
                    {sandPrice}
                </p>
            </div>
            <div className="flex space-x-3 items-center w-full justify-start px-4 py-1.5 h-full">
                <img src="/images/usd-coin-usdc-logo.png" className="rounded-full h-8 w-8  p-1 shadow-button" />
                <p className="text-lg font-medium text-gray-300 pt-0.5">
                    {usdPrice}
                </p>
            </div>

        </div>
    )
}

export default PriceCard


