import { BsArrowRight } from "react-icons/bs"


interface IssueProps {
    problem: string;
    solution_title: string;
    solution_text: string;
}


const Issue = ({ problem, solution_title, solution_text }: IssueProps) => {
    return (
        <div className="min-h-screen flex items-start">

            <div className="flex flex-col items-center justify-center lg:justify-between lg:flex-row space-x-0 lg:space-x-16 space-y-5 lg:space-y-0 w-full">
                <h3 className="text-center leading-tight font-normal text-pink-600 w-full lg:w-1/2">{problem}</h3>
                <BsArrowRight className="text-gray-400 text-4xl lg:text-6xl mt-14 rotate-90 lg:rotate-0" />
                <div className="flex flex-col items-center max-w-4xl w-full lg:w-1/2">
                    <h3 className="w-full text-center leading-tight font-normal text-blue-500">{solution_title}</h3>
                    <p className="text-base lg:text-xl max-w-md text-center">{solution_text}</p>
                </div>
            </div>

        </div>
    )
}

export default Issue
