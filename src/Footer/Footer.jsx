import React from 'react'
import './Footer.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faGithub, faLinkedin} from '@fortawesome/free-brands-svg-icons'
import { faEnvelope } from '@fortawesome/free-solid-svg-icons'

function Footer() {
    return (
        <div>
            <footer className="footer">
                <a href="https://github.com/adnane05-msl" target="_blank" rel="noopener noreferrer">
                    <FontAwesomeIcon icon={faGithub} className="icon" />
                </a>
                <a href="https://www.linkedin.com/in/adnane-msillane-8a92b5347/" target="_blank" rel="noopener noreferrer">
                    <FontAwesomeIcon icon={faLinkedin} className="icon" />
                </a> 
                <a href="mailto:msillaneadnane05@gmail.com" target="_blank" rel="noopener noreferrer">
                    <FontAwesomeIcon icon={faEnvelope} className="icon" />
                </a>
                <p>© 2025 Conçu et développé par Adnane Msillane. Tous droits réservés.</p>
            </footer>
        </div>
    )
}

export default Footer
