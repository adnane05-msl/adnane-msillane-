import React from 'react'
import './CardProjets.css'

function CardProjets(props) {
    return (
        <div className='card-projet'>
            <div class="card" >
                <img src={props.img} class="card-img-top" alt={props.title}/>
                <div class="card-body">
                    <h5 class="card-title">{props.title}</h5>
                    <p class="card-text">{props.description}</p>
                    <a href={props.link} target="_blank" class="button btn">Go somewhere</a>
                </div>
            </div>
        </div>
    )
}

export default CardProjets
