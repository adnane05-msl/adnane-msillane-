import React from 'react'
import './CardCategorie'
import CardCategorie from './CardCategorie'
import './Competences.css'

function Competences() {
    const dataCompetences = [
        {id : 1  ,   nom : "HTML",                    category: "Technologies Frontend" },
        {id : 2  ,   nom : "CSS",                     category: "Technologies Frontend" },
        {id : 3  ,   nom : "React",                   category: "Technologies Frontend" },
        {id : 4  ,   nom : "bootstrap",               category: "Technologies Frontend" },
        {id : 5  ,   nom : "JavaScript",              category: "Langages de Programmation" },
        {id : 6  ,   nom : "Python",                  category: "Langages de Programmation" },
        {id : 7  ,   nom : "C",                       category: "Langages de Programmation" },
        {id : 8  ,   nom : "C++",                     category: "Langages de Programmation" },
        {id : 9  ,   nom : "java",                    category: "Langages de Programmation" },
        {id : 10 ,   nom : "Git",                     category: "Outils de Développement" },
        {id : 11 ,   nom : "GitHub",                  category: "Outils de Développement" },
        {id : 12 ,   nom : "Visual Studio Code",      category: "Outils de Développement" },
        {id : 13 ,   nom : "MySQL",                   category: "Bases de Données et Langages de Requête" },
    ]


    const categoriesUniques = [...new Set(dataCompetences.map(item => item.category))];

    return (
        <div className='competences page'>
            <div className='competences-titre'>
                <h2>Mes Compétences</h2>
            </div>
            <div className="cartes-container">
                {categoriesUniques.map((categorie) => {
                    const competencesFiltrees = dataCompetences.filter(
                        (c) => c.category === categorie
                );

                return (
                    <CardCategorie
                    key={categorie}
                    categorie={categorie}
                    competences={competencesFiltrees}
                    />
                );
                })}
            </div>
        </div>
    )
}

export default Competences
