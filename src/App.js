import React, { Suspense, lazy } from 'react';
import './App.scss';
import {BrowserRouter as Router, Switch, Route } from 'react-router-dom';

import { ScrollService } from './services/scrollService.component';
import Loading from './components/loading/loading.component'

const Header = lazy(() => import('./components/header/header.component.jsx'));
const Footer = lazy(() => import('./components/footer/footer.component.jsx'));

const Home = lazy(() => import('./pages/home/home.component.jsx'));
const Products = lazy(() => import('./pages/products/products.component.jsx'));
const Jazz = lazy(() => import('./pages/products/jazz/jazz'));
const Bass = lazy(() => import('./pages/products/bass/bass'));
const ItemPage = lazy(() => import('./pages/products/item-page/item-page.component'));


function App() {
  return (
    <>
    <Router basename='/guitarras-jimenez'>
        
        <ScrollService>
          <Suspense fallback={<Loading />}>
            <Header />
              <Switch>
                <Route exact path='/' component={Home} />
                <Route exact path='/products' component={Products} />
                <Route exact path='/jazz' component={Jazz} />
                <Route exact path='/bass' component={Bass} />
                <Route exact path='/item-page' component={ItemPage} />
              </Switch>
              <Footer />
          </Suspense>
        </ScrollService>
    </Router>
    </>
  );
}
export default App;
