import NPTIllustration from "./NPTIllustration";


const NPT = ({ scroll }: any) => {

    return (

        <>
            <div className="w-full min-h-screen py-20">
                <div className={`w-full flex flex-col-reverse lg:flex-row items-center justify-start p-8`}>

                    <div className="flex flex-col text-center items-center lg:items-start 2xl:items-center lg:text-left 2xl:text-center w-full">
                        <p className={` text-4xl sm:text-5xl xl:text-6xl py-1 font-bold text-transparent bg-clip-text bg-gradient-to-b from-blue-500 to-pink-500 mb-10`}>Making NFTs fungible</p>
                        <p className="text-gray-400 text-lg lg:text-lg xl:text-xl max-w-md lg:max-w-2xl">Users can select a pool based on their NFTs, lock them in along with MGH as collateral and mint NFT Pool Tokens in return. This allows the user to diversify their NFT holdings and hedge their overall exposure.</p>
                        <p className="text-gray-400 text-lg lg:text-lg xl:text-xl mt-5 max-w-md lg:max-w-2xl">By staking MGH tokens users can passively earn rewards. The community can also earn Liquidity Pool tokens (LP) by providing MGH tokens and NPTs to the MGH/NPT Liquidity Pool. The LPs can be staked afterwards to farm MGH additional MGH tokens.</p>

                    </div>

                    <div className="relative flex flex-col pb-10 lg:pb-0 w-full h-full justify-center items-center">
                        <NPTIllustration />
                    </div>

                </div>
            </div></>
    )
}

export default NPT