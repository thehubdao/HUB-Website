const WorkingGroupCard = ({ title, description }: any) => {
    return (

        <div className="relative w-full max-w-md overflow-hidden rounded-xl p-4 lg:p-6 bg-grey-dark bg-opacity-30 shadow-button">
            <img src="/images/Logos/MGH/mgh_logo.png" className="-bottom-72 -right-32 absolute blur-md opacity-80 rounded-full" />

            <div className="flex flex-col h-full space-y-1 justify-between items-center text-center">
                <p className="text-3xl font-medium text-gray-100">{title}</p>
                <hr className="border-pink-600  w-3/4 lg:w-1/2" />
                <p className="z-10 flex-grow py-6 px-0 text-gray-200 text-sm lg:text-base">{description}</p>
                <a href="https://forms.gle/QCf3hYRR9dn7Ztzj7" target="_blank" className={`mt-10 relative w-52 flex items-center transform scale-75 sm:scale-85 lg:scale-90 xl:scale-100 justify-center cursor-pointer text-gray-200 font-medium text-xl rounded-3xl py-3 px-5 bg-gray-500 bg-opacity-80 group shadow-colorbottom overflow-hidden transition-all ease-in-out duration-500`}>
                    <div className="h-full w-full absolute bg-gradient-to-br from-grey-dark to-grey-darkest rounded-xl blur-none group-hover:blur-md transition-all ease-in-out duration-300" />
                    <span className="pt-1 z-10">Apply</span>
                </a>
            </div>
        </div>
    )
}

export default WorkingGroupCard


