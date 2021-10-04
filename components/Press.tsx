import BlogCard from "./BlogCard"


const Press = () => {

    return (
        <div className="w-full min-h-screen py-20" id="news">
            <div className={`w-full flex flex-col lg:flex-row items-center justify-start p-8`}>

                <div className="flex flex-col text-center lg:text-left  items-center lg:items-start   w-full lg:w-2/5">
                    <p className={`text-5xl sm:text-6xl lg:text-7xl font-bold text-gray-300 text-center lg:text-left mb-10`}>Stay updated!</p>
                    <p className="text-gray-400">Hello Universe! Join the MGH newsletter and stay on point about news, public launch, NFT drops and more.</p>

                    <div className="relative flex items-center mt-10 w-full max-w-sm">
                        <input type="email" placeholder="Email address" className="bg-transparent w-full text-white py-3 px-4 focus:outline-none border rounded-full placeholder-white placeholder-opacity-75" />
                        <button className="absolute bg-gray-200 right-0 h-4/5 border rounded-full mr-1  w-1/6">
                            <span className="text-black">Join</span>
                        </button>
                    </div>
                </div>

                <div className="w-full h-full xl:h-80 lg:w-3/5 grid grid-cols-1 md:grid-cols-2 xl:grid-rows-5 xl:grid-cols-1 place-content-stretch justify-items-center gap-5 p-0 py-8 sm:pl-8">
                    <BlogCard classes="z-0 xl:scale-85 xl:opacity-90 xl:bg-gray-300" date="Aug 25" link="https://thedac.medium.com/announcing-mgh-dao-token-sale-the-new-token-to-make-a-passive-income-from-your-nfts-38426dddbe83" title="Big news coming: MGH is partnering with the AI expert Intelligent Trading Machines to develop a unique NFT price oracle!" article="Algorithms are better people. Better than probation officers, study counselors or couple therapists, they predict which criminal will go back to jail, what grades freshmen will have or whether a marriage will fail or not..." />
                    <BlogCard classes="z-10 xl:scale-90 xl:opacity-90 xl:bg-gray-300" date="Sep 1" link="https://thedac.medium.com/presenting-the-dac-your-one-stop-solution-to-successfully-build-launch-and-scale-your-dao-8339d56d2753" title="Announcing new partnership between MGH and MyReality DAO to develop amazing games for The Sandbox" article="The Ethiopians say, “If spiders weave together, they can bind a lion.” That’s why Batman trusted Robin. Bud Spencer only hit it off with Terence Hill — and R2D2 and C-3PO constantly talked past each other..." />
                    <BlogCard classes="z-20 xl:scale-95 xl:opacity-90 xl:bg-gray-300" date="Sep 7" link="https://thedac.medium.com/announcing-new-partnership-between-mgh-and-myreality-dao-to-develop-amazing-games-for-the-sandbox-3f1c3daa2515" title="Presenting The DAC… your one-stop solution to successfully build, launch and scale your DAO" article="It’s the morning meeting. The CEO steps in and with a sad expression on his face he says: “I’m sorry to tell you this: But we failed — totally.” “WHAT?” The whole team shakes their heads in disbelief. “We’ve not even started!”..." />
                    <BlogCard classes="z-30 xl:scale-100" date="Sep 21" link="https://thedac.medium.com/big-news-coming-mgh-is-partnering-with-the-ai-expert-intelligent-trading-machines-to-develop-a-76c5a10dc015" title="Announcing MGH DAO’s Token Generation Event — Making NFTs Accessible to Everyone" article="Lao Tzu says: “A journey of a thousand miles begins with a single step” And now is the time to make your first step — the first step to stake your NFTs and generate network rewards with them..."/>

                    <div className="col-span-full z-50 max-w-xs m-auto text-center rounded-full px-6 py-2 bg-gray-400 bg-opacity-10 transform xl:translate-y-36 hover:scale-105 transition duration-300 ease-in-out hover:shadow-color border border-white border-opacity-20 hover:border-opacity-70 cursor-pointer">
                        <a href="https://thedac.medium.com" target="_blank">
                            <span className="text-gray-200 ">Read all Articles</span>
                        </a>
                    </div>
                </div>

            </div>
        </div>
    )
}

export default Press