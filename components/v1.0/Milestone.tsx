const Milestone = ({date, text}: any) => {
    return (
        // <Fade direction="up" className="w-full" duration={500}>
        <div className=" flex flex-row space-x-5 justify-center items-center w-full  m-5">
            <div className="flex-grow text-right w-2/5" >
                <span className="text-grey-light text-lg lg:text-xl xl:text-2xl text-right">{date}</span>
            </div>
            <div className="rounded-full flex-grow-0 h-4 w-4 bg-gray-300 shadow-color z-10 mb-0.5 lg:mb-1.5" />
            <div className="flex-grow text-left w-2/5 " >
                <span className="text-grey-light text-lg lg:text-xl xl:texl-2xl text-left">{text}</span>
            </div>
        </div>
        // </Fade>
    )
}

export default Milestone


