import React, { useState, useEffect } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faSearch, faPlay } from '@fortawesome/free-solid-svg-icons'
import { getLatestProducts } from '../api/product'
import ProductGrid from '../components/Product/ProductGrid'
const Search = () => {
    const [products, setProducts] = useState(null)
    const [search, setSearch] = useState('')
    useEffect(() => {
        console.log(search)
    }, [search])

    const handleSubmit = async (e) => {
        e.preventDefault()
        if (search.length > 0) {
            const res = await getLatestProducts({ _q: search, isAvailable: true })
            setProducts(res)    
        }
    }

    return (
        <>
        <div className="search-container">
            <div className="search-container__bar">
                <input className="search-input" type="text" value={search} onChange={ (e) => setSearch(e.target.value)} placeholder="Ingresa el nombre del producto"/>
                <button className="search-btn" onClick={ handleSubmit}>
                    <FontAwesomeIcon icon={ faSearch } className="search-icon"/> 
                </button>
            </div>
        </div>
        <div className="search-results">
                {products === null
                    ? (
                        <div className="search-results__loading">
                            
                            <FontAwesomeIcon icon={faPlay} className="search" />
                            <h4>Ingresa el nombre del producto para empezar la busqueda.</h4>
                        </div>)
                    : products.length > 0 ? <ProductGrid products={ products }/> : <h4 className="search-results__empty">No se encontraron resultados</h4>
                }
        </div>
        </>
    )
}
export default Search
