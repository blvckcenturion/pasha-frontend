import React from 'react'
import Product from './Product'
import { useWindowSize } from '../../utils/useWindowSize';

const ProductGrid = ({ products }) => {
    return (
        <div className="product-grid">
            {products.map(e => <Product key={e.id} product={e} />)}
            <ProductSpacing/>
            <ProductSpacing />
            <ProductSpacing/>
        </div>
    )
}

export default ProductGrid

const ProductSpacing = () => {
    return (
        <div className="product-spacing"/>
    )
}
