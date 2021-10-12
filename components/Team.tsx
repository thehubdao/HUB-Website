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

                    <h1 className={`text-blue-300 bg-clip-text mb-10 uppercase lg:font-light lg:text-9xl`}>Initiators</h1>

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
                    
                    <button onClick={() => setShowAll(!showAll)} className="mt-5 col-span-full max-w-xs m-auto button">
                        <span className="button-text">{showAll ? "Hide" : "Meet all"}</span>
                    </button>

                </div>
            </div></>
    )
}

export default Team