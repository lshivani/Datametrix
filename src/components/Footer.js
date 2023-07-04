import React from 'react'
import './Footer.css'
import {TiSocialLinkedinCircular} from 'react-icons/ti'
import{SiYoutube,SiGithub} from 'react-icons/si'


export default function Footer() {
  return (
    <div>
      <div className='container-fluid' style={{marginTop:'30px'}} id='bg'>
        <div className='row'>
            <div className='col-md-1'>

            </div>
            <div className='col-md-2'>
                <h4>Platform</h4>
                Annotation Platform<br/>
                Data Mmanagement<br/>
                Production Pipelines<br/>
                Enterprise<br/>
            </div><br/>

            <div className='col-md-2'>
                <h4>Industies</h4>
                Retail<br/>
                Drones & Aerial Imagery<br/>
                Robotics<br/>
                Autonomous Vehicles<br/>
                Precision Agriculture<br/>
                Media & Content<br/>
            </div><br/>

            <div className='col-md-2'>
                <h4>Developers</h4>
                Documentation<br/>
                SDK<br/>
                API<br/>
            </div><br/>

            <div className='col-md-2'>
                <h4>Company</h4>
                About Us<br/>
                News<br/>
                Careers<br/>
                Partners<br/>
                Contact Us<br/>
                Request a demo<br/>
            </div><br/>

            <div className='col-md-2'>
                <h4>Resources</h4>
                Resources<br/>
                Blog<br/>
                Videos<br/>
                Case studies<br/>
                Status<br/>
                <br/>
                <br/>
                <br/>
              
                <h6>Social</h6>
                <TiSocialLinkedinCircular className='i'/>
                <SiYoutube className='i'/>
                <SiGithub className='i'/>
            </div>
            
            <div style={{paddingLeft:"38%", marginTop:'10px'}}> 
            <img id="img1" width="90px" height="60" src="https://dataloop.ai/wp-content/uploads/2022/01/gdpr.svg" ></img>
            <img id="img2" width="90" height="60"  style={{paddingRight:"20px" ,paddingLeft:"-20px"}} src="https://dataloop.ai/wp-content/uploads/2022/01/SOC2-Type-I.svg" ></img>
           <img id="img3" width="90" height="60" style={{paddingRight:"30px",paddingLeft:"-40%"}} src="https://dataloop.ai/wp-content/uploads/2022/01/ISO-27001.svg"  ></img>
           </div>
            </div>
            <hr></hr>
            <p>Datametrix Ltd.2023<span  style={{marginLeft:'700px'}}></span>
            Terms of use & Privacy Policy</p>
            <br/>
            
        </div>

      </div>
    
  )
}
