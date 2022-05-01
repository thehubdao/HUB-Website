import React from "react";
import { NextPage } from "next";
import Head from "next/head";

import Footer from "../components/general/Footer";
import Toolbar from "../components/general/Toolbar";
import MetaFi from "../components/section/MetaFi";
import Dataverse from "../components/section/Dataverse";
import Button from "../components/elements/Button";
import ToolCard from "../components/section-element/ToolCard";


const BuildPage: NextPage = () => {

    return (
        <>
            <Head>
                <title>MGH - Metaverse Development</title>
                <meta name="description" content="Governance of metaverse related items, fair valuation and minting of NFT backed tokens and provision of metaverse market data." />
            </Head>
            <Toolbar dark={true} />

            <main className="flex flex-col items-center text-gray-200 pt-28 lg:pt-48 w-full">

                <div className="flex flex-col items-center w-full 2xl:max-w-screen-2xl px-5 sm:px-10">
                    <div className="flex flex-col lg:flex-row justify-between items-center space-x-0 lg:space-x-10 space-y-10 lg:space-y-0 w-full mb-44">

                        <h1 className="text-transparent bg-clip-text bg-gradient-to-b from-blue-500 via-pink-500 to-pink-600 font-normal max-w-full lg:max-w-min text-center lg:text-left">MGH Metaverse Development</h1>

                        <div className="flex flex-col items-center space-y-10 w-full lg:w-1/2">
                            <p className={`text-base lg:text-lg text-center max-w-xl`}>We are creating meaningful experiences for your audience with an individual and lasting appeal. With our experts in the field of Game Design, we are able to deliver true value and create places that people enjoy and are eager to come back to.</p>
                            <Button text="Meet our Devs." link="https://twitter.com/mgh_metadev" />
                        </div>

                    </div>

                    <h3 className="font-normal mb-10">What MGH offers</h3>

                    <div className="flex w-full flex-wrap gap-5">
                        <ToolCard title="Experienced Team" text="Our team got experience in coding on The SandBox, Decentraland and Somnium Space. We partner with global brands and artists to deliver you an all-in-one solution." link="/gallery" button="See Gallery" />
                        <ToolCard title="Iterative Work Solution" text="Be an active part of the development by giving us regular feedback (iterative work method). Feel safe and in control by reviewing each step of the project evolution. To create your dream together." link="/build" button="Build with us" />
                        <ToolCard title="University Partnership" text="We are closely working with the University of Aachen and have the internship program with the National University of Colombia." link="https://metagamehub.medium.com/learn-how-to-develop-blockchain-projects-while-getting-paid-apply-now-for-our-one-year-internship-1c2802a1c703" button="Join Internship" />
                    </div>

                    <div className="flex space-x-44 items-center my-44 w-full">
                        <div className="flex flex-col w-1/3">
                            <h3 className="font-normal mb-10 text-pink-600">Why building with MGH?</h3>
                            <p className="text-lg">We are a group of talented and experienced Game Designers and Developers, Artists, 3D Modellers and UX Designers.<br /> We design and create any kinds of assets like avatars, wearables and furniture for current Metaverses like Decentraland and The Sandbox.</p>
                        </div>

                        <div className="grid grid-cols-2 gap-5 w-2/3 place-items-stretch">
                            <ToolCard title="Play2Earn Implementations" text="Metaverse game development, Play2Earn implementations, Engagement Models for communities" />
                            <ToolCard title="POSSIBILITY TO BUILD IN ANY METAVERSES" text="Metaverse design in various metaverses such as Decentraland, The Sandbox and Somnium Space. Development of tools for Metaverses like an editor for Decentraland (dcl-edit)." />
                            <ToolCard title="MODELLING OF UNIQUE ASSETS FOR CUSTOM EXPERIENCES" text="We have expert modellers working with state-of-the art tools like Blender and Fusion 360 that are able to create 3D models for Metaverses like Decentraland and Somnium Space." />
                            <ToolCard title="MODERN 3D ENGINES" text="We have Unity 3D developers and programmers with years of experience in App development and game development. We can leverage these skills for any Metaverse project that allows for coding custom complex logic like Decentraland." />
                        </div>
                    </div>

                    <h3 className="font-normal mb-10">Packages</h3>

                    <div className="flex w-full flex-wrap gap-5">
                        <ToolCard title="STARTER PACKAGE" text="basic experience on small land
$10k - 40k
appealing landscape
customer contact points
basic asset collection 
basic customer engagement model
minimal programming" link="/build" button="Book This" />
                        <ToolCard title="CORPORATE PACKAGE" text="richer experience on medium land
$20k- 125k
larger appealing landscape
several customer contact points
extended asset collection 
refined customer engagement model
programming of basic custom behaviours" link="/build" button="Book This" />
                        <ToolCard title="WORLD PACKAGE" text="world-like experience on large land
$TBD
very large appealing landscape
customer contact points as desired
big asset collection 
optimal customer engagement model
programming of advanced custom behaviours" link="/build" button="Book This" />
                    </div>

                </div>
            </main>

            <Footer />


        </>
    )
};


export default BuildPage;
