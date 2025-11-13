import React, { useState } from "react";
import './CardCategorie.css'

function CardCategorie(props) {
    const { categorie, competences, description } = props;

    const [isFlipped, setIsFlipped] = useState(false);

    function toggleFlip() {
        setIsFlipped(!isFlipped);
    }

    return (
        <div className={`card-categorie ${isFlipped ? "flipped" : ""}`}>
            {/* RECTO  */}
            <div className="card-inner">
                <div className="card-face card-front">
                <h3 className="titre-categorie">{categorie}</h3>
                <p className="description-categorie">
                    {description}
                </p>
                <button className="btn-flip" onClick={toggleFlip}>
                    Voir mes compétences
                </button>
            </div>

            {/* VERSO */}
            <div className="card-face card-back">
                <h3 className="titre-categorie">{categorie}</h3>
                <ul className="liste-competences">
                    {competences.map((competence) => (
                        <li key={competence.nom} className="competence-item">
                            {competence.nom}
                        </li>
                    ))}
                </ul>
                <button className="btn-flip" onClick={toggleFlip}>
                    Retour
                </button>
            </div>
            </div>
        </div>
    );
}

export default CardCategorie;
