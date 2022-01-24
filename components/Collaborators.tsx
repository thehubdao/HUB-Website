import Partner from "./Partner"

import collaboratorJSON from "../data/collaborators.json"


const Collaborators = () => {

    return (

        <>
            <div className="w-full">
                <div className={`w-full flex flex-col items-center justify-start p-8 pb-40 pt-20`}>

                    <h3 className={`col-span-full uppercase text-transparent bg-clip-text bg-gradient-to-b z-10 from-gray-200 to-gray-600 mb-10`}>Collaborators</h3>

                    <div className="relative w-full grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-5 sm:gap-7 xl:gap-10 justify-items-center items-center">

                        {collaboratorJSON.map((element, key) => {
                            return (
                                <Partner key={key} link={element.link} logo={element.logo} />
                            );
                        })}
                    </div>

                </div>
            </div></>
    )
}

export default Collaborators