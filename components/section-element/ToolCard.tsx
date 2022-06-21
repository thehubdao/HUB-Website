import { FiExternalLink } from "react-icons/fi";
import { MdAdsClick } from "react-icons/md";
import Button from "../elements/Button";

interface ToolCardProps {
    title: string;
    text: string;
    link?: string;
    button?: string;
}

const ToolCard = ({ title, text, link, button }: ToolCardProps) => {
    return (

        <a href={link} target="_blank" className={`flex flex-col relative text-left p-5 items-start justify-start space-y-1 sm:space-y-3 max-w-md rounded bg-grey-darkest hover:scale-[1.02] transition duration-200 ease-linear border-white border border-opacity-5`}>
            <p className='text-4xl text-blue-500 w-full'>{title}</p>
            <p className='font-normal text-lg w-full pb-5 grow'>{text}</p>
            {button && <Button text={button} link={link} />}
        </a>
    )
}

export default ToolCard
