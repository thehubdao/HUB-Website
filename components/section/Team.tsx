import Member from "../Member";
import teamJson from "../../data/team.json";
import Link from "next/link";
import Image from "next/image"

import { TiSocialLinkedinCircular, TiSocialTwitter, TiSocialGithubCircular } from "react-icons/ti"


const Team = () => {

    return (

        <>
            <div className="w-full min-h-screen py-10 px-10 flex flex-col items-center justify-center">


                <h1 className={`text-blue-400 font-normal text-9xl`}>Initiators</h1>

                <Link href={'/team'}>
                    <a className='text-gray-200 hover:text-blue-400 transition ease-in-out duration-300 pt-1 text-2xl'>Get to know the whole team</a>
                </Link>

                <div className="relative mt-10 w-full grid gap-7 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 2xl:grid-cols-5 justify-items-start max-w-max">

                    {teamJson.slice(0, 10).map((member, key) => (

                        <div key={key} className="group rounded relative w-56 h-56 ml-6">
                            <Image
                                placeholder='blur'
                                blurDataURL={member.image || '/images/Logos/MGH/mgh_logo.png'}
                                src={member.image || '/images/Logos/MGH/mgh_logo.png'}
                                layout="fill"
                                loading='lazy'
                                objectFit='cover'
                                className='rounded grayscale'
                            />
                            <p className="text-blue-400 -rotate-90 origin-bottom-left absolute left- bottom-0 px-1 bg-black/70 backdrop-blur-3xl w-full text-xl">{member.name}</p>
                            <div className="flex backdrop-blur-xl rounded-tl bg-black/30 rounded-br justify-center text-3xl absolute bottom-0 right-0 z-10">
                                {member.linkedin && (
                                    <a href={member.linkedin} className='cursor-pointer' target='_blank'>
                                        <TiSocialLinkedinCircular
                                            className={'text-blue-400 hover:text-blue-600 transition duration-500 ease-in-out'}
                                        />
                                    </a>
                                )}
                                {member.twitter && (
                                    <a href={member.twitter} className='cursor-pointer' target='_blank'>
                                        <TiSocialTwitter
                                            className={'text-blue-400 hover:text-blue-600'}
                                        />
                                    </a>
                                )}
                                {member.github && (
                                    <a href={member.github} className='cursor-pointer' target='_blank'>
                                        <TiSocialGithubCircular
                                            className={'text-blue-400 hover:text-blue-600'}
                                        />
                                    </a>
                                )}
                            </div>

                            {/* <div className="group-hover:opacity-100 opacity-0 p-2 w-full h-full flex flex-col justify-center text-center absolute inset-0 backdrop-blur bg-black/70 rounded transition duration-300 ease-in-out">
                                <p className="text-blue-400 font-medium text-xl w-full mb-1">{member.name}</p>
                                <p className="w-full mb-2">{member.position}</p>
                                <div className="flex space-x-2 justify-center text-3xl ">
                                    {member.linkedin && (
                                        <a href={member.linkedin} className='cursor-pointer' target='_blank'>
                                            <TiSocialLinkedinCircular
                                                className={'text-blue-400 hover:text-blue-600'}
                                            />
                                        </a>
                                    )}
                                    {member.twitter && (
                                        <a href={member.twitter} className='cursor-pointer' target='_blank'>
                                            <TiSocialTwitter
                                                className={'text-blue-400 hover:text-blue-600'}
                                            />
                                        </a>
                                    )}
                                    {member.github && (
                                        <a href={member.github} className='cursor-pointer' target='_blank'>
                                            <TiSocialGithubCircular
                                                className={'text-blue-400 hover:text-blue-600'}
                                            />
                                        </a>
                                    )}
                                </div>
                            </div> */}
                        </div>
                    ))}

                </div>

            </div></>
    )
}

export default Team