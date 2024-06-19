import React from 'react'
import image  from '../../assets/logo.png'
import './Header.css'
import { Link, Element } from 'react-scroll';

const Header = () => {
  return (
    <div style={{display:'flex',justifyContent:'space-around'}}>
      <img  src={image}  alt='logo'  style={{width:"10rem",height:"3rem"}}/>

      <ul className='header-list' style={{listStyle:'none',display:'flex',gap:'2rem',color:'white'}}>
        <li><Link to='hero' smooth={true}>Home</Link></li>
        <li><Link to='program' smooth={true}>Programs</Link></li>
        <li>Why Us</li>
        <li><Link to='plan' smooth={true}>Plans</Link></li>
        <li><Link to='testimonials' smooth={true}>Testimonials</Link></li>
      </ul>
    </div>
  )
}

export default Header