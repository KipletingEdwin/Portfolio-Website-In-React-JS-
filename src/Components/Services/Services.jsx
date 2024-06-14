import React from 'react'
import './Services.css'
import theme_pattern from '../../assets/assets/theme_pattern.svg'

export const Services = () => {
  return (
    <div className='services'>
        <div className="services-title">
            <h1>My Services</h1>
            <img src={theme_pattern} alt='services' />
        </div>
    </div>
  )
}
