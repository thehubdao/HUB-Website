const BlogCard = ({ title, article, date, link, classes }: any) => {
    
    return (
        <a href={link} target="_blank">
            <div className={`${classes} relative mr-10 flex flex-col p-3 pt-7 h-full w-80 max-w-sm rounded text-left bg-gray-300 hover:scale-[1.02] transition duration-200 ease-linear border border-white border-opacity-5 cursor-pointer`}>

                <p className="text-black text-xl font-semibold">{title}</p>
                <p className="mt-3 text-black text-opacity-70 font-medium">{article}</p>

                <p className="absolute top-1 right-3 text-sm text-black italic">{date}</p>

            </div>
        </a>
    )
}

export default BlogCard
