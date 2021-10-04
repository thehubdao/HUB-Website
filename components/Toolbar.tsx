const Toolbar = () => {

    return (
        <div className="absolute top-0 left-0 justify-center text-center w-full p-5 hidden xl:flex z-50">

            <div className="z-10 p-5 w-11/12 font-medium rounded-2xl">
                <nav className={`flex flex-row justify-center space-x-6 lg:space-x-14 items-center`} >
                    {/* <a href="https://www.metagamehub.io">
                        <p className={`text-5xl font-bold text-transparent bg-clip-text bg-gradient-to-br from-blue-500 to-gray-200`}>MGH</p>
                    </a> */}


                    <div className="flex flex-grow space-x-8 items-center justify-start">
                        <a href="https://www.metagamehub.io/docs/mghdao_engl_whitepaper.pdf" target="_blank">
                            <div className="nav-item">Whitepaper</div>
                        </a>
                        <div className="nav-item">
                            <a href="#news">
                                <span>News</span>
                            </a>
                        </div>

                        <a href="https://discord.gg/QEWfTJeWCV" target="_blank">
                            <div className="nav-item">Community</div>
                        </a>
                    </div>
                    <div className="flex flex-grow space-x-8 items-center justify-end">
                        <a href="https://snapshot.org/#/metagamehub.eth" target="_blank">
                            <div className="nav-item">Voting</div>
                        </a>
                        <a href="https://thedap.space" target="_blank">
                            <div className="nav-item">Launch App</div>
                        </a>
                    </div>
                    {/* <button className="block lg:hidden transform hover:scale-110 transition duration-300 ease-in-out" onClick={() => setOpen(!open)}>
                        {open ? <VscClose size={34} /> : <VscListFlat size={34} />}
                    </button> */}

                </nav>
            </div>
            {/* <nav className={`${open ? "block" : "hidden"} toolbar-top-small flex flex-col space-y-5 items-center top-20`} >
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
            </nav> */}

        </div>

    )
}

export default Toolbar


