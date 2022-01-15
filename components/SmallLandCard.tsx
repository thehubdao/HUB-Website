import Image from 'next/image'


const SmallLandCard = ({ img, title, link, classes }: any) => {
    return (

        <a href={link} target="_blank">
            <div className={`${classes} text-center hover:scale-105 hover:z-50 group shadow-colorbottom hover:opacity-100 relative scale-100 flex flex-col w-full rounded-lg bg-gray-400 bg-opacity-10 transform transition duration-300 ease-in-out hover:shadow-color border border-white border-opacity-10 hover:border-opacity-50 cursor-pointer`}>

                <div className="relative text-center w-full pb-full">
                    <Image className="rounded-lg object-contain" src={img} layout="fill" />
                </div>
                <p className="absolute bottom-0 px-0.5 py-1 pt-1.5 right-0 rounded-b-lg w-full shadow-black bg-black bg-opacity-40 backdrop-filter backdrop-blur-2xl font-medium text-gray-200 text-xs xs:text-sm 2xl:text-base">{title}</p>

            </div>
        </a>
    )
}

export default SmallLandCard


