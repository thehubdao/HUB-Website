import { useState } from "react";

import BlogCard from "../section-element/BlogCard"

import pressJson from "../../data/press.json";
import Button from "../general/Button";



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
        <div className="w-full min-h-screen py-10 px-10 flex flex-col">
            <div className="flex items-center justify-center space-x-20">

                <div className="flex flex-col text-center lg:text-left items-center lg:items-start">
                    <h1 className={`font-normal text-center lg:text-left mb-5 max-w-min`}>Stay updated!</h1>
                    <p className="text-gray-00 pl-0 lg:pl-2 max-w-md">Join the MGH newsletter and stay on point about news, public launch, NFT drops and more.</p>

                    <form onSubmit={formSubmitted} onFocus={() => setMessage("")} className="ml-0 lg:ml-2 relative flex items-center mt-6 w-full max-w-sm">
                        <input onChange={(e) => setEmail(e.target.value)} type="email" placeholder="Email address" required className="bg-transparent w-full text-white py-3 px-4 focus:outline-none border rounded-full placeholder-white placeholder-opacity-75" />
                        <button className="absolute flex items-center justify-around bg-gray-200 right-0 h-4/5 rounded-full mr-1 w-1/6">
                            <svg className={`${processing ? "block" : "hidden"} animate-spin-slow h-6 w-6 border-4 border-t-gray-300 border-l-gray-300 border-gray-800 rounded-full `} />
                            <span className={`${processing ? "hidden" : "block"} text-black font-medium w-full`}>Join</span>
                        </button>
                    </form>
                    <p className="text-xs text-gray-400 font-medium mt-2 ml-0 lg:ml-3">{message}</p>
                </div>


                <div className="flex overflow-x-auto py-10 px-10 no-scroll-bar max-w-full">
                    <BlogCard classes="" date={pressJson[0].date} link={pressJson[0].link} title={pressJson[0].title} article={pressJson[0].text} />
                    <BlogCard classes="" date={pressJson[1].date} link={pressJson[1].link} title={pressJson[1].title} article={pressJson[1].text} />
                    <BlogCard classes="" date={pressJson[2].date} link={pressJson[2].link} title={pressJson[2].title} article={pressJson[2].text} />
                    <BlogCard classes="" date={pressJson[3].date} link={pressJson[3].link} title={pressJson[3].title} article={pressJson[3].text} />
                    <BlogCard classes="" date={pressJson[0].date} link={pressJson[0].link} title={pressJson[0].title} article={pressJson[0].text} />
                    <BlogCard classes="" date={pressJson[1].date} link={pressJson[1].link} title={pressJson[1].title} article={pressJson[1].text} />
                    <BlogCard classes="" date={pressJson[2].date} link={pressJson[2].link} title={pressJson[2].title} article={pressJson[2].text} />
                    <BlogCard classes="" date={pressJson[3].date} link={pressJson[3].link} title={pressJson[3].title} article={pressJson[3].text} />
                </div>

            </div>

            <div className="self-center mt-5">
                <Button text="Read all Articles" link="https://metagamehub.medium.com" />

            </div>

        </div>
    )
}

export default Press