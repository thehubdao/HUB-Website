import { AiOutlineMinus, AiOutlinePlus } from "react-icons/ai"


const Question = ({ question, answer }: any) => {

    return (
        <div className=" p-3 cursor-pointer w-full ">
            <label className="cursor-pointer grid grid-cols-12 place-items-start appearance-none">
                <input type="checkbox" className="hidden peer appearance-none" />

                <AiOutlinePlus className="block text-black opacity-80 text-3xl peer-checked:hidden" />

                <AiOutlineMinus className=" text-black opacity-80 text-3xl hidden peer-checked:block max-w-min peer-checked:mb-3" />

                <p className="text-black opacity-80 font-medium text-2xl peer-checked:mb-3 ml-3 col-span-11 select-none">{question}</p>

                <div className="hidden peer-checked:block text-black opacity-50 col-span-full whitespace-pre-wrap">
                    {answer}
                </div>
            </label>
        </div>
    )
}

export default Question