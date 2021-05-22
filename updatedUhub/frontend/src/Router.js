import React from 'react'
import { BrowserRouter, Switch, Route } from "react-router-dom";
import Home from './core/Home';
const Router =()=> (
   <BrowserRouter>
       <Route path="/" exact component={Home} />
   </BrowserRouter>
)


export default Router
