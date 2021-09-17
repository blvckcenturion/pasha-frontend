/* eslint-disable @next/next/no-img-element */
import { useState } from 'react'
import ProductGrid from '../components/Product/ProductGrid';
import Link from 'next/link';
import SwiperCore, {
    Autoplay,Pagination,Navigation, 
} from 'swiper';
import { Swiper, SwiperSlide } from "swiper/react";  
import 'swiper/css'
import "swiper/css/pagination"
import "swiper/css/navigation"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faHeart, faShare } from '@fortawesome/free-solid-svg-icons';
import { faHeart as HeartNoFill } from '@fortawesome/free-regular-svg-icons';
import { useRouter } from 'next/router';
import axios from 'axios';
import numeral from 'numeral';
import Modal from '../components/Modal';

SwiperCore.use([Autoplay, Pagination, Navigation]);

const Product = ({ product }) => {

    const {
        productName,
        brand,
        productDesc,
        productGallery,
        productImg,
        discount,
        productDefaultPrice,
        categories
    } = product
    const price = discount ? (productDefaultPrice - ((discount.discountPercentage/100) * productDefaultPrice)) : productDefaultPrice

    return (
        <>
        <div className="product-page-details">
            <div className="product-name">
                <h2>{ productName }</h2>
            </div>
            <div className="product-slides">
                <Swiper spaceBetween={30} centeredSlides={true} autoplay={{
                        "delay": 2500,
                        "disableOnInteraction": true
                    }}
                    pagination={{
                        "clickable": true
                    }}
                    navigation={true}
                        className="product-slider">
                        {productGallery.length > 0 
                            ? productGallery.map((image, index) => <SwiperSlide key={index} className="product-slide"><img src={`http://192.168.0.2:1337${image.url}`}></img></SwiperSlide>)
                            : (
                                <SwiperSlide className="product-slide">
                                    <img src={`http://192.168.0.2:1337${productImg.url}`} alt="god loves you" />
                                </SwiperSlide>
                            )
                        }
                </Swiper>
            </div>
            <div className="product-page__basic-info">
                <div className="product-cta">
                    <div className="product-cta-price">
                        {discount ? (
                                <>
                                    <p className="discount">-${ discount.discountPercentage}%</p>
                                    <h3>{numeral(price).format('0,0.00')} BOB</h3>
                                </>
                            ) : <h3>{numeral(price).format('0,0.00')} BOB</h3>
                        }
                    </div>
                    <button>Agregar Producto</button>
                    </div>
                    {productDesc && (
                        <div className="product-desc">
                            <h2>DETALLES</h2>
                            <p>{ productDesc }</p>
                        </div>
                    )}
                <div className="product-details">
                    <div className="product-categories">
                        <h3>CATEGORIAS</h3>
                        <div className="section-content">
                            <ul>
                                {categories.map((category, index) => (
                                    <li key={index}>
                                        <Link href={`/categories/${category.url}`} passHref>
                                            <a>
                                                <p>{category.categoryName.toUpperCase()}</p>
                                            </a>
                                        </Link>
                                    </li>
                                ))}
                            </ul>
                        </div> 
                    </div>
                    <div className="separator"/>
                    <div className="product-brand">
                        <h3>MARCA</h3>
                            <div className="section-content">
                                <Link href={`/brands/${brand.brandURL}`}>
                                <a>
                                    <h4>{ brand.brandName}</h4>
                                </a>
                                </Link>
                        </div>
                        
                    </div>
                    </div>
                <div className="product-extras">
                        <button><FontAwesomeIcon icon={ faHeart} className="product-extras__icon"/>Agregar a favoritos</button>
                        <button><FontAwesomeIcon icon={ faShare } className="product-extras__icon"/>Compartir producto</button>
                </div>
            </div>
            </div>
            <Modal isOpen={ true}/>
        </>
    )
}

export const getStaticProps = async (context) => {
    const { product } = context.params;
    const res = await axios({
        method: 'get',
        baseURL: 'http://192.168.0.2:1337',
        url: '/products',
        params: {
            id: product
        }
    }

    );
    return {
        props: {
            preview: null,
            product: res?.data[0]
        }
    }
}

export const getStaticPaths = async () => {
    const allProducts = await axios({
        method: 'get',
        baseURL: 'http://192.168.0.2:1337',
        url: '/products',

    });
    const paths = allProducts?.data.map(product => `/${product.id}`)
    return {
        paths:paths||[],
        fallback: false
    }

}
  
export default Product
