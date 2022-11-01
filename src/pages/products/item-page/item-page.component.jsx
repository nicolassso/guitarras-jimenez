import React from 'react'
import './item-page.styles.scss'
import IMAGES from '../products-data/products.images';

function ItemPage(props) {


    let imgs = IMAGES;

    //RECIBE LA CLASE DE GUITARRA (JAZZ O BOSSA) DE collection-item Y LO ALMACENA EN UNA STRING
    const classeRecibida = props.location.state.classe;


    let tallImages = imgs.tall[classeRecibida]
    let wideImages = imgs.big[classeRecibida]
    let squareImages = imgs.small[classeRecibida]

    //CREATE AN ARRAY WITH THE IMAGES TO PRINT THEM
    // let arrayImages = Object.values(tallImages)



    return (
        <div className="item-page">
            <div className="item-container">
                <div className="item-title">
                    <h1>{props.location.state.title.toUpperCase()}
                    </h1>
                </div>
                <div className="item-images">
                    <div className="tall-images">
                        {
                            Object.values(tallImages)
                            .filter((item, idx) => idx < 4)
                            .map((item, id)=> {
                                    return <img key={id} src={item} alt='' />
                            })
                        }
                    </div>
                    <div className="wide-images">
                        {
                            Object.values(wideImages)
                            .filter((item, idx) => idx < 4)
                            .map((item, id)=> {

                                    return <img key={id} src={item} alt='' />
                            })
                        }
                    </div>
                    <div className="square-images">
                        {
                            Object.values(squareImages)
                            .filter((item, idx) => idx < 4)
                            .map((item, id)=> {

                                    return <img key={id} src={item} alt='' />
                            })
                        }
                    </div>          
                </div>
            </div>
        </div>
    )
}

export default ItemPage;
