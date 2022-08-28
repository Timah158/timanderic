import "./welcome_page.css"
import Navbar from "./navbar";
import Footer from "./footer";

function Section1() {
  return(
    <div id='section_1' className="section">
      <section id="main_title">
      <h1 className='main_title'>Welcome Potential Employers</h1>
    </section>
    </div>
  );
}

function Section2() {
  return (
    <div id='section_2' className="section odd_section">
      <section>
        <h3>What We Do</h3>
        <hr></hr>
        <p>
          We are to two industry professionnals looking to showcase our kills and connect with employers. 
          We hope that with this site we can properly demonstrate our skills and learn by doing.
        </p>
        <br></br>
        <ul>
          <li>Full Stack Web Development</li>
          <li>Cyber Security</li>
          <li>Team Work</li>
        </ul>
      </section>
    </div>
  );
}

function Section3() {
  return (
    <div id='section_3' className="section">
      <section>
        <h3>About Tim</h3>
        <hr></hr>
        <p>
          I am an IT professional with experience in technical support, front-end development, and a passion for cybersecurity.
          During my time at university I worked as a call technician for 2 years providing technical support and troubleshooting. 
          While at this job I was eventually moved to the development team where I gained experience with HTML, CSS, and JavaScript.
        </p>
        <br></br>
        <ul>
          <li>Front-end Web Development</li>
          <li>Cyber Security</li>
          <li>Networking</li>
          <li>React</li>
          <li>WordPress</li>
        </ul>
      </section>
    </div>
  );
}

function Section4() {
  return (
    <div id='section_4' className="section odd_section">
      <section>
        <h3>About Eric</h3>
        <hr></hr>
        <p>
          I am a Full-stack developer with experience in SpringBoot, Thymeleaf, Bootstrap, and MongoDB.
          I prefer working in Java, however I also have experience with other frameworks such as Django.
          If you're looking for someone that hass a passion for Java and backend services, I'm your guy. 
        </p>
        <br></br>
        <ul>
          <li>Full Stack</li>
          <li>Java</li>
          <li>MongoDB</li>
        </ul>
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
      <Section4></Section4>
      <Footer></Footer>
    </div>
  );
}

export default App;
