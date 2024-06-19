import React from 'react'
import github from '../../assets/github.png'
import instagram from '../../assets/instagram.png'
import linkedin from '../../assets/linkedin.png'
import logo from '../../assets/logo.png'
import './Footer.css'


const Footer = () => {
  return (
    <div style={{position:'relative'}}>
        <hr style={{border:'1px solid lightgray'}}/>
      <div style={{padding:'1rem 2rem',
            display:'flex',
            flexDirection:'column',
            gap:'4rem',
            alignItems:'center',
            justifyContent:'center',
            height:'20rem'}}>
        <div className='socials' style={{display:'flex',gap:'4rem'}}>
          <img src={github} alt="" />
          <img src={instagram} alt="" />
          <img src={linkedin} alt="" />
        </div>
      
        <div>
          <img style={{width:'10rem'}} src={logo} alt="" />
        </div>
      </div>
      <div className='blur blur-f1'></div>
      <div className='blur blur-f2'></div>
      
    </div>
  )
}

export default Footer