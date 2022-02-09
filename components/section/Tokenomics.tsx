import dynamic from 'next/dynamic'
import Button from '../elements/Button'

const PriceChart = dynamic(
    () => import('../section-element/PriceChart'),
    { ssr: false }
)

const Tokenomics = ({ tokenData }: any) => {

    return (

        <div className="min-h-screen relative w-full py-10 px-10 flex flex-col items-center">
            <h1 className={`text-transparent bg-clip-text bg-gradient-to-br from-pink-600 max-w-max to-blue-500`}>MGH Token</h1>
            <div className='flex space-x-20 items-stretch'>
                <div className='flex flex-col '>
                    <h3 className='font-normal mb-1'>Sustainable Utility</h3>
                    <p className='mb-10'>
                        Access to the MGH ecosystem, incentives for members and contributors and integration in various process workflows. Further, decentralized token allocation is providing a fair and sustainable environment for the community.
                    </p>
                    <Button text='Datasets' link='https://market.oceanprotocol.com/asset/did:op:8331D69bF312604542D5f5f41D859dA27568B7cd' />
                </div>

                <div className='border border-pink-600'/>

                <div className='flex flex-col'>
                    <h3 className='font-normal'>Multi-Layer Governance</h3>
                    <p className=''>
                        Access to the MGH ecosystem, incentives for members and contributors and integration in various process workflows. Further, decentralized token allocation is providing a fair and sustainable environment for the community.
                    </p>
                    <Button text='Voting' link='https://snapshot.org/#/metagamehub.eth' />
                </div>

            </div>


            <img src="/images/Logos/MGH/mgh_logo.png" className="grayscale h-1/2 absolute top-0 right-0 opacity-[0.15]" />

            <div className="relative flex flex-col md:flex-row space-x-0 md:space-x-10 xl:space-x-20 space-y-10 md:space-y-0 w-full h-full justify-center items-center md:items-start text-center p-3 xs:p-8">
                <div className="relative flex flex-col items-center w-full max-w-xs p-2">
                    <div className="absolute inset-1/4 w-2/4 h-2/4 bg-gradient-to-br from-pink-500 to-blue-500 rounded-full filter blur-2xl opacity-60" />
                    <h4 className="border-pink-500">Sustainable Utility</h4>
                    <p className="short-text">Access to the MGH ecosystem, incentives for members and contributors and integration in various process workflows. Further, decentralized token allocation is providing a fair and sustainable environment for the community.</p>
                </div>

                <div className="relative flex flex-col items-center w-full max-w-xs p-2">
                    <div className="absolute inset-1/4 w-2/4 h-2/4 bg-gradient-to-br from-pink-500 to-blue-500 rounded-full filter blur-2xl opacity-60" />
                    <h4 className="border-pink-500">Governance</h4>
                    <p className="short-text">Governance over network rewards, pool proposals, the pricing oracle and algorithm as well as NFT curation such as managing LANDS in the open metaverse.</p>
                </div>

                <div className="relative flex flex-col items-center w-full max-w-xs p-2">
                    <div className="absolute inset-1/4 w-2/4 h-2/4 bg-gradient-to-br from-pink-500 to-blue-500 rounded-full filter blur-2xl opacity-60" />
                    <h4 className="border-pink-500">Data</h4>
                    <p className="short-text">You will be able to leverage the MGH token to gain access to datasets from sophisticated pricing algorithms analyzing NFTs as well as the pricing oracle.</p>
                </div>
            </div>

        </div>
    )
}

export default Tokenomics
