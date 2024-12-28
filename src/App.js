import './App.css';

import Home from './components/Home'
import Skills from './components/Skills'
import Projects from './components/Projects'
import About from './components/About'
import Contact from './components/Contact'

import { Routes,Route } from 'react-router-dom';
import Navbar from './components/Navbar';



function App() {
  return (
    <div>

      <Navbar/>

      <Routes>

      

      <Route path="/" element={<Home/>} />

      <Route path="Skills" element={<Skills/>} />

      <Route path="Projects" element={<Projects/>} />

      <Route path="About" element={<About/>} />

      <Route path="Contact" element={<Contact/>} />

      </Routes>

      

  



      

    
     
      
      
      

    </div>
  );
}

export default App;
