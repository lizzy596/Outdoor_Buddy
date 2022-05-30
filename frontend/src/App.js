import React from 'react'
import NavBar from './Components/NavBar/NavBar'
import Home from './Components/Home/Home'
import Auth from './Components/Auth/Auth'
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import {Helmet} from "react-helmet";





const App = () => {

 


  return (
   <BrowserRouter>
    <Helmet>
        <title>OutDoor Buddy</title>
        <meta name="description" content="weather and pollen app" />
    </Helmet>
      <NavBar />

   <Routes>
   <Route path="/" element={<Home />} />
   <Route path="/auth" element={<Auth />} />
   
  
   </Routes> 
   </BrowserRouter>
   
   
   

 
   
    
    
    
    
  )
}

export default App
