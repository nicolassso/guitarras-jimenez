import React from 'react'
import PRODUCTS_DATA from './products-data/products-data';
import CollectionPreview from '../../components/collection-preview/collection-preview.component';
import './products.styles.scss'

class Products extends React.Component {
    constructor(props){ 
        super(props);

        this.state = {
            collections: PRODUCTS_DATA
        }
    }

    render() {
        const {collections} = this.state;

        return(
        <div className='shop-page'>
            {
                collections.map(({id, ...otherCollectionProps}) => (
                    <CollectionPreview key={id} {...otherCollectionProps}/>
                    
                ))
            }
        </div>)
        
    }
}

export default Products;