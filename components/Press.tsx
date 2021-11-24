import { useState } from "react";

import BlogCard from "./BlogCard"

import pressJson from "../data/press.json";



const Press = () => {
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
                body: JSON.stringify({ email_address: email })
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
        <div className="w-full min-h-screen py-20" id="news">
            <div className={`w-full flex flex-col lg:flex-row items-center justify-start p-8`}>

                <div className="flex flex-col text-center lg:text-left items-center lg:items-start w-full lg:w-2/5">
                    <h2 className={`text-gray-200 text-center lg:text-left mb-5`}>Stay updated!</h2>
                    <p className="text-gray-400 font-medium max-w-md">Hello Universe! Join the MGH newsletter and stay on point about news, public launch, NFT drops and more.</p>

                    <form onSubmit={formSubmitted} onFocus={() => setMessage("")} className="relative flex items-center mt-6 w-full max-w-sm">
                        <input onChange={(e) => setEmail(e.target.value)} type="email" placeholder="Email address" required className="bg-transparent w-full text-white py-3 px-4 focus:outline-none border rounded-full placeholder-white placeholder-opacity-75" />
                        <button className="absolute flex items-center justify-around bg-gray-200 right-0 h-4/5 rounded-full mr-1 w-1/6">
                            <svg className={`${processing ? "block" : "hidden"} animate-spin-slow h-6 w-6 border-4 border-t-gray-300 border-l-gray-300 border-gray-800 rounded-full `} />
                            <span className={`${processing ? "hidden" : "block"} text-black font-medium w-full`}>Join</span>
                        </button>
                    </form>
                    <p className="text-xs text-gray-400 font-medium mt-2 ml-0 lg:ml-3">{message}</p>
                </div>

                <div className="w-full h-full xl:h-80 lg:w-3/5 grid grid-cols-1 md:grid-cols-2 xl:grid-rows-5 xl:grid-cols-1 place-content-stretch justify-items-center gap-5 p-0 py-8 lg:pl-8">
                    <BlogCard classes="z-0 xl:scale-85 " date={pressJson[0].date} link={pressJson[0].link} title={pressJson[0].title} article={pressJson[0].text} />
                    <BlogCard classes="z-0 xl:scale-90 " date={pressJson[1].date} link={pressJson[1].link} title={pressJson[1].title} article={pressJson[1].text} />
                    <BlogCard classes="z-0 xl:scale-95 " date={pressJson[2].date} link={pressJson[2].link} title={pressJson[2].title} article={pressJson[2].text} />
                    <BlogCard classes="z-0 xl:scale-100" date={pressJson[3].date} link={pressJson[3].link} title={pressJson[3].title} article={pressJson[3].text} />

                    <div className="col-span-full z-50 max-w-xs m-auto xl:translate-y-36 button">
                        <a href="https://metagamehub.medium.com" target="_blank">
                            <span className="button-text">Read all Articles</span>
                        </a>
                    </div>
                </div>

            </div>
        </div>
    )
}

export default Press