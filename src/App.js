import React,{useState} from "react";
import WelcomePage from './Welcome';
import NavBar from './navbar';
import TimProfile from "./TimProfile";
import EricProfile from "./EricProfile";
import InterviewModal from "./InterviewModal";
import ProjectModal from "./ProjectModal";
import Footer from "./footer";
import { Amplify } from 'aws-amplify';
import config from './amplifyconfiguration.json';

Amplify.configure(config);

function App() {

  const [Navigation, setNavigation] = useState({
    modal: {
      display: false,
      element: "",
      project: {}
    },
    page: "welcome"
  })

  return (
    <React.Fragment>
      {Navigation.modal.element === "projectModal" && Navigation.modal.display === true && <ProjectModal setNavigation={setNavigation}/>}
      {Navigation.modal.element === "interviewModal" && Navigation.modal.display === true && <InterviewModal props={{setNavigation, Navigation}}/>}
      <NavBar props={{setNavigation, Navigation}}></NavBar>
      {Navigation.page === "welcome" && <WelcomePage props={{setNavigation, Navigation}}/>}
      {Navigation.page === "tim" && <TimProfile props={{setNavigation}}/>}
      {Navigation.page === "eric" && <EricProfile props={{setNavigation}}/>}
      <Footer setNavigation={setNavigation}/>
    </React.Fragment>
  );
}

export default App;
