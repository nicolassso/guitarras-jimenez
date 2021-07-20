import React from 'react';
import './App.css';
import {BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Home from './components/pages/Home.js';
import Services from './components/pages/Services.js';
import Products from './components/pages/Products';
import SignUp from './components/pages/SignUp.js';




function App() {
  return (
    <>
    <Router>
        <Switch>
          <Route exact path='/guitarras-jimenez' exact component={Home}/>
          <Route path="/services" component={Services}/>
          <Route path="/products" component={Products}/>
          <Route path="/sign-up" component={SignUp}/>
        </Switch>
    </Router>
    </>
  );
}
export default App;
