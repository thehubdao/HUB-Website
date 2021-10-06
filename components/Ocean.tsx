import OceanIllustration from "./OceanIllustration";


const Ocean = ({ scroll }: any) => {

    return (

        <>
            <div className="w-full min-h-screen py-20">
                <div className={`w-full flex flex-col-reverse lg:flex-row items-center justify-start p-8`}>

                    <div className="flex flex-col text-center items-center lg:items-start 2xl:items-center lg:text-left 2xl:text-center w-full">
                        <p className={` text-4xl sm:text-5xl xl:text-6xl py-1 font-bold text-transparent bg-clip-text bg-gradient-to-b from-blue-500 to-pink-500 mb-10`}>Data is the new oil</p>
                        <p className="text-gray-400 text-lg lg:text-lg xl:text-xl max-w-md lg:max-w-2xl">Data is one of the most valuable goods of our time. The MGH DAO does its utmost efforts to  democratize data while monetizing it and creating decentralized access to the rising data economy.</p>
                    </div>

                    <div className="relative flex flex-col pb-10 lg:pb-0 w-full h-full justify-center items-center">
                        <OceanIllustration />
                    </div>

                </div>
            </div></>
    )
}

export default Ocean