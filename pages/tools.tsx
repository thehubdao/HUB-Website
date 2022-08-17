import React from "react";
import { NextPage } from "next";
import Head from "next/head";

import Footer from "../components/general/Footer";
import Toolbar from "../components/general/Toolbar";
import ToolCard from "../components/section-element/ToolCard";

const TokenPage: NextPage = () => {
  return (
    <>
      <Head>
        <title>MGH - Metaverse Tools</title>
        <meta
          name="description"
          content="Governance of metaverse related items, fair valuation and minting of NFT backed tokens and provision of metaverse market data."
        />
      </Head>
      <Toolbar dark={true} />

      <main className="flex flex-col items-center text-gray-200 pt-28 lg:pt-48 w-full bg-[#111111] xl:px-24 pb-3">
        <div className="flex flex-col items-center space-y-24 w-full 2xl:max-w-screen-2xl px-5 sm:px-10">
          <h1 className="text-gray-200 text-8xl text-center">MGH TOOLS</h1>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
            <ToolCard
              title="Datasets"
              text="Datasets containing key stats about Metaverse LANDs on the OCEAN Marketplace"
              link="https://market.oceanprotocol.com/asset/did:op:8331D69bF312604542D5f5f41D859dA27568B7cd"
              button="Buy Datasets"
            />
            <ToolCard
              title="Chainlink Oracle"
              text="MGH Chainlink Oracle Node providing on-chain valuation data"
              link="https://market.link/data-providers/5a443923-252a-4208-8b4e-b01c04ff6fa4/integrations"
              button="Get Data"
            />
            <ToolCard
              title="Valuation API"
              text="Easy access and integration of our price estimations for Asset Managers, Funds, NFT Marketplaces and many more"
              link="https://api.metagamehub.io"
              button="Documentation"
            />
            <ToolCard
              title="DCL Edit"
              text="The first editor for the Decentraland SDK. Use it to easily build Metaverse experiences with no coding knowledge"
              textClasses="lg:px-30"
              link="https://dcl-edit.com/"
              button="Try it out!"
            />
            <ToolCard
              title="Metaverse Staking Protocol"
              text="Stake your $MANA and $SAND on a vault that leverages a trading bot and our AI price estimation algorithm to buy and sell LANDs on established NFT marketplaces. All the profits are shared between the stakers"
              link="https://docs.metagamehub.io/metaverse-tools/metafi"
              button="Coming soon!"
            />
            <ToolCard
              title="Valuation Interface"
              text="AI price estimations and analytics for Metaverse assets (The Sandbox, Decentraland, Axie Infinity, Somnium Space)"
              link="https://app.metagamehub.io/valuation"
              button="Launch App"
            />
          </div>
        </div>
      </main>

      <Footer />
    </>
  );
};

export default TokenPage;
