import React, { Suspense } from 'react'
import './item-page.styles.scss'
import IMAGES from '../products-data/products.images';

function ItemPage(props) {
    return (
        <div className="item-page">
            <div className="item-container">
                <div className="item-title">
                    <h1>{props.location.state.title.toUpperCase()}
                        + {props.location.state.classe.toUpperCase()}
                    </h1>
                </div>
                <div className="item-images">
                    <img src={IMAGES.tall.bossa.bossaImage1} alt="" width='350px' />
                    <img src={IMAGES.tall.bossa.bossaImage2} alt="" width='350px' />
                    <img src={IMAGES.tall.bossa.bossaImage3} alt="" width='350px' />
                                    
                </div>
                <div className="item-description">
                    <p>{props.location.state.description}</p>
                </div>                
            </div>
        </div>
    )
}

export default ItemPage;
