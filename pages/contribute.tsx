import React from "react";
import { NextPage } from "next";
import Head from "next/head";
import "animate.css"


import Footer from "../components/Footer";
import Toolbar from "../components/Toolbar";
import landsJson from "../data/lands.json"
import LandCard from "../components/LandCard";
import WorkingGroupCard from "../components/WorkingGroupCard";


const ContributePage: NextPage = () => {
    return (
        <>
            <Head>
                <title>MGH - Working Groups</title>
                <meta name="description" content="Governance of metaverse related items, fair valuation and minting of NFT backed tokens and provision of metaverse market data." />
            </Head>

            <main className="flex flex-col items-center">
                <Toolbar dark={true} />
                {/* <div className="h-72 w-72 rounded-full border bg-gradient-to-br from-yellow-500 to-blue-600 blur-3xl absolute bottom-0 right-0 opacity-80" /> */}


                <div className="flex flex-col items-center p-8 sm:p-10 w-full 2xl:max-w-screen-2xl z-10">
                    <h1 className="text-transparent bg-clip-text bg-gradient-to-b from-yellow-200 to-yellow-600 text-center mt-20 lg:mt-32">Working Groups</h1>
                    {/* <p className={`text-lg lg:text-2xl font-medium text-gray-200 text-center`}>Community developed & curated </p> */}

                    <a href="https://forms.gle/6cN6Dvxumu4Roadq5" target="_blank" className={`relative mt-2 md:mt-10 mb-20 w-52 flex items-center transform scale-75 sm:scale-85 lg:scale-90 xl:scale-100 justify-center cursor-pointer text-gray-200 font-medium text-xl rounded-3xl py-3 px-5 bg-gray-500 bg-opacity-80 group shadow-colorbottom overflow-hidden transition-all ease-in-out duration-500`}>
                        <div className="h-full w-full absolute bg-gradient-to-br from-grey-dark to-grey-darkest rounded-xl blur-none group-hover:blur-md transition-all ease-in-out duration-300" />
                        <span className="pt-1 z-10">Apply</span>
                    </a>

                    <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 justify-items-center gap-10 w-full pb-20 pt-10">

                        <WorkingGroupCard title="Awareness" text="The purpose of this working group is to ensure sustainable community growth and fostering. Members of the Awareness WG create strategies and content by using various formats and mediums to make interested parties aware of MGH and to educate the existing MGH community. In general, members of this WG should like, comment and repost/retweet social media content from MetaGameHub DAO, as well as share the articles on other communication platforms such as Reddit or 4chan." />
                        <WorkingGroupCard title="Technical" text="This WG is responsible for the technical (infrastructure) development and maintenance of the MGH DAO and its products/services. This includes above all, website development, smart contract development, technical process optimization and other related tasks. Members of the technical working group are furthermore responsible for the technical documentation as well as for making it processable for the marketing team, so they can create content out of it." />
                        <WorkingGroupCard title="Tokenomics" text="Members of the Tokenomics WG are responsible for the maintenance and management of MGH’s token economy. They also create budget proposals for the other working groups as well as monitor the budget and continuously optimize the tokenomics with the overall goal to ensure a sustainable token economy." />
                        <WorkingGroupCard title="Research" text="This WG is continuously doing research around MGH’s ecosystem and business model with the goal to improve processes, spot new trends, come up with new products or services, etc. Moreover, members of this WG monitor competitors - from marketing activities to (in the best case) backend activities, such as smart contract development. Furthermore, it this WG’s responsibility to make the research results seamlessly accessible to other MGH contributors (e.g., providing summaries)." />
                        <WorkingGroupCard title="Legal" text="This working group increases the knowledge of all legal manners regarding MGH’s ecosystem and its operations. Above all, this working group monitors trends in the legal space where MGH is operating to ensure MGH’s compliance with these new trends." />
                        <WorkingGroupCard title="Operations" text="The Operations WG works closely with the initiators and core team members to support the planning, execution and monitoring of ongoing operations and MGH community activities. Moreover, members of this working group monitor and push the observance of the roadmap, spotting inefficiencies in workflows and finding ways to improve them." />
                        <WorkingGroupCard title="Metaverse LAND Development" text="This working group populates and curates metaverse lands owned by the MGH DAO with the overall goal to foster, entertain and engage the MGH community within the metaverse and to attract new potential community members. There are many possibilities regarding the land population (Games, NFT galleries, malls, community places, event location, etc). Furthermore, this WG works closely together with the Operations WG when it comes to all kinds of metaverse event planning." />


                    </div>

                </div>

            </main>

            <Footer />


        </>
    )
};

export default ContributePage;
