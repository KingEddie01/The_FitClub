import React from 'react'
import image1 from '../../assets/image1.png';
import image2 from '../../assets/image2.png';
import image3 from '../../assets/image3.png';
import image4 from '../../assets/image4.png';
import nb from '../../assets/nb.png';
import adidas from '../../assets/adidas.png';
import nike from '../../assets/nike.png';
import tick from '../../assets/tick.png';
import './Reason.css'


const Reason = () => {
  return (
    <div style={{padding:'0 2rem',display:'flex',gap:'2rem'}}>
      <div className='leftReason' >
        <img src={image1} alt="image1" />
        <img src={image2} alt="image2" />
        <img src={image3} alt="image3" />
        <img src={image4} alt="image4" />
      </div>
    <div className='rightReason' style={{textTransform:'uppercase',display:'flex',flexDirection:'column',gap:'1rem'}}>
      <span>some reasons</span>
      
      <div>
        <span className='stroke-text'>why</span>
        <span> choose us?</span>
      </div>
      
      <div className='details' style={{display:'flex',flexDirection:'column',gap:'1rem'}}>
          <div>
            <img src={tick} alt=""/>
            <span>OVER 140+ EXPERT COACHES</span>
          </div>
          
          <div>
            <img src={tick} alt="" />
            <span>TRAIN SMARTER AND FASTER THAN BEFORE</span>
          </div>
          
          <div>
            <img src={tick} alt="" />
            <span>1 FREE PROGRAM FOR NEW MEMBER</span>
          </div>
        
          <div>
            <img src={tick} alt="" />
            <span>RELABLE PARTNERS</span>
          </div>

      </div>
          <span style={{color:'gray',fontWeight:'normal'}}>OUR PARTNERS</span>

          <div className='partners' style={{display:'flex',gap:'1rem'}}>
            <img src={nb} alt="" />
            <img src={adidas} alt="" />
            <img src={nike} alt="" />
          </div>
      
    </div>

    </div>
    
   
  )
}

export default Reason