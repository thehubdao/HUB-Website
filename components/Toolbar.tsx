import { useState } from "react"

import { HiMenuAlt4 } from "react-icons/hi"
import { MdClose } from "react-icons/md"


const Toolbar = ({ dark }: any) => {
    const [open, setOpen] = useState(false)

    return (
        <div className={`absolute top-0 left-0 justify-center text-center w-full p-0 lg:p-5 flex z-50 ${dark ? "text-gray-200" : "text-black text-opacity-80"}`}>

            <div className="z-20 p-5 w-full lg:w-11/12 font-medium rounded-2xl">
                <nav className={`hidden lg:flex flex-row justify-center space-x-6 lg:space-x-14 items-center`} >
                    {/* <a href="https://www.metagamehub.io">
                        <p className={`text-5xl font-bold text-transparent bg-clip-text bg-gradient-to-br from-blue-500 to-gray-200`}>MGH</p>
                    </a> */}

                    <div className="flex flex-grow space-x-8 items-center justify-start">
                        <a href="https://www.metagamehub.io/docs/mghdao_engl_whitepaper.pdf" target="_blank" className="nav-item">Whitepaper</a>
                        <a href="/#news" className="nav-item">News</a>
                        <a href="https://discord.gg/QEWfTJeWCV" target="_blank" className="nav-item">Community</a>
                        <a href="/faq" target="_blank" className="nav-item">FAQ</a>
                    </div>
                    <div className="flex flex-grow space-x-8 items-center justify-end">
                        <a href="https://snapshot.org/#/metagamehub.eth" target="_blank" className="nav-item">Voting</a>
                        {/* <a href="https://thedap.space" target="_blank" className="nav-item">Launch App</a> */}
                    </div>

                </nav>
                <button className={`block float-right ${dark ? "text-gray-200" : "text-black text-opacity-80"} lg:hidden transform hover:scale-110 transition duration-300 ease-in-out`} onClick={() => setOpen(!open)}>
                    {open ? <MdClose size={34} /> : <HiMenuAlt4 size={34} />}
                </button>
            </div>
            <nav onClick={() => setOpen(!open)} className={`${open ? "animate__animated animate__fadeInDown" : "animate__animated animate__fadeOutUp hidden"} p-5 top-0 fixed w-full backdrop-filter backdrop-blur-2xl bg-black bg-opacity-10 flex flex-col space-y-5 items-center pt-20`} >
                <a href="https://www.metagamehub.io/docs/mghdao_engl_whitepaper.pdf" target="_blank" className="nav-item">Whitepaper</a>
                <a href="/#news" className="nav-item">News</a>
                <a href="https://discord.gg/QEWfTJeWCV" target="_blank" className="nav-item">Community</a>
                <a href="/faq" target="_blank" className="nav-item">FAQ</a>
                <a href="https://snapshot.org/#/metagamehub.eth" target="_blank" className="nav-item">Voting</a>
                {/* <a href="https://thedap.space" target="_blank" className="nav-item">Launch App</a> */}
            </nav>

        </div>

    )
}

export default Toolbar


