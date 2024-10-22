function Aboutme(){
    return <div className="container mx-auto px-4 text-white">
        <div className="grid grid-cols-12">
            <div className=" col-span-12 md:col-span-6  flex flex-col gap-10">
                <div>Hello, I am Prateek! </div>
                <div>
                I'm a passionate MERN stack developer based in India. With 2 years of experience, I specialize in building full-stack web applications using MongoDB, Express.js, React, and Node.js.
                </div>
                <div>
                    Transforming ideas into robust, scalable web solutions has been my driving force for the past two years. I've had the privilege of working with various clients, helping them create powerful web applications that solve real-world problems. I'm constantly expanding my knowledge in the MERN ecosystem and exploring new technologies to enhance my skill set.
                </div>
                <button className="border border-purple-700 w-fit px-5 py-3 hover:bg-purple-700">
                    Read More
                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-arrow-right inline-block ml-2" viewBox="0 0 16 16">
                        <path fillRule="evenodd" d="M1 8a.5.5 0 0 1 .5-.5h11.793l-3.147-3.146a.5.5 0 0 1 .708-.708l4 4a.5.5 0 0 1 0 .708l-4 4a.5.5 0 0 1-.708-.708L13.293 8.5H1.5A.5.5 0 0 1 1 8z"/>
                    </svg>
                </button>
            </div>
            <div className=" hidden md:block col-span-12 md:col-span-6 md:flex justify-center">
                <img src="./pose.png" className=" border-b border-purple-700"/>
            </div>
        </div>
    </div>
}

export default  Aboutme