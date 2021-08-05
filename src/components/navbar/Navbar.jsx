import React, { useState, useEffect } from 'react';
import { Link, Router } from 'react-router-dom';
import './Navbar.scss';
import Logo from '../../images/logo-navbar.PNG'

function Navbar() {
  const [click, setClick] = useState(false);
  const [button, setButton] = useState(true);

  const handleClick = () => setClick(!click);
  const closeMobileMenu = () => setClick(false);

  const showButton = () => {
    if (window.innerWidth <= 960) {
      setButton(false);
    } else {
      setButton(true);
    }
  };

  useEffect(() => {
    showButton();
  }, []);

  window.addEventListener('resize', showButton);


  const scrollView = () => {
    document.getElementById("nuestras-guitarras").scrollIntoView(true);
  }

  return (
    <>
      <nav className='navbar active'>
        <div className='navbar-container'>              
          <div className='menu-icon' onClick={handleClick}>
            <i className={click ? 'fas fa-times' : 'fas fa-bars'} />
          </div>
          <div className="section-left">
            <ul className={click ? 'nav-menu active' : 'nav-menu'}>
            <li className='nav-item active'>
                <Link 
                  to='/products' 
                  className='nav-links' 
                  onClick={closeMobileMenu}>
                  Guitars & Bass                  
                </Link>
                <ul className="dropdown-menu">
                    <li className="nav-item active dropdown-item">
                      <Link 
                        to='/jazz'>
                        Jazz                  
                      </Link>
                    </li>
                    <li className="nav-item active dropdown-item">
                      <Link 
                        to='/bass'>
                        Basses                  
                      </Link>
                    </li>
                    <li className="nav-item active dropdown-item">
                      <Link 
                        to='/nylonstrings'>
                        Nylon Strings                  
                      </Link>
                    </li>
                  </ul>
              </li>
              <li className='nav-item active'>
                <Link
                  to='/'
                  href={scrollView}
                  className='nav-links'
                  onClick={closeMobileMenu}>
                  Amps & Cabinets
                </Link>
              </li>
              </ul>

          </div>
          <div className="section-center">
            <img className='navbar-logo active' alt='logo' src={Logo} height='140px' />
          </div>
          <div className="section-right">
            <ul className={click ? 'nav-menu active-2' : 'nav-menu'}>
              <li className='nav-item active'>
                <Link
                  to='/contact'
                  href={scrollView}
                  className='nav-links'
                  onClick={closeMobileMenu}>
                  Contact
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </>
  );
}

export default Navbar;