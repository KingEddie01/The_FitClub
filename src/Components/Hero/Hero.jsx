import React from 'react'
import Header from '../Header/Header'
import './Hero.css'
import hero_image from '../../assets/hero_image.png'
import hero_image_back from "../../assets/hero_image_back.png";
import heart from '../../assets/heart.png';
import calories from '../../assets/calories.png'
import { motion }  from 'framer-motion'

const Hero = () => {
  const transition = {type:'spring', duration : 3}
  return (
    <div id='hero' style={{display:'flex',justifyContent:'space-between'}}>
      <div className='blur hero-blur'></div>
      <div style={{padding:'2rem',paddingTop:'1.5rem',flex:3,display:'flex',gap:'2rem',flexDirection:'column'}}>
       <Header/>
       <div className='the-best' style={{backgroundColor:'#363d42',
       marginTop:'4rem',
       width:'fit-content',
       borderRadius:'4rem',
       padding:'20px 13px', 
       textTransform:'uppercase',
       color:'white',
       position:'relative',
       display:'flex',
       alignItems:'center',
       justifyContent:'flex-start'
       }}>
       <motion.div
        initial={{left:'238px'}}
        whileInView={{left: '8px'}}
        transition = {{...transition, type:'tween'}}
       >
          
       </motion.div>
       <span>The Best Fitness Club in Town</span>
       </div>
       <div style={{display:'flex', 
            flexDirection:'column',
            textTransform:'uppercase',
            gap:'1.5rem',
            fontSize:'4.5rem',
            fontWeight:'bold',
            textOverflow:'inherit',
            color:'white'}}>
        <div>
          <span className='stroke-text'>Shape </span>
          <span>Your</span>
        </div>
        <div>
          <span>Ideal body</span>
        </div>
        <div style={{fontSize:'1rem',fontWeight:200,textTransform:'none',letterSpacing:'1px',width:'80%'}}>
          <span>
            In here we will help you build your ideal body and 
            live up your life tothe fullest
          </span>
        </div>
       </div>
       
       
        <div className='figure' style={{display:'flex', gap:'2rem'}}>
          <div>
            <span>+140</span>
            <span>Expert Coaches</span>
          </div>
          <div>
            <span>+978 </span>
            <span>members joined</span>
          </div>
          <div>
            <span>+50</span>
            <span>fitness programs</span>
          </div>
        </div>

        <div className='hero-button' style={{display:'flex',gap:'2rem',fontWeight:'normal'}}>
          <button className='btn'>Get Started</button>
          <button className='btn'>Learn more</button>
        </div>
      </div>
      <div  className='heart-rate' style={{flex:1,backgroundColor:'orange',position:'relative'}}>
       <button className='btn' style={{position:'absolute',top:'2rem', right:'3rem',color:'black'}}>Join Now</button>
       
       <motion.div className='heartrate'
          initial={{right: "-1rem"}}
          whileInView={{right:'4rem'}}
          transition={transition}
       >
       
        <img style={{width:'2rem'}} src={heart} alt="heart" />
        <span style={{color:'grey'}}>Heart Rate</span>
        <span style={{color:'white',fontSize:'1.5rem'}}>116 bpm</span>
       </motion.div>

       <img src={hero_image} alt="image" style={{position:'absolute',top:'10rem',right:'17rem',width:'23rem'}}/>
       <motion.img 
          initial={{right:'11rem'}}
          whileInView={{right:'29rem'}}
          transition={transition}
       className='absolute-position' src={hero_image_back} alt="image" />
          
      <motion.div className='calory'
          initial={{right:'33rem'}}
          whileInView={{right:'40rem'}}
          transition={transition}
       >
        <img src={calories} alt="calory" style={{width:'3rem'}} />
        <div style={{display:'flex',flexDirection:'column',justifyContent:'space-between'}}>
          <span style={{color:'#464D53'}}>Calories Burnt</span>
          <span style={{color:'white',fontSize:'1.5rem'}}>220 kcal</span>
        </div>
      </motion.div>
      
      </div>
    </div>
  )
}

export default Hero