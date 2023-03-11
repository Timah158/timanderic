import React,{useState} from "react";
import WelcomePage from './Welcome';
import NavBar from './navbar';
import TimProfile from "./TimProfile";
import EricProfile from "./EricProfile";
import InterviewModal from "./InterviewModal";
import ProjectModal from "./ProjectModal";
import Footer from "./footer";

function App() {
  
  const [IntModal, setIntModal] = useState(false);
  const [projectModal, setProjectModal] = useState(false);
  const [currentProject, setCurrentProject] = useState({});
  const [Page, setPage] = useState("welcome");

  return (
    <React.Fragment>
      {projectModal && <ProjectModal props={{setProjectModal, currentProject}}/>}
      {IntModal && <InterviewModal props={setIntModal}/>}
      <NavBar props={{setPage, setIntModal}}></NavBar>
      {Page === "welcome" && <WelcomePage props={setIntModal}/>}
      {Page === "tim" && <TimProfile props={{setIntModal, setProjectModal, setCurrentProject}}/>}
      {Page === "eric" && <EricProfile props={{setIntModal, setProjectModal, setCurrentProject}}/>}
      <Footer props={setPage}/>
    </React.Fragment>
  );
}

export default App;
