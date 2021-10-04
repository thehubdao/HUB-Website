import Member from "./Member";
import teamJson from "./team.json";


const Team = () => {

    return (

        <>
            <div className="w-full min-h-screen py-20">
                <div className={`w-full flex flex-col items-center justify-start p-2 lg:p-8`}>

                    <span className={`text-5xl sm:text-6xl lg:text-9xl font-bold text-blue-300 bg-clip-text mb-10`}>Initiators</span>

                    <div className="relative w-full max-w-screen-lg flex flex-row flex-wrap justify-center items-start">
                        {/* {cards} */}
                        {teamJson.map((element, key) => {
                            // use map
                           
                            return (
                                <Member key={key} name={element.name} position={element.position} img={element.image} link={element.linkeind} />
                            );
                        })}
                    </div>

                </div>
            </div></>
    )
}

export default Team