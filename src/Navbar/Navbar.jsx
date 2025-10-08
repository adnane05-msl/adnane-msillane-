import React,{useState} from 'react'
import './Navbar.css'
import Accueil from '../Accueil/Accueil';

function Navbar() {

    const [open, setOpen] = useState(false);
    function handleOpen(){
        setOpen(!open);
    }

    return (
        <div >
            <div className='Navbar navbar navbar-expand-lg fixed-top '>
                <div className='container-fluid'>
                    <div className='logo'>
                        Adnane<span>.</span>
                    </div>

                    <button
                        className="navbar-toggler"
                        id='Navbar-toggler'
                        type="button"
                        aria-controls="navbarNavAltMarkup"
                        aria-expanded={open ? "true" : "false"}
                        aria-label="Toggle navigation"
                        onClick={handleOpen}
                    >
                        <span className="navbar-toggler-icon"></span>
                    </button>

                    <div className={`collapse navbar-collapse${open ? " show" : ""}`} id="navbarNavAltMarkup">
                        <div className="menu navbar-nav ms-auto">
                            <a  className="nav-link">accueil</a>
                            <a  className="nav-link">à propos</a>
                            <a  className="nav-link">compétences</a>
                            <a  className="nav-link">projets</a>
                            {/* <a  className="nav-link">Contact</a> */}
                        </div>
                    </div>
                    
                </div>
                
            </div>
        </div>
    )
}

export default Navbar
