import Head from 'next/head';
import Link from 'next/link';
import Header from '../components/Header';
import Footer from '../components/Footer';

const BasicLayout = ({ children }) => {

    return (
        <div>
            <Head>
                <title>Basic Layout</title>
                <meta name="viewport" content="initial-scale=1.0, width=device-width" />
                <link rel="preload" href="/fonts/Genesys.ttf" as="font" crossOrigin=""/>
                <link rel="preload" href="/fonts/SFPRODISPLAYREGULAR.woff" as="font" crossOrigin="" />
                <link rel="preload" href="/fonts/SFPRODISPLAYBOLD.woff" as="font" crossOrigin="" />
                <link rel="preload" href="/fonts/SFPRODISPLAYBOLD.woff" as="font" crossOrigin="" />
            </Head>
            
            <Header/>
            {children}
            <Footer/>
        </div>
    )
}

export default BasicLayout
