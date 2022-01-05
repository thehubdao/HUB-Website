import { useState } from "react";
import Member from "./Member";
import teamJson from "../data/team.json";
import extendedTeamJson from "../data/extendedTeam.json";
import advisorsJson from "../data/advisors.json";


const Team = () => {

    const [showAll, setShowAll] = useState(false)

    return (

        <>
            <div className="w-full min-h-screen py-20">
                <div className={`w-full flex flex-col items-center justify-start p-2 lg:p-8`}>

                    <h1 className={`text-blue-300 bg-clip-text mb-10 uppercase lg:font-light lg:text-9xl`}>Initiators</h1>

                    <div className="relative w-full max-w-screen-xl flex flex-row flex-wrap justify-center items-start">
                        {teamJson.map((element, key) => {
                            return (
                                <Member key={key} name={element.name} position={element.position} img={element.image} linkedin={element.linkeind} />
                            );
                        })}
                        {showAll && extendedTeamJson.map((element, key) => {
                            return (
                                <Member key={key} name={element.name} position={element.position} img={element.image} linkedin={element.linkeind} telegram={element.telegram} />
                            );
                        })}
                        {showAll && advisorsJson.map((element, key) => {
                            return (
                                <Member key={key} name={element.name} position={element.position} img={element.image} linkedin={element.linkeind} />
                            );
                        })}
                    </div>

                    <div className="flex space-x-4">
                        <button onClick={() => setShowAll(!showAll)} className="mt-5 button">
                            <p className="button-text">{showAll ? "Hide" : "Meet all"}</p>
                        </button>
                        <a href="/contribute" target="_blank" className="button mt-5 bg-white bg-opacity-20">
                            <p className="button-text">Contribute</p>
                        </a>
                    </div>

                </div>
            </div></>
    )
}

export default Team