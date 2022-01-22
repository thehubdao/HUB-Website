import { NextPage } from 'next'
import Head from 'next/head'
import Link from 'next/link'
import { Footer, MemberCard, Toolbar } from '../components'
import team from '../data/team.json'
import advisors from '../data/advisors.json'

const TeamPage: NextPage = () => {
  return (
    <>
      <Head>
        <title>MGH - Team</title>
        <meta name='description' content='Meet our team' />
      </Head>
      <Toolbar dark={true} />

      <main className='animate-fade-in-slow flex flex-col items-center pt-28 lg:pt-52'>
        <h1 className='mb-10 text-gradient text-center'>
          Meet Our Team
        </h1>
        <Link href={'/contribute'}>
          <a className='text-gray-300 font-medium button mb-14'>Contribute</a>
        </Link>

        <ul className='members-grid justify-items-center w-full max-w-screen-2xl gap-12 md:px-16 px-8 py-8'>
          {team.map((member, key) => (
            <MemberCard key={key} member={member} />
          ))}
        </ul>
        <h2 className='pt-32 pb-10 text-center reverse-text-gradient'>Our Advisors</h2>
        <ul className='members-grid justify-items-center w-full max-w-screen-2xl gap-12 md:px-16 px-8 py-8 mb-28'>
          {advisors.map((advisor, key) => (
            <MemberCard key={key} member={advisor} advisor />
          ))}
        </ul>
      </main>
      <Footer />
    </>
  )
}

export default TeamPage
