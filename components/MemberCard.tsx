import Image from 'next/image'
import {
  TiSocialLinkedinCircular,
  TiSocialTwitter,
  TiSocialGithubCircular,
} from 'react-icons/ti'

interface Member {
  name: string
  position: string
  image?: string
  description?: string
  linkedin?: string
  github?: string
  twitter?: string
}

const MemberCard = ({ member }: { member: Member }) => {
  return (
    <li className='p-6 rounded-xl shadow-subtle text-white relative flex flex-col items-center lg:block text-center lg:text-left bg-grey-darkest'>
      <Image
        placeholder='blur'
        blurDataURL={member.image || '/images/mgh_logo.png'}
        src={member.image || '/images/mgh_logo.png'}
        width={300}
        height={300}
        loading='lazy'
        objectFit='cover'
        className='rounded-xl'
      />
      <h3 className='text-2xl text-gradient font-bold '> {member.name}</h3>
      <h4 className='text-lg border-none font-light'>{member.position}</h4>
      <ul className='text-4xl pb-4   w-full flex relative justify-center lg:justify-start -left-2 bottom-1'>
        {member.linkedin && (
          <a href={member.linkedin} className='cursor-pointer' target='_blank'>
            <TiSocialLinkedinCircular className=' text-blue-400 hover:text-blue-600 transition-all hover:scale-110' />
          </a>
        )}
        {member.twitter && (
          <a href={member.twitter} className='cursor-pointer' target='_blank'>
            <TiSocialTwitter className='text-blue-400 hover:text-blue-600 transition-all hover:scale-110' />
          </a>
        )}
        {member.github && (
          <a href={member.github} className='cursor-pointer' target='_blank'>
            <TiSocialGithubCircular className='text-blue-400 hover:text-blue-600 transition-all hover:scale-110' />
          </a>
        )}
      </ul>
      <p className=''>{member.description}</p>
    </li>
  )
}

export default MemberCard
