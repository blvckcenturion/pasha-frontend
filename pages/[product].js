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
import useCart from '../hooks/useCart';
import Modal from '../components/Modal';
import gsap from 'gsap'

SwiperCore.use([Autoplay, Pagination, Navigation]);

const Product = ({ product, productEntries }) => {
    const { addProductCart  } = useCart();
    console.log(product)
    console.log(productEntries)
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
    const [isOpen, setIsOpen] = useState(false);
    const [quantity, setQuantity] = useState(1);
    const [variant, setVariant] = useState(productEntries[0].id);
    console.log(productEntries)

    var availability = productEntries.find(e => e.id === variant).productAvailableQuantity;
    var productEntryPrice = productEntries.find(e => e.id === variant).price;

    const handleVariant = (e) => {
        e.preventDefault();
        console.log(e.target.value)
        setVariant(e.target.value)
    }

    const handleQuantity = (e) => {
        e.preventDefault();
        console.log(e.target.value)
        setQuantity(e.target.value);
    }

    const handleSubmit = async (e) => {
        e.preventDefault();
        const tl = gsap.timeline()
        addProductCart({id: product.id, quantity: quantity, variant: variant});
        tl
            .to('.modal-card', { scale: 0, opacity: 0, duration: 0.5, ease: 'power3.inOut' })
            .to('.modal-bg', { opacity: 0, background: 'transparent', ease: 'power3.inOut', duration: 0.5 })
            .to('body', { duration: 0, overflow: 'auto', duration: 0 })
            .then(() => setIsOpen(false))
    }

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
                    <button onClick={ () => setIsOpen(true)}>Agregar Producto</button>
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
            <Modal isOpen={isOpen} setIsOpen={ setIsOpen }>
                <div className="product-modal__content">
                    <div className="product-modal__content-title">
                        <h2>Detalles</h2>
                    </div>
                    <form className="product-modal__content-body">
                        <div className="product-size">
                            <h4>Talla</h4>
                            <select name="product-size" id="product-size" required onChange={ handleVariant }>
                                {productEntries.map((e, i) => <option key={i} value={e.id}>{ e.size.sizeValue}</option>)}
                            </select>
                        </div>
                        <div className="product-quantity">
                            <h4>Cantidad</h4>
                            <select name="product-quantity" id="product-quantity" required onChange={ handleQuantity }>
                                <option value="1">1</option>
                                <option value="2">2</option>
                                <option value="3">3</option>
                                <option value="4">4</option>
                                <option value="5">5</option>
                            </select>
                        </div>
                        <div className="product-details">
                            <div className="delivery-time">
                                <h4>Estimado de entrega</h4>
                                <p>{availability > 0 && quantity < availability ? "1 Dia" : "30 Dias"}</p>
                            </div>
                            
                            <div className="product-subtotal">
                                <h4>Subtotal</h4>
                                <p>{ quantity * (productEntryPrice ? productEntryPrice : productDefaultPrice)} BOB</p>
                            </div>
                        </div>
                        <div className="product-confirm-details">
                            <button onClick={ handleSubmit }>
                                Confirmar
                            </button>
                        </div>
                    </form>
                </div>
            </Modal>
        </>
    )
}

export const getStaticProps = async (context) => {
    const { product } = context.params;
    axios.defaults.baseURL = 'http://192.168.0.2:1337'
    const productData = await axios({
        method: 'get',
        url: '/products',
        params: {
            id: product
        }
    });

    const productEntries= await axios({
        method: 'get',
        url: '/product-entries',
        params: {
            product: productData?.data[0].id
        }        
    })

    return {
        props: {
            preview: null,
            product: productData?.data[0],
            productEntries: productEntries?.data
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
