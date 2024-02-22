import './App.css';
import './tailwind.css'; // Import Tailwind CSS

import { BrowserRouter, Routes, Route } from "react-router-dom";
import ExamPage from './components/pages/ExamPage';
import ThankYou from './components/pages/ThankYouPage';
import Login from './components/pages/Login';
import Registration from './components/pages/Registration';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        {/* <Route path="/cdl-clone/" element={<Index />}/> */}
        <Route path="/cdl-clone/" element={<Login />}/>
        <Route path="/cdl-clone/register" element={<Registration />}/>
        <Route path="/cdl-clone/exam" element={<ExamPage />} />
        <Route path="/cdl-clone/thank-you" element={<ThankYou />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
