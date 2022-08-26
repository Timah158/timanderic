import "./welcome_page.css"
import Navbar from "./navbar";
import Footer from "./footer";

function Section1() {
  return(
    <div id='section_1' className="section">
      <section>
      <h1 className='main_title'>Welcome Potential Employer!</h1>
      <hr></hr>
    </section>
    </div>
  );
}

function Section2() {
  return (
    <div id='section_2' className="section odd_section">
      <section>
        <h2>About Tim</h2>
      </section>
    </div>
  );
}

function Section3() {
  return (
    <div id='section_3' className="section">
      <section>
        <h2>About Eric</h2>
      </section>
    </div>
  );
}

function App() {
  return (
    <div>
      <Navbar></Navbar>
      <Section1></Section1>
      <Section2></Section2>
      <Section3></Section3>
      <Footer></Footer>
    </div>
  );
}

export default App;
