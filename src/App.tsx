import './App.css';
import './tailwind.css'; // Import Tailwind CSS
import Index from './components/pages/Index';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import ExamPage from './components/pages/ExamPage';
import ThankYou from './components/pages/ThankYouPage';
function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Index />}/>

        <Route path="/exam" element={<ExamPage />} />
        <Route path="/thank-you" element={<ThankYou />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
