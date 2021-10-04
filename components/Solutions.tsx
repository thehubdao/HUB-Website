const Solutions = () => {

    return (

        <div className="grid grid-cols-1 sm:grid-cols-2 h-full w-full lg:w-1/2 gap-5 place-content-start space-y-5 p-8">
            {/* <Fade direction="up" cascade delay={1000}> */}
            <span className={`col-span-full text-5xl sm:text-6xl font-bold text-transparent bg-clip-text bg-gradient-to-b z-10 from-gray-200  to-blue-500`}>Solution</span>
            <p className="col-span-full text-gray-400 text-sm lg:text-base z-10">The MGH DAO does its upmost efforts to foster the convergence of NFTs, DeFi, AI and the Metaverse by building an ecosystem of NFT curation and providing the necessary infrastructure to allow collaborative governance and transparent accessibility to the rapidly growing NFT market.
                MGH strives to increase the adoption of NFTs through the implementation of MGH DAO NFT pool and innovative NFT Pool tokens which track the Total Value Locked (TVL) in the respective pools.</p>



            {/* <div className="flex z-10 flex-col p-2 h-full w-full rounded-lg bg-gradient-to-br from-blue-500 via-pink-500 to-yellow-500 cursor-pointer hover:shadow-button transform hover:scale-105 transition ease-in-out duration-500">
                <div className="z-0 h-full w-full absolute top-0 left-0 rounded-lg bg-black bg-opacity-40 backdrop-filter backdrop-blur-3xl" />
                <span className="text-white text-xl mb-6 z-10">Accessibility</span>
                <span className="text-black z-10">By implementing state-of-the-art NFT pools while allowing NFT stakers to keep ownership over their assets</span>
            </div> */}
                        {/* <div className="flex z-10 flex-col p-2 h-full w-full  rounded-lg bg-gradient-to-br from-pink-300 to-red-700 cursor-pointer hover:shadow-button transform hover:scale-105 transition ease-in-out duration-500">
                <div className="z-0 h-full w-full absolute top-0 left-0 rounded-lg bg-black bg-opacity-40 backdrop-filter backdrop-blur-3xl" />
                <span className="text-white text-xl mb-6 z-10">Fractionalization</span>
                <span className="text-gray-400 z-10">NFT Pool Tokens allow community members to diversify their holdings and gain exposure to multiple virtual worlds</span>
            </div>

            <div className="flex z-10 flex-col p-2 h-full w-full  rounded-lg bg-gradient-to-br from-pink-300 to-red-700 cursor-pointer hover:shadow-button transform hover:scale-105 transition ease-in-out duration-500">
                <div className="z-0 h-full w-full absolute top-0 left-0 rounded-lg bg-black bg-opacity-40 backdrop-filter backdrop-blur-3xl" />
                <span className="text-white text-xl mb-6 z-10">Incentivization</span>
                <span className="text-gray-400 z-10">By staking or providing liquidity, MGH members and NFT holders can generate additional rewards</span>
            </div>
            <div className="flex z-10 flex-col p-2 h-full w-full  rounded-lg bg-gradient-to-br from-pink-300 to-red-700 cursor-pointer hover:shadow-button transform hover:scale-105 transition ease-in-out duration-500">
                <div className="z-0 h-full w-full absolute top-0 left-0 rounded-lg bg-black bg-opacity-40 backdrop-filter backdrop-blur-3xl" />
                <span className="text-white text-xl mb-6 z-10">AI Price Oracle</span>
                <span className="text-gray-400 z-10">Providing transparent and fair NFT valuation through AI, Big Data and Smart Contracts</span>
            </div> */}

            <div className="relative flex flex-col items-center w-full p-2">
                <div className="absolute inset-1/4 w-2/4 h-2/4 bg-gradient-to-br from-blue-300 to-blue-900 rounded-full filter blur-2xl" />
                <span className="text-white text-xl mb-3 z-10 border-b border-blue-500 max-w-max">Accessibility</span>
                <span className="text-gray-400 z-10">By implementing state-of-the-art NFT pools while allowing NFT stakers to keep ownership over their assets</span>
            </div>
            <div className="relative flex flex-col items-center w-full p-2">
                <div className="absolute inset-1/4 w-2/4 h-2/4 bg-gradient-to-br from-blue-300 to-blue-900 rounded-full filter blur-2xl" />
                <span className="text-white text-xl mb-3 z-10 border-b border-blue-500 max-w-max">Fractionalization</span>
                <span className="text-gray-400 z-10">NFT Pool Tokens allow community members to diversify their holdings and gain exposure to multiple virtual worlds</span>
            </div>
            <div className="relative flex flex-col items-center w-full p-2">
                <div className="absolute inset-1/4 w-2/4 h-2/4 bg-gradient-to-br from-blue-300 to-blue-900 rounded-full filter blur-2xl" />
                <span className="text-white text-xl mb-3 z-10 border-b border-blue-500 max-w-max">Incentivization</span>
                <span className="text-gray-400 z-10">By staking or providing liquidity, MGH members and NFT holders can generate additional rewards</span>
            </div>
            <div className="relative flex flex-col items-center w-full p-2">
                <div className="absolute inset-1/4 w-2/4 h-2/4 bg-gradient-to-br from-blue-300 to-blue-900 rounded-full filter blur-2xl" />
                <span className="text-white text-xl mb-3 z-10 border-b border-blue-500 max-w-max">AI Price Oracle</span>
                <span className="text-gray-400 z-10">Providing transparent and fair NFT valuation through AI, Big Data and Smart Contracts</span>
            </div>

            {/* </Fade> */}
        </div>
    )
}

export default Solutions