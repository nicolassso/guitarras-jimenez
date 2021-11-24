import React from 'react'
import './collection-item.styles.scss'

const CollectionItem = ({id, name, imageUrl, img2, img3, img4}) => (


    <div className='collection-item'>

        {/*div classname image tiene que ser un grid de 6colx4row */}

        <div className="images-grid">

        <div 
        className='image'
        style={{
            backgroundImage:`url(${imageUrl})`
        }}
        />

        <div 
        className="image2"
        style={{
            backgroundImage:`url(${img2})`
        }}
        />
        
        <div 
        className="image3"
        style={{
            backgroundImage:`url(${img3})`
        }}
        />
        
        <div 
        className="image4"
        style={{
            backgroundImage:`url(${img4})`
        }}
        />

        </div>


        <div className="collection-footer">
            <span className="name">{name} + {id}</span>  
        </div>
    </div>
)

export default CollectionItem;