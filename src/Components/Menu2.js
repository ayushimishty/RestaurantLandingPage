import React from 'react'
import img8 from '../images/1ham-sandwich.png'
import img9 from '../images/3ham-sandwich.png'
import img10 from '../images/4ham-sandwich.png'
import './menu1.css'

import Card from './Card'
import'./card.css'

const Menu2 = () => {
  return (
    <>
      <h1 className='menuHeading'>Try out some of our best cuisines</h1>
      <div className='cards'>
        <Card image={img8} name={'Burger'}/>
        <Card image={img9} name={'Paistry'}/>
        <Card image={img10} name={'Salad'}/>
      </div>
    </>
  )
}
export default Menu2
