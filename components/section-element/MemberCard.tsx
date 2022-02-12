import Image from 'next/image'
import {
  BsLinkedin,
  BsTwitter,
  BsGithub
} from 'react-icons/bs'


interface Member {
  name: string
  position: string
  image?: string
  description?: string
  linkedin?: string
  github?: string
  twitter?: string
}


const MemberCard = ({
  member,
  advisor
}: {
  member: Member
  advisor?: boolean
}) => {
  // changing color whether member is an advisor or core team.
  const iconColors = advisor
    ? 'text-pink-500 hover:text-pink-600 '
    : 'text-blue-400 hover:text-blue-600 '

  return (
    <li
      className={
        'w-full max-w-[350px] border-white border border-opacity-5 rounded-md text-gray-200 relative flex flex-col space-y-1 items-center lg:block text-center lg:text-left bg-grey-darkest'
      }
    >
      <Image
        placeholder='blur'
        blurDataURL={member.image || '/images/Logos/MGH/mgh_logo.png'}
        src={member.image || '/images/Logos/MGH/mgh_logo.png'}
        width={350}
        height={350}
        loading='lazy'
        objectFit='cover'
        className='rounded-t'
      />
      <h3
        className={
          (advisor ? 'reverse-text-gradient ' : 'text-gradient ') +
          'text-xl xl:text-2xl px-3 pt-2'
        }
      >
        {member.name}
      </h3>
      <h4 className='text-base border-none font-light px-3 text-gray-400'>{member.position}</h4>
      <ul className={`text-2xl w-full flex relative px-3 pt-3 justify-center space-x-3 lg:justify-start`}>
        {member.linkedin && (
          <a href={member.linkedin} className='cursor-pointer' target='_blank'>
            <BsLinkedin
              className={iconColors + 'transition-all duration-300 ease-in-out hover:scale-110'}
            />
          </a>
        )}
        {member.twitter && (
          <a href={member.twitter} className='cursor-pointer' target='_blank'>
            <BsTwitter
              className={iconColors + 'transition-all duration-300 ease-in-out hover:scale-110'}
            />
          </a>
        )}
        {member.github && (
          <a href={member.github} className='cursor-pointer' target='_blank'>
            <BsGithub
              className={iconColors + 'transition-all duration-300 ease-in-out hover:scale-110'}
            />
          </a>
        )}
      </ul>
      <p className='p-4'>{member.description}</p>
    </li>
  )
}

export default MemberCard
