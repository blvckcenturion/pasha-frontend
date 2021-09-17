/* eslint-disable @next/next/no-img-element */
import Link from 'next/dist/client/link'
import React, { useEffect, useState} from 'react'
import { getLatestProducts } from '../../api/product'
import { LOCAL } from '../../utils/data'
import ProductSection from './ProductSection'

const ProductCategory = ({ category }) => {
    const [products, setProducts] = useState([])

    useEffect(() => {
        (async () => {
            const response = await getLatestProducts({
                categories: category.id,
                _limit: 4
            })
            setProducts(response)
        })()
    }, [])

    return (
        <div className="product-category">
            <div className="product-category-img">
                <Link href={`/categories/${category.url}`}>
                    <a>
                        <img src={`${LOCAL}${category.categoryImg.url}`} alt="god loves you"/>
                    </a>
                </Link>
            </div>
            <ProductSection url={`/categories/${category.url}`} sectionTitle={category.categoryName} products={ products }/>
        </div> 
    )
}

export default ProductCategory
