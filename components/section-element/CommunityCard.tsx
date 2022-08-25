import Image from 'next/image'


const CommunnityCard = ({ link, icon }: any) => {
    return (

        <a href={link} target="_blank" className="flex flex-col items-center justify-center bg-grey-darkest h-24 w-24 rounded-full p-3 hover:scale-105 transition duration-200 ease-linear border-white border border-opacity-5">
            {icon}
        </a>

    )
}

export default CommunnityCard
