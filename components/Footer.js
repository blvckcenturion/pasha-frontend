import React from 'react'
import Link from 'next/link'
import { SOCIAL_MEDIA_LINKS } from '../utils/data'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

const Footer = () => {
    return (
        <footer>
            <div className="footer-links">
                <div className="footer-links__section">
                    <div className="footer-links__section-title">
                        <h3 className="b">Ayuda.</h3>
                    </div>
                    <div className="footer-links__section-links">
                        <Link href="/1" passHref>
                            <a className="footer-link">
                                ¿Como Compro?
                            </a>
                        </Link>
                        <Link href="/2" passHref>
                            <a className="footer-link">
                                Entregas
                            </a>
                        </Link>
                        <Link href="/4" passHref>
                            <a className="footer-link">
                                Pagos
                            </a>
                        </Link>
                        <Link href="/4" passHref>
                            <a className="footer-link">
                                Instala la App
                            </a>
                        </Link>
                    </div>
                </div>
                <div className="footer-links__section">
                    <div className="footer-links__section-title">
                        <h3 className="b">Nosotros.</h3>
                    </div>
                    <div className="footer-links__section-links">
                    <Link href="/2" passHref>
                            <a className="footer-link">
                                Sobre Nostros
                            </a>
                        </Link>
                        <Link href="/3" passHref>
                            <a className="footer-link">
                                Trabaja Con Nosotros
                            </a>
                        </Link>
                    </div>
                </div>
                <div className="footer-links__section">
                    <div className="footer-links__section-title">
                        <h3 className="b">Contactanos.</h3>
                    </div>
                    <div className="footer-links__section-socials">

                        {SOCIAL_MEDIA_LINKS.map(({ href, icon }, i) => (
                            <a className="footer-nav-social" key={i} href={href} target="_blank" rel="noopener noreferrer">
                                <FontAwesomeIcon icon={icon} className="icon"/>
                            </a>
                        ))}

                    </div>
                </div>
            </div>
            <div className="footer-extras">
                <Link href="/2">
                    <a>
                        <p>Terminos & Condiciones</p>
                    </a>
                </Link>
                <div>
                    <p>Sitio por:
                        <Link href="/">
                            <a className="blackware"> BLACKWARE </a>
                        </Link>
                    </p>
                </div>
            </div>
        </footer>
        
    )
}

export default Footer
