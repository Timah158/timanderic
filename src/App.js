import { BrowserRouter, Routes, Route } from "react-router-dom";
import WelcomePage from './Welcome';
import NoPage from "./NoPage";
import TimProfile from "./TimProfile";
import EricProfile from "./EricProfile";
import InterviewModal from "./InterviewModal";


function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<WelcomePage />}/>
        <Route path="*" element={<NoPage />} />
        <Route path="Tim" element={<TimProfile />}/>
        <Route path="Eric" element={<EricProfile />}/>
        <Route path="Interview" element={<InterviewModal />}/>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
