import React, { useState, useEffect } from 'react'
import './Navbar.css'

function Navbar() {
    const [isOpen, setIsOpen] = useState(false);
    const [activeSection, setActiveSection] = useState('accueil');
    
    useEffect(() => {
        const sections = document.querySelectorAll('div[id]');
        
        const observer = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    setActiveSection(entry.target.id);
                }
            });
        }, {
            threshold: 0.3, 
            rootMargin: '-100px 0px -100px 0px'
        });

        sections.forEach(section => {
            observer.observe(section);
        });

        return () => {
            sections.forEach(section => {
                observer.unobserve(section);
            });
        };
    }, []);



    function toggleMenu() {
        setIsOpen(!isOpen);
    };


    function scrollToSection(sectionId){
    setIsOpen(false);
    setActiveSection(sectionId);
    
    setTimeout(() => {
        const element = document.getElementById(sectionId);
        if (element) {
            const y = element.offsetTop - 20;
            
            window.scrollTo({
                top: y,
                behavior: 'smooth'
            });
        }
    }, 400); 
};
    return (
        <nav className={`navbar fixed-top ${isOpen ? 'menu-open' : ''}`}>
            <div className="container-fluid nav-container">

                    <div className="nav-logo">
                    Adnane<span>.</span>
                    </div>

                    <div className={`nav-menu ${isOpen ? 'active' : ''} `}>
                        <a 
                            className={`nav-link ${activeSection === 'accueil' ? 'active' : ''}`} 
                            onClick={() => scrollToSection('accueil')}
                        >
                            Accueil
                        </a>
                        <a 
                            className={`nav-link ${activeSection === 'apropos' ? 'active' : ''}`} 
                            onClick={() => scrollToSection('apropos')}
                        >
                            À propos
                        </a>
                        <a 
                            className={`nav-link ${activeSection === 'competences' ? 'active' : ''}`} 
                            onClick={() => scrollToSection('competences')}
                        >
                            Compétences
                        </a>
                        <a 
                            className={`nav-link ${activeSection === 'projets' ? 'active' : ''}`} 
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