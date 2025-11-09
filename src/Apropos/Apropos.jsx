import React from 'react'
import adnane from '../assets/images/adnane.jpg'
import './Apropos.css'

function Apropos() {
    return (
        <div className='apropos page'>
            <div className='apropos-titre'>
                <h2>à propos</h2>
            </div>
            <div className='apropos-description'>
                <p>Étudiant en informatique passionné par le développement web et logiciel.
                    Au cours de ma formation, j’ai acquis de solides compétences en langages de programmation tels que C, C++, Python, Java et JavaScript, ainsi qu’en outils et frameworks modernes.
                    J’accorde une grande importance à la qualité du code, à la logique et à la conception d’interfaces efficaces. Mon objectif est de continuer à évoluer dans le monde du développement en explorant de nouveaux défis techniques.
                </p>
                <img src={adnane} alt="adnane" className='image'/>
            </div>
        </div>
    )
}

export default Apropos
