import GovernanceIllustration from "./GovernanceIllustration";


const Governance = ({ scroll }: any) => {

    return (

        <>
            <div className="w-full min-h-screen py-20">
                <div className={` w-full flex flex-col lg:flex-row items-center justify-start p-8`}>

                    <div className="relative flex flex-col w-3/5 justify-center pb-20 xl:pb-0 items-center">
                        <GovernanceIllustration />
                    </div>

                    <div className="flex flex-col items-center lg:items-start 2xl:items-center text-center lg:text-right 2xl:text-center w-full lg:w-2/5">
                        <p className={` text-4xl sm:text-5xl xl:text-6xl font-bold text-transparent bg-clip-text bg-gradient-to-br from-blue-500 to-pink-500 mb-10`}>MGH Governance</p>
                        <p className="text-gray-400 text-lg lg:text-lg xl:text-xl max-w-md lg:max-w-2xl">Holders of the MGH DAO have the power to vote on which NFT Pools are created, the terms of each pool (e.g., how much MGH has to be staked to access them) and the management of the DAO´s funds.</p>
                        
                        <div className="max-w-xs self-center lg:self-end 2xl:self-center mt-10 text-center justify-self-start rounded-full px-6 py-2 bg-gray-400 bg-opacity-10 transform hover:scale-105 transition duration-300 ease-in-out hover:shadow-color border border-white border-opacity-20 hover:border-opacity-70 cursor-pointer">
                            <a href="https://snapshot.org/#/metagamehub.eth" target="_blank">
                                <span className="text-gray-200 ">Learn more</span>
                            </a>
                        </div>
                    </div>

                </div>
            </div></>
    )
}

export default Governance