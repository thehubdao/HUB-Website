import Button from '../elements/Button'


const MetaFi = () => {

    return (
        <div className="min-h-screen relative w-full py-10 px-20 flex flex-col space-y-5 items-center">

            <p className="text-7xl text-pink-600 w-full text-center mb-10">
                Taking MetaFi to the next level!
            </p>
            <a href="https://app.metagamehub.io/pools" target="_blank" className="h-full w-full flex p-7 pt-8 items-center space-x-24 bg-grey-darkest border border-white/5 rounded hover:scale-[1.01] transition duration-200 ease-linear">
                <h3 className="font-normal text-blue-500 w-[25%] text-5xl">NFT Pools</h3>
                <p className="text-xl max-w-3xl">
                    Users can select a pool based on their NFTs, lock them in along with MGH as collateral and mint NFT Pool Tokens in return. This allows the user to diversify their NFT holdings and hedge their overall exposure.
                </p>
            </a>

            <a href='https://app.metagamehub.io/stake' target="_blank" className="h-full w-full flex p-7 pt-8 items-center space-x-24 bg-grey-darkest border border-white/5 rounded hover:scale-[1.01] transition duration-200 ease-linear">
                <h3 className="font-normal text-blue-500 w-[25%] text-5xl">$MGH Staking</h3>
                <p className="text-xl max-w-3xl">
                    By staking MGH tokens users can passively earn rewards. The community can also earn Liquidity Pool tokens (LP) by providing MGH tokens and NPTs to the MGH/NPT Liquidity Pool. The LPs can be staked afterwards to farm additional MGH tokens.
                </p>
            </a>

            <div className="h-full w-full flex p-7 pt-8 items-center space-x-24 bg-grey-darkest border border-white/5 rounded hover:scale-[1.01] transition duration-200 ease-linear">
                <h3 className="font-normal text-blue-500 w-[25%] text-5xl">Metaverse Staking</h3>
                <p className="text-xl max-w-3xl ">
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
