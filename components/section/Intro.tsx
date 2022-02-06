import Image from "next/image"
import Button from "../elements/Button";


const Intro = () => {

    return (
        <div className="w-full h-screen relative flex justify-end">

            <div className={`h-screen relative w-full xl:w-4/5 opacity-75`}>
                <Image src="/images/space-2.jpg" layout="fill" className="transform scale-125 rotate-180 animate__animated animate__zoomIn space-img z-0 object-scale-down" />
            </div>

            {/* MeTagaMeHUb DaO from-blue-400 via-pink-400 to-pink-600 */}

            <div className={`absolute inset-0 h-full w-full flex flex-col justify-center items-center text-center px-2`}>
                <h6 className={`text-transparent bg-clip-text bg-gradient-to-b from-blue-500 via-pink-500 to-pink-600 xl:text-8xl mb-4`}>MeTagaMeHUb DaO</h6>
                <p className={`text-3xl text-gray-200 w-full mb-16`}>Navigating through the Open Metaverse together</p>
                <Button text="Join Community" link="https://discord.gg/8WJVMDXZwH" />
            </div>

        </div>
    )
}

export default Intro