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
              title="Valuation Interface"
              text="MGH dApp LAND Valuation Interface for The Sandbox and Decentraland (Axie Infinity cooming soon!)"
              link="https://app.metagamehub.io/valuation"
              button="Launch App"
            />
            <ToolCard
              title="$MGH Staking"
              text="By staking MGH tokens users can passively earn rewards. The community can also earn Liquidity Pool tokens (LP) by providing MGH tokens and NPTs to the MGH/NPT Liquidity Pool. The LPs can be staked afterwards to farm additional MGH tokens."
              link="https://app.metagamehub.io/stake"
              button="Stake $MGH"
            />
            <ToolCard
              title="Valuation API"
              text="Direct API access and widget creation and integration for Assetmanager, DeFi Protocols, NFT Marketplaces, and many more"
              link="https://api.metagamehub.io"
              button="Documentation"
            />
            <ToolCard
              title="NFT Pools"
              text="Users can select a pool based on their NFTs, lock them in along with MGH as collateral and mint NFT Pool Tokens in return. This allows the user to diversify their NFT holdings and hedge their overall exposure."
              link="https://app.metagamehub.io/pools"
              button="Launch App"
            />
            <ToolCard
              title="LAND Trading Bot"
              text="By staking MGH tokens users can passively earn rewards. The community can also earn Liquidity Pool tokens (LP) by providing MGH tokens and NPTs to the MGH/NPT Liquidity Pool. The LPs can be staked afterwards to farm additional MGH tokens."
              classes="col-span-1 md:col-span-2 lg:col-span-3 md:max-w-fit"
              textClasses="lg:px-52"
            />
          </div>
        </div>
      </main>

      <Footer />
    </>
  );
};

export default TokenPage;
