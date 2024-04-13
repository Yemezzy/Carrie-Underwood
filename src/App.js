
import './App.css';
import StartPage from './Pages/StartPage';
import FirstUser from './Users/FirstUser';
import { Routes, Route, Link } from "react-router-dom";

function App() {
  return (
    <div className="">
      <Routes>
        <Route path="/" element={<StartPage />} />
        <Route path="/Shana-Wallace/426489594765221" element={<FirstUser />} />
      </Routes>
    </div>
  );
}

export default App;
