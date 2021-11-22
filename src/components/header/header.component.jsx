import React, { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'

import './header.styles.scss'
import Logo from '../../assets/images/logo-navbar.PNG'

function Header() {
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


  return (
    <>
    <div className="header active">
      <div className='logo-container' to='/'>
            <Link className='logo-link' to='/'>
                <img className="jimenez-logo" src={Logo}/>
            </Link>
      </div>
      <div className='menu-icon' onClick={handleClick}>
          <i className={click ? 'fas fa-times' : 'fas fa-bars'} />
      </div>
      <div className="options">
        <ul className={click ? 'header-menu active' : 'header-menu'}>
          <li className='header-item active'>
            <Link className="option" to='/' onClick={closeMobileMenu} >
                HOME
            </Link>
          </li>
          <li className='header-item active'>
            <Link 
              to='/products' 
              className='option' 
              onClick={closeMobileMenu}>
              GUITARS & BASS                  
            </Link>
            <ul className="dropdown-menu">
              <li className="header-item active dropdown-item">
                <Link 
                  to='/jazz' 
                  onClick={closeMobileMenu}>
                  <p>Jazz</p>                  
                </Link>
              </li>
              <li className="header-item active dropdown-item">
                <Link 
                  to='/bass' 
                  onClick={closeMobileMenu}>
                  <p>Basses</p>                  
                </Link>
              </li>
              <li className="header-item active dropdown-item">
                <Link 
                  to='/nylonstrings' 
                  onClick={closeMobileMenu}>
                  <p>Nylon Strings</p>                  
                </Link>
              </li>
            </ul>
          </li>
          <li className='header-item active'>
            <Link className="option" to='/' onClick={closeMobileMenu} >
                AMPS & CABINETS
            </Link>
          </li>
          <li className='header-item active'>
            <Link className="option" to='/contact' onClick={closeMobileMenu} >
                CONTACT
            </Link>
          </li>
        </ul>
      </div>
    </div>
    </>
  )    

}



export default Header;