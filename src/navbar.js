import {ReactComponent as Logo} from './SVGs/logo.svg'
import {ReactComponent as MobileLogo} from './SVGs/Mobile logo.svg'
import {ReactComponent as MenuIcon} from './SVGs/menu.svg'
import './CSS/navbar.css';

function Navbar() {
    return (
      <header>
        <nav className="navbar">
        <a href="/" className='mobile_navbar_logo_link mobile'><MobileLogo className='mobile_navbar_logo'/></a>
        <a href="/" className='navbar_logo_link'><Logo className='navbar_logo'/></a>
        <button className='menu_icon mobile'><MenuIcon/></button>
          <ul className="navlist">
            <li className="navlink"><a className="navlink" href="/Tim">Tim</a></li>
            <li className="navlink"><a className="navlink" href="/Eric">Eric</a></li>
            <li className="navlink"><a className="navlink" href="/Interview">Interview</a></li>
          </ul>
        </nav>
      </header>
    );
  }

export default Navbar;