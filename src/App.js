import React from 'react';
import './App.css';
import {BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Home from './components/pages/Home.js';
import Products from './components/pages/Products';
import Navbar from './components/navbar/Navbar';




function App() {
  return (
    <>
    <Router>
        
        <Navbar />

        <Switch>
          <Route exact path='/' component={Home} />
          <Route exact path='/products' component={Products} />
        </Switch>
    </Router>
    </>
  );
}
export default App;
