import Button from "../elements/Button"

const DAO = () => {
    return (
        <div className="w-full py-10 px-5 sm:px-10 flex flex-col lg:flex-row space-x-0 lg:space-x-32 space-y-10 lg:space-y-0 items-center justify-around">
            <h1 className="text-left max-w-min font-normal"><span className="text-pink-600 font-medium text-6xl sm:text-7xl md:text-8xl xl:text-9xl">D</span>ecentralized <span className="text-pink-600 font-medium text-6xl sm:text-7xl md:text-8xl xl:text-9xl">A</span>utonomous <span className="text-pink-600 font-medium text-6xl sm:text-7xl md:text-8xl xl:text-9xl">O</span>rganisation</h1>

            <div className='flex flex-col p-5 bg-grey-darkest items-center space-y-10 hover:scale-[1.01] transition duration-200 ease-linear border-white border border-opacity-5 rounded'>
                <p className="text-base sm:text-lg lg:text-xl max-w-lg text-center">MGH is a Decentralized Autonomous Organization, which means that MGH is community-driven. Everybody can join and help the DAO achieve its goals. Members have the power to <a href="https://snapshot.org/#/metagamehub.eth" target="_blank" className="text-pink-600">vote</a> on operational decisions and to manage the <a href="/treasury" target="_blank" className="text-pink-600">DAO's Treasury</a>.</p>
                <Button text="Contribute" link="/contribute" />
            </div>

        </div>
    )
}

export default DAO
