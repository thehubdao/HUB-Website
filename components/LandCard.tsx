import Image from 'next/image'


const LandCard = ({ img, title, link, classes }: any) => {
    return (

        <a href={link} target="_blank">
            <div className={`${classes} text-center hover:scale-105 group shadow-colorbottom relative scale-100 flex flex-col w-full rounded-2xl bg-gray-400 bg-opacity-10 transform transition duration-300 ease-in-out hover:shadow-color border border-white border-opacity-10 hover:border-opacity-50 cursor-pointer`}>

                <div className="relative text-center w-full pb-full">
                    <Image className="rounded-2xl object-cover" src={img} layout="fill" />
                </div>
                <span className="absolute bottom-2 px-2 py-1 right-2 rounded-2xl group-hover:backdrop-blur-3xl bg-white bg-opacity-20 backdrop-filter backdrop-blur text-gray-200">{title}</span>

            </div>
        </a>
    )
}

export default LandCard


