import React, { useState } from 'react'
import './Navbar.css'

function Navbar() {
    const [isOpen, setIsOpen] = useState(false);
    


    function toggleMenu() {
        setIsOpen(!isOpen);
    };

    function closeMenu() {
        setIsOpen(false);
    };

    function scrollToSection(sectionId){
        const element = document.getElementById(sectionId);
        if (element) {
            element.scrollIntoView({ behavior: 'smooth' });
        }
        closeMenu();
    };
    
    return (
        <nav className={`navbar fixed-top ${isOpen ? 'menu-open' : ''}`}>
            <div className="container-fluid nav-container">

                    <div className="nav-logo">
                    Adnane<span>.</span>
                    </div>

                    <div className={`nav-menu ${isOpen ? 'active' : ''} `}>
                        <a 
                            className="nav-link" 
                            onClick={() => scrollToSection('accueil')}
                        >
                            Accueil
                        </a>
                        <a 
                            className="nav-link" 
                            onClick={() => scrollToSection('apropos')}
                        >
                            À propos
                        </a>
                        <a 
                            className="nav-link" 
                            onClick={() => scrollToSection('competences')}
                        >
                            Compétences
                        </a>
                        <a 
                            className="nav-link" 
                            onClick={() => scrollToSection('projets')}
                        >
                            Projets
                        </a>
                    </div>

                <div className={`nav-toggle ${isOpen ? 'active' : ''}`} onClick={toggleMenu}>
                    <span className="bar"></span>
                    <span className="bar"></span>
                    <span className="bar"></span>
                </div>
            </div>
        </nav>
    )
}

export default Navbar