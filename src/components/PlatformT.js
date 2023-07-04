import React from 'react'
import './PlatformT.css'
import {FiShield} from 'react-icons/fi';

const PlatformT = () => {
  return (
    <div className='platformt'>
     <div className='platformt__in'>
      <h5>DATA MANAGEMENT</h5>
      <p>Manage & Control data Workflows</p>
     </div>
     
     <div className='platformt__in'>
      <h5>AUTOMATION PIPELINES</h5>
      <p>Run models in production</p>
     </div>
     
     <div className='platformt__in'>
      <h5>ANNOTATION PLATFORM</h5>
      <p>Generate training datasets</p>
     </div>
     <hr/>
     <div className='platformt__in'>
      <h5> <FiShield />  SECURITY</h5>
     </div>
     <div className='platformt__in'></div>
     
    </div>
  )
}

export default PlatformT
