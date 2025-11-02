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
                <p>Je suis Adnane Msillane, développeur Front-End spécialisé dans la conception et l’intégration d’interfaces web modernes et fonctionnelles.
                    Mon parcours en informatique m’a permis d’acquérir une solide maîtrise des technologies web, notamment HTML, CSS, JavaScript et React.js.
                    Rigoureux et motivé, je cherche constamment à perfectionner mes compétences afin de contribuer à des projets innovants et à forte valeur ajoutée.
                </p>
                <img src={adnane} alt="adnane" className='image'/>
            </div>
        </div>
    )
}

export default Apropos
