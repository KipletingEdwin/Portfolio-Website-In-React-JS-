import React from 'react'
import './About.css'
import theme_pattern from '../../assets/assets/theme_pattern.svg'
import profile_img from '../../assets/assets/about_profile.svg'

const About = () => {
  return (
    <div className='about' id='about'>
        <div className="about-title">
            <h1>About Me</h1>
            <img src={theme_pattern} alt='theme-pattern'  />
        </div>
        <div className="about-sections">
            <div className="about-left">
                <img src={profile_img} alt='profile' />
            </div>
            <div className="about-right">
                <div className="about-para">
                    <p> I am an experienced Frontend Developer with over a decade of proffesional expertise in that field. Throughtout my career, I have had the privilege of collaborating with prestigious organizations,contributing to their sucess and growth. </p>
                    <p> My passion for the frontend development is not only reflected in my extensive experience but also in the enthusiamsm and dedication I bring o each project. </p>
                </div>
                <div className="about-skills">
                    <div className="about-skill">
                        <p> HTML & CSS </p><hr style={{width:"50%"}} /> 
                    </div>

                       <div className="about-skill">
                        <p> React JS </p><hr style={{width:"70%"}} /> 
                    </div>

                       <div className="about-skill">
                        <p> JavaScript </p><hr style={{width:"60%"}} /> 
                    </div>

                       <div className="about-skill">
                        <p> Ruby on Rails </p><hr style={{width:"75%"}} /> 
                    </div>
                </div>
            </div>
        </div>
        <div className="about-achievements">
            <div className="about-achievement">
                <h1> 10+ </h1>
                <p> YEARS OF EXPERIENCE </p>
            </div>
            <hr />

            <div className="about-achievement">
                <h1> 90+ </h1>
                <p> PROJECTS COMPLETED</p>
            </div>
            <hr />

            <div className="about-achievement">
                <h1> 15+ </h1>
                <p> HAPPY CLIENTS </p>
            </div>


        </div>
    </div>
  )
}

export default About