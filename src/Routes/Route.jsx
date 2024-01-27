import React, { Fragment } from 'react'
import { Route,Routes } from 'react-router';
import Home from '../Pages/Home';

const Router = () => {
  return <Fragment>
    <Routes>
        <Route path="/" exact element={<Home/>}/>
    </Routes>


  </Fragment>
}

export default Router;