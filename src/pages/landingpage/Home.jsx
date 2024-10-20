import React from 'react';
import Navbar from '../../components/landingpage/navbar';
import Profilelink from '../../components/landingpage/profilelink';
import Hero from '../../components/landingpage/hero';
import Seperators from '../../components/landingpage/seperators';
import Projectcards from '../../components/landingpage/projectcrads';

function Home() {
    return (
        <div className="bg-gray-900 min-h-screen font-firacode">
            <Navbar />
            <Profilelink />
            <Hero />
            {/* Add other components or sections here */}
            <Seperators title={"Projects"} />
            <Projectcards />
        </div>
    );
}

export default Home;
