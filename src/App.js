import React from 'react';
import './App.css';
import {BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Home from './components/pages/home/Home.jsx';
import Products from './components/pages/products/Products.jsx';
import Contact from './components/pages/contact/contact.component.jsx'
import Navbar from './components/navbar/Navbar.jsx';
import Jazz from './components/pages/products/jazz/jazz';
import Bass from './components/pages/products/bass/bass';
import Nylonstrings from './components/pages/products/nylonstrings/nylonstrings';





function App() {
  return (
    <>
    <Router basename='/guitarras-jimenez'>
        
        <Navbar />

        <Switch>
          <Route exact path='/' component={Home} />
          <Route exact path='/products' component={Products} />
          <Route exact path='/jazz' component={Jazz} />
          <Route exact path='/bass' component={Bass} />
          <Route exact path='/nylonstrings' component={Nylonstrings} />
          <Route exact path='/contact' component={Contact} />

        </Switch>
    </Router>
    </>
  );
}
export default App;
