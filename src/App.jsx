import { useState } from 'react'

import './App.css'
import ApiProducts from './Components/ApiProducts.jsx';
import Nav from './Components/Nav.jsx';
import HeroSection from './Components/HeroSection.jsx';

function App() {


  return (
    <>
    <Nav/>
    <HeroSection />
     <ApiProducts/>
          
    </>
  )
}

export default App
