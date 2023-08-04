import React, { useState } from "react";
import "./Navbar.css";
import img1 from '../images/Pngtree-delicious-food.png';
import img2 from '../images/dots-bg1.png';
import img3 from '../images/1pngtree—lettuce.png';
import img4 from '../images/userpic.png'
const Navbar = () => {
  return (
    <>
    <div className="main-box" style={{position: 'relative'}}>

      <nav className='main-nav'>
        <div className='logo'>
          <h2>
            <span>
              Grillz
            </span>
          </h2>
        </div>
      <div className="menu-link">
        <ul>
          <li>
            <a href='#menu1' >Menu one</a>
          </li>
          <li>
            <a href='#menu2'>Menu two</a>
          </li>
          <li>
            <a href='#menu3'>Menu three</a>
          </li>
          <li>
            <a href='#menu4'>Menu four</a>
          </li>
        </ul>
        <ul >
          <li className="user">
          <img src={img4} className='img4'/>
            <a href='#'>user</a>
          </li>
        </ul>
      </div>
    </nav>

      {/*hero section */}
      <div className="hero-section-main-container">
        <section className='hero-section'>
          <h1> Food </h1>
          <p>
            Discover Restaurant <br/>
            & Delicious Food
          </p>
          <div className="searchbar">
          <input className="input" type="text" placeholder="search restaurant,food"></input>
          <button className="button">GO</button>
          </div>
        </section>

        <div className='image-main-container'> 
          <img src={img1} className='img1'/>
          <div className='img2' style={{backgroundImage: `URL(${img2})`}}>

          </div>
          <img src={img3}  className='img3'/> 
        </div>

      </div>
    </div>


  </>
  
  );
};
export default Navbar
