import type { NextPage } from 'next'
import Head from 'next/head'

import Footer from '../components/general/Footer'
import { Toolbar } from '../components'
import { HomeCardsSection, HomeIntro } from '../components/homepage'

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
        <HomeIntro />
        <HomeCardsSection />
        {/* <Intro />

<div className="max-w-full 2xl:max-w-screen-2xl flex flex-col space-y-48">

<CTAs />

<Communnity />

<Ecosystem />

<Links />

{/* <Ecosystem /> */}

        {/* <Issues /> */}

        {/* <Assets /> */}

        {/* <Tools /> */}

        {/* <Blank /> */}

        {/* <Tokenomics /> */}

        {/* <Achievements /> */}

        {/* <Roadmap /> */}

        {/* <DAO /> */}

        {/* <Team /> */}

        {/* <Partner /> */}

        {/* <Token /> */}

        {/* <Press /> */}

        {/* </div>  */}
      </main>

      <Footer />
    </>
  )
}

export default Home
