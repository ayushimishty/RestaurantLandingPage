import React from 'react'
import img14 from '../images/the-wonton.png'
import img15 from '../images/ham-sandwich.png'
import img16 from '../images/2ham-sandwich.png'
import './menu1.css'

import Card from './Card'
const Menu4 = () => {
  return (
    <>
      <h1 className='menuHeading'>Try out some of our best cuisines</h1>
      <div className='cards'>
        <Card image={img14} name={'Pancake'}/>
        <Card image={img15} name={'Ham Burger'}/>
        <Card image={img16} name={'FrenchFries'}/>
      </div>
    </>
  )
}

export default Menu4
