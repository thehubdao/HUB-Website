interface ButtonProps {
    text: string;
    link: string;
    sameTab?: boolean;
    classes?: string;
}

const Button = ({ text, link, sameTab, classes }: ButtonProps) => {
    return (
        <a href={link} target={sameTab ? "_self" : "_blank"} className={`${classes} relative w-52 flex items-center transform scale-75 sm:scale-85 lg:scale-90 xl:scale-100 justify-center cursor-pointer text-gray-200 font-medium text-xl rounded-3xl py-3 px-5 bg-gray-500 bg-opacity-80 group overflow-hidden transition-all ease-in-out duration-500`}>
            <div className="h-full w-full absolute bg-gradient-to-br from-grey-dark to-grey-darkest rounded-xl blur-none group-hover:blur-md transition-all ease-in-out duration-300" />
            <span className="pt-1 z-10">{text}</span>
        </a>
    )
}

export default Button