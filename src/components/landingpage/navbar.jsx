import React, { useState } from 'react';
import { Link } from 'react-router-dom';

function Navbar() {
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    return (
        <nav className="text-white py-6 fixed top-0 left-0 right-0 bg-gray-900 z-50">
            <div className="container mx-auto px-4 flex justify-between items-center">
                {/* Logo/Name */}
                <div className="text-xl font-bold ">
                    <Link to="/" className='flex items-center gap-3'>
                        <img src="/Logo.svg" alt="logo" className="w-10 h-10" />
                        Prateek
                    </Link>
                </div>

                {/* Hamburger menu for mobile */}
                <div className="md:hidden">
                    <button onClick={() => setIsMenuOpen(!isMenuOpen)} className="focus:outline-none">
                        <svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" fill="currentColor" class="bi bi-filter-right" viewBox="0 0 16 16">
                          <path d="M14 10.5a.5.5 0 0 0-.5-.5h-3a.5.5 0 0 0 0 1h3a.5.5 0 0 0 .5-.5m0-3a.5.5 0 0 0-.5-.5h-7a.5.5 0 0 0 0 1h7a.5.5 0 0 0 .5-.5m0-3a.5.5 0 0 0-.5-.5h-11a.5.5 0 0 0 0 1h11a.5.5 0 0 0 .5-.5"/>
                        </svg>
                    </button>
                </div>

                {/* Navigation Links */}
                <div className={`md:flex items-center space-y-4 md:space-y-0 md:space-x-6 ${isMenuOpen ? 'block' : 'hidden'} absolute md:relative top-16 md:top-0 left-0 right-0 bg-gray-900 md:bg-transparent p-4 md:p-0`}>
                    <Link to="/" className="block md:inline-block text-gray-300 hover:text-white font-semibold text-lg"><span className="text-purple-400">#</span>Home</Link>
                    <Link to="/works" className="block md:inline-block text-gray-300 hover:text-white font-semibold text-lg"><span className="text-purple-400">#</span>Works</Link>
                    <Link to="/about-me" className="block md:inline-block text-gray-300 hover:text-white font-semibold text-lg"><span className="text-purple-400">#</span>About-me</Link>
                    <Link to="/contacts" className="block md:inline-block text-gray-300 hover:text-white font-semibold text-lg"><span className="text-purple-400">#</span>Contacts</Link>
                </div>
            </div>
        </nav>
    );
}

export default Navbar;