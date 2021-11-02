import Image from "next/image";

import { TiSocialLinkedinCircular } from "react-icons/ti"


const Member = ({ name, position, img, link }: any) => {

    return (


        <div className="relative w-36 h-36 lg:w-40 lg:h-40 rounded-full grayscale-0 m-4">
            <div className="absolute z-10 flex flex-col text-center justify-center items-center rounded-full w-full h-full transition ease-in-out duration-500 opacity-0 bg-black bg-opacity-50 backdrop-filter backdrop-blur hover:opacity-100 cursor-pointer">
                <span className="text-gray-200 text-base lg:text-lg font-medium lg:font-normal">{name}</span>
                <span className="text-blue-300 text-xs lg:text-xs font-medium lg:font-normal">{position}</span>
                {link && (
                    <a href={link} className="cursor-pointer flex items-center justify-center" target="_blank" >
                        <TiSocialLinkedinCircular className="social-media-icon text-4xl absolute bottom-1" />
                    </a>
                )}
            </div>
            <Image src={img} className="filter grayscale rounded-full object-cover" layout="fill" />
        </div>

    )
}

export default Member