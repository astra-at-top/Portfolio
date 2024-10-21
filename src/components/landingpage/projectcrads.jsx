function Projectcards(){
    return(
        <div className='container mx-auto px-4 relative'>
            <img src="/Dots.png" alt="dots" className='absolute top-0 -left-36 ' />
            <div className="flex flex-wrap justify-center md:justify-start">
                {[1, 2, 3].map((item, index) => (
                    <div key={index} className="border shadow-lg overflow-hidden max-w-[300px] m-2">
                        <div className="">
                            <img src="/Rectangle.jpg" alt="Project thumbnail" className="w-full h-auto rounded" />
                            <div>
                                <div className="flex flex-wrap gap-2 p-2 border">
                                    <span className="bg-purple-700 text-gray-300 px-3 py-1 text-xs">HTML</span>
                                    <span className="bg-purple-700 text-gray-300 px-3 py-1 text-xs">SCSS</span>
                                    <span className="bg-purple-700 text-gray-300 px-3 py-1 text-xs">PYTHON</span>
                                </div>
                                
                                <p className="text-gray-400 text-sm p-2 line-clamp-5">
                                    Minecraft servers hosting platform with advanced management features. This project provides a user-friendly interface for creating, configuring, and monitoring Minecraft servers. It includes automatic backups, plugin management, and performance optimization tools.
                                </p>
                                <div className="flex justify-start p-2 border">
                                    <button className="bg-purple-600 hover:bg-purple-600 text-white px-6 py-2 transition duration-300">live &gt;</button>
                                </div>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
           
        </div>
    )
}

export default Projectcards;