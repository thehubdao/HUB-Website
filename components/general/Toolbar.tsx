import { useState } from "react"
import Link from 'next/link'
import { HiMenuAlt4 } from "react-icons/hi"
import { MdClose } from "react-icons/md"


const Toolbar = ({ dark }: any) => {
    const [open, setOpen] = useState(false)

    return (
        <div className={`text-xl absolute top-0 left-0 justify-center text-center w-full p-0 lg:p-5 flex z-50 ${dark ? "text-gray-200" : "text-black text-opacity-80"}`}>

            <div className="z-20 p-5 pr-5 lg:pr-0 xl:pr-5 w-full flex justify-between items-center font-medium">
                <a href="/" className="block lg:hidden transform hover:scale-110 transition-all duration-500 ease-in-out">
                    <img src="/images/Logos/MGH/webp/mgh_logo.webp" className={`h-10 w-10`} />
                </a>

                <nav className={`hidden lg:flex flex-row flex-grow justify-center items-stretch`} >

                    <div className="flex flex-grow space-x-8 items-center justify-start">
                        <a href="/" className="hidden lg:block mr-5 transform hover:scale-110 transition-all duration-500 ease-in-out">
                            <img src="/images/Logos/MGH/webp/mgh_logo.webp" className={`h-12 w-12`} />
                        </a>
                        <Link href="/treasury" >
                            <a className="nav-item pt-1">Treasury</a>
                        </Link>
                        <Link href="/tools">
                            <a className="nav-item pt-1">Tools</a>
                        </Link>
                        <Link href="/token">
                            <a className="nav-item pt-1">Token</a>
                        </Link>
                        <Link href="/team">
                            <a className="nav-item pt-1">Contributors</a>
                        </Link>
                        <a href="https://docs.metagamehub.io" target="_blank" className="nav-item pt-1">Learn more</a>
                    </div>

                    <div className="flex flex-grow space-x-8 items-center justify-end mr-5 pt-1">
                        <a href="https://snapshot.org/#/metagamehub.eth" target="_blank" className="nav-item">Voting</a>
                        <a href="https://app.metagamehub.io" target="_blank" className="nav-item">Launch App</a>
                    </div>

                </nav>
                <button className={`block float-right ${dark ? "text-gray-200" : "text-black text-opacity-80"} lg:hidden transform hover:scale-110 transition duration-300 ease-in-out`} onClick={() => setOpen(!open)}>
                    {open ? <MdClose size={34} /> : <HiMenuAlt4 size={34} />}
                </button>
            </div>
            <nav onClick={() => setOpen(!open)} className={`${open ? "animate__animated animate__fadeInDown" : "animate__animated animate__fadeOutUp hidden"} p-5 top-0 fixed w-full backdrop-filter backdrop-blur-2xl bg-black bg-opacity-10 flex flex-col space-y-5 items-center pt-20`} >
                <Link href="/treasury" >
                    <a className="nav-item">Treasury</a>
                </Link>
                <Link href="/tools">
                    <a className="nav-item">Tools</a>
                </Link>
                <Link href="/token">
                    <a className="nav-item">Token</a>
                </Link>
                <Link href="/team">
                    <a className="nav-item">Contributors</a>
                </Link>
                <a href="https://docs.metagamehub.io" target="_blank" className="nav-item">Learn more</a>
                <a href="https://snapshot.org/#/metagamehub.eth" target="_blank" className="nav-item">Voting</a>
                <a href="https://app.metagamehub.io" target="_blank" className="nav-item">Launch App</a>
            </nav>

        </div>

    )
}

export default Toolbar
