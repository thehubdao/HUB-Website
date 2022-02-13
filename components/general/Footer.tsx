import { useState } from "react";
import { FaLinkedin, FaTelegramPlane, FaDiscord, FaEthereum, FaInstagram, FaTwitter, FaMedium, FaYoutube } from "react-icons/fa";


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
        <footer className="mt-10 sm:mt-44 relative flex flex-col lg:flex-row justify-around items-center space-y-20 lg:space-y-0 space-x-0 lg:space-x-10 px-2 sm:px-10 py-10 pb-16 pt-64 w-full text-gray-200 overflow-hidden">

            <img src="/images/Logos/MGH/mgh_logo.png" className="absolute w-3/4 lg:w-1/2 -right-20 top-44 lg:top-5 z-[-1] blur-sm xs:blur opacity-50" />

            <div className="flex flex-col justify-start items-center space-y-2 backdrop-blur-lg rounded p-4 sm:p-5">

                <p className="text-sm sm:text md:text-lg lg:text-base text-center text-gray-400 font-medium">Stay up to date for the latest from MGH!</p>

                <form onSubmit={formSubmitted} onFocus={() => setMessage("")} className="relative flex items-center w-full max-w-sm">
                    <input onChange={(e) => setEmail(e.target.value)} type="email" placeholder="Email address" required className="bg-transparent w-full border text-white py-3 px-4 focus:outline-none rounded-full placeholder-white placeholder-opacity-75" />
                    <button className="absolute flex items-center justify-around bg-gray-200 right-0 h-4/5 rounded-full mr-1 w-1/6">
                        <svg className={`${processing ? "block" : "hidden"} animate-spin-slow h-6 w-6 border-4 border-t-gray-300 border-l-gray-300 border-gray-800 rounded-full `} />
                        <span className={`${processing ? "hidden" : "block"} text-black font-medium  w-full`}>Join</span>
                    </button>
                </form>
                <p className="text-xs text-gray-400 font-medium mt-2">{message}</p>

                <div className="flex flex-row items-center justify-center flex-wrap space-x-2 sm:space-x-5 pt-3 sm:pt-6">

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

                    <a href="https://discord.gg/8WJVMDXZwH" className="cursor-pointer" target="_blank" >
                        <FaDiscord className="social-media-icon" />
                    </a>

                    <a href="https://www.youtube.com/channel/UC6lHXEEmjGiRmIVmiS0odpw" className="cursor-pointer" target="_blank" >
                        <FaYoutube className="social-media-icon" />
                    </a>

                    <a href="https://etherscan.io/token/0x8765b1a0eb57ca49be7eacd35b24a574d0203656#balances" className="cursor-pointer" target="_blank" >
                        <FaEthereum className="social-media-icon" />
                    </a>
                </div>

                <div className="flex text-gray-400 items-center space-x-1 absolute bottom-5 text-sm sm:text-base">
                    <a href="/terms" className=' hover:text-blue-500 transition ease-linear duration-200'>Terms of Use</a>
                    <hr className="border-gray-600 w-5 rotate-90" />
                    <a href="/privacy" className=' hover:text-blue-500 transition ease-linear duration-200'>Privacy Policy</a>
                </div>
            </div>



            <div className="grid grid-cols-2 backdrop-blur-lg p-5 pb-10 lg:pb-0 rounded text-lg sm:text-xl justify-items-start gap-1 sm:gap-3 gap-x-12 sm:gap-x-32">
                <a href="/" className="nav-item">
                    Home
                </a>
                <a href="https://app.metagamehub.io" target="_blank" className="nav-item">
                    MGH dApp
                </a>

                <a href="/treasury" target="_blank" className="nav-item">
                    Treasury
                </a>
                <a href="https://discord.gg/8WJVMDXZwH" className="nav-item">
                    Community
                </a>

                <a href="/tools" className="nav-item" target="_blank">
                    Tools
                </a>
                <a href="https://snapshot.org/#/metagamehub.eth" target="_blank" className="nav-item">
                    Voting
                </a>

                <a href="/token" className="nav-item" target="_blank">
                    Token
                </a>
                <a href="https://www.metagamehub.io/docs/mgh_whitepaper_v3.pdf" target="_blank" className="nav-item">
                    Whitepaper
                </a>

                <a href="/team" className="nav-item">
                    Contributors
                </a>
                <a href="/faq" target="_blank" className="nav-item">
                    FAQ
                </a>

                <a href="/contribute" target="_blank" className="nav-item">
                    Contribute
                </a>
                <a href="https://github.com/metagamehub" className="nav-item" target="_blank">
                    GitHub
                </a>

            </div>


        </footer>
    )
}

export default Footer
