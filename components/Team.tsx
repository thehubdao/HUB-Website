import Member from "./Member";
import teamJson from "../data/team.json";
import Link from "next/link";
import MemberCard from "./MemberCard";


const Team = () => {

    return (

        <>
            <div className="w-full min-h-screen py-20">
                <div className={`w-full flex flex-col items-center justify-start p-8`}>

                    <h1 className={`text-blue-300 bg-clip-text mb-10 uppercase lg:font-light lg:text-9xl`}>Initiators</h1>

                    <div className="relative w-full grid gap-5 sm:gap-7 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 2xl:grid-cols-5 justify-items-center">
                        {teamJson.slice(0, 10).map((member, key) => (
                            <MemberCard key={key} member={member} small />
                        ))}
                    </div>

                    <div className="flex flex-col sm:flex-row text-center items-center space-x-0 sm:space-x-4 space-y-4 sm:space-y-0 mt-14 text-2xl">
                        <Link href={'/team'}>
                            <a className='text-gray-200 hover:text-blue-400 transition ease-in-out duration-300 font-medium pt-1'>Get to know the whole team</a>
                        </Link>

                        <hr className="border-white w-10 sm:w-8 rotate-0 sm:rotate-90" />

                        <Link href={'/contribute'}>
                            <a className='text-gray-200 hover:text-pink-500 transition ease-in-out duration-300 font-medium pt-1'>Contribute</a>
                        </Link>
                    </div>

                </div>
            </div></>
    )
}

export default Team