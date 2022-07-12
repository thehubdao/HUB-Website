import { FiExternalLink } from "react-icons/fi";
import { MdAdsClick } from "react-icons/md";

interface CryptoCardProps {
    name: string;
    value?: number;
    logo?: string;
    onClick?: () => void;
    clicked?: boolean;
    external?: boolean;
}

const CryptoCard = ({ name, value, logo, onClick, clicked, external }: CryptoCardProps) => {
    return (

        <div onClick={onClick ? () => onClick() : () => { }} className={`flex flex-col bg-[#262626] relative text-center m-1 p-3 items-center justify-center space-y-1 sm:space-y-2 w-32 md:w-40 h-32 md:h-40 rounded ${onClick ? "cursor-pointer" : "cursor-default"} hover:scale-105 transition duration-200 ease-linear border-white border ${clicked ? "border-opacity-30" : "border-opacity-5"}`}>
            <img src={logo ? logo : `/images/Logos/Cryptos/webp/${name}.webp`} className={`h-10 md:h-14 group-hover:grayscale-0 transition duration-300 ease-in-out object-contain`} />
            <p className="font-medium text-gray-400 text-xs md:text-sm pt-1">{name}</p>
            {value && <p className="font-medium text-gray-200 text-lg sm:text-xl pt-1">${value.toLocaleString('en-GB')}</p>}
            {onClick && (external ? <FiExternalLink className="text-gray-400 text-xs absolute bottom-1 right-1" /> : <MdAdsClick className="text-gray-400 text-xs absolute bottom-1 right-1" />)}
        </div>
    )
}

export default CryptoCard
