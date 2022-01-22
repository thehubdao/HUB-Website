import Member from "./Member";
import teamJson from "../data/team.json";
import Link from "next/link";


const Team = () => {

    return (

        <>
            <div className="w-full min-h-screen py-20">
                <div className={`w-full flex flex-col items-center justify-start p-2 lg:p-8`}>

                    <h1 className={`text-blue-300 bg-clip-text mb-10 uppercase lg:font-light lg:text-9xl`}>Initiators</h1>

                    <div className="relative w-full max-w-screen-lg flex flex-row flex-wrap justify-center items-start">
                        {teamJson.slice(0, 10).map((element, key) => {
                            return (
                                <Member key={key} name={element.name} position={element.position} img={element.image} linkedin={element.linkedin}/>
                            );
                        })}
                    </div>

                    <div className="flex space-x-4 mt-10">
                        <Link href={'/team'}>
                            <a className='text-gray-300 font-medium button'>Meet all</a>
                        </Link>
                        <Link href='/contribute'>
                            <a className='text-gray-300 font-medium button bg-white bg-opacity-20'>Contribute</a>
                        </Link>
                    </div>

                </div>
            </div></>
    )
}

export default Team