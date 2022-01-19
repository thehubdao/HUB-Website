import { NextPage } from 'next'
import Head from 'next/head'
import Link from 'next/link'
import { Footer, MemberCard, Toolbar } from '../components'
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
        <h1 className='text-4xl sm:text-6xl mb-10 text-gradient'>
          Meet Our Team
        </h1>
        <Link href={'/contribute'}>
          <a className='text-white button mb-10'>Contribute</a>
        </Link>

        <ul className='members-grid justify-items-center w-full max-w-screen-2xl gap-12 md:px-16 px-8 py-8'>
          {team.map((member) => (
            <MemberCard member={member} />
          ))}
        </ul>
        <h2 className='py-32 reverse-text-gradient'>Our Advisors</h2>
        <ul className='members-grid w-full max-w-screen-2xl gap-12 md:px-16 px-8 py-8 mb-28'>
          {advisors.map((member) => (
            <MemberCard member={member} advisor />
          ))}
        </ul>
      </main>
      <Footer />
    </>
  )
}

export default TeamPage
