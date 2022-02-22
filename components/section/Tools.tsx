import Link from "next/link"

import Button from "../elements/Button"


const Tools = () => {
    return (
        <div className="min-h-screen w-full py-10 px-5 sm:px-10 flex flex-col-reverse lg:flex-row items-center justify-between space-x-0 lg:space-x-10 xl:space-x-20">

            <div className="flex flex-col space-y-10 lg:space-y-5 w-full lg:w-1/2 max-w-2xl">
                <div className='flex flex-col p-5 bg-grey-darkest items-center lg:items-start text-center lg:text-left hover:scale-[1.01] transition duration-200 ease-linear border-white border border-opacity-5 rounded'>
                    <p className='font-normal mb-5 text-4xl text-blue-500'>Dataverse Tools</p>
                    <p className='text-base sm:text-lg flex-grow'>
                        Metaverse Agnostic Asset Valuations via the MGH DAO dApp (with more than 60,000 requests thus far), on-chain valuation data via the MGH DAO’s own Chainlink Oracle Node and sophisticated datasets via the OCEAN Marketplace.
                    </p>
                </div>

                <div className='flex flex-col p-5 bg-grey-darkest items-center lg:items-start text-center lg:text-left hover:scale-[1.01] transition duration-200 ease-linear border-white border border-opacity-5 rounded'>
                    <p className='font-normal mb-5 text-4xl text-blue-500'>MetaFi Tools</p>
                    <p className='text-base sm:text-lg flex-grow'>
                        MGH DAO offers $MGH staking on two networks (Ethereum, Polygon). Soon you will be able to stake your favorite metaverse fungible and non fungible tokens and earn additional $MGH. Further, MGH DAO is constantly developing new MetaFi tools like NFT Pools (Q1 2022), perpetual LAND swaps (Q4 2022), and interoperable ID Aggregator (Q4 2022).
                    </p>
                </div>
            </div>

            <div className="flex flex-col items-center space-y-5 lg:space-y-10 w-full lg:w-1/2 pb-20 lg:pb-0">
                <h1 className="text-center lg:text-left max-w-2xl font-normal">Intuitive tools to manage the Metaverse</h1>
                <div className="flex justify-center lg:justify-start items-center space-x-0 sm:space-x-10 flex-grow w-full">
                    <Button text="Launch App" link="https://app.metagamehub.io" />
                    <Link href="/tools">
                        <a className="text-lg sm:text-xl text-pink-600 hover:scale-105 transition ease-linear min-w-max duration-200">Learn more</a>
                    </Link>
                </div>

            </div>

        </div>
    )
}

export default Tools
