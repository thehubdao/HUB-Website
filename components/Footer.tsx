import { useState } from "react";
import { FaLinkedin, FaTelegramPlane, FaDiscord, FaEthereum, FaInstagram, FaTwitter, FaMedium, FaYoutube } from "react-icons/fa";
import { VscMail } from "react-icons/vsc";


const Footer = () => {
    const [processing, setProcessing] = useState(false)
    const [message, setMessage] = useState("")
    const [email, setEmail] = useState("")

    const formSubmitted = async (e: any) => {
        e.preventDefault();
        setProcessing(true)
        let message;
        try {
            const res = await fetch("/api/addContact", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json"
                },
                body: JSON.stringify({ email_address: email })
            });
            message = await res.json()
            setMessage(message.message)
            setProcessing(false)
        } catch (e) {
            setMessage("Something went wrong, try again later!")
            setProcessing(false)
        }
    }

    return (
        <footer className="flex flex-col lg:flex-row justify-between 2xl:justify-evenly items-center space-x-0 space-y-10 lg:space-y-0 lg:space-x-10 p-5 py-10 w-full bg-grey-darkest shadow-colorbottom text-gray-200">
            <div className="flex flex-col justify-center items-center space-y-8">
                <a href="/" className="">
                    <img src="/images/Logos/MGH/version-3.png" className={`h-28 md:h-32 lg:h-36 xl:h-40`} />
                </a>
                <div className="flex flex-row items-center justify-center lg:justify-start w-full flex-wrap space-x-3 ">

                    <a href="https://metagamehub.medium.com" className="cursor-pointer" target="_blank" >
                        <FaMedium className="social-media-icon" />
                    </a>

                    <a href="https://www.instagram.com/metagamehub_dao/" className="cursor-pointer" target="_blank" >
                        <FaInstagram className="social-media-icon" />
                    </a>

                    <a href="https://www.linkedin.com/company/metagamehub-dao/" className="cursor-pointer" target="_blank" >
                        <FaLinkedin className="social-media-icon" />
                    </a>

                    <a href="https://twitter.com/MGH_DAO" className="cursor-pointer" target="_blank" >
                        <FaTwitter className="social-media-icon" />
                    </a>

                    <a href="https://t.me/metagamehub_dao" className="cursor-pointer" target="_blank" >
                        <FaTelegramPlane className="social-media-icon" />
                    </a>

                    <a href="https://discord.gg/gARJfmdD" className="cursor-pointer" target="_blank" >
                        <FaDiscord className="social-media-icon" />
                    </a>

                    <a href="https://www.youtube.com/channel/UC6lHXEEmjGiRmIVmiS0odpw" className="cursor-pointer" target="_blank" >
                        <FaYoutube className="social-media-icon" />
                    </a>
                    <a href="https://etherscan.io/token/0x8765b1a0eb57ca49be7eacd35b24a574d0203656#balances" className="cursor-pointer" target="_blank" >
                        <FaEthereum className="social-media-icon" />
                    </a>
                </div>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-1 xl:grid-cols-2 justify-items-center md:justify-items-around xl:justify-items-start gap-3 gap-x-14 2xl:gap-x-24">
                {/* <div className="flex flex-col justify-center items-start space-y-2"> */}
                <a href="/" className="nav-item">
                    Home
                </a>
                <a href="/collection" className="nav-item">
                    LANDs
                </a>
                <a href="https://t.me/metagamehub_dao" className="nav-item">
                    Community
                </a>
                <a href="https://snapshot.org/#/metagamehub.eth" target="_blank" className="nav-item">
                    Voting
                </a>
                <a href="https://www.metagamehub.io/docs/mgh_whitepaper_v3.pdf" target="_blank" className="nav-item">
                    Whitepaper
                </a>
                <a href="/faq" target="_blank" className="nav-item">
                    FAQ
                </a>
                <a href="/terms" className="nav-item">
                    Terms of Use
                </a>
                <a href="/privacy" className="nav-item">
                    Privacy Policy
                </a>

            </div>
            <div className="flex flex-col justify-start items-center space-y-2">

                <p className="text-sm sm:text md:text-lg lg:text-base text-center font-medium">Stay up to date for the latest from MGH!</p>

                <form onSubmit={formSubmitted} onFocus={() => setMessage("")} className="relative flex items-center w-full max-w-sm">
                    <input onChange={(e) => setEmail(e.target.value)} type="email" placeholder="Email address" required className="bg-transparent w-full border text-white py-3 px-4 focus:outline-none rounded-full placeholder-white placeholder-opacity-75" />
                    <button className="absolute flex items-center justify-around bg-gray-200 right-0 h-4/5 rounded-full mr-1 w-1/6">
                        <svg className={`${processing ? "block" : "hidden"} animate-spin-slow h-6 w-6 border-4 border-t-gray-300 border-l-gray-300 border-gray-800 rounded-full `} />
                        <span className={`${processing ? "hidden" : "block"} text-black font-medium  w-full`}>Join</span>
                    </button>
                </form>
                <p className="text-xs text-gray-400 font-medium mt-2">{message}</p>
            </div>

        </footer>
    )
}

export default Footer