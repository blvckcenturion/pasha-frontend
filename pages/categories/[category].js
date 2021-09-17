    /* eslint-disable @next/next/no-img-element */
import React from 'react';
import axios from 'axios';
import ProductGrid from '../../components/Product/ProductGrid';
import { LOCAL } from '../../utils/data';

const Category = ({ category, products,cat }) => {

    const { categoryDesc, categoryName, categoryImg } = category;
    return (
        <>
        <div className="category-details">
            <div className="category-details__title">
                <h2>{ categoryName.toUpperCase()}</h2>
            </div>
            <div className="category-details__img">
                <img src={`${LOCAL}${categoryImg.url}`} alt="" />
            </div>
            <div className="category-details__desc">
                <p>{ categoryDesc }</p>
            </div>
            </div>
            <div className="category-products">
                <ProductGrid products={ products }/>
            </div>
        
        </>
    )
}

export const getStaticProps = async (context) => {
    const { category } = context.params;

    axios.defaults.baseURL = LOCAL

    const categoryData = await axios({
        method: 'get',
        url: '/categories',
        params: {
            url: category
        }
    });

    const products = await axios({
        method: 'get',
        url: '/products',
        params: {
            categories: categoryData?.data[0].id,
        }
    })

    return {
        props: {
            preview: null,
            category: categoryData?.data[0],
            products: products?.data
        }
    }
}

export const getStaticPaths = async () => {
    const allCategories = await axios({
        method: 'get',
        baseURL: LOCAL,
        url: '/categories',
    });
    const paths = allCategories?.data.map(category => `/categories/${category.url}`)
    return {
        paths:paths||[],
        fallback: false
    }

}

export default Category
