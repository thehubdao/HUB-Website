const Problems = () => {

    return (

        <div className="relative flex flex-col w-full h-full space-y-12 justify-center items-center p-8">
            <span className={`py-1 text-4xl sm:text-5xl xl:text-6xl font-bold text-transparent bg-clip-text bg-gradient-to-b z-10 from-gray-200 to-pink-600`}>Industry Pain Points</span>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10 justify-items-center">
                <div className="relative flex flex-col items-center p-2 max-w-xs">
                    <div className="absolute inset-1/4 w-2/4 h-2/4 bg-gradient-to-br from-pink-200 to-pink-800 rounded-full filter blur-2xl" />
                    <span className="text-white text-xl mb-3 p-1 z-10 border-b border-pink-500 max-w-max">Illiquidity</span>
                    <span className="text-gray-400 z-10">Lack of liquidity in the NFT market hampers the tradability and accessibility to this unique asset class</span>
                </div>

                <div className="relative flex flex-col items-center w-full p-2 max-w-xs">
                    <div className="absolute inset-1/4 w-2/4 h-2/4 bg-gradient-to-br from-pink-200 to-pink-800 rounded-full filter blur-2xl" />
                    <span className="text-white text-lg mb-3 z-10 border-b border-pink-500 max-w-max">Inefficient Utilization</span>
                    <span className="text-gray-400 z-10">Majority of NFTs have a limited earning potential. NFTs stored in wallets do not provide additional value until sold for a higher price</span>
                </div>

                <div className="relative flex flex-col items-center w-full p-2 max-w-xs">
                    <div className="absolute inset-1/4 w-2/4 h-2/4 bg-gradient-to-br from-pink-200 to-pink-800 rounded-full filter blur-2xl" />
                    <span className="text-white text-xl mb-3 z-10 border-b border-pink-500 max-w-max">Inaccurate Valuation</span>
                    <span className="text-gray-400 z-10">Intransparent, inflexible and fragmented; Emotionally driven due to a lack of valuation models</span>
                </div>

                <div className="relative flex flex-col items-center w-full p-2 max-w-xs">
                    <div className="absolute inset-1/4 w-2/4 h-2/4 bg-gradient-to-br from-pink-200 to-pink-800 rounded-full filter blur-2xl" />
                    <span className="text-white text-xl mb-3 z-10 border-b border-pink-500 max-w-max">Limited Access</span>
                    <span className="text-gray-400 z-10">NFT datasets and their respective valuations are hard to retreive</span>
                </div>
            </div>


        </div>

    )
}

export default Problems