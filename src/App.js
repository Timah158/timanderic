import './navbar.css';
import "./welcome_page.css"
import logo from './favicon.svg'

function Header() {
  return (
    <header>
      <nav className="navbar">
        <a href="#" className="logo_link"><img src={logo} className="App-logo" alt="logo" /></a>
        <ul className="navlist">
          <li className="navlink"><a className="navlink" href="#">Tim</a></li>
          <li className="navlink"><a className="navlink" href="#">Eric</a></li>
          <li className="navlink"><a className="navlink" href="#">Interview</a></li>
        </ul>
      </nav>
    </header>
  );
}

function Title() {
  return(
    <section id='section_1'>
      <h1>Hire Us</h1>
    </section>
  );
}

function App() {
  return (
    <body>
      <Header></Header>
      <Title></Title>
    </body>
  );
}

export default App;
