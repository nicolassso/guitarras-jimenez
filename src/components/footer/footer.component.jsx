import React from 'react'
import './footer.styles.scss'

// import CustomButton from '../custom-button/custom-button.component'


const Footer = () => (
    <div className="footer">
        <div className="footer-top">
            <div className="footer-top-left">
                <div className="footer-top-left-content">
                    <div className="top-left-content-box-title">
                        <h2>PONTE EN CONTACTO</h2>
                    </div>
                    <div className="top-left-content-box-title-opening">
                        <h4>HORARIOS</h4>
                    </div>
                    <div className="top-left-content-box-time">
                        <h5>LUNES A VIERNES</h5>
                    </div>
                    <div className="top-left-content-box-days">
                        <p>10:00 – 17:00</p>
                    </div>
                    <div className="top-left-content-box-time">
                        <h5>FINES DE SEMANA</h5>
                    </div>
                    <div className="top-left-content-box-days">
                        <p>12:00 – 15:00</p>
                    </div>
                    {/* <div className="top-left-content-box-title-closing">
                        <h4>CLOSING DAYS</h4>
                    </div>
                    <div className="top-left-content-box-days">
                        <p>Tuesday | Wednesday : Closed</p>
                    </div>
                    <div className="top-left-content-box-button">
                        <CustomButton>Booking</CustomButton>
                    </div> */}
                </div>
            </div>
            <div className="footer-top-right">
                <div className="footer-top-right-content">
                    <div className="top-right-content-box-title">
                        <h2>CONTACTO</h2>
                    </div>
                    <div className="top-right-content-box-title-2">
                        <h4>TELÉFONO</h4>
                    </div>
                    <div className="top-right-content-box-contact">
                        <a href="tel:+34 678 249 427">+34 678 249 427</a>
                    </div>
                    <div className="top-right-content-box-title-2">
                        <h4>EMAIL</h4>
                    </div>
                    <div className="top-right-content-box-contact">
                        <a href="mailto:marcosjimenezsoulguitar@gmail.com">marcosjimenezsoulguitar@gmail.com</a>
                    </div>
                    <div className="top-right-content-box-title-2">
                        <h4>DIRECCIÓN</h4>
                    </div>
                    <div className="top-right-content-box-contact-addresses">
                        <div className="footer-box-contact-left">
                            <p id='weymouth'>Calle Pelayo nº 9, <br />
                            29009, Málaga <br />
                            España</p>
                        </div>                        
                    </div>
                </div>
            </div>
        </div>
        <div className="footer-bottom">
            <p>Marcos Jiménez 2021</p>
        </div>
    </div>
)

export default Footer;