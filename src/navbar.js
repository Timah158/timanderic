import {ReactComponent as Logo} from './SVGs/logo.svg'
import {ReactComponent as MobileLogo} from './SVGs/Mobile logo.svg'
import {ReactComponent as MenuIcon} from './SVGs/menu.svg'
import React,{useState} from 'react';
import './CSS/navbar.css';

function DesktopNavbar({props}) {
    return (
      <header className='desktop_navbar'>
        <nav className="navbar">
          <a href="/" className='navbar_logo_link' onClick={() => props.setPage("welcome")}><Logo className='navbar_logo'/></a>
            <ul className="navlist">
              <li className="navlink"><button className="navlink" onClick={() => props.setPage("tim")}>Tim</button></li>
              <li className="navlink"><button className="navlink" onClick={() => props.setPage("eric")}>Eric</button></li>
              <li className="navlink last_item"><button className="navlink" onClick={() => props.setIntModal(true)}>Interview</button></li>
            </ul>
        </nav>
      </header>
    );
  }

  function MobileNavbar({props}) {
    const [showDropdown, setShowDropdown] = useState(false);
    return (
      <header className='mobile_navbar'>
        <nav className="mobile_navbar">
          <a href="/" className='mobile_navbar_logo_link'><MobileLogo className='mobile_navbar_logo'/></a>
          <button className='menu_icon'><MenuIcon onClick={() => setShowDropdown(!showDropdown)}/></button>
          {showDropdown && <MobileDropdown dropdownProps={{setShowDropdown, props}}/>}
        </nav>
      </header>
    );
    function MobileDropdown({dropdownProps}) {
      return(
        <ul className="mobile_navlist">
          <li className="mobile_navlink"><button className="mobile_navlink_a" onClick={
            () => props.setPage("tim")
            .then(dropdownProps.setShowDropdown(false))
            }>Tim</button></li>
          <li className="mobile_navlink"><button className="mobile_navlink_a" onClick={
            () => props.setPage("eric")
            }>Eric</button></li>
          <li className="mobile_navlink"><button className="mobile_navlink_a" onClick={
            () => props.setIntModal(true)
            }>Interview</button></li>
          <li className="mobile_navlink white_space" onClick={
            () => dropdownProps.setShowDropdown(false)
            }></li>
        </ul>
      );
    }
  }

  function Navbar({props}) {
    return(
      <React.Fragment>
        <MobileNavbar props={props}/>
        <DesktopNavbar props={props}/>
      </React.Fragment>
    );
  }

export default Navbar;