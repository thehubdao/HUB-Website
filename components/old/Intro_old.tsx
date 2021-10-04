import Image from "next/image"
import space_img from "../public/images/space.png"

const Intro = ({scroll}: any) => {

    return (
        <div className="text-center w-full" style={{height: "6000px"}}>
        <div className={`sticky top-0 h-screen w-full`}>

            <div className={`absolute top-0 h-screen w-full flex justify-center items-center`}>
                <Image src={space_img} layout="fill" className="animate__animated animate__zoomIn space-img z-0"/>
            </div>

            <div className={`absolute top-0 h-screen w-full z-10 flex justify-center items-center`}>
                <span className={`${scroll > 10 ? "transform -translate-y-36 lg:text-4xl" : "lg:text-7xl"} transition-all duration-1000  text-lg sm:text-xl md:text-2xl font-bold text-transparent bg-clip-text bg-gradient-to-b from-yellow-500 via-pink-500 to-red-500`}>MetaGameHub</span>
            </div>

            <div className={`absolute top-0 h-screen w-full z-10 flex justify-center items-center transition-all duration-500 ${scroll > 10 ? "animate__animated animate__zoomIn animate__delay-1s" : "hidden"}`}>
                <span className={`w-1/2 text-3xl leading-normal text-gray-200 ${scroll > 10 ? scroll < 2000 ? "block animate__animated animate__zoomIn animate_delay-0s" : "animate__animated animate__zoomOut animate_slower hidden" : "hidden"}`}>The MGH DAO will be responsible for acquiring and curating multiple metaverse-related NFTs while allowing its community to collaboratively manage them</span>
                <span className={`w-1/2 text-3xl leading-normal text-gray-200 ${scroll > 2000 ? scroll < 4000 ? "block animate__animated animate__zoomIn animate_delay-0s" : "animate__animated animate__zoomOut animate_slower hidden" : "hidden"}`}>Disrupting the metaverse, a network of shared virtual spaces that are constantly evoling, unlocking new kinds of economies</span>
                <span className={`w-1/2 text-3xl leading-normal text-gray-200 ${scroll > 4000 ? "block animate__animated animate__zoomIn animate_delay-0s" : "hidden"}`}>Providing accessibility and transparent NFT valuation</span>
            </div>

        </div>
    </div>
    )
}

export default Intro