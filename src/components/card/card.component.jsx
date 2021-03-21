import React from 'react'
import './card.styles.css';

function Card(props) {

    const image = `https://robohash.org/${props.monster.id}?set=set2&180x180`;

    return (
        <div className="card-container">
            <img alt="monster" src={image}/>
            <h2>{props.monster.name}</h2>
            <p>{props.monster.email}</p>
        </div>
    )
} 

export default Card
