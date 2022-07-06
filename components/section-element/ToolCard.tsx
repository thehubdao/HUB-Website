import { FiExternalLink } from "react-icons/fi";
import { MdAdsClick } from "react-icons/md";
import Button from "../elements/Button";

interface ToolCardProps {
    title: string;
    text: string;
    link?: string;
    button?: string;
    largeSpan?: boolean ;
}

const ToolCard = ({ title, text, link, button, largeSpan }: ToolCardProps) => {
    return (
        <a href={link} target="_blank" className={`flex flex-col relative text-center p-5 items-center justify-start space-y-1 sm:space-y-3 rounded bg-[#292929] hover:scale-[1.02] transition duration-200 ease-linear border-white border border-opacity-5 ${largeSpan && "col-span-1 md:col-span-2 lg:col-span-3"}`}>
            <h3 className='text-xl text-pink-500 w-full'>{title}</h3>
            <p className='font-sans text-sm w-full pb-5 grow'>{text}</p>
            {button && <Button text={button} link={link} />}
        </a>
    )
}

export default ToolCard
