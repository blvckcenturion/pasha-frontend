/* eslint-disable @next/next/no-img-element */
import React from 'react'
import axios from 'axios'
import ProductGrid from '../../components/Product/ProductGrid';

const Brand = ({ brand, products }) => {
    console.log(brand);
    console.log(products);
    const { brandName, brandDesc, brandImg: { url } } = brand;

    return (
        <>
            <div className="brand-details">
                <div className="brand-details__name">
                    <h1>{brandName}</h1>
                </div>
                <div className="brand-details__info">
                    <div className="brand-details__info-desc">
                        <p>{ brandDesc }</p>
                    </div>
                    <div className="brand-details__info-img">
                        <img src={`http://192.168.0.2:1337${url}`} alt={`${brandName} logo`} />
                    </div>
                </div>
            </div>
            <div className="brand-products">
                <ProductGrid products={ products }/>
            </div>
        </>
    )
}

export const getStaticProps = async (context) => {
    const { brand } = context.params;
    
    axios.defaults.baseURL = 'http://192.168.0.2:1337'

    const brandData = await axios({
        method: 'get',
        url: '/brands',
        baseURL: 'http://192.168.0.2:1337',
        params: {
            brandURL: brand
        }
    });

    const products = await axios({
        method: 'get',
        url: '/products',
        params: {
            brand: brandData.data[0].id
        }
    })

    return {
        props: {
            preview: null,
            brand: brandData?.data[0],
            products: products?.data
        }
    }
}

export const getStaticPaths = async () => {
    const allBrands = await axios({
        method: 'get',
        baseURL: 'http://192.168.0.2:1337',
        url: '/brands',
    });
    const paths = allBrands?.data.map(brand => `/brands/${brand.brandURL}`)
    return {
        paths:paths||[],
        fallback: false
    }

}

export default Brand
