import React from 'react'

import '../../../App.css'
import HeroSection from '../../herosection/HeroSection.jsx';
import Footer from '../../footer/Footer.jsx';
import Products from '../products/Products';

function Home () {
    return(
        <>
        
        <HeroSection/>
        <Products />
        <Footer />

        </>
    )
}

export default Home;