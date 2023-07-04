import React, { useState,useEffect } from 'react'
import Header from './Header'
import './body.css'
import { Container, Row, Col } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import {Card, CardBody, CardTitle} from 'reactstrap';
import SdtCards from './SdtCards';
import Smart from './Smart';
import Form from './Form';
import BlueContent from './BlueContent';
import Footer from './Footer';
import Power from './Power';
import { faArrowRight} from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import Slideshow2 from './Slideshow2';


function Body() {
  const [activeHeader, setActiveHeader] = useState(''); 

  const handleHeaderClick = (header) => {
    setActiveHeader(activeHeader === header ? null : header);
  };

  useEffect(() => {
    const slideDownCard = () => {
      setActiveHeader('dataManagement');
    };

    // Automatically slide down the card after 5 seconds
    const timer = setTimeout(slideDownCard, 1000);

    return () => clearTimeout(timer);
  }, [])
  return (
    
    <><Header />
 <div className="container">
        <div className="row">
          <div className="col-md-6">
            <div  style={{marginRight:'10px'}}>
            <p style={{fontSize:'40px'}}><strong><b>The Data <br/>Engine For AI</b></strong></p>
           
            <p>Covering the entire data management cycle, from data labeling, automating data<br/>
             ops, deploying production <br/>
             pipelines, and weaving the human-in-the-loop.</p>
            <button type="button" className="logout-desktop-btn" id='btn'>
            Book A Demo
          </button>&nbsp;&nbsp;
          <button type="button" className="logout-desktop-btn" id='btn1'>
            Get Started For Free
          </button>
          </div>
          </div>

          {/* ------------------------------------------------------------------------------------ */}

          <div className="col-md-5" style={{marginTop:'80px', marginLeft:'60px'}}>
          <div className="other-div card " style={{width:'400px' }} >
          <div 
            className={`header-container ${activeHeader === 'dataManagement' ? 'active' : ''}`}
            onClick={() => handleHeaderClick('dataManagement')}
          >
            <img src='/images/icon-1.svg' alt="Logo" className="logo" />
            <h5>DATA MANAGEMENT</h5>
          </div>
          {activeHeader === 'dataManagement' && (
            <p>
              Manage, collaborate, distribute and utilize your<br></br> data operations,
              all integrated seamlessly and<br></br> managed via single point of access
           
            <div className="learn-more-container">
            <p className="p2">Learn More <FontAwesomeIcon icon={faArrowRight}/></p>
          </div> </p>
          )}
          
        </div>

          <div className="other-div2 card" style={{width:'400px'}} id='d'>
          <div 
            className={`header-container ${activeHeader === 'automationPipelines' ? 'active' : ''}`}
            onClick={() => handleHeaderClick('automationPipelines')}
          >
            <img src='/images/icon-3.svg' alt="Logo" className="logo"  />
            <h5>AUTOMATION PIPELINES</h5>
          </div>
          {activeHeader === 'automationPipelines' && (
            <p>
              Build custom automation pipelines<br></br> within our serverless environment, to<br></br> reach production faster and<br></br> scale your AI indefinitely
              <div className="learn-more-container">
            <p className="p2">Learn More <i className="fas fa-arrow-right"></i></p>
          </div>
            </p>
          )}
          
        </div>

        <div className="other-div1 card" style={{width:'400px'}} id='d'>
          <div 
              className={`header-container ${activeHeader === 'annotationPlatform' ? 'active' : ''}`}
            onClick={() => handleHeaderClick('annotationPlatform')}
          >
            <img src='/images/icon-2.svg' alt="Logo" className="logo" id='i' />
            <h5>ANNOTATION PLATFORM</h5>
          </div>
          {activeHeader === 'annotationPlatform' && (
            <p>
              An end-to-end, cloud-based annotation<br></br> platform, hosting multitude applications<br></br> and automation tools to produce <br></br>high-quality datasets more efficiently
              
              <div className="learn-more-container" >
            <p className="p2">Learn More <FontAwesomeIcon icon={faArrowRight}/></p>
          </div>
            </p>
          )}
        </div>
      </div>
      </div>
      </div>
{/* ------------------------------------------------------------------------------ */}
      <br></br><br></br><br></br>
      <div className="container">
        <div className="row">
          <div className="col-md-1" >
          <img src="/images/green-thingy.png" alt="Image" style={{width:'120px'}} />
          </div>
          <div className="col-md-10">
            <center><h2>Accelerating AI across all industries</h2>
            <p>Specializing in high volumes, high variance and complex data - we <br/>help a wide range of AI teams automate their data management</p>
            </center></div>
          <div className="col-md-1" >
            <img src="/images/circle-yellow.png" alt="Image" style={{width:'120px'}}/>
          </div>
        </div>
      </div>

      <div className="container">
  <div className="row">
    <div className="col-md-1"></div>
    <div className="col-md-10">
      <div className="row">
        <div className="col-md-4 mb-3">
        <img src="/images/retail1.jpg" className="card-img-top" alt="Image" style={{ width: '100%' }} />
          <div className="card" style={{ width: '100%', margin: '0 auto',height:'100px' }}>
            <div className="card-body">
              <p className="card-title">RETAIL</p>
              
            </div>
           
          </div>
        </div>
        <div className="col-md-4 mb-3">
        <img src="/images/drones-aerial.jpg" className="card-img-top" alt="Image" style={{ width: '100%' }} />
          <div className="card" style={{ width: '100%', margin: '0 auto' ,height:'100px'}}>
            <div className="card-body">
              <p className="card-title">DRONES & AERIAL IMAGERY</p>
              
            </div>
           
          </div>
        </div>
        <div className="col-md-4 mb-3">
        <img src="/images/Robotics1.jpg" className="card-img-top" alt="Image" style={{ width: '100%' }} />
          <div className="card" style={{ width: '100%', margin: '0 auto' ,height:'100px'}}>
            <div className="card-body">
              <p className="card-title">ROBOTICS</p>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div className="col-md-1"></div>
  </div>
</div>
<div className="container">
  <div className="row">
    <div className="col-md-1"></div>
    <div className="col-md-10">
      <div className="row">
        <div className="col-md-4 mb-3">
        <img src="/images/autonomous-vehicles1.jpg" className="card-img-top" alt="Image" style={{ width: '100%' }} />
          <div className="card" style={{ width: '100%', margin: '0 auto' }}>
            <div className="card-body">
              <h5 className="card-title">AUTONOMOUS VEHICLES</h5>
              
            </div>
           
          </div>
        </div>
        <div className="col-md-4 mb-3">
        <img src="/images/precision-agriculture1.jpg" className="card-img-top" alt="Image" style={{ width: '100%' }} />
          <div className="card" style={{ width: '100%', margin: '0 auto' }}>
            <div className="card-body">
              <h5 className="card-title">PRECISION AGRICULTURE</h5>
              
            </div>
           
          </div>
        </div>
        <div className="col-md-4 mb-3">
        <img src="/images/media-content1.jpg" className="card-img-top" alt="Image" style={{ width: '100%' }} />
          <div className="card" style={{ width: '100%', margin: '0 auto' }}>
            <div className="card-body">
              <h5 className="card-title">MEDIA & CONTENT</h5> 
            </div>
          </div>
        </div>
      </div>
    </div>
    <div>
  <BlueContent/>
</div>
<div>
  <Power/>
</div>
<br/>
<br/>
{/* --------------------------------------------------------------------------------------- */}
{/* <div className='container' style={{marginTop:'20px'}}>
  <div className='row' style={{marginTop:'50px'}} id='pic'>
<center style={{color:'grey'}}><h5>TRUSTED BY INDUSTRY LEADERS</h5></center>
<marquee behaviour='slide' direction='left'>
  <img src="/images/raven.png" alt="Image 1" style={{marginRight:'20px'}}/>
  <img src="/images/intel.png" alt="Image 2" style={{marginRight:'20px'}}/>
  <img src="/images/linkedin.png" alt="Image 3" style={{marginRight:'20px'}}/>
  <img src="/images/sartorius.png" alt="Image 4" style={{marginRight:'20px'}}/>
  <img src="/images/imerit.png" alt="Image 5" style={{marginRight:'20px',width:'30px'}}/>
</marquee>
</div>
</div> */}
<Slideshow2/>
<br/>
{/* --------------------------------------------- */}
<div className='Container' style={{marginTop:'40px'}}>
  <div className='row'>
    <div className='col-md-4'>
      <h1 style={{fontSize:'60px'}}><b>STANDARD</b></h1>
      <p style={{textAlign:'left'}}>
        “We love working with Dataloop; their data 
        management platform allows us to 
        simultaneously ensure multiple projects 
        are labeled, tasked and QA'd regardless of
        where our workforce is based.”</p>
        <div class='chip'>
        <p><img src="/images/paul.png"/>
         Paul Jacob
         Data Quality Program
         Manager
         </p>
        </div>
  </div>
  <div className='col-md-4'>
     <img src='/images/Foresight.svg' style={{marginLeft:'20px',width:'300px',marginTop:'20px'}}/>
      <p style={{textAlign:'left',marginTop:'80px'}}>
      “The team at Dataloop provide a powerful 
      platform with a suite of tools. Thanks to 
      Dataloop, we're able to successfully test 
      our algorithms and improve our ADAS and 
      autonomous driving features"</p><br/>
        <div class='chip'>
        <p><img src="/images/david.jpeg"/>
         David Lempert
         Head of R&D
         </p>
        </div>
  </div>
  <div className='col-md-4' style={{marginBottom:'30px'}}>
      <img src='/images/elbit.svg' style={{marginLeft:'20px'}}/>
      <p style={{textAlign:'left',marginTop:'100px'}}>
      “Data accuracy is critical to the 
      development of our autonomous systems.
       Dataloop provides our team with a 
       powerful and intuitive platform that allows 
       us to create top quality and accurate 
       datasets”</p>
        <div class='chip' >
        <p><img src="/images/Ido.png" />
        Ido Ariav
        Deep Learning Lead
         </p>
        </div>
  </div>
  </div>
</div>
<div>
  <Form/>
  </div>

{/* <div className='Container' style={{marginTop:'40px'}}>
  <div className='row'>
    <div className='col-md-4'>
      <h1 style={{fontSize:'80px'}}>STANDARD</h1>
      <p style={{textAlign:'left'}}>
        “We love working with Dataloop; their data 
        management platform allows us to 
        simultaneously ensure multiple projects 
        are labeled, tasked and QA'd regardless of
        where our workforce is based.”</p>
        <div class='chip'>
        <p><img src="/images/paul.png"/>
         Paul Jacob
         Data Quality Program
         Manager
         </p>
        </div>
  </div>
  <div className='col-md-4'>
      <h1 style={{fontSize:'80px'}}>FORESIGHT</h1>
      <p style={{textAlign:'left'}}>
      “The team at Dataloop provide a powerful 
      platform with a suite of tools. Thanks to 
      Dataloop, we're able to successfully test 
      our algorithms and improve our ADAS and 
      autonomous driving features"</p>
        <div class='chip'>
        <p><img src="/images/david.jpeg"/>
         David Lempert
         Head of R&D
         </p>
        </div>
  </div>
  <div className='col-md-4'>
      <img src='/images/elbit.svg' style={{marginLeft:'20px'}}/>
      <p style={{textAlign:'left',marginTop:'120px'}}>
      “Data accuracy is critical to the 
      development of our autonomous systems.
       Dataloop provides our team with a 
       powerful and intuitive platform that allows 
       us to create top quality and accurate 
       datasets”</p>
        <div class='chip'>
        <p><img src="/images/Ido.png"/>
        Ido Ariav
        Deep Learning Lead
         </p>
        </div>
  </div>

</div>
</div> */}
<div>
  <Smart/>
</div>

<SdtCards/>
</div>
<div>
  <Footer/>
</div>
</div>

  </>
  )
}
export default Body
