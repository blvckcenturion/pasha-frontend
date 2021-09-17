/* eslint-disable @next/next/no-img-element */
import React, { useEffect, useState } from 'react'
import useCart from '../hooks/useCart'
import { getLatestProducts } from '../api/product'
import { getEntry } from '../api/entry'
import wasend from 'wasend'

const Cart = () => {
    const [products, setProducts] = useState([])
    const { getProductsCart } = useCart();
    const cart = getProductsCart();
    console.log(cart)



    useEffect(() => {
        (async () => {
            const productsTemp = [];
            if (cart) {
                for await (const product of cart) {
                    const productData = await getLatestProducts({ id: product.id });
                    const entryData = await getEntry({ id: product.variant });
                    productsTemp.push({
                        product: productData[0],
                        entry: entryData[0],
                        quantity: parseInt(product.quantity)
                    });
                }
            }
            setProducts(productsTemp)
        })()
    }, [])

    const handleOrder = () => {
        var str = ''
        var finalPrice = 0;
        if (products) {
            for (const product of products) {
                const { entry, quantity } = product;
                str += `|| Producto: ${product.product.productName}, Talla: ${entry.size.sizeValue}, Cantidad: ${quantity} `
                finalPrice += product.product.productDefaultPrice * quantity;
            }

            str += `|| Total: ${finalPrice} BOB`
        }
        console.log(wasend.generate('59176918783', `Hola! esta es mi orden: ${str}`))
    }

    if (!products) return <div>Loading...</div>
    if(products.length === 0) return <div>No hay productos en el carrito</div>

    return (
        <div className="cart-container">
            <div className="cart-container__header">
                <h2>RESUMEN DE ORDEN</h2>
            </div>
            <div className="cart-container__products">
                <div className="product-card">
                    <div className="product-info">
                        <h4>Producto</h4>
                    </div>
                    <div className="product-quantity">
                        <h4>Cantidad</h4>
                    </div>
                    <div className="product-subtotal">
                        <h4>Subtotal</h4>
                    </div>
                </div>
                {products && products.map((product, i) => <ProductCard key={ i}product={ product}/>) }
            </div>
            <div className="confirm-order-container">
                <div className="confirm-order-btn">
                    <button onClick={ handleOrder }>
                        Confirmar Orden
                    </button>
                </div>
                <div className="total-price">
                    <h4>Total: { products.reduce((acc, product) => acc + (product.product.productDefaultPrice * product.quantity), 0).toFixed(2) } BOB</h4>
                </div>
            </div>
        </div>
    )
}

const ProductCard = ({ product: {product, entry, quantity }}) => {
    const { productImg, productName, productDefaultPrice, discount } = product;
    
    const { price, entryDiscount } = entry;

    const setPrice = () => {
        var productFinalPrice = 0;
        if (price) {
            productFinalPrice = price * quantity
        } else {
            productFinalPrice = productDefaultPrice * quantity
        }
        if (discount) {
            const temp = productFinalPrice
            productFinalPrice -= ((productFinalPrice * discount.discountPercentage) / 100)
            return ` ${temp} - ${discount.discountPercentage}% = ${productFinalPrice.toFixed(2)} BOB`
        }
        return `${productFinalPrice.toFixed(2)} BOB`;
    }

    return (
        <div className="product-card">
            <div className="product-info">
                <div className="product-img">
                    <img src={`http://192.168.0.2:1337${productImg.url}`} alt={`${productName}`} />
                </div>
                <h5>{ productName}</h5>
            </div>
            <div className="product-quantity">
                <div className="product-quantity-input">
                    <select name="product-quantity" id="product-quantity" value={quantity }>
                        {[1, 2, 3, 4, 5].map((e, i) => <option key={i} value={e}>{e}</option> ) }))
                    </select>
                </div>
                <div className="product-quantity-delete">
                    <button>
                        Eliminar producto
                    </button>
                </div>
            </div>
            <div className="product-subtotal">
                <h5>
                    { setPrice() }
                </h5>
            </div>
        </div>
    )
}

export default Cart
