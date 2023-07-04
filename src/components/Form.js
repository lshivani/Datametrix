import React from 'react'
import './Form.css'
import {Card, CardBody} from 'reactstrap'

export default function Form() {
  return (
    <div className='container' style={{marginTop:'30px'}}>
    <div className='row' >
      <div className='col-md-6' style={{backgroundColor:'#abb8c3'}}>
        <br/>
        <br/>
        <br/>
        <br/>
          <h5><p>
          <img src='/images/tick1.jpg'style={{width:'50px',height:'50px',marginLeft:'15px'}}/>&nbsp;&nbsp;
          Learn how to build and deploy<br/>&nbsp;&nbsp;
          powerful computer vision <br/>&nbsp;&nbsp;
          pipelines
          </p>
          </h5>
          <br/>

          <h5>
          <p><img src='/images/tick1.jpg'style={{width:'50px',height:'50px',marginLeft:'15px'}}/>&nbsp;&nbsp;
          Get a full overview of the Data<br/>&nbsp;&nbsp;
          Management and Annotation <br/>&nbsp;&nbsp;
          Studio platform
          </p>
          </h5>
          <br/>
        
          <h5><p>
          <img src='/images/tick1.jpg'style={{width:'50px',height:'50px',marginLeft:'15px'}}/>&nbsp;&nbsp;
          Discover how to accelerate your <br/>&nbsp;&nbsp;
          data pipelines with Python SDK <br/>&nbsp;&nbsp;
          or REST API integrations
          </p>
          </h5>
          <br/>
          <br/>
          <img src ='/images/circle-yellow.png' style={{marginLeft:'30px',marginTop:'260px',width:'23%'}}/>
       
      </div>

  <div className='col-md-6'>
  <Card >
    <CardBody>
    {/* <CardTitle tag="h1" className="text-center">Book Demo</CardTitle> */}
  
  <form>
  <div class="form-outline mb-4">
   <h2>Book Demo</h2><br/>
    {/* <label class="form-label" for="form4Example1">FirstName</label> */}
    <input type="text" id="form4Example1" class="form-control form-control-lg" placeholder='FirstName' />
  </div>

  <div class="form-outline mb-4">
  {/* <label class="form-label" for="form4Example1">LastName</label> */}
    <input type="text" id="form4Example1" class="form-control form-control-lg" placeholder='LastName'/>
  </div>

  <div class="form-outline mb-4">
    {/* <label class="form-label" for="form4Example2">Business Email</label> */}
    <input type="email" id="form4Example2" class="form-control form-control-lg"  placeholder='Business Email'/> 
  </div>

  <div class="form-outline mb-4">
  {/* <label class="form-label" for="form4Example1">Phone Number</label> */}
    <input type="number" id="form4Example1" class="form-control form-control-lg" placeholder='Phone Number' />
  </div>

  <div class="form-outline mb-4">
  {/* <label class="form-label" for="form4Example1">Company Name</label> */}
    <input type="text" id="form4Example1" class="form-control form-control-lg" placeholder='Comapany Name' />
  </div>

  <div class="form-outline mb-4">
    {/* <label class="form-label" for="form4Example3">How Did You Hear About Us </label> */}
    <textarea class="form-control form-control-lg" id="form4Example3" rows="4" placeholder='How Did You Hear About Us'></textarea> 
  </div>

  <div class="form-check d-flex justify-content-center mb-4">
    <input class="form-check-input me-2" type="checkbox" value="" id="form4Example4" />
    <label class="form-check-label" for="form4Example4" >
      consent to processing<br/>
      I consent that my data be processed in order to allow us to fulfill your 
      request and enhance your experience with our company
    </label>
  </div>
  <center><button type="submit" class="btn btn-primary btn-block mb-4" id='button'>Iam Ready</button></center>
</form>
</CardBody>
  </Card>
  </div>
</div>
</div>
  )
}
