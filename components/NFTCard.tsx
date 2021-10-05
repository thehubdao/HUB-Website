import Image from 'next/image'


const NFTCard = ({ img, title, link, classes }: any) => {
    return (

        <a href={link} target="_blank">
            <div className={`${classes} hover:scale-105 xl:hover:scale-120 opacity-90 group shadow-colorbottom relative hover:opacity-100 hover:z-50 scale-100 flex flex-col w-full xl:w-56 rounded-2xl bg-gray-400 bg-opacity-10 transform transition duration-300 ease-in-out hover:shadow-color border border-white border-opacity-20 hover:border-opacity-70 cursor-pointer`}>

                <div className="relative text-center h-72 w-full pb-full">
                    <Image className="rounded-2xl object-cover" src={img} layout="fill" />
                </div>
                <span className="absolute w-full opacity-100 xl:opacity-0 group-hover:opacity-100 bottom-0 p-2 left-0 rounded-b-2xl bg-black bg-opacity-40 backdrop-filter backdrop-blur text-gray-200">{title}</span>

            </div>
        </a>
    )
}

export default NFTCard


