function Hero(){
    return(
        <div className="flex flex-col md:flex-row mt-6 md:mt-19 pt-20 justify-center items-center container mx-auto px-4">
            <div className="flex flex-col items-center md:items-start flex-1 text-center md:text-left mb-10 md:mb-0">
                <h1 className="text-3xl md:text-4xl lg:text-6xl font-bold text-white tracking-wide leading-relaxed">
                    Prateek is a <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-purple-600">web designer</span> and <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-purple-600">front-end developer</span>
                </h1>
                <div className="text-white mt-6 md:mt-10 text-gray-400 text-base md:text-lg">
                    He crafts responsive websites where technologies meet creativity
                </div>
                <button className="border border-purple-600 text-white px-4 md:px-5 py-2 md:py-3 mt-6 md:mt-10 hover:bg-purple-600 transition-colors duration-300">
                    Explore my work
                </button>
            </div>
            <div className="flex flex-col items-center flex-1 relative w-full md:w-auto">
                <img className="absolute top-10 md:top-20 left-0 w-1/4" src="/Design.png" alt="Design" />
                <img className="absolute bottom-0 right-0 w-1/6" src="/Dots.png" alt="Dots" />
                <img className="w-full h-auto md:h-full" src="/hero.png" alt="Hero" />
            </div>
        </div>
    )
}

export default Hero;