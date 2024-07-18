import React from 'react';
import Hero from './Hero';
import Projects from './Projects';
import Skills from './Skills';

const Home = () => {
    return (
        <div className='border'>
            <Hero />
            <Skills />
            <Projects />
        </div>
    );
};

export default Home;