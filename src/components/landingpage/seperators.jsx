function Seperators({title , viewall = true}){
    return(
        <div className="px-3 h-px my-10 md:my-20 flex flex-row items-center container mx-auto justify-between">
            <div className="relative  md:mb-0">
                <span className="text-purple-400 text-2xl md:text-4xl">#</span>
                <span className="text-white text-2xl md:text-4xl">{title}</span>
                <div className="h-px bg-purple-800 w-full md:w-[350px] absolute top-full top-1/2 left-0 left-full transform -translate-y-1/2 mt-2 mt-0"></div>
            </div>
            {
                viewall && <div className="text-white text-sm md:text-base  ">
                View all
                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-arrow-right inline-block ml-2" viewBox="0 0 16 16">
                    <path fillRule="evenodd" d="M1 8a.5.5 0 0 1 .5-.5h11.793l-3.147-3.146a.5.5 0 0 1 .708-.708l4 4a.5.5 0 0 1 0 .708l-4 4a.5.5 0 0 1-.708-.708L13.293 8.5H1.5A.5.5 0 0 1 1 8z"/>
                </svg>
            </div>
            }
            
        </div>
    )
}

export default Seperators;