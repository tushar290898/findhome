import React from 'react'
import '../Components/Card.css'

function Card({srcs, title, description, price}) {
    return (
        <div className="Card">
            
                <img src={srcs} alt=""/>
           
            <div className="Card-info">
                <h2>{title}</h2>
                <h4>{description}</h4>
                <h3>{price}</h3>
            </div>
           
        </div>
    )
}

export default Card;
