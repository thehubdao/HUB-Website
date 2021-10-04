const Problems = () => {

    return (

        // <div className="grid grid-cols-1 h-full border w-full space-y-10 place-content-start p-8">
        //     {/* <Fade direction="up" cascade delay={1000}> */}
        //     <span className={` text-5xl sm:text-7xl font-bold text-transparent bg-clip-text bg-gradient-to-b z-10 from-blue-500 to-pink-500`}>Problems</span>

        //         <div className="relative flex flex-col items-center w-full sm:w-1/2 justify-self-center p-2">
        //             <div className="absolute inset-1/5 w-3/5 h-3/5 bg-gradient-to-br from-pink-500 to-blue-500 rounded-full" />
        //             <span className="text-white text-xl mb-3 p-1 z-10 border-b border-pink-500 max-w-max">Illiquidity</span>
        //             <span className="text-gray-400 z-10">Lack of liquidity in the NFT market hampers the tradability and accessibility to this unique asset class</span>
        //         </div>

        //         <div className="relative flex flex-col items-center w-full sm:w-1/2 justify-self-center p-2">
        //             <div className="absolute inset-1/5 w-3/5 h-3/5 bg-gradient-to-br from-pink-500 to-blue-500 rounded-full" />
        //             <span className="text-white text-xl mb-3 z-10 border-b border-pink-500 max-w-max">Inefficient Utilization</span>
        //             <span className="text-gray-400 z-10">Majority of NFTs have a limited earning potential. NFTs stored in wallets do not provide additional value until sold for a higher price</span>
        //         </div>

        //         <div className="relative flex flex-col items-center w-full sm:w-1/2 justify-self-center p-2">
        //             <div className="absolute inset-1/5 w-3/5 h-3/5 bg-gradient-to-br from-pink-500 to-blue-500 rounded-full" />
        //             <span className="text-white text-xl mb-3 z-10 border-b border-pink-500 max-w-max">Inaccurate Valuation</span>
        //             <span className="text-gray-400 z-10">Intransparent, inflexible and fragmented; Emotionally driven due to a lack of valuation models</span>
        //         </div>

        //     {/* </Fade> */}
        // </div>

        <div className="relative flex flex-col w-full lg:w-1/2 h-full space-y-12 justify-center items-center p-8">
            <span className={` text-5xl sm:text-6xl font-bold text-transparent bg-clip-text bg-gradient-to-b z-10 from-gray-200 to-pink-600`}>Problems</span>

            <div className="relative flex flex-col items-center w-full sm:w-2/4 p-2">
                <div className="absolute inset-1/4 w-2/4 h-2/4 bg-gradient-to-br from-pink-200 to-pink-800 rounded-full filter blur-2xl" />
                <span className="text-white text-xl mb-3 p-1 z-10 border-b border-pink-500 max-w-max">Illiquidity</span>
                <span className="text-gray-400 z-10">Lack of liquidity in the NFT market hampers the tradability and accessibility to this unique asset class</span>
            </div>

            <div className="relative flex flex-col items-center w-full sm:w-2/4 p-2">
                <div className="absolute inset-1/4 w-2/4 h-2/4 bg-gradient-to-br from-pink-200 to-pink-800 rounded-full filter blur-2xl" />
                <span className="text-white text-xl mb-3 z-10 border-b border-pink-500 max-w-max">Inefficient Utilization</span>
                <span className="text-gray-400 z-10">Majority of NFTs have a limited earning potential. NFTs stored in wallets do not provide additional value until sold for a higher price</span>
            </div>

            <div className="relative flex flex-col items-center w-full sm:w-2/4 p-2">
                <div className="absolute inset-1/4 w-2/4 h-2/4 bg-gradient-to-br from-pink-200 to-pink-800 rounded-full filter blur-2xl" />
                <span className="text-white text-xl mb-3 z-10 border-b border-pink-500 max-w-max">Inaccurate Valuation</span>
                <span className="text-gray-400 z-10">Intransparent, inflexible and fragmented; Emotionally driven due to a lack of valuation models</span>
            </div>

        </div>

    )
}

export default Problems