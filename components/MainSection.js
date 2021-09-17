import React from 'react'
import { MAIN_VIDEO } from '../utils/data'
import ProductSection from './Product/ProductSection'

const MainSection = ({ products }) => {

    return (
        <div className="video-section">
            <video muted preload="metadata" autoPlay loop playsInline>
                <source data-src={MAIN_VIDEO.src} src={MAIN_VIDEO.src} type={ MAIN_VIDEO.type}/>
                Tu buscador no soporta este video
            </video>
            <ProductSection url={'/all'}sectionTitle={"Nuevos Lanzamientos"} products={ products }/>
        </div>
    )
}

export default MainSection
