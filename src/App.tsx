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
        <Route path="/" element={<Login />}/>
        <Route path="/register" element={<Registration />}/>
        <Route path="/exam" element={<ExamPage />} />
        <Route path="/thank-you" element={<ThankYou />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
