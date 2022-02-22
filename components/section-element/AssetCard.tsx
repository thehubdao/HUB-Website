import Image from 'next/image'


const AssetCard = ({ img, title, link, classes, metaverse }: any) => {
    return (

        <a href={link} target="_blank">
            <div className={`${classes} text-center hover:scale-105 hover:z-50 group shadow-colorbottom hover:opacity-100 relative scale-100 flex flex-col w-full rounded-2xl bg-gray-400 bg-opacity-10 transform transition duration-300 ease-in-out hover:shadow-color border border-white border-opacity-10 hover:border-opacity-50 cursor-pointer`}>

                <div className="relative text-center w-full pb-full">
                    <Image className="rounded-t-2xl object-contain" src={img} layout="fill" />
                </div>
                <p className="object-bottom px-3 py-2 pt-2.5 w-full rounded-b-2xl shadow-dark bg-white bg-opacity-10 backdrop-filter backdrop-blur-sm font-medium text-gray-200 text-sm lg:text-base">{title}</p>

                {metaverse === "Decentraland" && <img src="/images/Logos/Cryptos/MANA.png" className="absolute top-2 right-2 h-8" />}
                {metaverse === "Sandbox" && <img src="/images/Logos/Cryptos/SAND.png" className="absolute top-2 right-2 h-8" />}
                {metaverse === "ASM" && <img src="/images/Logos/asm-logo.png" className="absolute top-2 right-2 h-8" />}
                {metaverse === "PartyBear" && <img src="/images/Logos/partybear-logo.png" className="absolute top-2 right-2 h-8" />}
                {metaverse === "FLUFWorld" && <img src="/images/Logos/flufworld-logo.png" className="absolute top-2 right-2 h-8" />}

            </div>
        </a>
    )
}

export default AssetCard
