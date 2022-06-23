import type { NextPage } from 'next'
import Head from 'next/head'

import Footer from '../components/general/Footer'
import { Toolbar } from '../components'
import { HomeCardsSection, HomeIntro } from '../components/homepage'
import Achievements from '../components/section/Achievements'
import Collaborators from '../components/section/Collaborators'

const Home: NextPage = () => {
  return (
    <>
      <Head>
        <title>MetaGameHub DAO</title>
        <meta
          name="description"
          content="Governance of metaverse related items, fair valuation and minting of NFT backed tokens and provision of metaverse market data."
        />
      </Head>
      <Toolbar dark={true} />

      <main className="text-gray-200 pt-[10vh] md:pt-40 min-h-screen">
        <div className="flex flex-col gap-36">
          <HomeIntro />
          <HomeCardsSection />
          <Collaborators />
          <Achievements />
        </div>
      </main>

      <Footer />
    </>
  )
}

export default Home
