import React from 'react'
import './footer.styles.scss'

// import CustomButton from '../custom-button/custom-button.component'


const Footer = () => (
    <div className="footer">
        <div className="footer-top">
            <div className="footer-top-left">
                <div className="footer-top-left-content">
                    <div className="top-left-content-box-title">
                    </div>
                    <div className="top-left-content-box-title-opening">
                    </div>
                    <div className="top-left-content-box-time">
                    </div>
                    <div className="top-left-content-box-days">
                    </div>
                    <div className="top-left-content-box-time">
                    </div>
                    <div className="top-left-content-box-days">
                    </div>
                </div>
            </div>
            <div className="footer-top-right">
                <div className="footer-top-right-content">
                    <div className="top-right-content-box-title">
                        <h2>CONTACTO</h2>
                    </div>
                    <div className="top-right-content-box-title-2">
                        <h4><i class="fas fa-phone"></i> TELÉFONO</h4>
                    </div>
                    <div className="top-right-content-box-contact">
                        <a target="_blank" rel="noreferrer" href="https://wa.me/34678249427/?text=Hola%20Marcos,%20me%20gustaría%20saber%20más%20sobre%20las%20guitarras%20hechas%20a%20mano"><i class="fab fa-whatsapp"></i> 00 34 678 249 427</a>
                    </div>
                    <div className="top-right-content-box-title-2">
                        <h4><i class="fas fa-envelope"></i> EMAIL</h4>
                    </div>
                    <div className="top-right-content-box-contact">
                        <a href="mailto:marcosjimenezsoulguitar@gmail.com">marcosjimenezsoulguitar@gmail.com</a>
                    </div>
                    <div className="top-right-content-box-title-2">
                        <h4><i class="fas fa-map-marker-alt"></i> DIRECCIÓN</h4>
                    </div>
                    <div className="top-right-content-box-contact-addresses">
                        <div className="footer-box-contact-left">
                            <p id='weymouth'>Calle Pelayo nº 9, <br />
                            29009, Málaga <br />
                            España</p>
                        </div>
                    </div>
                    <div className="top-right-content-box-contact">
                        <div className="footer-box-contact-left" style={{
                            display: "flex",
                            justifyContent: "space-between",
                            padding: "0 5vw",
                            marginTop: "30px"
                        }}>
                            <a rel="noreferrer" target="_blank" href="https://www.facebook.com/marcos.jimenez.92102564"><i class="fab fa-facebook"></i> Facebook </a>
                            <a rel="noreferrer" target="_blank" href="https://www.instagram.com/marcosjimenezsoulguitar/"><i class="fab fa-instagram"></i> Instagram </a>

                        </div>
                    </div>
                </div>
            </div>
        </div>
        <div className="footer-bottom">
        </div>
    </div>
)

export default Footer;