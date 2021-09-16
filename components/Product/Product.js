/* eslint-disable @next/next/no-img-element */
import React from 'react'
import Link from 'next/link';
import numeral from 'numeral';


const Product = ({ product}) => {

    const { productDefaultPrice, productName, discount, productImg: { url }, id } = product
    const price = discount ? (productDefaultPrice - ((discount.discountPercentage/100) * productDefaultPrice)) : productDefaultPrice

    return (
        <Link href={`/${id}`} passHref>
        <div className="product-box">
            <div className="product-img">
                    <img src={`http://192.168.0.2:1337${url}`} alt="GOAT PITA" />
            </div>
            <div className="product-box-details">
                <h5>{ productName}</h5>
                <div className="product-box-details-price">
                        {discount ? (
                            <>
                                
                                <p>{numeral(price).format('0,0.00')} BOB</p>
                                <p className="discount">-{ discount.discountPercentage}%</p>
                                    
                                </>
                        ) : <p>{numeral(price).format('0,0.00')} BOB</p>
                        }
                </div>
            </div>
        </div>
        </Link>
    )
}



export default Product
