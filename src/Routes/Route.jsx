import React, { Fragment } from 'react'
import { Route,Routes } from 'react-router';
import Home from '../Pages/Home';
import About from '../Pages/About';

const Router = () => {
  return <Fragment>
    
    <Routes>
        <Route path="/" exact element={<Home/>}/>
        <Route path="/about"  element={<About/>}/>
    </Routes>


  </Fragment>
}

export default Router;