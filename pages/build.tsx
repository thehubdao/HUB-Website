import React from "react";
import { NextPage } from "next";
import Head from "next/head";

import Footer from "../components/general/Footer";
import Toolbar from "../components/general/Toolbar";
import Button from "../components/elements/Button";
import ToolCard from "../components/section-element/ToolCard";
import Carrousel from "../components/section/Carrousel"


const BuildPage: NextPage = () => {

    const dataCarrousel = [
        {
            image: '/images/Carrousel/carrousel1.png',
            title: 'PLAY2EARN IMPLEMENTATIONS',
            content: 'Metaverse game development, Play2Earn implementations, Engagement Models for communities'
        },
        {
            image: '/images/Carrousel/carrousel2.png',
            title: 'POSSIBILITY TO BUILD IN ANY METAVERSE',
            content: 'Metaverse design in various metaverses such as Decentraland, The Sandbox and Somnium Space. Development of tools for Metaverses like an editor for Decentraland (dcl-edit).'
        },
        {
            image: '/images/Carrousel/carrousel3.png',
            title: 'MODELLING OF UNIQUE ASSETS FOR CUSTOM EXPERIENCES',
            content: 'We have expert modellers working with state-of-the art tools like Blender and Fusion 360 that are able to create 3D models for Metaverses like Decentraland and Somnium Space.'
        },
        {
            image: '/images/Carrousel/carrousel4.png',
            title: 'MODERN 3D ENGINES',
            content: 'We have Unity 3D developers and programmers with years of experience in App development and game development. We can leverage these skills for any Metaverse project that allows for coding custom complex logic like Decentraland.'
        }
    ]

    return (
        <>
            <Head>
                <title>MGH - Metaverse Development</title>
                <meta name="description" content="Governance of metaverse related items, fair valuation and minting of NFT backed tokens and provision of metaverse market data." />
            </Head>
            <Toolbar dark={true} />

            <main className="flex flex-col items-center text-gray-200 pt-28 lg:pt-48 w-full bg-[#111111]">

                <div className="flex flex-col items-center w-full 2xl:max-w-screen-3xl px-5 sm:px-15">
                    <div className="flex flex-col justify-between items-center lg:space-y-0 w-full mb-44">
                        <div className="block">
                            <h1 className="text-gray-200 font-normal max-w-full text-center text-15/2xl sm:text-16/2xl md:text-17/2xl pb-0"> MGH METAVERSE</h1>
                            <h2 className="text-pink-reco text-center pt-0 text-6xl sm:text-8xl md:text-9xl">DEVELOPMENT </h2>
                        </div>
                        
                        <div className="flex flex-col relative text-center p-10 items-center justify-center rounded-xl bg-[#292929] hover:scale-[1.02] transition duration-200 ease-linear border-transparent border-opacity-5 max-w-full sm:max-w-2xl text-stone-400">
                            <p className={`text-sm text-center max-w-xl mb-6`}>We are creating meaningful experiences for your audience with an individual and lasting appeal. With our experts in the field of Game Design, we are able to deliver true value and create places that people enjoy and are eager to come back to.</p>
                            <div className="flex items-center space-x-0 sm:space-x-10 flex-col sm:flex-row">
                                <Button classes="text-sm" text="Meet our Devs." link="https://twitter.com/mgh_metadev" />
                                <Button classes="text-sm" text="Book a meeting" link="https://calendly.com/nicolas-weber-1/30min"/>
                            </div>
                        </div>
                    </div>

                    <h1 className="font-normal mb-10 text-7xl text-center">WHAT MGH OFFERS</h1>

                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 w-full md:w-5/6 gap-5">
                        <ToolCard title="Experienced Team" text="Our team got experience in coding on The SandBox, Decentraland and Somnium Space. We partner with global brands and artists to deliver you an all-in-one solution." link="/gallery" button="See Gallery" classes="col-span-1 md:col-span-2 xs:max-w-full lg:col-span-1"/>
                        <ToolCard title="Iterative Work Solution" text="Be an active part of the development by giving us regular feedback (iterative work method). Feel safe and in control by reviewing each step of the project evolution. To create your dream together." link="https://calendly.com/nicolas-weber-1/30min" button="Build with us" classes="col-span-1 md:col-span-2 xs:max-w-full lg:col-span-1"/>
                        {/* <div className="flex flex-col relative text-center p-10 items-center justify-center rounded-xl bg-[#292929] hover:scale-[1.02] transition duration-200 ease-linear border-transparent border-opacity-5 max-w-sm">
                            <h1>prueba</h1>
                            <h1>de </h1>
                            <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.</p>
                        </div> */}
                        <ToolCard title="Decentraland Edit" text="Simplifying scene building on Decentraland with the best SDK on the market" link="https://dcl-edit.com" button="Learn more" classes="col-span-1 md:col-span-2 xs:max-w-full lg:col-span-1"/>
                    </div>

                    <div className="relative flex flex-col items-center my-44 w-full md:w-5/6   ">

                        <div className="flex flex-col md:grid-rows-2 w-full h-full justify-center items-center">
                            <h1 className="font-normal text-pink-reco text-center">WHY BUILDING WITH MGH?</h1>
                            <p className={`font-normal text-md w-full pb-5 grow text-stone-400 text-center max-w-2xl`}>We are a group of talented and experienced Game Designers and Developers, Artists, 3D Modellers and UX Designers. We design and create any kinds of assets like avatars, wearables and furniture for current Metaverses like Decentraland and The Sandbox.</p>
                        </div>

                        <Carrousel dataCarrousel={dataCarrousel}/>

                        {/* <div className="grid md:grid-rows-4 gap-4 w-full">
                            <ToolCard
                                title="Play2Earn Implementations"
                                text="Metaverse game development, Play2Earn implementations, Engagement Models for communities"
                                classes="sm:max-w-full sm:text-left"
                            />
                            <ToolCard
                                title="Possibility to build in any Metaverse"
                                text="Metaverse design in various metaverses such as Decentraland, The Sandbox and Somnium Space. Development of tools for Metaverses like an editor for Decentraland (dcl-edit)."
                                classes="sm:max-w-full sm:text-left"
                            />
                            <ToolCard
                                title="Modelling of unique assets for custom experiences"
                                text="We have expert modellers working with state-of-the art tools like Blender and Fusion 360 that are able to create 3D models for Metaverses like Decentraland and Somnium Space."
                                classes="sm:max-w-full sm:text-left"
                            />
                            <ToolCard
                                title="Modern 3D engines"
                                text="We have Unity 3D developers and programmers with years of experience in App development and game development. We can leverage these skills for any Metaverse project that allows for coding custom complex logic like Decentraland."
                                classes="sm:max-w-full sm:text-left"
                            />
                        </div> */}
                    </div>

                    <h1 className="font-normal mb-10">PACKAGES</h1>

                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 pb-10 items-center justify-center w-full md:w-5/6">
                        <div className={`flex flex-col relative text-center p-10 items-center justify-center rounded-xl bg-[#292929] hover:scale-[1.02] transition duration-200 ease-linear border-transparent border-opacity-5 max-w-sm sm:max-w-full h-full`}>
                            <p className='font-inter text-2xl text-pink-reco w-full'>Starter</p>
                            <p className={`font-normal text-md pb-5 grow text-stone-400`}>
                                Basic experience on small land,  appealing landscape, customer contact points, basic asset collection, basic customer engagement model, minimal programming
                            </p>
                            <Button text="Book a Package" link="https://calendly.com/nicolas-weber-1/30min" />
                        </div>
                        <div className={`flex flex-col relative text-center p-10 items-center justify-center rounded-xl bg-[#292929] hover:scale-[1.02] transition duration-200 ease-linear border-transparent border-opacity-5 max-w-sm sm:max-w-full h-full`}>
                            <p className='font-inter text-2xl text-pink-reco w-full'>Corporate</p>
                            <p className={`font-normal text-md pb-5 grow text-stone-400`}>
                                Richer experience on medium land, larger appealing landscape, several customer contact points, extended asset collection, refined customer engagement model, programming of basic custom behaviours
                            </p>
                            <Button text="Book a Package" link="https://calendly.com/nicolas-weber-1/30min" />
                        </div>
                        <div className={`flex flex-col relative text-center p-10 items-center justify-center rounded-xl bg-[#292929] hover:scale-[1.02] transition duration-200 ease-linear border-transparent border-opacity-5 max-w-sm sm:max-w-full h-full`}>
                            <p className='font-inter text-2xl text-pink-reco w-full'>World</p>
                            <p className={`font-normal text-md pb-5 grow text-stone-400`}>
                                World-like experience on large land, very large appealing landscape, customer contact points as desired, big asset collection, optimal customer engagement model, programming of advanced custom behaviours</p>
                            <Button text="Book a Package" link="https://calendly.com/nicolas-weber-1/30min" />
                        </div>
                    </div>
                </div>
            </main>
            <Footer />
        </>
    )
};


export default BuildPage;
