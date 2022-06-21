import Link from "next/link"
import { AiOutlineTrophy } from "react-icons/ai"
import { FaDiscord, FaInstagram, FaLinkedin, FaTelegram, FaTelegramPlane, FaTwitter, FaUniversity, FaUserFriends } from "react-icons/fa"
import { IoShareSocialOutline } from "react-icons/io5"

const Communnity = () => {

    return (

        <>
            <div className="w-full py-10 px-5 sm:px-10 flex flex-col items-center justify-center">

                {/* <h1 className={`text-pink- font-normal`}>Join us!</h1> */}

                <div className="relative w-full flex flex-col space-y-20 items-center max-w-xl">

                    <a href="https://discord.gg/8WJVMDXZwH" target="_blank" className="flex flex-col items-center justify-center bg-grey-darkest h-28 w-28 rounded-full p-3 hover:scale-105 transition duration-200 ease-linear border-white border border-opacity-5">
                        <FaDiscord className="text-blue-600 text-6xl " />
                    </a>

                    <div className="flex justify-between items-center w-full">
                        <a href="https://twitter.com/MGH_DAO" target="_blank" className="flex flex-col items-center justify-center bg-grey-darkest h-28 w-28 rounded-full p-3 hover:scale-105 transition duration-200 ease-linear border-white border border-opacity-5">
                            <FaTwitter className="text-blue-600 text-6xl " />
                        </a>

                        <div className="flex flex-col items-center">
                            <h2 className={`font-normal`}>Join us!</h2>
                            <Link href="/contribute">
                                <a className=' hover:text-pink-500 transition ease-in-out duration-300 cursor-pointer text-lg'>Working Groups</a>
                            </Link>
                        </div>

                        <a href="https://t.me/metagamehub_dao" target="_blank" className="flex flex-col items-center justify-center bg-grey-darkest h-28 w-28 rounded-full p-3 hover:scale-105 transition duration-200 ease-linear border-white border border-opacity-5">
                            <FaTelegramPlane className="text-blue-600 text-6xl " />
                        </a>
                    </div>

                    <div className="flex justify-evenly items-center w-full">
                        <a href="https://www.linkedin.com/company/metagamehub-dao/" target="_blank" className="flex flex-col items-center justify-center bg-grey-darkest h-28 w-28 rounded-full p-3 hover:scale-105 transition duration-200 ease-linear border-white border border-opacity-5">
                            <FaLinkedin className="text-blue-600 text-6xl " />
                        </a>

                        <a href="https://www.instagram.com/metagamehub_dao/" target="_blank" className="flex flex-col items-center justify-center bg-grey-darkest h-28 w-28 rounded-full p-3 hover:scale-105 transition duration-200 ease-linear border-white border border-opacity-5">
                            <FaInstagram className="text-blue-600 text-6xl " />
                        </a>
                    </div>

                </div>

            </div>
        </>
    )
}

export default Communnity
