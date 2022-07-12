import React, { useEffect, useState } from 'react'
import { NextPage } from 'next'
import Head from 'next/head'
import { createConnection } from 'mysql2/promise'

import landsJson from '../data/lands.json'
import assetsJson from '../data/assets.json'

import Footer from '../components/general/Footer'
import Toolbar from '../components/general/Toolbar'
import LandCard from '../components/section-element/LandCard'
import CryptoCard from '../components/section-element/CryptoCard'

const TreasuryPage: NextPage = ({
  cryptoValues,
  landValues,
  nftValues,
}: any) => {
  const [showLands, setShowLands] = useState('')
  const [totalTreasuryValue, setTotalTreasuryValue] = useState(0)
  const [totalCryptoValue, setTotalCryptoValue] = useState(0)
  const [totalSandboxValue, setTotalSandboxValue] = useState(0)
  const [totalDecentralandValue, setTotalDecentralandValue] = useState(0)
  const [totalSomniumValue, setTotalSomniumValue] = useState(0)
  const [totalFlufValue, setTotalFlufValue] = useState(0)
  const [totalXoneValue, setTotalXoneValue] = useState(0)
  const [totalUniswapValue, setTotalUniswapValue] = useState(0)
  const [totaldripShadesValue, setTotaldripShadesValue] = useState(0)
  const [totalwowPixiesValue, setTotalwowPixiesValue] = useState(0)
  const [totalENSValue, setTotalENSValue] = useState(0)
  const [totalNFTValue, setTotalNFTValue] = useState(0)
  const [totalOceanValue, setTotalOceanValue] = useState(0)
  const [totalQuickswapValue, setTotalQuickswapValue] = useState(0)
  const [totalAssetsValue, setTotalAssetsValue] = useState(0)

  useEffect(() => {
    const cryptoSum = cryptoValues
      .filter(
        (token: { symbol: string }) =>
          !['Ocean Data LPs', 'Quickswap LPs'].includes(token.symbol)
      )
      .reduce((acc: any, curr: any) => acc + curr.value, 0)
    setTotalCryptoValue(cryptoSum)

    const sandboxLandSum = landValues
      .filter((land: { metaverse: string }) => land.metaverse === 'sandbox')
      .reduce((acc: any, curr: any) => acc + curr.priceUsd, 0)
    const sandboxAssetsSum = nftValues
      .filter((nft: { name: string }) =>
        ['the-sandbox-assets', 'snoop-dogg-doggies'].includes(nft.name)
      )
      .reduce((acc: any, curr: any) => acc + curr.value_7, 0)
    const sandboxSumRounded = Math.round(sandboxLandSum + sandboxAssetsSum)
    setTotalSandboxValue(sandboxSumRounded)

    const decentralandSum = landValues
      .filter(
        (land: { metaverse: string }) => land.metaverse === 'decentraland'
      )
      .reduce((acc: any, curr: any) => acc + curr.priceUsd, 0)
    const decentralandSumRounded = Math.round(decentralandSum)
    setTotalDecentralandValue(decentralandSumRounded)

    const flufSum = nftValues
      .filter((nft: { name: string }) =>
        [
          'fluf-world-thingies',
          'partybear',
          'asm-aifa-all-stars',
          'fluf-world',
          'asm-brains',
          'fluf-world-burrows',
          'fluf-world-eggs',
        ].includes(nft.name)
      )
      .reduce((acc: any, curr: any) => acc + curr.value_7, 0)
    const flufSumRounded = Math.round(flufSum)
    setTotalFlufValue(flufSumRounded)

    const somniumSum = nftValues.find(
      (nft: { name: string }) => nft.name === 'somnium-space'
    ).value_7
    const somniumSumRounded = Math.round(somniumSum)
    setTotalSomniumValue(somniumSumRounded)

    const xoneSum = nftValues.find(
      (nft: { name: string }) => nft.name === 'xones'
    ).value_7
    const xoneSumRounded = Math.round(xoneSum)
    setTotalXoneValue(xoneSumRounded)

    const ensSum = nftValues.find(
      (nft: { name: string }) => nft.name === 'ens'
    ).value_7
    const ensSumRounded = Math.round(ensSum)
    setTotalENSValue(ensSumRounded)

    const uniswapSum = nftValues.find(
      (nft: { name: string }) => nft.name === 'uniswap-v3-positions'
    ).value_7
    const uniswapSumRounded = Math.round(uniswapSum)
    setTotalUniswapValue(uniswapSumRounded)

    const dripShadesSum = nftValues.find(
      (nft: { name: string }) => nft.name === 'decentral-games'
    ).value_7
    const dripShadesSumRounded = Math.round(dripShadesSum)
    setTotaldripShadesValue(dripShadesSumRounded)

    const wowPixiesSum = nftValues.find(
      (nft: { name: string }) => nft.name === 'wow-pixies-v2'
    ).value_7
    const wowPixiesSumRounded = Math.round(wowPixiesSum)
    setTotalwowPixiesValue(wowPixiesSumRounded)

    const nftSum =
      sandboxSumRounded +
      decentralandSumRounded +
      somniumSumRounded +
      flufSumRounded +
      xoneSumRounded +
      ensSumRounded +
      uniswapSumRounded +
      dripShadesSumRounded +
      wowPixiesSumRounded
    setTotalNFTValue(nftSum)

    const quickswapSum = cryptoValues.find(
      (token: { symbol: string }) => token.symbol === 'Quickswap LPs'
    ).value
    const quickswapSumRounded = Math.round(quickswapSum)
    setTotalQuickswapValue(quickswapSumRounded)

    const oceanSum = cryptoValues.find(
      (token: { symbol: string }) => token.symbol === 'Ocean Data LPs'
    ).value
    const oceanSumRounded = Math.round(oceanSum)
    setTotalOceanValue(oceanSumRounded)

    const assetsSum = quickswapSumRounded + oceanSumRounded
    setTotalAssetsValue(assetsSum)

    setTotalTreasuryValue(cryptoSum + nftSum + assetsSum)
  }, [cryptoValues, landValues])

  const handleClick = (category: string) => {
    if (showLands === '' || showLands !== category) {
      setShowLands(category)
    } else {
      setShowLands('')
    }
  }

  assetsJson.map((element, key) => {
    if (element.metaverse === 'XONE') {
      return (
        <LandCard
          key={key}
          classes=''
          img={element.image}
          title={element.title}
          link={element.link}
          metaverse={element.metaverse}
        />
      )
    }
  })

  var xones: any[] = []
  for (var i = 1159; i < 1213; i++) {
    xones.push(
      <LandCard
        key={i}
        classes=''
        img='/images/Assets/webp/xone.webp'
        title={`XONE #${i}`}
        link={`https://opensea.io/assets/0x9ec46a3dd227fd5977c7f1997c043122a703ff2a/${i}`}
        metaverse='XONE'
      />
    )

    return (
      <>
        <Head>
          <title>MGH - Treasury</title>
          <meta
            name='description'
            content='Governance of metaverse related items, fair valuation and minting of NFT backed tokens and provision of metaverse market data.'
          />
        </Head>
        <Toolbar dark={true} />

        <main className='flex flex-col items-center text-gray-200 pt-28 lg:pt-48 w-full bg-[#111111]'>
          <div className='flex flex-col w-full 2xl:max-w-screen-2xl px-5 sm:px-10'>
            <div className='flex flex-col flex-row justify-between items-center space-x-0 space-y-5 md:pb-10 lg:space-y-0 w-full pb-10 lg:pb-30'>
              <h1 className='text-gray-200 font-normal pb-16 lg:text-8xl'>
                TREASURY
              </h1>

              <div className='flex flex-col items-center space-y-1 lg:space-y-3 w-1/2 mb-20 rounded-lg p-5 bg-[#262626]'>
                <p className='md:text-md lg:text-lg flex-grow'>
                  Total Treasury Value
                </p>
                <div className='flex text-2xl md:text-6xl lg:text-8xl font-anton'>
                  <p>$</p>
                  <p className='text-pink-500'>{totalTreasuryValue.toLocaleString('en-GB')}</p>
                </div>
                <div className='flex items-center space-x-1 pt-2 '>
                  <a
                    href='https://opensea.io/0x2a9da28bcbf97a8c008fd211f5127b860613922d'
                    target='_blank'
                    className='md:text-md lg:text-lg hover:text-blue-400 transition ease-in-out pt-0.5 pr-3 duration-300'
                  >
                    Opensea
                  </a>
                  <hr className='border-gray-400 w-8 rotate-90 ' />
                  <a
                    href='https://gnosis-safe.io/app/eth:0x2a9Da28bCbF97A8C008Fd211f5127b860613922D/balances'
                    target='_blank'
                    className='md:text-md lg:text-lg hover:text-blue-400 transition ease-in-out pt-0.5 pl-3 duration-300'
                  >
                    Gnosis
                  </a>
                </div>
              </div>
            </div>

            <div className='flex flex-col flex-row items-start items-center space-x-0 space-y-5 justify-between w-full py-10'>
              <div className='flex flex-col bg-[#262626] items-center rounded-lg py-2'>
                <p className='text-sm md:text-md lg:text-lg font-inter px-20 text-pink-400'>
                  ${totalCryptoValue.toLocaleString('en-GB')}
                </p>
                <p className='text-gray-200 text-sm md:text-md lg:text-lg min-w-max flex-grow'>
                  Cryptocurrencies
                </p>
              </div>

              <div className='flex flex-grow place-content-center flex-wrap max-w-full lg:max-w-3/4 items-center'>
                {cryptoValues
                  .filter(
                    (token: { symbol: string }) =>
                      !['Ocean Data LPs', 'Quickswap LPs'].includes(
                        token.symbol
                      )
                  )
                  .map((element: any, key: any) => {
                    if (element.value > 0) {
                      return (
                        <CryptoCard
                          key={key}
                          name={element.symbol}
                          value={element.value}
                        />
                      )
                    }
                  })}
              </div>
            </div>

            <div className='flex flex-col flex-row items-start items-center space-x-0 space-y-5 justify-between w-full py-10'>
              <div className='flex flex-col bg-[#262626] items-center rounded-lg py-2'>
                <p className='text-sm md:text-md lg:text-lg font-inter px-20 text-pink-400'>
                  ${totalNFTValue.toLocaleString('en-GB')}
                </p>
                <p className='text-gray-200 text-sm md:text-md lg:text-lg min-w-max flex-grow'>
                  NFTs
                </p>
              </div>

              <div className='flex flex-grow place-content-center flex-wrap max-w-full lg:max-w-3/4 items-center'>
                <CryptoCard
                  name='Sandbox'
                  clicked={showLands === 'Sandbox'}
                  value={totalSandboxValue}
                  logo='/images/Logos/Cryptos/webp/SAND.webp'
                  onClick={() => handleClick('Sandbox')}
                />
                <CryptoCard
                  name='Decentraland'
                  clicked={showLands === 'Decentraland'}
                  value={totalDecentralandValue}
                  logo='/images/Logos/Cryptos/webp/MANA.webp'
                  onClick={() => handleClick('Decentraland')}
                />
                <CryptoCard
                  name='Somnium'
                  clicked={showLands === 'Somnium'}
                  value={totalSomniumValue}
                  logo='/images/Logos/webp/somnium-space-logo.webp'
                  onClick={() => handleClick('Somnium')}
                />
                <CryptoCard
                  name='FLUF'
                  clicked={showLands === 'FLUF'}
                  value={totalFlufValue}
                  logo='/images/Logos/webp/flufworld-logo.webp'
                  onClick={() => handleClick('FLUF')}
                />
                <CryptoCard
                  name='XONE'
                  clicked={showLands === 'XONE'}
                  value={totalXoneValue}
                  logo='/images/Logos/webp/xone-logo.webp'
                  onClick={() => handleClick('XONE')}
                />
                <CryptoCard
                  name='ENS'
                  clicked={showLands === 'ENS'}
                  value={totalENSValue}
                  logo='/images/Assets/webp/ens.webp'
                  onClick={() => handleClick('ENS')}
                />
                <CryptoCard
                  name='Uniswap V3'
                  value={totalUniswapValue}
                  logo='/images/Assets/uniswap-positions.svg'
                  onClick={() =>
                    window.open(
                      'https://opensea.io/assets/0xc36442b4a4522e871399cd717abdd847ab11fe88/153816',
                      '_blank'
                    )
                  }
                  external
                />
                <CryptoCard
                  name='Drip Shades'
                  value={totaldripShadesValue}
                  logo='https://lh3.googleusercontent.com/GThBKtJoDNClfmSc_tFcLoz6otilERBlobIKZaAcysaOW7dmpp2n3REqEVuqTb0_Xo1QgU04-HWaH26VakSlSBjsox5WYf8EndA5wPk=s0'
                  onClick={() =>
                    window.open(
                      'https://opensea.io/assets/matic/0x897243a54b03b46a17b55d5609465e9719a6ffa0/210624583337114373395836055367340864637790190801098222508621955082',
                      '_blank'
                    )
                  }
                  external
                />
                <CryptoCard
                  name='Wow Pixies'
                  clicked={showLands === 'wowPixies'}
                  value={totalwowPixiesValue}
                  logo='/images/Logos/wow-pixies.jpg'
                  onClick={() => handleClick('wowPixies')}
                />
              </div>
            </div>

            {showLands === 'Sandbox' && (
              <div className='flex flex-wrap w-full pb-20'>
                {landsJson.map((element, key) => {
                  if (element.metaverse === 'Sandbox') {
                    return (
                      <LandCard
                        key={key}
                        classes=''
                        img={element.image}
                        title={element.title}
                        link={element.link}
                        metaverse={element.metaverse}
                      />
                    )
                  }
                })}

                {assetsJson.map((element, key) => {
                  if (element.metaverse === 'Sandbox') {
                    return (
                      <LandCard
                        key={key}
                        classes=''
                        img={element.image}
                        title={element.title}
                        link={element.link}
                        metaverse={element.metaverse}
                      />
                    )
                  }
                })}
              </div>
            )}

            {showLands === 'Decentraland' && (
              <div className='flex flex-wrap w-full pb-20'>
                {landsJson.map((element, key) => {
                  if (element.metaverse === 'Decentraland') {
                    return (
                      <LandCard
                        key={key}
                        classes=''
                        img={element.image}
                        title={element.title}
                        link={element.link}
                        metaverse={element.metaverse}
                      />
                    )
                  }
                })}
              </div>
            )}

            {showLands === 'Somnium' && (
              <div className='flex flex-wrap w-full pb-20'>
                {landsJson.map((element, key) => {
                  if (element.metaverse === 'Somnium') {
                    return (
                      <LandCard
                        key={key}
                        classes=''
                        img={element.image}
                        title={element.title}
                        link={element.link}
                        metaverse={element.metaverse}
                      />
                    )
                  }
                })}
              </div>
            )}

            {showLands === 'FLUF' && (
              <div className='flex flex-wrap w-full pb-20'>
                {assetsJson.map((element, key) => {
                  if (element.metaverse === 'FLUFWorld') {
                    return (
                      <LandCard
                        key={key}
                        classes=''
                        img={element.image}
                        title={element.title}
                        link={element.link}
                        metaverse={element.metaverse}
                      />
                    )
                  }
                })}
              </div>
            )}

            {showLands === 'XONE' && (
              <div className='flex flex-wrap w-full pb-20'>{xones}</div>
            )}

            {showLands === 'ENS' && (
              <div className='flex flex-wrap w-full pb-20'>
                <LandCard
                  classes=''
                  img='/images/Assets/webp/ens.webp'
                  title='mghdao.eth'
                  link='https://opensea.io/assets/0x57f1887a8bf19b14fc0df6fd9b2acc9af147ea85/65094968028965490667962940604995070354564234685879228165394497380248733853575'
                />
                <LandCard
                  classes=''
                  img='/images/Assets/webp/ens.webp'
                  title='metagamehub.eth'
                  link='https://opensea.io/assets/0x57f1887a8bf19b14fc0df6fd9b2acc9af147ea85/65976217577879806189239991483658207330501404736298853056691685243794338078597'
                />
              </div>
            )}

            {showLands === 'wowPixies' && (
              <div className='flex flex-wrap w-full pb-20'>
                {[
                  3875, 980, 3675, 4999, 5049, 4583, 1091, 3499, 4684, 4683,
                  429, 4682, 4398, 289, 3667, 85, 3424, 4249, 4964, 5096, 4402,
                  5470, 4540, 4573, 4528, 3170, 2630, 4088, 4017, 4116, 4084,
                  4111, 4093, 4089, 4086, 4016, 1908, 5190, 4287, 3855,
                ].map((id, key) => {
                  return (
                    <LandCard
                      key={key}
                      classes=''
                      img={`https://ipfs.io/ipfs/QmPLddSa7wPExSNsNDya3cjUbiMKuFPsLm4ygojqm7XLjk/${id}.jpg`}
                      title={`Pixie #${id}`}
                      link={`https://opensea.io/assets/0xb67812ce508b9fc190740871032237c24b6896a0/${id}`}
                    />
                  )
                })}
              </div>
            )}

            <div className='flex flex-col flex-row items-start items-center space-x-0  space-y-5 justify-between w-full py-10'>
              <div className='flex flex-col bg-[#262626] items-center rounded-lg py-2'>
                <p className='text-sm md:text-md lg:text-lg font-inter px-20 text-pink-400'>
                  ${totalAssetsValue.toLocaleString('en-GB')}
                </p>
                <p className='text-gray-200 text-sm md:text-md lg:text-lg min-w-max flex-grow'>
                  Assets
                </p>
              </div>

              <div className='flex flex-grow place-content-center flex-wrap max-w-full lg:max-w-3/4'>
                <CryptoCard
                  name='Quickswap LPs'
                  value={totalQuickswapValue}
                  logo='/images/Logos/Cryptos/webp/Quickswap_LPs.webp'
                  onClick={() =>
                    window.open(
                      'https://info.quickswap.exchange/#/account/0x16d0F35b8A4bfc49391d9c374d5AF4ec2dFB25bc',
                      '_blank'
                    )
                  }
                  external
                />
                <CryptoCard
                  name='Ocean Data LPs'
                  value={totalOceanValue}
                  logo='/images/Logos/Cryptos/webp/Ocean_Data_LPs.webp'
                  onClick={() =>
                    window.open(
                      'https://market.oceanprotocol.com/asset/did:op:8331D69bF312604542D5f5f41D859dA27568B7cd',
                      '_blank'
                    )
                  }
                  external
                />
                <CryptoCard
                  name='Metaverse Valuation Node'
                  logo='/images/Logos/Cryptos/webp/LINK.webp'
                  onClick={() =>
                    window.open(
                      'https://market.link/data-providers/5a443923-252a-4208-8b4e-b01c04ff6fa4/integrations',
                      '_blank'
                    )
                  }
                  external
                />
              </div>
            </div>
          </div>
        </main>

        <Footer />
      </>
    )
  }
  // xdxdxdxdxdxdxdxdxdxdxdxdxdxdxdxdxdxdxdxdxdxdxdxdxdxdxdxdxdxdxdxdxdxdxdxdxdxdxdxdxdxdxdxdxdxdxdxdxd
  // xdxdxdxdxdxdxdxdxdxdxdxdxdxdxdxdxdxdxdxdxdxdxdxdxdxdxdxdxdxdxdxdxdxdxdxdxdxdxdxdxdxdxdxdxdxdxdxdxd
  // xdxdxdxdxdxdxdxdxdxdxdxdxdxdxdxdxdxdxdxdxdxdxdxdxdxdxdxdxdxdxdxdxdxdxdxdxdxdxdxdxdxdxdxdxdxdxdxdxd
  // xdxdxdxdxdxdxdxdxdxdxdxdxdxdxdxdxdxdxdxdxdxdxdxdxdxdxdxdxdxdxdxdxdxdxdxdxdxdxdxdxdxdxdxdxdxdxdxdxd
  return (
    <>
      <Head>
        <title>MGH - Treasury</title>
        <meta
          name='description'
          content='Governance of metaverse related items, fair valuation and minting of NFT backed tokens and provision of metaverse market data.'
        />
      </Head>
      <Toolbar dark={true} />

      <main className='flex flex-col items-center text-gray-200 pt-28 lg:pt-48 w-full'>
        <div className='flex flex-col w-full 2xl:max-w-screen-2xl px-5 sm:px-10'>
          <div className='flex flex-col sm:flex-row justify-between items-center space-x-0 lg:space-x-10 space-y-10 lg:space-y-0 w-full pb-20 lg:pb-44'>
            <h1 className='text-transparent bg-clip-text bg-gradient-to-b from-blue-500 via-pink-500 to-pink-600 font-normal'>
              Treasury
            </h1>

            <div className='flex flex-col items-center space-y-1 lg:space-y-3 w-1/2 -mb-20'>
              <p className='text-2xl md:text-3xl lg:text-5xl font-medium'>
                ${totalTreasuryValue.toLocaleString('en-GB')}
              </p>
              <p className='text-gray-400 text-base md:text-lg lg:text-3xl min-w-max flex-grow'>
                Total Treasury Value
              </p>

              <div className='flex font-medium items-center space-x-1 pt-2'>
                <a
                  href='https://opensea.io/0x2a9da28bcbf97a8c008fd211f5127b860613922d'
                  target='_blank'
                  className=' hover:text-blue-400 transition ease-in-out pt-0.5 duration-300'
                >
                  Opensea
                </a>
                <hr className='border-gray-400 w-5 rotate-90' />
                <a
                  href='https://gnosis-safe.io/app/eth:0x2a9Da28bCbF97A8C008Fd211f5127b860613922D/balances'
                  target='_blank'
                  className=' hover:text-blue-400 transition ease-in-out pt-0.5 duration-300'
                >
                  Gnosis
                </a>
              </div>
            </div>
          </div>

          <div className='flex flex-col lg:flex-row items-start items-center space-x-0  space-y-5 lg:space-y-0 justify-between w-full py-10'>
            <div className='flex flex-col space-y-1 lg:space-y-2 pl-2 lg:pl-0'>
              <p className='text-xl md:text-2xl lg:text-4xl font-medium pt-1.5'>
                ${totalCryptoValue.toLocaleString('en-GB')}
              </p>
              <p className='text-gray-400 text-sm md:text-lg lg:text-3xl min-w-max flex-grow'>
                Cryptocurrencies
              </p>
            </div>

            <div className='flex flex-grow flex-wrap max-w-full lg:max-w-3/4 lg:space-x-24'>
              {cryptoValues
                .filter(
                  (token: { symbol: string }) =>
                    !['Ocean Data LPs', 'Quickswap LPs'].includes(token.symbol)
                )
                .map((element: any, key: any) => {
                  if (element.value > 0) {
                    return (
                      <CryptoCard
                        key={key}
                        name={element.symbol}
                        value={element.value}
                      />
                    )
                  }
                })}
            </div>
          </div>

          <div className='flex flex-col lg:flex-row items-start items-center space-x-0 space-y-5 lg:space-y-0 justify-between w-full py-10'>
            <div className='flex flex-col space-y-1 lg:space-y-2 pl-2 lg:pl-0'>
              <p className='text-xl md:text-2xl lg:text-4xl font-medium pt-1.5'>
                ${totalNFTValue.toLocaleString('en-GB')}
              </p>
              <p className='text-gray-400 text-sm md:text-lg lg:text-3xl flex-grow'>
                NFTs
              </p>
            </div>

            <div className='flex flex-grow flex-wrap max-w-full lg:max-w-3/4 lg:space-x-24'>
              <CryptoCard
                name='Sandbox'
                clicked={showLands === 'Sandbox'}
                value={totalSandboxValue}
                logo='/images/Logos/Cryptos/webp/SAND.webp'
                onClick={() => handleClick('Sandbox')}
              />
              <CryptoCard
                name='Decentraland'
                clicked={showLands === 'Decentraland'}
                value={totalDecentralandValue}
                logo='/images/Logos/Cryptos/webp/MANA.webp'
                onClick={() => handleClick('Decentraland')}
              />
              <CryptoCard
                name='Somnium'
                clicked={showLands === 'Somnium'}
                value={totalSomniumValue}
                logo='/images/Logos/webp/somnium-space-logo.webp'
                onClick={() => handleClick('Somnium')}
              />
              <CryptoCard
                name='FLUF'
                clicked={showLands === 'FLUF'}
                value={totalFlufValue}
                logo='/images/Logos/webp/flufworld-logo.webp'
                onClick={() => handleClick('FLUF')}
              />
              <CryptoCard
                name='XONE'
                clicked={showLands === 'XONE'}
                value={totalXoneValue}
                logo='/images/Logos/webp/xone-logo.webp'
                onClick={() => handleClick('XONE')}
              />
              <CryptoCard
                name='ENS'
                clicked={showLands === 'ENS'}
                value={totalENSValue}
                logo='/images/Assets/webp/ens.webp'
                onClick={() => handleClick('ENS')}
              />
              <CryptoCard
                name='Uniswap V3'
                value={totalUniswapValue}
                logo='/images/Assets/uniswap-positions.svg'
                onClick={() =>
                  window.open(
                    'https://opensea.io/assets/0xc36442b4a4522e871399cd717abdd847ab11fe88/153816',
                    '_blank'
                  )
                }
              />
              <CryptoCard
                name='Drip Shades'
                value={totaldripShadesValue}
                logo='https://lh3.googleusercontent.com/GThBKtJoDNClfmSc_tFcLoz6otilERBlobIKZaAcysaOW7dmpp2n3REqEVuqTb0_Xo1QgU04-HWaH26VakSlSBjsox5WYf8EndA5wPk=s0'
                onClick={() =>
                  window.open(
                    'https://opensea.io/assets/matic/0x897243a54b03b46a17b55d5609465e9719a6ffa0/210624583337114373395836055367340864637790190801098222508621955082',
                    '_blank'
                  )
                }
              />
              <CryptoCard
                name='Wow Pixies'
                value={totalwowPixiesValue}
                logo='/images/Logos/wow-pixies.jpg'
                onClick={() => handleClick('wowPixies')}
              />
            </div>
          </div>

          {showLands === 'Sandbox' && (
            <div className='flex flex-wrap w-full pb-20'>
              {landsJson.map((element, key) => {
                if (element.metaverse === 'Sandbox') {
                  return (
                    <LandCard
                      key={key}
                      classes=''
                      img={element.image}
                      title={element.title}
                      link={element.link}
                      metaverse={element.metaverse}
                    />
                  )
                }
              })}

              {assetsJson.map((element, key) => {
                if (element.metaverse === 'Sandbox') {
                  return (
                    <LandCard
                      key={key}
                      classes=''
                      img={element.image}
                      title={element.title}
                      link={element.link}
                      metaverse={element.metaverse}
                    />
                  )
                }
              })}
            </div>
          )}

          {showLands === 'Decentraland' && (
            <div className='flex flex-wrap w-full pb-20'>
              {landsJson.map((element, key) => {
                if (element.metaverse === 'Decentraland') {
                  return (
                    <LandCard
                      key={key}
                      classes=''
                      img={element.image}
                      title={element.title}
                      link={element.link}
                      metaverse={element.metaverse}
                    />
                  )
                }
              })}
            </div>
          )}

          {showLands === 'Somnium' && (
            <div className='flex flex-wrap w-full pb-20'>
              {landsJson.map((element, key) => {
                if (element.metaverse === 'Somnium') {
                  return (
                    <LandCard
                      key={key}
                      classes=''
                      img={element.image}
                      title={element.title}
                      link={element.link}
                      metaverse={element.metaverse}
                    />
                  )
                }
              })}
            </div>
          )}

          {showLands === 'FLUF' && (
            <div className='flex flex-wrap w-full pb-20'>
              {assetsJson.map((element, key) => {
                if (element.metaverse === 'FLUFWorld') {
                  return (
                    <LandCard
                      key={key}
                      classes=''
                      img={element.image}
                      title={element.title}
                      link={element.link}
                      metaverse={element.metaverse}
                    />
                  )
                }
              })}
            </div>
          )}

          {showLands === 'XONE' && (
            <div className='flex flex-wrap w-full pb-20'>{xones}</div>
          )}

          {showLands === 'ENS' && (
            <div className='flex flex-wrap w-full pb-20'>
              <LandCard
                classes=''
                img='/images/Assets/webp/ens.webp'
                title='mghdao.eth'
                link='https://opensea.io/assets/0x57f1887a8bf19b14fc0df6fd9b2acc9af147ea85/65094968028965490667962940604995070354564234685879228165394497380248733853575'
              />
              <LandCard
                classes=''
                img='/images/Assets/webp/ens.webp'
                title='metagamehub.eth'
                link='https://opensea.io/assets/0x57f1887a8bf19b14fc0df6fd9b2acc9af147ea85/65976217577879806189239991483658207330501404736298853056691685243794338078597'
              />
            </div>
          )}

          {showLands === 'wowPixies' && (
            <div className='flex flex-wrap w-full pb-20'>
              {[
                3875, 980, 3675, 4999, 5049, 4583, 1091, 3499, 4684, 4683, 429,
                4682, 4398, 289, 3667, 85, 3424, 4249, 4964, 5096, 4402, 5470,
                4540, 4573, 4528, 3170, 2630, 4088, 4017, 4116, 4084, 4111,
                4093, 4089, 4086, 4016, 1908, 5190, 4287, 3855,
              ].map((id, key) => {
                return (
                  <LandCard
                    key={key}
                    classes=''
                    img={`https://ipfs.io/ipfs/QmPLddSa7wPExSNsNDya3cjUbiMKuFPsLm4ygojqm7XLjk/${id}.jpg`}
                    title={`Pixie #${id}`}
                    link={`https://opensea.io/assets/0xb67812ce508b9fc190740871032237c24b6896a0/${id}`}
                  />
                )
              })}
            </div>
          )}

          <div className='flex flex-col lg:flex-row items-start items-center space-x-0 space-y-5 lg:space-y-0 justify-between w-full py-10'>
            <div className='flex flex-col space-y-1 lg:space-y-2 pl-2 lg:pl-0'>
              <p className='text-xl md:text-2xl lg:text-4xl font-medium pt-1.5'>
                ${totalAssetsValue.toLocaleString('en-GB')}
              </p>
              <p className='text-gray-400 text-sm md:text-lg lg:text-3xl flex-grow'>
                Assets
              </p>
            </div>

            <div className='flex flex-grow flex-wrap max-w-full lg:max-w-3/4 md:space-x-12 lg:space-x-24'>
              <CryptoCard
                name='Quickswap LPs'
                value={totalQuickswapValue}
                logo='/images/Logos/Cryptos/webp/Quickswap_LPs.webp'
                onClick={() =>
                  window.open(
                    'https://info.quickswap.exchange/#/account/0x16d0F35b8A4bfc49391d9c374d5AF4ec2dFB25bc',
                    '_blank'
                  )
                }
              />
              <CryptoCard
                name='Ocean Data LPs'
                value={totalOceanValue}
                logo='/images/Logos/Cryptos/webp/Ocean_Data_LPs.webp'
                onClick={() =>
                  window.open(
                    'https://market.oceanprotocol.com/asset/did:op:8331D69bF312604542D5f5f41D859dA27568B7cd',
                    '_blank'
                  )
                }
              />
              <CryptoCard
                name='Metaverse Valuation Node'
                logo='/images/Logos/Cryptos/webp/LINK.webp'
                onClick={() =>
                  window.open(
                    'https://market.link/data-providers/5a443923-252a-4208-8b4e-b01c04ff6fa4/integrations',
                    '_blank'
                  )
                }
              />
            </div>
          </div>
        </div>
      </main>

      <Footer />
    </>
  )
}

export async function getServerSideProps() {
  const connection = await createConnection({
    host: 'mgh-frankfurt-do-user-10576482-0.b.db.ondigitalocean.com',
    user: 'doadmin',
    password: 'UlI7z3f7XfE4PQvS',
    database: 'defaultdb',
    port: 25060,
  })
  connection.connect()

  const cryptoSQL = 'SELECT symbol, value FROM defaultdb.tokens;'
  const cryptoValues = (await connection.query(cryptoSQL))[0]

  const landsSQL = 'SELECT metaverse, priceUsd FROM defaultdb.lands;'
  const landValues = (await connection.query(landsSQL))[0]

  const nftsSQL = 'SELECT name, value_7 FROM defaultdb.nfts;'
  const nftValues = (await connection.query(nftsSQL))[0]

  connection.end()

  return {
    props: {
      cryptoValues,
      landValues,
      nftValues,
    },
  }
}

export default TreasuryPage
