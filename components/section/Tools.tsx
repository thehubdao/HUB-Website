import Link from "next/link"

import Button from "../elements/Button"


const Tools = () => {
    return (
        <div className="min-h-screen w-full py-10 px-10 flex items-center justify-between space-x-20">

            <div className="flex flex-col space-y-5 w-1/2">
                <div className='flex flex-col p-7 px-10 bg-grey-darkest hover:scale-[1.01] transition duration-200 ease-linear border-white border border-opacity-5 rounded'>
                    <p className='font-normal mb-5 text-4xl text-blue-500'>Dataverse Tools</p>
                    <p className='text-lg flex-grow'>
                        Metaverse Agnostic Asset Valuations via the MGH DAO dApp (with more than 60,000 requests thus far), on-chain valuation data via the MGH DAO’s own Chainlink Oracle Node and sophisticated datasets via the OCEAN Marketplace.
                    </p>
                </div>

                <div className='flex flex-col p-7 px-10 bg-grey-darkest hover:scale-[1.01] transition duration-200 ease-linear border-white border border-opacity-5 rounded'>
                    <p className='font-normal mb-5 text-4xl text-blue-500'>MetaFi Tools</p>
                    <p className='text-lg flex-grow'>
                        MGH DAO offers $MGH staking on two networks (Ethereum, Polygon). Soon you will be able to stake your favorite metaverse fungible and non fungible tokens and earn additional $MGH. Further, MGH DAO is constantly developing new MetaFi tools like NFT Pools (Q1 2022), perpetual LAND swaps (Q4 2022), and interoperable ID Aggregator (Q4 2022).
                    </p>
                </div>
            </div>

            <div className="flex flex-col space-y-10 w-1/2">
                <h1 className="text-left max-w-2xl font-normal">Intuitive tools to manage the Metaverse</h1>
                <div className="flex items-center space-x-10 flex-grow">
                    <Button text="Launch App" link="https://app.metagamehub.io" />
                    <Link href="/tools">
                        <a className="text-xl text-pink-500 hover:scale-105 transition ease-linear duration-200">Learn more</a>
                    </Link>
                </div>

            </div>

        </div>
    )
}

export default Tools
