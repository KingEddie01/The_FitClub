import React from 'react'
import {plansData} from '../../data/plansData'
import whiteThick from '../../assets/whiteTick.png'
import './Plan.css'

const Plan = () => {
  return (
    <div id='plan' style={{marginTop:'-4rem',
    padding:'0 2rem',
    display:'flex',
    flexDirection:'column',
    gap:'4rem',
    position:'relative'}}>
      <div className='blur plans-blur1'></div>
      <div className='blur plans-blur2'></div>
      <div style={{display:'flex',
          gap:'3rem',
          fontWeight:'bold',
          fontSize:'3rem',
          justifyContent:'center',
          color:'white',
          textTransform:'uppercase',
          fontStyle:'italic'
          }}>
        <span className='stroke-text'>READY TO START</span>
        <span>YOUR JOURNEY</span>
        <span className='stroke-text'>WITH US</span>
      </div>

      <div style={{display:'flex',alignItems:'center',justifyContent:'center',gap:'3rem'}}>
        {plansData.map((plan,index)=>(
          <div className='plan' key={index} >
            {plan.icon}
            <span>{plan.name}</span>
            <span style={{fontSize:'3rem',fontWeight:'bold'}}>${plan.price}</span>

            <div style={{display:'flex',flexDirection:'column',gap:'1rem'}}>
              {plan.features.map((feature,index)=>(
                <div className='feature' key={index}>
                  <img src={whiteThick} alt="" />
                  <span key={index}>{feature}</span>
                </div>
              ))}
            </div>
            <div>
              <span>See more benefits -> </span>
            </div>
            <button className='btn'>Join now</button>

          </div>
        ))}

      </div>


    </div>
    
  )
}

export default Plan