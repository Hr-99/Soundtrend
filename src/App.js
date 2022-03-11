import logo from './logo.svg';
import './App.css';
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.css";
import Upload from './Pages/Upload';
import Media from './Pages/Media';
import EnS from './Pages/EnS';
import Hero from './Pages/Hero';
import Share from './Pages/Share';
import Process from './Pages/Process';
import Hashtag from './Pages/Hashtag';
import Ad from './Pages/Ad';
import Footer from './Pages/Footer';
import Login from './Pages/Login';
import LoginUser from './Pages/LoginUser';
function App() {
  return (
    <Router>
   <Routes>
     <Route path="/" element={<Hero  />} ></Route>
     <Route path="Login" element={<Login />} ></Route>
     <Route path="Media" element={<Media />} ></Route>
     <Route path="LoginUser" element={<LoginUser />} ></Route>
     <Route path="Upload" element={<Upload />} ></Route>
     <Route path="Process" element={<Process />} ></Route>
     <Route path="EnS" element={<EnS />} ></Route>
   </Routes>
  </Router>
 
  );
}

export default App;
