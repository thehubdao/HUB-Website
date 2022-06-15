import type { NextPage } from 'next'
import Head from 'next/head'

import Intro from '../components/section/Intro'
import Footer from '../components/general/Footer'
import Tokenomics from '../components/section/Tokenomics'
import Roadmap from '../components/section/Roadmap'
import Team from '../components/section/Team'
import Partner from '../components/section/Collaborators'
import Press from '../components/section/Press'
import { Toolbar } from '../components'
import DAO from '../components/section/DAO'
import Ecosystem from '../components/section/Ecosystem'
import Assets from '../components/section/Assets'
import Tools from '../components/section/Tools'
import Issues from '../components/section/Issues'
import Blank from '../components/section/Blank'
import Achievements from '../components/section/Achievements'
import { HomeActionButton } from '../components/homepage'

const Home: NextPage = () => {
  return (
    <>
      <Head>
        <title>MetaGameHub DAO</title>
        <meta
          name='description'
          content='Governance of metaverse related items, fair valuation and minting of NFT backed tokens and provision of metaverse market data.'
        />
      </Head>
      <Toolbar dark={true} />

      <main className='text-gray-200 pt-40 min-h-screen'>
        <section>
          <video
            loop
            autoPlay
            muted
            className='w-screen h-screen absolute top-0 object-cover -z-10'
          >
            <source src='/videos/SPACEBG.MP4' type='video/mp4' />
          </video>

          {/* Bottom */}
          <div className='absolute mt-[45vh]'>
            {/* Action Buttons and Big Text */}
            <div className='pl-14'>
              {/* Action Buttons */}
              <div className='flex gap-4'>
                <HomeActionButton
                  text='Voting'
                  link='https://snapshot.org/#/metagamehub.eth'
                />
                <HomeActionButton
                  text='Launch App'
                  link='https://app.metagamehub.io'
                />
              </div>
              {/* Text Box */}

              <h1 className='text-8xl'>METAGAMEHUB</h1>
              <div className='flex gap-4'>
                <h2 className='text-8xl'>DAO</h2>
                <div>
                  <h3 className='text-2xl'>
                    Your Homebase in the Open Metaverse
                  </h3>
                  <p className='w-96'>
                    MetaGameHub DAO develops Infrastructure and Applications to
                    be a Hub for Open Metaverse experiences
                  </p>
                </div>
              </div>
            </div>
            {/* Right Explore + */}
            <div></div>
          </div>
        </section>
        {/* <Intro />

<div className="max-w-full 2xl:max-w-screen-2xl flex flex-col space-y-48">



<Ecosystem />

                    <Issues />

                    <Assets />

                    <Tools />

                    <Blank />

                    <Tokenomics />

                    <Achievements />

                    <Roadmap />

                    <DAO />

                    <Team />

                    <Partner />

                    <Press />

                </div> */}
      </main>

      <Footer />
    </>
  )
}

export default Home
