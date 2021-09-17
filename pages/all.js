import axios from 'axios'
import ProductGrid from '../components/Product/ProductGrid'

const All = ({ products }) => {

    return (
        <div className="all-products-container">
            <h2>Todos los productos</h2>
            <ProductGrid products={ products}/>
        </div>
    )
}

export const getStaticProps = async () => {
    const products = await axios({
        method: 'get',
        url: '/products',
        baseURL: 'http://192.168.0.2:1337',
        params: {
            isAvailable: true
        }
    })
    return {
        props: {
            products: products.data
        }
    }
}

export default All

