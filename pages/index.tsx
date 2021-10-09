import { useEffect, useState } from 'react';
import type { NextPage } from 'next'
import Head from 'next/head'
import "animate.css"

import Intro from "../components/Intro";
import Infrastructure from "../components/Infrastructure";
import Footer from "../components/Footer";
import NFTs from '../components/NFTs';
import NPTStructure from '../components/NPT';
import Governance from '../components/Governance';
import Tokenomics from "../components/Tokenomics";
import Roadmap from '../components/Roadmap';
import Team from '../components/Team';
import Partner from '../components/Partner';
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
                <link rel="icon" href="/favicon.ico" />
                <meta name="description" content="Governance of metaverse related items, fair valuation and minting of NFT backed tokens and provision of metaverse market data." />
                {/* <meta name="robots" content="noodp,noydir" /> */}
                <link rel="shortcut icon" href="/favicon.ico" />
                <link 
                rel="icon"
                type="image/png"
                sizes="96x96"
                href="/favicon-96x96.png"
          />
            </Head>

            <main className="flex flex-col items-center">
                <div className="max-w-full 2xl:max-w-screen-2xl">

                    <Intro scroll={scroll} />

                    <Infrastructure />

                    <NFTs />

                    <Press />

                    <NPTStructure />

                    <Governance />

                    <Ocean />

                    <Tokenomics />

                    <Roadmap scroll={scroll} />

                    <Team />

                    <Partner />

                </div>

            </main>

            <Footer />


        </>
    )
}

export default Home
