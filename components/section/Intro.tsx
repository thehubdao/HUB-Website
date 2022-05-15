import "animate.css"
import Image from "next/image"
import { FaDiscord, FaTwitter } from "react-icons/fa";


const Intro = () => {

    return (
        <div className="w-full h-screen relative flex justify-end">

            <div className={`h-screen relative w-full xl:w-4/5 opacity-75`}>
                <Image src="/images/webp/space-2.webp" layout="fill" className="transform scale-125 rotate-180 animate__animated animate__zoomIn space-img z-0 object-scale-down" />
            </div>

            {/* MeTagaMeHUb DaO from-blue-400 via-pink-400 to-pink-600 */}

            <div className={`absolute inset-0 h-full w-full flex flex-col justify-center items-start text-left px-2 pl-10`}>
                <h6 className={`text-transparent bg-clip-text bg-gradient-to-b from-blue-500 to-pink-600 xl:text-4xl mb-4 `}>MeTagaMeHUb DaO</h6>
                <p className={`text-lg xs:text-xl md:text-2xl xl:text-6xl w-full mb-8 font-medium text-pink-600`}>Your Homebase in the Open Metaverse</p>
                <p className={`text-sm xs:text-base md:text-lg xl:text-3xl w-full max-w-xl text-blue-500`}>MetaGameHub DAO develops Infrastructure and Applications to be a Hub for Open Metaverse experiences</p>
                {/* <div className="backdrop-blur-lg rounded-3xl flex space-x-10 p-4 px-8">
                    <a href="https://twitter.com/MGH_DAO" className="cursor-pointer" target="_blank" >
                        <FaTwitter className="social-media-icon text-4xl lg:text-5xl text-pink-600" />
                    </a>

                    <a href="https://discord.gg/8WJVMDXZwH" className="cursor-pointer" target="_blank" >
                        <FaDiscord className="social-media-icon text-4xl lg:text-5xl text-pink-600" />
                    </a>

                </div> */}
            </div>

        </div>
    )
}

export default Intro
