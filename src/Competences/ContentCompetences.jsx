import React from 'react'
import './ContentCompetences.css'

function ContentCompetences(props) {
    return (
        <div className='image-skill'>
            <img src={props.img} alt={props.title}/>
        </div>
    )
}

export default ContentCompetences
