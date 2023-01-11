import './CSS/welcome_page.css';
import Navbar from "./navbar";
import Footer from "./footer";
import Tim from "./Pictures/Tim.jpg"
import Eric from "./Pictures/Eric.jpg"
import InterviewModal from "./InterviewModal";
import React,{useState} from 'react';

function Heading({hideModal}) {
  return (
    <div id='section_1' className="section">
      <section className="split">
      <div>
        <h1 className='main_title'>Welcome Potential Employers!</h1>
        <br></br>
        <p>We are two industry professionals looking to showcase our skills and are currently seeking employment.
          If you are looking for employees experienced in either full stack development or cybersecurity, you've
          come to the right place.
        </p>
      </div>
      <div id="main_title_buttons">
        <button onClick={() => hideModal(true)}>Contact</button>
        <button><a href="#section_3">About</a></button>
      </div>
    </section>
    </div>
  );
}

function WhatWeDo() {
  return (
    <div id='section_2' className="section odd_section">
      <section className="center">
        <div>
          <h3>What We Do</h3>
          <p>
            We are two industry professionals looking to showcase our skills and connect with employers.
            We hope that with this site we can properly demonstrate our skills and learn by doing. Our 
            specialties are full-stack developent, cybersecurity, and teamwork.
            </p>
        </div>
      </section>
    </div>
  );
}

function AboutTim() {
  return (
    <div id='section_3' className="section">
      <section className="split">
        <img src={Tim} className="section_image" alt='Tim' />
        <div>
          <h3>About Tim</h3>
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
        </div>
      </section>
    </div>
  );
}

function AboutEric() {
  return (
    <div id='section_4' className="section odd_section">
      <section className="split">
        <div>
          <h3>About Eric</h3>
          <p>
          I am a Full-stack web developer with experience in Spring Boot, Thymeleaf, Bootstrap, MySQL, and MongoDB.
          I prefer working in Java, however I also have experience with other frameworks such as Django.
          If you're looking for someone that has a passion for Object-oriented principles and backend services, I'm your guy.. 
          </p>
          <br></br>
          <ul>
            <li>Full Stack</li>
            <li>Java</li>
            <li>MongoDB</li>
          </ul>
        </div>
        <img src={Eric} className="section_image" alt='Eric'/>
      </section>
    </div>
  );
}

function WelcomePage() {
  const [showModal, setShowModal] = useState(false);
  return (
    <div>
      {showModal && <InterviewModal hideModal={setShowModal}/>}
      <Navbar hideModal={setShowModal}></Navbar>
      <Heading hideModal={setShowModal}></Heading>
      <WhatWeDo></WhatWeDo>
      <AboutTim></AboutTim>
      <AboutEric></AboutEric>
      <Footer></Footer>
    </div>
  );
}

export default WelcomePage;
