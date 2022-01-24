import { useEffect, useState } from 'react';
import type { NextPage } from 'next'
import Head from 'next/head'
import "animate.css"

import Intro from "../components/Intro";
import Infrastructure from "../components/Infrastructure";
import Footer from "../components/Footer";
import NFTs from '../components/NFTs';
import Lands from '../components/Lands';
import NPTStructure from '../components/NPT';
import Governance from '../components/Governance';
import Tokenomics from "../components/Tokenomics";
import Roadmap from '../components/Roadmap';
import Team from '../components/Team';
import Partner from '../components/Collaborators';
import Press from '../components/Press';
import Ocean from '../components/Ocean';


const Home: NextPage = () => {
    const [scroll, setScroll] = useState(0);

    useEffect(function onFirstMount() {
        function onScroll() {
            setScroll(window.scrollY);
        }
        window.addEventListener("scroll", onScroll, { passive: true });
    }, []);

    return (
        <>
            <Head>
                <title>MetaGameHub DAO</title>
                <meta name="description" content="Governance of metaverse related items, fair valuation and minting of NFT backed tokens and provision of metaverse market data." />
                {/* <meta name="robots" content="noodp,noydir" /> */}
            </Head>

            <main className="flex flex-col items-center">
                <Intro scroll={scroll} />

                <div className="max-w-full 2xl:max-w-screen-2xl overflow-x-hidden">

                    <Infrastructure />

                    <NFTs />

                    <Lands />

                    <Press />

                    <NPTStructure />

                    <Governance />

                    <Ocean />

                    <Tokenomics />

                    <Roadmap />

                    <Team />

                    <Partner />

                </div>

            </main>

            <Footer />


        </>
    )
}

export default Home
