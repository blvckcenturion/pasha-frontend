import { CART } from "../utils/data";
export const getProductsCart = () => {
    const cart = JSON.parse(localStorage.getItem(CART));
    if (!cart) return null
    else {
        return cart;
    }
}

export const addProductsCart = (product) => {
    const cart = getProductsCart(); 
    if (!cart) {
        localStorage.setItem(CART, JSON.stringify([product]))
    } else {
        const productFound = cart.find(item => item.id === product.id);
        if (!productFound) {
            cart.push(product);
            localStorage.setItem(CART, JSON.stringify(cart));
        }
    }
}

export const countProductsCart = () => {
    const cart = getProductsCart();
    if (!cart) return 0;
    else return cart.length;
}

export const removeAllProductsCart = (product) => {
    const cart = getProductsCart();
    remove(cart, (item) => {
        return item === product;
    })

    if (size(cart) > 0) {
        localStorage.setItem(CART, cart);
    } else {
        localStorage.removeItem(CART);
    }
}
