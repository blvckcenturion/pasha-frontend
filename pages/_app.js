
import 'normalize.css';
import '../scss/global.scss';
import BasicLayout from '../layouts/BasicLayout';
import { getProductsCart, addProductsCart, countProductsCart, removeAllProductsCart } from '../localStorage/cart';
import { useMemo, useState, useEffect } from 'react';
import CartContext from '../context/CartContext';

function MyApp({ Component, pageProps }) {
  const [reloadCart, setReloadCart] = useState(false);
  const [totalProductsCart, setTotalProductsCart] = useState(0);

  useEffect(() => {
    setTotalProductsCart(countProductsCart());
    setReloadCart(false);
  }, [reloadCart])

  const addProduct = (product) => {
    addProductsCart(product);
    setReloadCart(true);
  }

  const removeProduct = (product) => {
    removeProductsCart(product);
    setReloadCart(true);
  }

  const cartData = useMemo(() => ({
    productsCart: totalProductsCart,
    addProductCart: (product) => addProduct(product),
    getProductsCart: getProductsCart,
    removeProductCart: (product) => removeProduct(product),
    removeAllProductsCart: () => removeAllProductsCart()
  }), [totalProductsCart]);

  return (
    <CartContext.Provider value={cartData}>
      <BasicLayout>
        <Component {...pageProps} />
      </BasicLayout>
    </CartContext.Provider>
  )
}

export default MyApp
