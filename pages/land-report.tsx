import React, { useState } from "react";
import { NextPage } from "next";
import Head from "next/head";

import Footer from "../components/general/Footer";
import Toolbar from "../components/general/Toolbar";


const LandReport: NextPage = () => {

    const [processing, setProcessing] = useState(false)
    const [message, setMessage] = useState("")
    const [email, setEmail] = useState("")

    const formSubmitted = async (e: any) => {
        e.preventDefault();
        setProcessing(true)
        let message;
        try {
            const res = await fetch("/api/addContact", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json"
                },
                body: JSON.stringify({ email_address: email, report: true })
            });
            message = await res.json()
            setMessage(message.message)
            setProcessing(false)
        } catch (e) {
            setMessage("Something went wrong, try again later!")
            setProcessing(false)
        }
    }

    return (
        <>
            <Head>
                <title>MGH - LAND Report</title>
                <meta name="description" content="Governance of metaverse related items, fair valuation and minting of NFT backed tokens and provision of metaverse market data." />
            </Head>

            <main className="flex flex-col items-center">
                <Toolbar dark={true} />

                <div className="flex flex-col items-center p-8 sm:p-10 w-full 2xl:max-w-screen-2xl">

                    <h1 className="text-transparent bg-clip-text bg-gradient-to-b from-blue-300 to-blue-700 text-center mt-20 lg:mt-32">LAND Report</h1>
                    <p className={`text-xl lg:text-2xl font-medium text-gray-200 text-center`}>The Sandbox most undervalued LANDs</p>

                    <div className="flex flex-col-reverse lg:flex-row items-center justify-evenly w-full mt-20 mb-20">
                        <p className="text-base xl:text-xl text-gray-200 text-center w-full lg:w-1/2 p-0 lg:p-10 font-medium max-w-2xl lg:max-w-full">
                        The Sandbox is a decentralized blockchain Metaverse making its LAND or virtual real estate scarce as real land.
                        This report serves the purpose of providing users with fair and transparent NFT prices by introducing investors to the 10 most undervalued The Sandbox LANDs of the month.
                        The MGH Valuation Tool uses an AI algorithm that analyzes thousands of NFT sales and evaluates various metrics to calculate the truly fair value of a virtual LAND.
                        </p>
                        <img src="images/land-report.png" className="max-w-full lg:max-w-3xl w-full lg:w-1/2 mb-10 lg:mb-0" />
                    </div>

                    <div className="flex flex-col text-center items-center w-full mb-20">
                        <h2 className={`text-gray-200 mb-3`}>Get the latest report!</h2>

                        <p className="text-gray-400 font-medium max-w-md">Enter your Email address and receive the monthly MGH LAND Report with the 10 most undervalued The Sandbox LANDs</p>

                        <form onSubmit={formSubmitted} onFocus={() => setMessage("")} className="relative flex items-center mt-6 w-full max-w-sm">
                            <input onChange={(e) => setEmail(e.target.value)} type="email" placeholder="Email address" required className="bg-transparent w-full text-white py-3 px-4 focus:outline-none border rounded-full placeholder-white placeholder-opacity-75" />
                            <button className="absolute flex items-center justify-around bg-gray-200 right-0 h-4/5 rounded-full mr-1 px-2">
                                <svg className={`${processing ? "block" : "hidden"} animate-spin-slow h-6 w-6 border-4 border-t-gray-300 border-l-gray-300 border-gray-800 rounded-full `} />
                                <span className={`${processing ? "hidden" : "block"} text-black font-medium w-full pt-0.5`}>Submit</span>
                            </button>
                        </form>
                        <p className="text-xs text-gray-400 font-medium mt-2 ml-0 lg:ml-3">{message}</p>


                    </div>


                </div>





            </main>

            <Footer />


        </>
    )
};

export default LandReport;
