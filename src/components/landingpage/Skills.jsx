function Skills(){
    return <>
        <div className="container mx-auto px-4 text-white">
            <div className="grid md:grid-cols-12 gap-4 ">
                <div className="hidden md:block md:col-span-6 relative ">
                    <img src="Dots.png" className="absolute top-0 left-0  opacity-50" />
                    <img src="Design.png" className="absolute top-1/4 right-20  z-10" />
                    <img src="Dots.png" className="absolute top-0 left-60  opacity-50" />
                    <img src="Dots.png" className="absolute top-20 right-64  opacity-50" />
                    <img src="emptyrec.png" className="absolute bottom-0 left-1/4 " />
                    <img src="Design.png" className="absolute  left-0 bottom-0  z-10" />
                </div>
                <div className="md:col-span-6">
                    <div className="grid grid-cols-12 gap-3">
                        <div className="col-span-12 md:col-span-4">
                            <div className="border max-w-[300px] mx-auto">
                                <div className="p-2 border ">Languages</div>
                                <div className="flex flex-wrap p-3 gap-4">
                                    <span>
                                        Javascript
                                    </span>
                                    <span>
                                        Python
                                    </span>
                                    <span>
                                        Typescript
                                    </span>
                                </div>
                            </div>
                        </div>
                        <div className="col-span-12 md:col-span-4">
                            <div className="border max-w-[300px] mx-auto">
                                    <div className="p-2 border ">Database</div>
                                    <div className="flex flex-wrap p-3 gap-4">
                                        <span>
                                            MongoDB
                                        </span>
                                        
                                    </div>
                            </div>
                            <div className="border mt-3 max-w-[300px] mx-auto">
                                    <div className="p-2 border ">Other</div>
                                    <div className="flex flex-wrap p-3 gap-4">
                                        <span>
                                            HTML
                                        </span>
                                        <span>
                                            CSS
                                        </span>
                                        <span>
                                            SCSS
                                        </span>
                                        <span>
                                            JSX
                                        </span>
                                    </div>
                            </div>
                        </div>
                        <div className="col-span-12 md:col-span-4">
                            <div className="border max-w-[300px] mx-auto">
                                <div className="p-2 border ">Tools</div>
                                <div className="flex flex-wrap p-3 gap-4">
                                    <span>
                                        VS code
                                    </span>
                                    <span>
                                        Figma
                                    </span>
                                </div>
                            </div>
                            <div className="border max-w-[300px] mx-auto mt-3">
                                <div className="p-2 border ">Skills</div>
                                <div className="flex flex-wrap p-3 gap-4">
                                    <span>
                                        React
                                    </span>
                                    <span>
                                        Express
                                    </span>
                                    <span>
                                        Node
                                    </span>
                                    <span>
                                        Git 
                                    </span>
                                    <span>
                                        Tailwind 
                                    </span>
                                    <span>
                                        Bootstrap 
                                    </span>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </>
}

export default Skills 