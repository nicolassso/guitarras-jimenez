import React from 'react'
import CardItem from './CardItem'
import './Cards.css'
import image1 from '../../images/big-jazz/alta-resolucion/IMG_8542.jpg';
import image2 from '../../images/bossa-classic-salud/bossa-classic-salud-facebook/1.jpg';
import image3 from '../../images/big-jazz/alta-resolucion/IMG_8543.jpg';
import image4 from '../../images/bossa-classic-salud/bossa-classic-salud-facebook/2.jpg';
import image5 from '../../images/bossa-classic-salud/bossa-classic-salud-facebook/3.jpg';




function Cards() {
    return (
        <div className='cards'>
            <h1 id="nuestras-guitarras">Nuestras guitarras</h1>
            <div className="cards__container">
                <div className="cards__wrapper">
                    <ul className="cards__items">
                        <CardItem
                        src={image1}
                        text="Nuestro modelo big jazz es la polla"
                        label="Big Jazz"
                        path="/services"
                        />
                        <CardItem
                        src={image2}
                        text="El tamaño de las taejetas varía según el texto"
                        label="Bossa Classic"
                        path="/services"
                        />
                    </ul>
                    <ul className='cards__items'>
                        <CardItem
                        src= {image3}
                        text='Y no me gusta'
                        label='Big Jazz'
                        path='/services'
                        />
                        <CardItem
                        src={image4}
                        text='Nico del futuro YOU GOTTA FIX THAT'
                        label='Bossa Classic'
                        path='/products'
                        />
                        <CardItem
                        src={image5}
                        text='VAYA CARETO DE PROGRAMADOR FEO AMARGAO'
                        label='Bossa Classic'
                        path='/sign-up'
                        />
                </ul>
                </div>
            </div>
        </div>
    )
}

export default Cards
