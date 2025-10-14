import React from 'react'
import './Projets.css'
import CardProjets from './CardProjets'
import lions from '../assets/images/Lions.png'
import GoVoyage from '../assets/images/GoVoyage.png'


function Projets() {
    const projets = [
        {id : 1,    img: lions,        title: 'Club Lions FSBM',    description: 'Développement d’un site vitrine pour présenter les activités et les événements initiatives du club, en utilisant HTML, CSS et JAVASCRIPT.',                                           link:'https://lionsfsbm.vercel.app/'},
        {id : 2,    img: GoVoyage,     title: 'GoVoyage',           description: 'Création d’une plateforme de réservation de voyages organisés avec React JS et Bootstrap, permettant aux utilisateurs de consulter et réserver des destinations.',     link:'https://go-voyage.vercel.app/'},

    ]
            

    return (
        <div className='projets page'>
            <div className='projets-titre'>
                <h2>Mes Projets</h2>
            </div>
            <div className='projets-content'>
                {projets.map((projet) => (
                    <div key={projet.id} >
                        <CardProjets
                            img={projet.img}
                            title={projet.title}
                            description={projet.description}
                            link={projet.link}
                        />
                    </div>
                ))}
            </div>

        </div>
    )
}

export default Projets
