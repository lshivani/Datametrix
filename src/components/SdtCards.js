import React from 'react'
import './SdtCards.css'

function SdtCards() {
  return (
    <div className='container' style={{marginTop:'30px'}}>
  <div className='row card-container'>
    <div className='col-md-4 card' style={{ width: '30%', margin: '0 auto' }}>
      <p>
        <img src="/images/icon-1.svg" className="card-img-top" alt="Image" />
       <strong> SeeTree X Dataloop
        <p className='card-description' style={{marginLeft:'30px'}}>Case Study</p></strong>
        <p>How SeeTree Optimizes Disease Detection with AI Data Management</p>
      </p>
      <p className='card-link'>Learn More <i className="fas fa-arrow-right"></i></p>
    </div>
    <div className='col-md-4 card' style={{ width: '30%', margin: '0 auto' }}>
      <p>
        <img src="/images/icon-3.svg" className="card-img-top" alt="Image" />
        <strong> Dataloops - a Book
        <p className='card-description'  style={{marginLeft:'30px'}}>by Eran Shlomo</p></strong>
        <p>Dive into the first chapter of our CEO’s book and get a deeper understanding of the data principles behind AI.</p>
      </p>
      <p className='card-link'>Learn More <i className="fas fa-arrow-right"></i></p>
    </div>
    <div className='col-md-4 card' style={{ width: '30%', margin: '0 auto' }}>
      <p>
        <img src="/images/icon-2.svg" className="card-img-top" alt="Image" />
        <strong> Teaching Machines
        <p className='card-description'  style={{marginLeft:'30px'}}>to Learn Like <br/>Humans</p></strong>
        <p>the first part of our “Computer Vision Use Case Breakdown series”</p>
      </p>
      <p className='card-link'>Learn More <i className="fas fa-arrow-right"></i></p>
    </div>
  </div>
</div>

  )
}

export default SdtCards
