import GovernanceIllustration from "./GovernanceIllustration";


const Governance = ({ scroll }: any) => {

    return (

        <>
            <div className="w-full min-h-screen py-20">
                <div className={` w-full flex flex-col lg:flex-row items-center justify-start p-8`}>

                    <div className="relative flex flex-col pb-0 sm:pb-10 lg:pb-0 w-full h-full justify-center items-center">
                        <GovernanceIllustration />
                    </div>

                    <div className="flex flex-col items-center lg:items-end 2xl:items-center text-center lg:text-right 2xl:text-center w-full">

                        <h2 className={`text-transparent bg-clip-text bg-gradient-to-br from-blue-500 to-pink-500 mb-5`}>MGH Governance</h2>
                        <p className="long-text">Members of the MGH DAO have the power to vote on which NFT Pools are created, the terms of each pool (e.g., how much MGH has to be staked to access them) and the management of the DAO´s funds.</p>
                        
                        <div className="max-w-xs self-center lg:self-end 2xl:self-center mt-10 button">
                            <a href="https://snapshot.org/#/metagamehub.eth" target="_blank">
                                <span className="button-text">Learn more</span>
                            </a>
                        </div>
                    </div>

                </div>
            </div></>
    )
}

export default Governance