import React from 'react';
import {MdOutlineLock} from 'react-icons/md';
import {FiShield} from 'react-icons/fi';
import {TiTickOutline} from 'react-icons/ti';
import {BsArrowRight} from 'react-icons/bs';
import './bluecontent.css';

const BlueContent = () => {
  return (
    <div className="container bluecontent "  style={{marginTop:'40px'}}>

        
            <div className='row '  >
                <div className='col-md-3'>
                </div>
                <div className='col-md-6'>
              <h2 style={{marginTop:'70px'}}>
                  Enterprise-grade data engine</h2>
                <p className='para'>Ensuring highest data standards that serve your entire data organization, 
                allowing cross-<br/>functional collaboration while keeping your data access internal</p>
                
                </div>
                <div className='col-md-3'></div>

        
        
        </div>   
        <div className='row' style={{marginTop:'30px'}}>
  <div className='col-md-2'>
    
  </div>
  <div className='col-md-8 mb-3' style={{ display: 'flex', justifyContent: 'space-between' }}>
  <div style={{ display: 'flex', flexDirection: 'column', marginRight: '20px' }}>
        <center style={{marginRight:'100px',fontSize:'30px'}}><MdOutlineLock /></center>
    <h4 style={{marginLeft:'30px'}}>PRIVACY</h4>
    <p>Custom authentication and role<br />permission enforcement. Using<br />advanced Kubernetes-powered<br />infrastructure for on-premises or private<br />storage deployments</p>
  </div>

  <div style={{ display: 'flex', flexDirection: 'column', marginRight: '20px' }}>
    <FiShield />
    <h4 style={{marginLeft:'30px'}}>SECURITY</h4>
    <p>Full encryption to keep your data<br />constantly safe, compliant with military-<br />grade security standards and certified by<br />comprehensive system audits</p>
  </div>

  <div style={{ display: 'flex', flexDirection: 'column' }}>
    <TiTickOutline />
    <h4 style={{marginLeft:'30px'}}>SCALABILITY</h4>
    <p>High performance for large volumes of<br />data with 99.9% uptime SLA, providing<br />auto-scaling infrastructure that supports<br />your ever-growing data operations</p>
  </div>
</div>

  
  <div className='col-md-2'>
   
  </div>
  <div className='row'>
  <center><p style={{fontSize:'15px'}}>Explore our enterprise solutions <BsArrowRight ></BsArrowRight></p></center>
  </div>
</div>

</div>
  
    
  )
}

export default BlueContent