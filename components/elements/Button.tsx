interface ButtonProps {
    text: string;
    link?: string;
    sameTab?: boolean;
    classes?: string;
}


const Button = ({ text, link, sameTab, classes }: ButtonProps) => {
    return (
        <a href={link} target={sameTab ? "_self" : "_blank"} className={`${classes} relative w-52 flex items-center transform scale-75 sm:scale-85 lg:scale-90 xl:scale-100 justify-center cursor-pointer text-gray-200 font-medium text-xl rounded-lg py-2 px-5 bg-opacity-80 group hover:scale-[1.02] overflow-hidden transition-all ease-in-out duration-200`}>
            <div className="h-full w-full absolute bg-pink-500 rounded-xl blur-none" />
            <span className="pt-1 z-10">{text}</span>
        </a>
    )
}

export default Button
