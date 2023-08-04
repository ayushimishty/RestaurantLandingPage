import React from 'react'
import './card.css'

const Card = ({image, name}) => {
  return (
    <div className='card-layout'>
      <img src={image} className='img'/> 
        <h3>{name}</h3>
    </div>
  )
}

export default Card
