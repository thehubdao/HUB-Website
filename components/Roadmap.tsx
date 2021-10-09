import Milestone from "./Milestone";


const Roadmap = ({ scroll }: any) => {

    return (

        <>
            <div className="w-full min-h-screen py-20">
                <div className={`w-full flex flex-col lg:flex-row items-center justify-start p-8`}>
                    <p className={`text-4xl sm:text-5xl md:text-6xl font-bold text-gray-300 text-center lg:text-left 2xl:text-center`}>MGH DAO public membership is scheduled for the <span className={`text-transparent bg-clip-text bg-gradient-to-br z-10 from-blue-500 to-pink-500`}>14.10.21</span></p>
                    {/* <span className={`col-span-full text-5xl sm:text-6xl font-bold text-transparent bg-clip-text bg-gradient-to-b z-10 from-blue-500 to-pink-500 mb-10`}>MGH DAO public launch is scheduled for the 14.10.21</span> */}

                    <div className="relative flex flex-col justify-center py-20 w-full items-center transform -translate-x-5 lg:translate-x-0">
                        {/* <Fade> */}
                            <div className="absolute inset-y-1/6 w-px h-4/5 bg-gradient-to-br from-blue-500 to-pink-500" />
                        {/* </Fade> */}
                        {/* {scroll > 18500 && ( */}
                        <Milestone date="Q3 21" text="Early Membership" />
                        {/* )} */}

                        {/* {scroll > 19000 && ( */}
                       
                                <Milestone date="Q3 21" text="Meta NFT-Series" />
            
                        {/* )} */}
                        {/* {scroll > 20000 && ( */}
                    
                                <Milestone date="Q4 21" text="Public Membership" />
             
                        {/* )}
                        {scroll > 21000 && (
                     */}
                                <Milestone date="Q2 22" text="NFT Curation" />
               
                        {/* )}
                        {scroll > 22000 && ( */}
     
                                <Milestone date="Q3 22" text="NFT Price Oracle" />
               
                        {/* )}
                        {scroll > 23000 && ( */}
                       
                                <Milestone date="Q4 22" text="NFT Pool Rollout" />
                    
                        {/* )}
                        {scroll > 24000 && ( */}
        
                                <Milestone date="Q4 22" text="Metaverse Expansion" />
     
                        {/* )} */}


                        {/* <Milestone date="Q3 22" text="NFT Price Oracle" />
                        <Milestone date="Q4 22" text="NFT Pool Rollout" />
                        <Milestone date="Q4 22" text="Metaverse Expansion" /> */}
                    </div>

                </div>
            </div></>
    )
}

export default Roadmap