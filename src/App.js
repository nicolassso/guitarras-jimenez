import React from 'react';
import './App.css';
import {BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Home from './components/pages/Home.jsx';
import Products from './components/pages/Products.jsx';
import Navbar from './components/navbar/Navbar.jsx';




function App() {
  return (
    <>
    <Router basename='/guitarras-jimenez'>
        
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
