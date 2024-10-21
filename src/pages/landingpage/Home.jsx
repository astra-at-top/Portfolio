import React from 'react';
import Navbar from '../../components/landingpage/navbar';
import Profilelink from '../../components/landingpage/profilelink';
import Hero from '../../components/landingpage/hero';
import Seperators from '../../components/landingpage/seperators';
import Projectcards from '../../components/landingpage/projectcrads';
import Skills from '@/components/landingpage/Skills';
import Aboutme from '@/components/landingpage/aboutme';
import Contactme from '@/components/landingpage/contactme';

function Home() {
    return (
        <div className="bg-gray-900  font-firacode">
            <Navbar />
            <Profilelink />
            <Hero />
            <Seperators title={"Projects"} />
            <Projectcards />
            <Seperators title={"Skills"} viewall={false} />
            <Skills/>
            <Seperators title={"About me"} viewall={false} />
            <Aboutme/>
            <Seperators title={"Contacts"} viewall={false} />
            <Contactme/>
        </div>
    );
}

export default Home;
