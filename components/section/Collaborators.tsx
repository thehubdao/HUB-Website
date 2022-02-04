import Partner from "../section-element/Partner"

import collaboratorJSON from "../../data/collaborators.json"


const Collaborators = () => {

    return (

        <div className={`w-full flex items-center justify-between space-x-10 py-10 px-10 min-h-screen`}>

            <div className="w-20 -rotate-90 flex items-center justify-center">
                <h1 className={` font-normal text-6xl`}>Collaborators</h1>
            </div>


            <div className="relative  w-full grow grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-2 place-items-center items-center">

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