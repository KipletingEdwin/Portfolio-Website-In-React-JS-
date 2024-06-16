import React from 'react'
import './MyWork.css'
import theme_pattern from '../../assets/assets/theme_pattern.svg'
import mywork_data from '../../Data/work.json'
import arrow_icon from '../../assets/assets/arrow_icon.svg'



export const MyWork = () => {
  return (
    <div className='myWork'>
        <div className="myWork-title">
            <h1>My Latest Work</h1>
            <img src={theme_pattern} alt='work' />
        </div>
        <div className="myWork-container">
            {
                mywork_data.map((work, index)=>{
                    return <img key={index} src={work.w_img} alt={work.w_name} />
                })
            }
        </div>
        <div className="mywork-showmore">
            <p>Show More</p>
        <img src={arrow_icon} alt='arrow-icon' />
        </div>

        
     </div>
  )
}
