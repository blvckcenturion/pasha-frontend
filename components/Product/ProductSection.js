import React from 'react'
import ProductGrid from './ProductGrid'
import { useWindowSize } from '../../utils/useWindowSize'
import { useRouter } from 'next/router'
const ProductSection = ({ sectionTitle, products,url }) => {
    const router = useRouter();
    const Button = () => <button onClick={ () => router.push(url)}>Ver Todos</button>
    const { width } = useWindowSize()
    
    return (
        <div className="product-section">
            <div className="product-section__heading">
                <h2>{ sectionTitle }</h2>
                { width >= 768 ? <Button /> : null }
            </div>
            <ProductGrid products={products} limit={ (width >= 768 && width <= 1023) ? 3 : null }/>
            { width >= 768 ? null : <Button />  }
        </div>
    )
}

export default ProductSection
