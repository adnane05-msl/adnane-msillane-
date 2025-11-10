import React from 'react'
import './Accueil.css'

function Accueil() {
    return (
        <div className='accueil page'>
            <div className='accueil-titre'>
                <h3>Salut<span>, </span>je suis</h3>
                <h1>adnane msillane</h1>
                <h2>Étudiant en Informatique <br /> Passionné par le Développement et l’Innovation  </h2>
            </div>
            <div className='accueil-description '>
                <p>Étudiant en informatique, je me spécialise dans le développement d’applications web et logicielles.
                    J’explore différents langages et environnements afin de créer des solutions performantes et bien structurées.
                </p>
            </div>
        </div>
    )
}

export default Accueil
