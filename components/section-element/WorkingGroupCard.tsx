interface WorkingGroupCardProps {
    title: string;
    description: string;
}

const WorkingGroupCard = ({ title, description }: WorkingGroupCardProps) => {
    return (
        
        <div className={`mr-10 flex flex-col p-5 min-w-[24rem] rounded text-left bg-gray-300 hover:scale-[1.02] transition duration-200 ease-linear select-text`}>

            <p className="text-black text-3xl font-semibold">{title}</p>
            <p className="mt-3 text-black text-opacity-70 font-medium">{description}</p>

        </div>
        
    )
}

export default WorkingGroupCard


