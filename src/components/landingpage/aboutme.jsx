function Aboutme(){
    return <div className="container mx-auto px-4 text-white">
        <div className="grid grid-cols-12">
            <div className=" col-span-12 md:col-span-6  flex flex-col gap-10">
                <div>Hello, i am Prateek! </div>
                <div>
                I’m a self-taught front-end developer based in Kyiv, Ukraine. I can develop responsive websites from scratch and raise them into modern user-friendly web experiences. 
                </div>
                <div>
                    Transforming my creativity and knowledge into a websites has been my passion for over a year. I have been helping various clients to establish their presence online. I always strive to learn about the newest technologies and frameworks.
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