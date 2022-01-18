import { NextPage } from 'next'
import Head from 'next/head'
import { MemberCard, Toolbar } from '../components'
import team from '../data/teamNew.json'
import advisors from '../data/extendedTeamNew.json'

const TeamPage: NextPage = () => {
  return (
    <>
      <Head>
        <title>MGH - Team</title>
        <meta name='description' content='Meet our team' />
      </Head>
      <Toolbar dark={true} />

      <main className='animate-fade-in-slow flex flex-col items-center pt-52'>
        <h1 className='mb-10 text-gradient'>Meet Our Team</h1>
        <ul className='auto-grid w-full max-w-screen-2xl gap-12 md:px-16 px-8 py-8'>
          {team.map((member) => (
            <MemberCard member={member} />
          ))}
        </ul>
        <h2 className='text-gradient'>Our Advisors</h2>
        <ul className='auto-grid w-full max-w-screen-2xl gap-12 md:px-16 px-8 py-8'>
          {advisors.map((member) => (
            <MemberCard member={member} />
          ))}
        </ul>
      </main>
    </>
  )
}

export default TeamPage
