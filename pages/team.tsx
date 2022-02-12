import { NextPage } from 'next'
import Head from 'next/head'

import team from '../data/team.json'
import advisors from '../data/advisors.json'

import { Footer, MemberCard, Toolbar } from '../components'
import Button from '../components/elements/Button'


const TeamPage: NextPage = () => {
  return (
    <>
      <Head>
        <title>MGH - Contributors</title>
        <meta name='description' content='Meet our core contributors and advisors' />
      </Head>
      <Toolbar dark={true} />

      <main className='animate-fade-in-slow flex flex-col items-center pt-28 lg:pt-52'>
        <h1 className='mb-10 text-gradient text-center font-normal'>
          Core contributors
        </h1>
        <Button text='Contribute' link='/contribute' />

        <ul className='members-grid justify-items-center w-full max-w-screen-2xl gap-6 md:px-16 px-8 py-8 mt-14'>
          {team.map((member, key) => (
            <MemberCard key={key} member={member} />
          ))}
        </ul>
        <h1 className='pt-32 pb-10 text-center reverse-text-gradient font-normal'>Our Advisors</h1>
        <ul className='members-grid justify-items-center w-full max-w-screen-2xl gap-6 md:px-16 px-8 py-8'>
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
