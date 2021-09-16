import Head from 'next/head'
import { useWindowSize } from '../utils/useWindowSize';
import MainSection from '../components/MainSection';
import ProductCategory from '../components/Product/ProductCategory';
import axios from 'axios';
const Home = ({ products, categories }) => {
  const {width, height} = useWindowSize();
  console.log(categories)
  return (
    <>
      <MainSection products={ products }/>
      { categories.map(category => <ProductCategory key={ category.id } category={ category }/>) }
    </>
  )
}

export const getStaticProps = async () => {
  axios.defaults.baseURL = 'http://localhost:1337';
  const products = await axios({
    method: 'get',
    url: '/products',
    params: {
      _limit: 4,
      isAvailable: true,
      _sort: "created_at:desc"
    }
  });

  const categories = await axios({
    method: 'get',
    url: '/categories',
    params: {
      _limit: 2,
    }
  })

  return {
    props: {
      products: products.data,
      categories: categories.data
    },
  };
};

export default Home;

