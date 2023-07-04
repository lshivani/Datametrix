import React from 'react'
import './CompanyT.css'
import { Link } from 'react-router-dom'

const CompanyT = () => {
  return (
    <div className='companyt'>
     <div className='companyt__in'>
        <Link to='/about'style={{marginBottom:'5px'}} >About</Link>
         {/* <link to="/aboutus" className='aboutus'>Aboutus</link>  */}
        </div> 
     <div className='companyt__in'>
        <p>News</p>

        </div> 
     <div className='companyt__in'>
        <p>Careers</p>
        </div> 
     <div className='companyt__in'>
        <p>Become a Partner</p>
        </div> 
     <div className='companyt__in'>
        <p> Contact us</p>
        </div> 
     <div className='companyt__in'>
        <p>Request a demo</p>
        </div> 
    </div>
  )
}

export default CompanyT
