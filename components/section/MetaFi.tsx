import Button from '../elements/Button'


const MetaFi = () => {

    return (
        <div className="min-h-screen relative w-full py-10 flex flex-col space-y-5 items-center">

            <h2 className="text-pink-600 w-full text-center mb-10 font-normal">
                Taking MetaFi to the next level!
            </h2>
            <a href="https://app.metagamehub.io/pools" target="_blank" className="h-full w-full max-w-6xl flex flex-col lg:flex-row p-7 pt-8 space-x-0 lg:space-x-24 space-y-5 lg:space-y-0 items-center bg-grey-darkest border border-white/5 rounded hover:scale-[1.01] transition duration-200 ease-linear">
                <h3 className="font-normal text-blue-500 w-full lg:w-1/4 min-w-[25%]">NFT Pools</h3>
                <p className="text-base sm:text-lg lg:text-xl">
                    Users can select a pool based on their NFTs, lock them in along with MGH as collateral and mint NFT Pool Tokens in return. This allows the user to diversify their NFT holdings and hedge their overall exposure.
                </p>
            </a>

            <a href='https://app.metagamehub.io/stake' target="_blank" className="h-full w-full max-w-6xl flex flex-col lg:flex-row p-7 pt-8 space-x-0 lg:space-x-24 space-y-5 lg:space-y-0 items-center bg-grey-darkest border border-white/5 rounded hover:scale-[1.01] transition duration-200 ease-linear">
                <h3 className="font-normal text-blue-500 w-full lg:w-1/4 min-w-[25%]">$MGH Staking</h3>
                <p className="text-base sm:text-lg lg:text-xl">
                    By staking MGH tokens users can passively earn rewards. The community can also earn Liquidity Pool tokens (LP) by providing MGH tokens and NPTs to the MGH/NPT Liquidity Pool. The LPs can be staked afterwards to farm additional MGH tokens.
                </p>
            </a>

            <div className="h-full w-full max-w-6xl flex flex-col lg:flex-row p-7 pt-8 space-x-0 lg:space-x-24 space-y-5 lg:space-y-0 items-center bg-grey-darkest border border-white/5 rounded hover:scale-[1.01] transition duration-200 ease-linear">
                <h3 className="font-normal text-blue-500 w-full lg:w-1/4 min-w-[25%]">Metaverse Staking</h3>
                <p className="text-base sm:text-lg lg:text-xl">
                    By staking MGH tokens users can passively earn rewards. The community can also earn Liquidity Pool tokens (LP) by providing MGH tokens and NPTs to the MGH/NPT Liquidity Pool. The LPs can be staked afterwards to farm additional MGH tokens.
                </p>
            </div>
            <div className='pt-5'>
                <Button text="Launch App" link="https://app.metagamehub.io" />
            </div>


        </div>
    )
}

export default MetaFi
