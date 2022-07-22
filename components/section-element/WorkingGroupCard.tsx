interface WorkingGroupCardProps {
    title: string;
    description: string;
}


const WorkingGroupCard = ({ title, description }: WorkingGroupCardProps) => {
    return (

        <div className={` flex flex-col p-5 min-w-[20.5rem] xs:min-w-[20.5rem] sm:min-w-[18rem] lg:min-w-[18.5rem] rounded-xl text-center bg-[#292929] hover:scale-[1.02] transition duration-200 ease-linear select-text `}>

            <p className="font-inter text-2xl text-pink-reco w-full pb-5">{title}</p>
            <p className=" font-normal text-md grow ">{description}</p>

        </div>

    )
}

export default WorkingGroupCard
