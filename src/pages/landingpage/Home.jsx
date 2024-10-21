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
            <Seperators title={"Projects"} />
            <Projectcards />
            <Seperators title={"Skills"} viewall={false} />
        </div>
    );
}

export default Home;
