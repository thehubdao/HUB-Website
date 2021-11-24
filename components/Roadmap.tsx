import Milestone from "./Milestone";


const Roadmap = () => {

    return (

        <>
            <div className="w-full min-h-screen py-20">
                <div className={`w-full flex flex-col lg:flex-row items-center justify-start p-8`}>
                    <div className="flex flex-col items-center lg:items-start 2xl:items-center">
                        <p className={`text-4xl sm:text-5xl md:text-6xl text-gray-200 text-center lg:text-left 2xl:text-center leading-tight sm:leading-tight md:leading-tight lg:leading-tight`}>MGH staking is going live on the <span className={`text-transparent bg-clip-text bg-gradient-to-br z-50 from-blue-500 to-pink-500`}>01.12.2021</span></p>

                        {/* <a href="https://www.thedap.space/membership/mgh" target="_blank" className="button mt-5">
                            <p className="button-text">Join public membership</p>
                        </a> */}
                        <a href="https://app.metagamehub.io" target="_blank" className={`relative mt-5 sm:mt-10 w-52 flex items-center transform scale-75 sm:scale-85 lg:scale-90 xl:scale-100 justify-center cursor-pointer text-gray-200 font-medium text-xl rounded-3xl py-3 px-5 bg-gray-500 bg-opacity-80 group shadow-colorbottom overflow-hidden transition-all ease-in-out duration-500`}>
                            <div className="h-full w-full absolute bg-gradient-to-br from-grey-dark to-grey-darkest rounded-xl blur-none group-hover:blur-md transition-all ease-in-out duration-300" />
                            <span className="pt-1 z-10">Launch App</span>
                        </a>
                    </div>
                    {/* <p className={`col-span-full text-5xl sm:text-6xl font-bold text-transparent bg-clip-text bg-gradient-to-b z-10 from-blue-500 to-pink-500 mb-10`}>MGH staking going live on the 01.12.2021</p> */}

                    <div className="relative flex flex-col justify-center py-20 w-screen sm:w-full items-center transform -translate-x-8 xl:-translate-x-16">

                        <div className="absolute inset-1/6 w-px h-4/5 bg-gradient-to-br from-blue-500 to-pink-500" />

                        <Milestone date="Q4 21" text="MGH Liquidity Pools on DEXs" />
                        <Milestone date="Q4 21" text="Metaverse NFTs curation" />
                        <Milestone date="Q1 22" text="NFT Pools MVP" />
                        <Milestone date="Q2 22" text="NFT valuation interface" />
                        <Milestone date="Q3 22" text="DAO Launch" />
                        <Milestone date="Q4 22" text="NFT Pools and respective NPTs" />

                    </div>

                </div>
            </div></>
    )
}

export default Roadmap