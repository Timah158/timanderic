import {ReactComponent as Logo} from './SVGs/logo.svg'
import {ReactComponent as MobileLogo} from './SVGs/Mobile logo.svg'
import {ReactComponent as MenuIcon} from './SVGs/menu.svg'
import React,{useState} from 'react';
import InterviewModal from "./InterviewModal";
import './CSS/navbar.css';

function DesktopNavbar({hideModal}) {
    return (
      <header className='desktop_navbar'>
        <nav className="navbar">
          <a href="/" className='navbar_logo_link'><Logo className='navbar_logo'/></a>
            <ul className="navlist">
              <li className="navlink"><a className="navlink" href="/Tim">Tim</a></li>
              <li className="navlink"><a className="navlink" href="/Eric">Eric</a></li>
              <li className="navlink last_item"><button className="navlink" onClick={() => hideModal(true)}>Interview</button></li>
            </ul>
        </nav>
      </header>
    );
  }

  function MobileNavbar({hideModal}) {
    const [showDropdown, setShowDropdown] = useState(false);
    return (
      <header className='mobile_navbar'>
        <nav className="mobile_navbar">
          <a href="/" className='mobile_navbar_logo_link'><MobileLogo className='mobile_navbar_logo'/></a>
          <button className='menu_icon'><MenuIcon onClick={() => setShowDropdown(!showDropdown)}/></button>
          {showDropdown && <MobileDropdown showDropdown={setShowDropdown}/>}
        </nav>
      </header>
    );
    function MobileDropdown({showDropdown}) {
      return(
        <ul className="mobile_navlist">
          <li className="mobile_navlink"><a className="mobile_navlink_a" href="/Tim">Tim</a></li>
          <li className="mobile_navlink"><a className="mobile_navlink_a" href="/Eric">Eric</a></li>
          <li className="mobile_navlink"><button className="mobile_navlink_a" onClick={() => hideModal(true)}>Interview</button></li>
          <li className="mobile_navlink white_space" onClick={() => showDropdown(false)}></li>
        </ul>
      );
    }
  }

  function Navbar() {
    const [showModal, setShowModal] = useState(false);
    return(
      <>
        <MobileNavbar hideModal={setShowModal}/>
        {showModal && <InterviewModal hideModal={setShowModal}/>}
        <DesktopNavbar hideModal={setShowModal}/>
      </>
    );
  }

export default Navbar;