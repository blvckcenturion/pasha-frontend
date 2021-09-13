/* eslint-disable @next/next/no-img-element */
import React, {useState, useEffect} from 'react'
import Image from 'next/image'
import Link from 'next/link'
import gsap from 'gsap'
import { PlusIcon, ShopIcon } from './Icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { SOCIAL_MEDIA_LINKS } from '../utils/data'

const Header = () => {
    const [isOpen, setIsOpen] = useState(null);
    const [timerDone, setTimerDone] = useState(false);
    const toggleMenu = () => {
        if (isOpen === null) {
            setIsOpen(true);
            setTimeout(() => { setTimerDone(true)}, 6000)
        } else if (isOpen === true || isOpen === false) {
            if (timerDone) {
                setIsOpen(!isOpen);
                setTimerDone(false);
                isOpen ? setTimeout(() => { setTimerDone(true)}, 6000) : setTimeout(() => { setTimerDone(true)}, 5500)
                
            }
         }
    }
    useEffect(() => {
        const tl = gsap.timeline({paused: true});
        if (isOpen === true) {
            tl
                .fromTo('.plus-icon',
                    {rotate: 0},
                    { rotate: "-45deg", ease: 'power3.inOut', duration: 0.5}
                )
                .to('.nav', { display: 'block', duration: 0})
                .to('body',
                    { duration: 0, overflow: 'hidden', duration: 0}
                )
                .fromTo('.nav-content',
                    { scale: 0},
                    { scale: 1, duration: 1, ease: 'power3.inOut' }
                )
                .fromTo('.nav-links',
                    { scaleX: 0},
                    { scaleX:1, duration: 0.5, delay: 0, ease: 'power3.inOut'},
                )
                .fromTo('.nav-link',
                    {opacity: 0, x: -200, scale: 0.5},
                    {opacity:1, x: 0, scale: 1, stagger: { amount: 1.5 }, duration: 0.7, ease: "power3.inOut", delay: 0 }
                )
                .fromTo('.nav-social',
                    { opacity: 0, x: 200, scale: 0, },
                    {stagger: { amount: 0.5 }, opacity:1, x:0, scale: 1, duration: 0.7, ease: "power3.inOut"}
                )
            tl.play();
        } else if(isOpen === false){
            tl
                .to('.nav-social', { opacity: 0, x: 200, scale: 0, duration: 0.7, ease: "power3.inOut", stagger:{ amount:0.5} })
                .to('.nav-link', { opacity: 0, x: -200, scale: 0.5, ease: "power3.inOut", duration: 0.5, stagger: {amount: 1.5}})
                .to('.nav-links', { scaleX: 0, duration: 0.5, delay: 0.5 })
                .to('.nav-content', { scale: 0, duration: 1, ease: 'power3.inOut' })
                .to('.nav', { display: 'none' })
                .to('body', { duration: 0, overflow: 'visible' })
                .to('.plus-icon',
                    { rotate: "0deg", ease: 'power3.inOut' },
                )
            tl.play();
        }
    }, [isOpen])

    return (
        <>
        <div className="header">
            <div className="menu-toggler" onClick={ toggleMenu }>
               <PlusIcon/>
            </div>
            <div className="logo">
                <Link href="/" passHref>
                    <a>
                        <h1>PASHA</h1>
                    </a>
                </Link>
            </div>
            <div className="shopping-cart">
                <Link href="/god" passHref>
                    <a>
                        <ShopIcon/>
                    </a>
                </Link>    
            </div>
        </div>
        <nav className="nav">
            <div className="nav-content">
                <div className="nav-links">
                    <Link href="/">
                        <a className="nav-link">COLECCIONES</a>
                    </Link>
                    <Link href="/1">
                        <a className="nav-link">LOOKS</a>
                    </Link>
                    <Link href="/2">
                        <a className="nav-link">MIS FAVORITOS</a>
                    </Link>
                    <Link href="/3">
                        <a className="nav-link">MI CUENTA</a>
                    </Link>
                    <Link href="/4">
                        <a className="nav-link">BUSCAR PRODUCTOS</a>
                    </Link>
                </div>
                <div className="nav-socials">
                    {SOCIAL_MEDIA_LINKS.map(({ href, icon }, i) => (
                        <a className="nav-social" key={i} href={href} target="_blank" rel="noopener noreferrer">
                            <FontAwesomeIcon icon={icon} className="icon"/>
                        </a>
                    ))}
                </div>
            </div>
        </nav>
        </>
    )
}

export default Header
