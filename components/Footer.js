import React from 'react'
import Link from 'next/link'

const Footer = () => {
    return (
        <footer>
            <div className="footer-links">
                <div className="footer-links__section">
                    <div className="footer-links__section-title">
                        <h4 className="b">Ayuda.</h4>
                    </div>
                    <div className="footer-links__section-links">
                        <Link href="/1" passHref>
                            <a className="footer-link">
                                ¿Como Compro?
                            </a>
                        </Link>
                        <Link href="/2" passHref>
                            <a className="footer-link">
                                ¿Como Compro?
                            </a>
                        </Link>
                        <Link href="/3" passHref>
                            <a className="footer-link">
                                ¿Como Compro?
                            </a>
                        </Link>
                        <Link href="/4" passHref>
                            <a className="footer-link">
                                ¿Como Compro?
                            </a>
                        </Link>
                    </div>
                </div>
                <div className="footer-links__section">
                    <div className="footer-links__section-title">
                        <h4 className="b">Nosotros.</h4>
                    </div>
                    <div className="footer-links__section-links">
                    <Link href="/2" passHref>
                            <a className="footer-link">
                                ¿Como Compro?
                            </a>
                        </Link>
                        <Link href="/3" passHref>
                            <a className="footer-link">
                                ¿Como Compro?
                            </a>
                        </Link>
                        <Link href="/4" passHref>
                            <a className="footer-link">
                                ¿Como Compro?
                            </a>
                        </Link>
                    </div>
                </div>
                <div className="footer-links__section">
                    <div className="footer-links__section-title">
                        <h4 className="b">Contactanos.</h4>
                    </div>
                    <div className="footer-links__section-socials">

                    </div>
                </div>
            </div>
            <div className="footer-extras">

            </div>
        </footer>
        
    )
}

export default Footer
