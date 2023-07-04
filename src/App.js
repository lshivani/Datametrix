//import React, { useEffect, useState } from 'react'
import {Component} from 'react'
import {BrowserRouter, Route, Routes, Navigate} from 'react-router-dom'
import Body from './components/Body'
import About from './components/About'


import Header from './components/Header'



  class App extends Component {
    
  
    render() {
      
  return (
    <BrowserRouter>
    
      <Routes>
          <Route path='/Header' Component={Header}/>
          <Route path='/' Component={Body}/>
          <Route path='/About' Component={About}/>
         
          
      </Routes>
      
      
    
    </BrowserRouter>
  )
}
  }
export default App