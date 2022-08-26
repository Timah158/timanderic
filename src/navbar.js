import logo from './favicon.svg'
import './navbar.css';

function Navbar() {
    return (
      <header>
        <nav className="navbar">
          <a href="/" className="logo_link"><img src={logo} className="App-logo" alt="logo"/></a>
          <ul className="navlist">
            <li className="navlink"><a className="navlink" href="#">Tim</a></li>
            <li className="navlink"><a className="navlink" href="#">Eric</a></li>
            <li className="navlink"><a className="navlink" href="https://www.youtube.com/watch?v=dQw4w9WgXcQ">Interview</a></li>
          </ul>
        </nav>
      </header>
    );
  }

  export default Navbar;