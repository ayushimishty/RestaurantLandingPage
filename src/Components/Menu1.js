import React from 'react'
import img5 from '../images/the-wonton.png'
import img6 from '../images/ham-sandwich.png'
import img7 from '../images/2ham-sandwich.png'
import './menu1.css'
import Card from './Card'

const Menu1 = () => {
  return (
    <>
      <h1 className='menuHeading'>Try out some of our best cuisines</h1>
      <div className='cards'>
        <Card image={img5} name={'Pancake'}/>
        <Card image={img6} name={'Ham Burger'}/>
        <Card image={img7} name={'FrenchFries'}/>
      </div>
    </>
  )
}

export default Menu1
