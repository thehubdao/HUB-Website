import Link from 'next/link'
import Image from 'next/image';
import { useEffect, useState } from 'react';

import {VscListFlat, VscClose} from "react-icons/vsc";

import mgh_logo from "../public/images/mgh_logo_white.png";

const Toolbar = () => {
    const [scroll, setScroll] = useState(0);
    const [open, setOpen] = useState(false);

    useEffect(function onFirstMount() {
        function onScroll() {
            setScroll(window.scrollY);
        }
        window.addEventListener("scroll", onScroll, {passive: true});
    }, []);

    return (
        <div className="flex justify-center text-center w-screen p-5">

            <div className="z-10 p-5 w-11/12 text-gray-200 rounded-2xl bg-blue-400 transition-all duration-500 bg-opacity-20">
                <nav className={`flex flex-row justify-start space-x-6 lg:space-x-14 items-center`} >
                    <a href="https://www.metagamehub.io">
                        <p className={`text-5xl font-bold text-transparent bg-clip-text bg-gradient-to-br from-blue-500 to-pink-500`}>MGH</p>
                    </a>


                    <div className="flex flex-grow space-x-8 items-center">
                        <a href="https://www.metagamehub.io">
                            <div className="nav-item">Home</div>
                        </a>
                        <a href="https://www.metagamehub.io/docs/mghdao_engl_whitepaper.pdf" target="_blank">
                            <div className="nav-item">Whitepaper</div>
                        </a>
                        <a href="#news">
                            <div className="nav-item">News</div>
                        </a>
                        <a href="https://discord.gg/QEWfTJeWCV" target="_blank">
                            <div className="nav-item">Community</div>
                        </a>
                        <a href="https://snapshot.org/#/metagamehub.eth" target="_blank">
                            <div className="nav-item">Voting</div>
                        </a>
                        <a href="https://thedap.space" target="_blank">
                            <div className="nav-item">thedab.space</div>
                        </a>
                    </div>
                    <Link href="https://www.metagamehub.io">
                        <a className="button hidden lg:block bg-red-600 bg-opacity-30 border-none">Voting</a>
                    </Link>
                    <button className="block lg:hidden transform hover:scale-110 transition duration-300 ease-in-out" onClick={()=>setOpen(!open)}>
                        {open ? <VscClose size={34} /> : <VscListFlat size={34} />}
                    </button> 

                </nav>
            </div>
            <nav className={`${open ? "block" : "hidden"} toolbar-top-small flex flex-col space-y-5 items-center top-20`} >
                <Link href="/pools">
                    <a className="nav-item-selected block">Pools</a>
                </Link>
                <Link href="/farm">
                    <a className="nav-item block">Farms</a>
                </Link>
                <Link href="https://www.metagamehub.io">
                    <a className="nav-item block">NPT Minting</a>
                </Link>
                <Link href="https://www.metagamehub.io">
                    <a className="nav-item block">FAQ</a>
                </Link>
                <Link href="https://www.metagamehub.io">
                    <a className="button bg-red-600 bg-opacity-30 border-none">Voting</a>
                </Link>
            </nav>

        </div>

    )
}

export default Toolbar


