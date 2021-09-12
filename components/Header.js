/* eslint-disable @next/next/no-img-element */
import React, {useState, useEffect} from 'react'
import Image from 'next/image'
import Link from 'next/link'

const Header = () => {
    const [isOpen, setIsOpen] = useState(false);

    useEffect(() => {
        console.log(isOpen)
    }, [isOpen])

    return (
        <div className="header">
            <div className="menu-toggler" onClick={ () => setIsOpen(!isOpen) }>
                <img className="plus-icon" src="/svg/plus.svg" alt="An SVG of an eye" />
            </div>
            <div className="logo">
                <Link  href="/" passHref>
                    <a style={{textDecoration: "none"}}>
                        <h1>PASHA</h1>
                    </a>
                </Link>
            </div>
            <div className="shopping-cart">
                <Link href="/god" passHref>
                    <a>
                    <img className="plus-icon" src="/svg/shopbag.svg" alt="An SVG of an eye" />

                    </a>
                </Link>    
            </div>
        </div>
    )
}

export default Header
