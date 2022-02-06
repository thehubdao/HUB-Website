interface CryptoCardProps {
    name: string;
    value?: number;
    logo?: string;
    onClick?: () => void;
    clicked?: boolean;
}

const CryptoCard = ({ name, value, logo, onClick, clicked }: CryptoCardProps) => {
    return (

        <div onClick={onClick ? () => onClick() : () => { }} className={`flex flex-col text-center m-1 p-3 items-center justify-center space-y-1 sm:space-y-2 w-40 h-40 rounded ${onClick ? "cursor-pointer" : "cursor-default"} bg-grey-darkest hover:scale-105 transition duration-200 ease-linear border-white border ${clicked ? "border-opacity-30" : "border-opacity-5"}`}>
            <img src={logo ? logo : `/images/Logos/Cryptos/${name}.png`} className={`h-10 md:h-14 group-hover:grayscale-0 transition duration-300 ease-in-out object-contain`} />
            <p className="font-medium text-gray-400 text-xs md:text-sm pt-1">{name}</p>
            {value && <p className="font-medium text-gray-200 text-lg sm:text-xl pt-1">${value.toLocaleString('en-GB')}</p>}
        </div>
    )
}

export default CryptoCard
