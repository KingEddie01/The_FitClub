import React, { useRef } from 'react'
import './Join.css'
import emailjs from '@emailjs/browser'

const Join = () => {
  const form = useRef();
  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm('service_gpmlm3f', 'template_ycjw2ed', form.current, {
        publicKey: 'dwMzXONNRLH2nD7zi',
      })
      .then(
        () => {
          console.log('SUCCESS!');
        },
        (error) => {
          console.log('FAILED...', error.text);
        },
      );
  };
  return (
    <div style={{display:'flex',padding:'0 2rem',gap:'10rem'}}>
      <div style={{color:'white',
            fontSize:'3rem',
            fontWeight:'bold',
            textTransform:'uppercase',
            position:'relative'}}>
              <hr style={{position:'absolute',
                    width:'10.5rem',
                    border:'3px solid orange',
                    borderRadius:'40%',
                    margin:'-10px 0'}}/>
        <div>
          <span className='stroke-text'>READY TO</span>
          <span> LEVEL UP</span>
        </div>
        <div>
          <span>YOUR BODY</span>
          <span className='stroke-text'> WITH US?</span>
        </div>
      </div>
      
    <div style={{display:'flex',justifyContent:'center',alignItems:'flex-end'}}>
      <form 
          ref={form} className='emailContainer'
          style={{display:'flex',
          gap:'3rem',
          backgroundColor:'grey',
          padding:'1rem 2rem'}}
          onSubmit={sendEmail}>
        <input type="email" name='user_email' placeholder='Enter your Email address'/>
        <button className='btn' style={{backgroundColor:'orange',color:'white'}}>Join Now</button>
      </form>
    </div>
    
    </div>
  )
}

export default Join