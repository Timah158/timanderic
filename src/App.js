import React,{useState} from "react";
import WelcomePage from './Welcome';
import NavBar from './navbar';
import TimProfile from "./TimProfile";
import EricProfile from "./EricProfile";
import InterviewModal from "./InterviewModal";


function App() {
  const [Page, setPage] = useState("welcome");
  const [IntModal, setIntModal] = useState(false);
  return (
    <React.Fragment>
      {IntModal && <InterviewModal props={setIntModal}/>}
      <NavBar props={{setPage, setIntModal}}></NavBar>
      {Page === "welcome" && <WelcomePage props={setIntModal}/>}
      {Page === "tim" && <TimProfile props={setIntModal}/>}
      {Page === "eric" && <EricProfile props={setIntModal}/>}
    </React.Fragment>
  );
}

export default App;
