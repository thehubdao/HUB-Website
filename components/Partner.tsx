const Partner = ({ link, logo }: any) => {

    return (

        <a href={link} target="_blank" className="h-24 w-full xl:h-32 rounded-xl py-5 px-3 xl:px-5 bg-grey-darkest shadow-colorbottom cursor-pointer">
            <img src={logo} className="object-scale-down w-full h-full" />
        </a>

    )
}

export default Partner