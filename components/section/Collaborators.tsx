import collaboratorJSON from "../../data/collaborators.json"

import Partner from "../section-element/Partner"


const Collaborators = () => {

    return (

        <div className={`w-full flex flex-col lg:flex-row items-center  space-x-0 lg:space-x-10 py-10 px-5 sm:px-10 min-h-screen`}>

            <div className="w-20 rotate-0 lg:-rotate-90 flex items-center justify-center">
                <h1 className={`font-normal`}>Collaborators</h1>
            </div>

            <div className="relative w-full grow-0 lg:grow grid grid-cols-2 xs:grid-cols-3 sm:grid-cols-4 md:grid-cols-5 lg:grid-cols-6 gap-2">

                {collaboratorJSON.map((element, key) => {
                    return (
                        <Partner key={key} link={element.link} logo={element.logo} />
                    );
                })}
            </div>

        </div>

    )
}

export default Collaborators
