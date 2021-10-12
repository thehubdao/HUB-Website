const Problems = () => {

    return (

        <div className="relative flex flex-col w-full h-full space-y-12 justify-center items-center p-8">
            <h2 className={`text-transparent bg-clip-text bg-gradient-to-b z-10 from-pink-300 via-pink-500 to-pink-500`}>Industry Pain Points</h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10 justify-items-center">
                <div className="relative flex flex-col items-center p-2 max-w-xs">
                    <div className="absolute inset-1/4 w-2/4 h-2/4 bg-gradient-to-br from-pink-200 to-pink-800 rounded-full filter blur-2xl opacity-80" />
                    <h4 className="border-pink-500">Illiquidity</h4>
                    <p className="short-text">Lack of liquidity in the NFT market hampers the tradability and accessibility to this unique asset class</p>
                </div>

                <div className="relative flex flex-col items-center w-full p-2 max-w-xs">
                    <div className="absolute inset-1/4 w-2/4 h-2/4 bg-gradient-to-br from-pink-200 to-pink-800 rounded-full filter blur-2xl opacity-80" />
                    <h4 className="border-pink-500">Inefficient Utilization</h4>
                    <p className="short-text">Majority of NFTs have a limited earning potential. NFTs stored in wallets do not provide additional value until sold for a higher price</p>
                </div>

                <div className="relative flex flex-col items-center w-full p-2 max-w-xs">
                    <div className="absolute inset-1/4 w-2/4 h-2/4 bg-gradient-to-br from-pink-200 to-pink-800 rounded-full filter blur-2xl opacity-80" />
                    <h4 className="border-pink-500"> Inaccurate Valuation</h4>
                    <p className="short-text">Intransparent, inflexible and fragmented; Emotionally driven due to a lack of valuation models</p>
                </div>

                <div className="relative flex flex-col items-center w-full p-2 max-w-xs">
                    <div className="absolute inset-1/4 w-2/4 h-2/4 bg-gradient-to-br from-pink-200 to-pink-800 rounded-full filter blur-2xl opacity-80" />
                    <h4 className=" border-pink-500">Limited Access</h4>
                    <p className="short-text">NFT datasets and their respective valuations are hard to retrieve</p>
                </div>
            </div>


        </div>

    )
}

export default Problems