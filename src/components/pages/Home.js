import React from 'react'

import '../../App.css'
import HeroSection from '../herosection/HeroSection';
import Navbar from '../navbar/Navbar.jsx';
import Footer from '../footer/Footer.js';

function Home () {
    return(
        <>
        
        <Navbar />
        <HeroSection/>
        <Footer />

        </>
    )
}

export default Home;