import React from 'react';
import './App.scss';
import {BrowserRouter as Router, Switch, Route } from 'react-router-dom';

import { ScrollService } from './services/scrollService.component';

import Home from './pages/home/home.component.jsx';
import Products from './pages/products/products.component.jsx';
import Contact from './pages/contact/contact.component.jsx'
import Jazz from './pages/products/jazz/jazz';
import Bass from './pages/products/bass/bass';
import Nylonstrings from './pages/products/nylonstrings/nylonstrings';

import Header from './components/header/header.component.jsx';
import Footer from './components/footer/footer.component.jsx'





function App() {
  return (
    <>
    <Router basename='/guitarras-jimenez'>
        
        <Header />
        <ScrollService>
        <Switch>
          <Route exact path='/' component={Home} />
          <Route exact path='/products' component={Products} />
          <Route exact path='/jazz' component={Jazz} />
          <Route exact path='/bass' component={Bass} />
          <Route exact path='/nylonstrings' component={Nylonstrings} />
          <Route exact path='/contact' component={Contact} />

        </Switch>
        </ScrollService>
        <Footer />
    </Router>
    </>
  );
}
export default App;
