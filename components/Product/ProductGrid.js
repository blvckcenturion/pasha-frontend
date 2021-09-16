import React from 'react'
import Product from './Product'
import { useWindowSize } from '../../utils/useWindowSize';

const ProductGrid = ({ products, limit }) => {
    const { width } = useWindowSize();
    return (
        <div className="product-grid">
            {limit
                ? (products.slice(0, limit).map((product, index) => <Product key={product.id} product={product} />))
                : products.map(e => <Product key={e.id} product={e} />)
            }
            <ProductSpacing/>
            <ProductSpacing/>
            <ProductSpacing/>
        </div>
    )
}

export default ProductGrid

const ProductSpacing = () => {
    return (
        <div className="product-spacing">
            
        </div>
    )
}
