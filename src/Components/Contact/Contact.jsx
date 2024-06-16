import React from 'react'
import './Contact.css'
import theme_pattern from '../../assets/assets/theme_pattern.svg'
import mail_icon from '../../assets/assets/mail_icon.svg'
import location_icon from '../../assets/assets/location_icon.svg'
import call_icon from '../../assets/assets/call_icon.svg'



const Contact = () => {
  return (
    <div className='contact'>
    <div className="contact-title">
    <h1> Get in touch</h1>
    <img src={theme_pattern} alt='contact' />
    </div>
    <div className="contact-section">
        <div className="contact-left">
            <h1>Let's talk</h1>
            <p>I'm currently available to take on new projects,</p>
            <div className="contact-details">
                <div className="contact-detail">
                    <img src={mail_icon} alt='mail' /><p>greatstackdev@gmail.com</p>

                </div>
                <div className="contact-detail">
                <img src={call_icon} alt='mail' /><p> +772-825-524</p>
                    
                    </div>
                    <div className="contact-detail">
                    <img src={location_icon} alt='mail' /><p> CA,United States</p>
                    
                    </div>
            </div>
        </div>
    </div>

    </div> 
    
  )
}

export default Contact