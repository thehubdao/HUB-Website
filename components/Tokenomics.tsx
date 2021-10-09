import Circle from "./Circle";


const Tokenomics = () => {


    return (

        <div className="text-center w-full min-h-screen" >
            <div className={`w-full flex flex-col lg:flex-row items-center justify-between p-8`}>


                {/* <div className="flex flex-col lg:flex-row justify-around items-start h-screen"> */}

                    <div className="flex flex-col h-full w-full lg:w-1/2 items-center justify-center">
                        <span className={`text-4xl sm:text-5xl xl:text-6xl font-bold text-transparent bg-clip-text bg-gradient-to-br z-10 from-blue-500 to-pink-500 mb-10`}>Tokenomics</span>
                        <div className="grid grid-cols-2 gap-10 place-content-center p-8">
                            <Circle />
                        </div>
                    </div>

                    <div className="relative flex flex-col w-full lg:w-1/2 h-full space-y-12 justify-center items-center">
                        {/* <div className="z-10 border-yellow-300 border h-full w-full absolute top-0 left-0 bg-black bg-opacity-40 backdrop-filter backdrop-blur-2xl " /> */}
                        <div className="relative flex flex-col items-center w-full max-w-xs p-2">
                            <div className="absolute inset-1/4 w-2/4 h-2/4 bg-gradient-to-br from-pink-500 to-blue-500 rounded-full filter blur-2xl opacity-75" />
                            <span className="text-white text-xl mb-3 p-1 z-10 border-b border-pink-500 max-w-max">Sustainable Utility</span>
                            <span className="text-gray-400 z-10">Access to the MGH ecosystem, incentives for members and contributors and integration in various process workflows. Further, decentralized token allocation is providing a fair and sustainable environment for the community.</span>
                        </div>

                        <div className="relative flex flex-col items-center w-full max-w-xs p-2">
                            <div className="absolute inset-1/4 w-2/4 h-2/4 bg-gradient-to-br from-pink-500 to-blue-500 rounded-full filter blur-2xl opacity-75" />
                            <span className="text-white text-xl mb-3 z-10 border-b border-pink-500 max-w-max">Governance</span>
                            <span className="text-gray-400 z-10">Governance over network rewards, pool proposals, the pricing oracle and algorithm as well as NFT curation such as managing LANDS in the open metaverse.</span>
                        </div>

                        <div className="relative flex flex-col items-center w-full max-w-xs p-2">
                            <div className="absolute inset-1/4 w-2/4 h-2/4 bg-gradient-to-br from-pink-500 to-blue-500 rounded-full filter blur-2xl opacity-75" />
                            <span className="text-white text-xl mb-3 z-10 border-b border-pink-500 max-w-max">Data</span>
                            <span className="text-gray-400 z-10">You will be able to leverage the MGH token to gain access to datasets from sophisticated pricing algorithms analyzing NFTs as well as the pricing oracle.</span>
                        </div>

                    </div>

                {/* </div> */}

            </div>
        </div>
    )
}

export default Tokenomics