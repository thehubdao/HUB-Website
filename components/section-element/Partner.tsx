const Partner = ({ link, logo, classes }: any) => {

    return (

        <a href={link} target="_blank" className={`${classes} h-24 w-full xl:h-32 rounded py-5 px-3 xl:px-5 bg-grey-darkest hover:scale-105 transition duration-200 ease-linear border-white border border-opacity-5 cursor-pointer`}>
            <img src={logo} className="object-scale-down w-full h-full" />
        </a>

    )
}

export default Partner
