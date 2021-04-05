import React from 'react'
import '../Components/SearchCard.css';

function SearchCard({src, title, description, price}) {
    return (
        <div className="searchCard">
            <div className="img-section">
                <img className="searchImg" src={src} alt=""/>
            </div>
          
        <div className="searchInfo">
            <h2>{title}</h2>
            <p>{description}</p>
            <h4>{price}</h4>
        </div>    
        </div>
    )
}

export default SearchCard;
