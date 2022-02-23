import Link from "next/link";
import Image from "next/image"
import { BsGithub, BsTwitter, BsLinkedin } from "react-icons/bs";

import teamJson from "../../data/team.json";


const Team = () => {

    return (

        <>
            <div className="w-full min-h-screen py-10 px-5 sm:px-10 flex flex-col items-center justify-center">


                <h1 className={`text-blue-500 font-normal`}>Initiators</h1>

                <Link href={'/team'}>
                    <a className='text-gray-200 hover:text-blue-500 transition ease-in-out duration-300 pt-1 text-lg sm:text-xl lg:text-2xl text-center'>Get to know the whole team</a>
                </Link>

                <div className="relative mt-10 w-full grid gap-7 grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 justify-items-center items-center max-w-max">

                    {teamJson.slice(0, 10).map((member, key) => (

                        <div key={key} className="group rounded relative w-52 lg:w-48 2xl:w-52 h-52 ml-6">
                            <Image
                                placeholder='blur'
                                blurDataURL={member.image || '/images/Logos/MGH/webp/mgh_logo.webp'}
                                src={member.image || '/images/Logos/MGH/webp/mgh_logo.webp'}
                                layout="fill"
                                loading='lazy'
                                objectFit='cover'
                                className='rounded grayscale'
                            />
                            <p className="text-blue-500 -rotate-90 origin-bottom-left absolute bottom-0.5 min-w-max bg-black/70 backdrop-blur-3xl w-full text-xl">{member.name}</p>
                            <div className="flex backdrop-blur-xl rounded-tl bg-black/40 rounded-br justify-center space-x-2 p-1 text-xl absolute bottom-0 right-0 z-10">
                                {member.linkedin && (
                                    <a href={member.linkedin} className='cursor-pointer' target='_blank'>
                                        <BsLinkedin
                                            className={'text-blue-500 hover:text-blue-600 transition duration-500 ease-in-out'}
                                        />
                                    </a>
                                )}
                                {member.twitter && (
                                    <a href={member.twitter} className='cursor-pointer' target='_blank'>
                                        <BsTwitter
                                            className={'text-blue-500 hover:text-blue-600'}
                                        />
                                    </a>
                                )}
                                {member.github && (
                                    <a href={member.github} className='cursor-pointer' target='_blank'>
                                        <BsGithub
                                            className={'text-blue-500 hover:text-blue-600'}
                                        />
                                    </a>
                                )}
                            </div>

                        </div>
                    ))}

                </div>

            </div></>
    )
}

export default Team
