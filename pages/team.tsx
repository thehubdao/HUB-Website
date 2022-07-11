import { NextPage } from 'next'
import Head from 'next/head'

import team from '../data/team.json'
import advisors from '../data/advisors.json'

import Footer from '../components/general/Footer'
import Toolbar from '../components/general/Toolbar'
import Button from '../components/elements/Button'
import MemberCard from '../components/section-element/MemberCard'


const TeamPage: NextPage = () => {
  return (
    <>
      <Head>
        <title>MGH - Contributors</title>
        <meta name='description' content='Meet our core contributors and advisors' />
      </Head>
      <Toolbar dark={true} />

      <main className=' bg-[#111111] animate-fade-in-slow flex flex-col items-center pt-28 lg:pt-48 px-5 sm:px-10'>
        <h1 className='mb-10 text-gray-200 text-center font-normal md:text-8xl'>CORE CONTRIBUTORS</h1>
        <Button text='Contribute' link='/contribute' />

        <ul className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 justify-items-center w-full max-w-screen-2xl gap-5 py-8 mt-14'>
          {team.map((member, key) => (
            <MemberCard key={key} member={member} />
          ))}
        </ul>
        <h1 className='mb-10 text-gray-200 text-center font-normal mt-16 md:text-8xl'>OUR ADVISORS</h1>
        <ul className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 justify-items-center w-full max-w-screen-2xl gap-7 py-8'>
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
