import Image from 'next/image'


const LandCard = ({ img, title, link, classes, metaverse }: any) => {
    return (

        <a href={link} target="_blank">
            <div className={`${classes} text-center hover:scale-105 hover:z-50 group shadow-colorbottom hover:opacity-100 relative scale-100 flex flex-col w-full rounded-2xl bg-gray-400 bg-opacity-10 transform transition duration-300 ease-in-out hover:shadow-color border border-white border-opacity-10 hover:border-opacity-50 cursor-pointer`}>

                <div className="relative text-center w-full pb-full">
                    <Image className="rounded-2xl object-contain" src={img} layout="fill" />
                </div>
                <p className="absolute bottom-2 px-2 py-1 pt-1.5 right-2 rounded-2xl shadow-black bg-white bg-opacity-10 backdrop-filter backdrop-blur-xl font-medium text-gray-200">{title}</p>

                {metaverse === "Decentraland" && <img src="/images/Logos/Cryptos/MANA.png" className="absolute top-2 right-2 h-8" />}
                {metaverse === "Sandbox" && <img src="/images/Logos/Cryptos/SAND.png" className="absolute top-2 right-2 h-8" />}
                {metaverse === "Somnium" && <img src="/images/Logos/somnium-space-logo.png" className="absolute top-2 right-2 h-8" />}

            </div>
        </a>
    )
}

export default LandCard


