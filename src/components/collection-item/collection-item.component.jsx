import React from 'react'
import './collection-item.styles.scss'
import {useHistory} from 'react-router-dom'


function CollectionItem({id, classe, name, imageUrl, img2, img3, img4, description}){


    const history = useHistory();
    
    const handleClick = () => {
      history.push({
            pathname: '/item-page',
            state:{
                id: id,
                classe: classe,
                title: name,
                description: description
            }
        })
    }

    return(

        <div className='collection-item'
        onClick={handleClick}
        >

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
                <span className="name">{name}</span>  
            </div>
        </div>
    )
}

export default CollectionItem;