import React from 'react'
import Navbar from './Components/Navbar'
import Menu1 from './Components/Menu1'
import Menu2 from './Components/Menu2'
import Menu3 from './Components/Menu3'
import Menu4 from './Components/Menu4'

const App = () => {
  return (
    <div>
      <Navbar/>
      <div id='menu1' style={{marginTop: '80px'}}>
        <Menu1/>
      </div >
      <div id='menu2' style={{marginTop: '80px'}}>
      <Menu2/>
      </div>
      <div id='menu3' style={{marginTop: '80px'}}>
      <Menu3/>
      </div>
      <div id='menu4' style={{marginTop: '80px'}}>
      <Menu4/>
      </div>
    </div>
  )
}

export default App
