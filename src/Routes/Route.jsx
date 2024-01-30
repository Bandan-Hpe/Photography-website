import React, { Fragment } from 'react'
import { Route,Routes } from 'react-router';
import Home from '../Pages/Home';
import About from '../Pages/About';
import Portfolio from '../Pages/Portfolio';
import Contact from '../Pages/Contact';


const Router = () => {
  return <Fragment>
    
    <Routes>
        <Route path="/" exact element={<Home/>}/>
        <Route path="/about"  element={<About/>}/>
        <Route path="/gallery" element={<Portfolio/>}/>
        <Route path="/contact" element={<Contact/>}/>
    </Routes>


  </Fragment>
}

export default Router;