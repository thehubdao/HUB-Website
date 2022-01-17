const CryptoCard = ({ name, value }: any) => {
    return (

        <div className={`flex flex-col m-2 items-center justify-center space-y-1 sm:space-y-2 rounded-xl select-none cursor-default bg-grey-darkest shadow-button p-2 px-3 pt-4 w-32 sm:w-40 h-32 sm:h-40`}>
            <img src={`/images/Logos/Cryptos/${name}.png`} className={`h-10 md:h-14 group-hover:grayscale-0 transition duration-300 ease-in-out`} />
            <p className="font-medium text-gray-400 text-xs md:text-sm pt-1">{name}</p>
            <p className="font-medium text-gray-200 text-lg sm:text-xl pt-1 sm:pt-2">${value.toLocaleString('en-GB')}</p>
        </div>
    )
}

export default CryptoCard
