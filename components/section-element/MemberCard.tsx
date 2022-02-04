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

const MemberCard = ({
  member,
  advisor,
  small
}: {
  member: Member
  advisor?: boolean
  small?: boolean
}) => {
  // changing color whether member is an advisor or core team.
  const iconColors = advisor
    ? 'text-pink-500 hover:text-pink-600 '
    : 'text-blue-400 hover:text-blue-600 '

  return (
    <li
      className={
        'w-80vw sm:w-full max-w-sm border-white border border-opacity-5 p-3 xs:p-4 rounded-md text-gray-200 relative flex flex-col items-center lg:block text-center lg:text-left bg-grey-darkest'
      }
    >
      <Image
        placeholder='blur'
        blurDataURL={member.image || '/images/Logos/MGH/mgh_logo.png'}
        src={member.image || '/images/Logos/MGH/mgh_logo.png'}
        width={300}
        height={300}
        loading='lazy'
        objectFit='cover'
        className='rounded'
      />
      <h3
        className={
          (advisor ? 'reverse-text-gradient ' : 'text-gradient ') +
          'text-xl xl:text-2xl pb-1'
        }
      >
        {member.name}
      </h3>
      <h4 className='text-base border-none pb-1 font-light'>{member.position}</h4>
      <ul className={`text-4xl ${!small && 'pb-4'} w-full flex relative justify-center lg:justify-start -left-1`}>
        {member.linkedin && (
          <a href={member.linkedin} className='cursor-pointer' target='_blank'>
            <TiSocialLinkedinCircular
              className={iconColors + 'transition-all duration-300 ease-in-out hover:scale-110'}
            />
          </a>
        )}
        {member.twitter && (
          <a href={member.twitter} className='cursor-pointer' target='_blank'>
            <TiSocialTwitter
              className={iconColors + 'transition-all duration-300 ease-in-out hover:scale-110'}
            />
          </a>
        )}
        {member.github && (
          <a href={member.github} className='cursor-pointer' target='_blank'>
            <TiSocialGithubCircular
              className={iconColors + 'transition-all duration-300 ease-in-out hover:scale-110'}
            />
          </a>
        )}
      </ul>
      {!small && <p>{member.description}</p>}
    </li>
  )
}

export default MemberCard
