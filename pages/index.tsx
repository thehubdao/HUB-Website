import type { NextPage } from 'next'
import Head from 'next/head'

import Intro from "../components/section/Intro";
import Footer from "../components/general/Footer";
import Tokenomics from "../components/section/Tokenomics";
import Roadmap from '../components/section/Roadmap';
import Team from '../components/section/Team';
import Partner from '../components/section/Collaborators';
import Press from '../components/section/Press';
import { Toolbar } from '../components';
import DAO from '../components/section/DAO';
import Ecosystem from '../components/section/Ecosystem';
import Assets from '../components/section/Assets';
import Tools from '../components/section/Tools';
import Issues from '../components/section/Issues';
import Blank from '../components/section/Blank';


const Home: NextPage = () => {

    return (
        <>
            <Head>
                <title>MetaGameHub DAO</title>
                <meta name="description" content="Governance of metaverse related items, fair valuation and minting of NFT backed tokens and provision of metaverse market data." />
            </Head>
            <Toolbar dark={true} />

            <main className="flex flex-col items-center text-gray-200 select-none">
                <Intro />

                <div className="max-w-full 2xl:max-w-screen-2xl flex flex-col space-y-48">

                    {/* <DAO /> */}

                    <Ecosystem />

                    <Issues />

                    <Assets />

                    <Tools />

                    {/* <Blank /> */}
                    
                    <Tokenomics />

                    <Roadmap />

                    <Team />

                    <Partner />

                    <Press />

                </div>

            </main>

            <Footer />
        </>
    )
}


export default Home
