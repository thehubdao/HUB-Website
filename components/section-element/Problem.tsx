import { BsArrowRight } from "react-icons/bs"


interface IssueProps {
    problem: string;
    solution_title: string;
    solution_text: string;
}

const Issue = ({problem, solution_title, solution_text}: IssueProps) => {
    return (

        <div className="flex space-x-16 min-h-screen justify-between items-start w-full">
            <h3 className="text-center leading-tight font-normal text-pink-600 w-1/2">{problem}</h3>
            <BsArrowRight className="text-gray-400 text-6xl mt-14" />
            <div className="flex flex-col items-center max-w-4xl w-1/2">
                <h3 className="w-full text-center leading-tight font-normal text-blue-500">{solution_title}</h3>
                <p className="text-xl max-w-lg text-center">{solution_text}</p>
            </div>
        </div>

    )
}

export default Issue