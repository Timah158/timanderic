import {ReactComponent as Logo} from './SVGs/logo.svg'
import {ReactComponent as MobileLogo} from './SVGs/Mobile logo.svg'
import {ReactComponent as MenuIcon} from './SVGs/menu.svg'
import React,{useState} from 'react';
import './CSS/navbar.css';

function DesktopNavbar({props}) {

  function changePage(thisPage) {
    props.setNavigation({
      page: thisPage,
      modal: {
        display: false,
        element: ""
      }
    })
    window.scrollTo(0, 0);
  }
    return (
      <header className='desktop_navbar'>
        <nav className="navbar">
          <a href="/" className='navbar_logo_link' onClick={() => changePage("welcome")}><Logo className='navbar_logo'/></a>
            <ul className="navlist">
              <li className="navlink"><button className="navlink" onClick={() => changePage("tim")}>Tim</button></li>
              <li className="navlink"><button className="navlink" onClick={() => changePage("eric")}>Eric</button></li>
              {/* <li className="navlink last_item"><button className="navlink" onClick={() => props.setNavigation({
                page: props.Navigation.page,
                modal: {
                  display: true,
                  element: "interviewModal"
              }})}>Interview</button></li> */}
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
  }

  function MobileDropdown({dropdownProps}) {
    function updatePage(thisPage) {
      if (thisPage === "interview") {dropdownProps.props.setNavigation({
        modal: {
          display: true,
          element: "interviewModal"
        }})}
      else dropdownProps.props.setNavigation({
        page: thisPage,
        modal: {
          display: false,
          element: ""
        }
      })
      dropdownProps.setShowDropdown(false)
      window.scrollTo(0, 0);
    }
    return(
      <ul className="mobile_navlist">
        <li className="mobile_navlink"><button className="mobile_navlink_a" onClick={() => updatePage("tim")}>Tim</button></li>
        <li className="mobile_navlink"><button className="mobile_navlink_a" onClick={() => updatePage("eric")}>Eric</button></li>
        <li className="mobile_navlink"><button className="mobile_navlink_a" onClick={() => updatePage("interview")}>Interview</button></li>
        <li className="mobile_navlink white_space" onClick={() => dropdownProps.setShowDropdown(false)}></li>
      </ul>
    );
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