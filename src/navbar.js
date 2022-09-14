import {ReactComponent as Logo} from './logo.svg'
import './navbar.css';

function Navbar() {
    return (
      <header>
        <nav className="navbar">
        <a href="/"><Logo className='navbar_logo'/></a>
          <ul className="navlist">
            <li className="navlink"><a className="navlink" href="#">Tim</a></li>
            <li className="navlink"><a className="navlink" href="#">Eric</a></li>
            <li className="navlink"><a className="navlink" href="#">Interview</a></li>
          </ul>
        </nav>
      </header>
    );
  }

export default Navbar;