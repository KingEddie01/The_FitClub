import React from 'react'
import {programsData} from '../../data/programsData';
import RightArrow from '../../assets/rightArrow.png'
import './Program.css'

const Program = () => {
  return (
    <div id='program' style={{display:'flex',flexDirection:'column',gap:'2rem',padding:'0 2rem'}}>
      <div style={{display:'flex',
            gap:'5rem',
            fontWeight:'bold',
            fontSize:'3rem',
            justifyContent:'center',
            color:'white',
            textTransform:'uppercase',
            fontStyle:'italic'}}>
        <span className='stroke-text'>Explore our</span>
        <span>Programs</span>
        <span className='stroke-text'>to shape you</span>
      </div>

      <div style={{display:'flex', gap:'1rem'}}>
        {programsData.map((program,index)=>(
          <div className='category'key={index}>
            {program.image}
            <span>{program.heading}</span>
            <span>{program.details}</span>
            <div style={{display:'flex',alignItems:'center',gap:'2rem'}}>
              <span>Join now</span><img style={{width:'1rem'}} src={RightArrow} alt="rightarrow" />
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}

export default Program