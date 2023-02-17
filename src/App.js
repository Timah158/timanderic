import React,{useState} from "react";
import WelcomePage from './Welcome';
import NavBar from './navbar';
import TimProfile from "./TimProfile";
import EricProfile from "./EricProfile";
import InterviewModal from "./InterviewModal";
import Footer from "./footer";

function App() {
  const [IntModal, setIntModal] = useState(false);
  const [Page, setPage] = useState("welcome");
  return (
    <React.Fragment>
      {IntModal && <InterviewModal props={setIntModal}/>}
      <NavBar props={{setPage, setIntModal}}></NavBar>
      {Page === "welcome" && <WelcomePage props={setIntModal}/>}
      {Page === "tim" && <TimProfile props={setIntModal}/>}
      {Page === "eric" && <EricProfile props={setIntModal}/>}
      <Footer props={setPage}/>
    </React.Fragment>
  );
}

export default App;
