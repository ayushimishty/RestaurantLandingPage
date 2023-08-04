import React from 'react'
import img11 from '../images/5ham-sandwich.png'
import img12 from '../images/ham-sandwich.png'
import img13 from '../images/2ham-sandwich.png'
import './menu1.css'

import Card from './Card'
const Menu3 = () => {
  return (
    <>
      <h1 className='menuHeading'>Try out some of our best cuisines</h1>
      <div className='cards'>
        <Card image={img11} name={'Pancake'}/>
        <Card image={img12} name={'Ham Burger'}/>
        <Card image={img13} name={'FrenchFries'}/>
      </div>
    </>
  )
}

export default Menu3
