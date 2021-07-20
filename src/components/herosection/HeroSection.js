import React from 'react';
import '../../App.css';
import Carousel from '../carousel/carousel.component';
import './HeroSection.scss';
import video from '../../videos/video-3.mp4';

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