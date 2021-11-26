import React from 'react'
import './item-page.styles.scss'
import IMAGES from '../products-data/products.images';

function ItemPage(props) {


    let imgs = IMAGES;

    //RECIBE LA CLASE DE GUITARRA (JAZZ O BOSSA) DE collection-item Y LO ALMACENA EN UNA STRING
    const classeRecibida = props.location.state.classe;

    //COGE LOS TIPOS DE GUITARRA (JAZZ O BOSSA) DEL OBJETO DE IMAGENES Y LO ALMACENA EN UN ARRAY
    const tiposGuitarra = Object.keys(imgs.tall);
    
    //FUNCIÓN PARA COMPARAR EL VALOR DE LA CLASE RECIBIDA Y LOS TIPOS ALMACENADOS EN EL ARRAY DEL OBJETO ANTERIOR, DEVUELVE UN BOOLEAN TRUE SI HAY COINCIDENCIA
    const checkClasseGuitarra = (t) => {
         let bool = false
         t.map( p => {
            const tipo = p
            if(tipo === classeRecibida){
                bool = !bool
            }
        }
        )
        return bool
    }


    let tallImages = imgs.tall[classeRecibida]
    let wideImages = imgs.big[classeRecibida]
    let squareImages = imgs.small[classeRecibida]

   


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

                                    return <img key={id} src={item} />
                            })
                        }
                    </div>
                    <div className="wide-images">
                        {
                            Object.values(wideImages)
                            .filter((item, idx) => idx < 4)
                            .map((item, id)=> {

                                    return <img key={id} src={item} />
                            })
                        }
                    </div>
                    <div className="square-images">
                        {
                            Object.values(squareImages)
                            .filter((item, idx) => idx < 4)
                            .map((item, id)=> {

                                    return <img key={id} src={item} />
                            })
                        }
                    </div>
                    
                    
                                    
                </div>
                <div className="item-description">
                    <p>{props.location.state.description}</p>
                </div>                
            </div>
        </div>
    )
}

export default ItemPage;
