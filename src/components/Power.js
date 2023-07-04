import React from 'react'
import { Link } from 'react-router-dom'
 import './Power.css'
import Slideshow from './Slideshow'
export default function Power() {
  return (
      <div className='container'>
        <div className='row' style={{marginRight:'20px'}}>
          
            <div className='col-md-4' style={{color:'blue'}}>
            <p style={{fontSize:'40px'}}><strong>POWERING AI TEAMS ACROSS <br/>THE GLOBE</strong></p>
            <p><h4>Helping companies create AI-driven<br/>
               products, from development to large-scale<br/> 
               production<br/><br/>
            <Link>See it in action </Link></h4></p>
            </div>

            <div className='col-md-4' >
            <p style={{fontSize:'60px',color:'red'}}><strong>70,000+</strong></p>
            <p style={{color:'blue',marginTop:'10px'}}>Pipelines cycles per month</p>
           
            <p style={{fontSize:'60px',color:'#00de93',marginTop:'20px'}}><strong>20,000+</strong></p>
            <p style={{color:'blue',marginTop:'10px'}}>Monthly SDK installs</p>
           
            <p style={{fontSize:'60px',color:'#ffd33a',marginTop:'20px'}}><strong>4,000+</strong></p>
            <p style={{color:'blue',marginTop:'10px'}}>Managed projects</p>
            </div>

{/* ----------------------------------------------------------------------------------------------------------- */}
            <div className='col-md-4' style={{marginTop:'100px'}}>
            {/* <marquee behaviour='slide' direction='up'>
           <img src="/images/Fall.png" alt="Image 1" style={{marginRight:'20px'}}/>
           <img src="/images/Spring.png" alt="Image 2" style={{marginRight:'20px'}}/>
           <img src="/images/Start.png" alt="Image 3" style={{marginRight:'20px'}}/>
           <img src="/images/Winter.png" alt="Image 4" style={{marginRight:'20px'}}/>
           <img src="/images/best.svg" alt="Image 5" style={{marginRight:'20px',height:'20px'}}/>
           </marquee> */}
           <Slideshow/>
            </div>
            </div>
        </div>
  )
}
