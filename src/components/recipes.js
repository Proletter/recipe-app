import React from 'react'

const Recipes = ({title, image, calories}) => {
    return (
        <div>
            <h1>{title}</h1>
            <p>{calories.toFixed()}</p>
            <img src={image}></img>
        </div>
    )
    
}

export default Recipes