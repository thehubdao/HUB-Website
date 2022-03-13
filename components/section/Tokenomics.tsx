import Link from 'next/link'

import Button from '../elements/Button'


const Tokenomics = () => {

    return (

        <div className="relative w-full py-10 px-5 sm:px-10 flex flex-col items-center justify-center">

            <h1 className={`text-transparent bg-clip-text bg-gradient-to-b from-pink-600 max-w-max to-blue-600 font-normal`}>MGH Token</h1>
            <Link href={'/token'}>
                <a className='text-gray-200 hover:text-blue-500 transition ease-in-out duration-300 pt-1 text-lg sm:text-xl lg:text-2xl text-center'>Find detailed Information</a>
            </Link>

            <div className='flex flex-col lg:flex-row space-x-0 lg:space-x-5 space-y-10 lg:space-y-0 items-center lg:items-stretch mt-10'>

                <div className='flex flex-col items-center w-full lg:w-1/2 max-w-2xl text-center p-5 bg-grey-darkest hover:scale-[1.01] transition duration-200 ease-linear border-white border border-opacity-5 rounded'>
                    <p className='font-normal mb-5 text-4xl text-blue-500'>Sustainable Utility</p>
                    <p className='mb-10 text-base lg:text-lg flex-grow'>
                        Getting access to metaverse LAND valuation datasets on the Ocean marketplace. Further, the MGH Token is going to be payment method for subscriptions of MGH Metaverse Assets, Infrastructure & Applications. A big part of the generated revenues are autonomously bought back and burned resulting in a deflanionary $MGH supply. The rest is used to fund further operations.
                    </p>
                    <Button text='Datasets' link='https://market.oceanprotocol.com/asset/did:op:8331D69bF312604542D5f5f41D859dA27568B7cd' />
                </div>

                <div className='flex flex-col items-center w-full lg:w-1/2 max-w-2xl text-center p-5 bg-grey-darkest hover:scale-[1.01] transition duration-200 ease-linear border-white border border-opacity-5 rounded'>
                    <h3 className='font-normal mb-5 text-4xl text-blue-500'>Multi-Layer Governance</h3>
                    <p className='mb-10 text-base lg:text-lg flex-grow'>
                        Governance of LAND aquisition and monetization, MGH Metaverse and Dataverse tools, working group operations as well as the DeFi - Metaverse convergence and respective applications like NFT Pools, NFT Staking and NFT Pool Tokens.
                        MGH DAO uses Snapshot for the voting on governance proposals.
                    </p>
                    <Button text='Voting' link='https://snapshot.org/#/metagamehub.eth' />
                </div>

            </div>

        </div>
    )
}

export default Tokenomics
