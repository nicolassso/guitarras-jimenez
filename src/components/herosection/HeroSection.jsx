import React from 'react';
import '../../App.css';
import Carousel from '../carousel/carousel.component';
import './HeroSection.scss';

function HeroSection() {
  return (
    <div className='hero-container'>
      <div className='carousel'>
        <Carousel />
      </div>
    </div>
  );
}

export default HeroSection;