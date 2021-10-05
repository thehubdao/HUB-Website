import { useState } from "react";
import Member from "./Member";
import teamJson from "./team.json";
import extendedTeamJson from "./extendedTeam.json";
import advisorsJson from "./advisors.json";


const Team = () => {

    const [showAll, setShowAll] = useState(false)

    return (

        <>
            <div className="w-full min-h-screen py-20">
                <div className={`w-full flex flex-col items-center justify-start p-2 lg:p-8`}>

                    <span className={`text-5xl sm:text-6xl lg:text-9xl font-bold text-blue-300 bg-clip-text mb-10`}>Initiators</span>

                    <div className="relative w-full max-w-screen-lg flex flex-row flex-wrap justify-center items-start">
                        {teamJson.map((element, key) => {
                            return (
                                <Member key={key} name={element.name} position={element.position} img={element.image} link={element.linkeind} />
                            );
                        })}
                        {showAll && extendedTeamJson.map((element, key) => {
                            return (
                                <Member key={key} name={element.name} position={element.position} img={element.image} link={element.linkeind} />
                            );
                        })}
                        {showAll && advisorsJson.map((element, key) => {
                            return (
                                <Member key={key} name={element.name} position={element.position} img={element.image} link={element.linkeind} />
                            );
                        })}
                    </div>
                    
                    <button onClick={() => setShowAll(!showAll)} className="mt-5 col-span-full max-w-xs m-auto text-center rounded-full px-6 py-2 bg-gray-400 bg-opacity-10 transform hover:scale-105 transition duration-300 ease-in-out hover:shadow-color border border-white border-opacity-20 hover:border-opacity-70 cursor-pointer">
                        <span className="text-gray-200 ">{showAll ? "Hide" : "Meet all"}</span>
                    </button>

                </div>
            </div></>
    )
}

export default Team