import Image from "next/image";

import { TiSocialLinkedinCircular } from "react-icons/ti"


const Member = ({ name, position, img, linkedin }: any) => {

    return (


        <div className="relative w-36 h-36 lg:w-40 lg:h-40 rounded-full grayscale-0 m-4">
            <div className="absolute z-10 flex flex-col text-center justify-center items-center rounded-full w-full h-full transition ease-in-out duration-500 opacity-0 bg-black bg-opacity-50 backdrop-filter backdrop-blur-md hover:opacity-100 cursor-pointer">
                <p className="text-gray-200 text-base lg:text-lg font-medium lg:font-noral leading-tight lg:leading-snug">{name}</p>
                <p className="text-blue-300 text-xs font-medium lg:font-normal">{position}</p>
                <a href={linkedin} className="cursor-pointer flex items-center justify-center" target="_blank" >
                    <TiSocialLinkedinCircular className="social-media-icon text-4xl absolute bottom-1" />
                </a>
            </div>

            <Image
                placeholder='blur'
                blurDataURL={img || '/images/Logos/MGH/mgh_logo.png'}
                src={img || '/images/Logos/MGH/mgh_logo.png'}
                loading='lazy'
                layout='fill'
                className='grayscale rounded-full object-cover'
            />
        </div>

    )
}

export default Member