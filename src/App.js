import './App.css';
import NavBar from '../src/components/Navbar';
import Footer from '../src/components/Footer';
import Home from './pages/Home';
import Contact from './pages/Contact';
import Menu from './pages/Menu';
import About from './pages/About';
import {BrowserRouter as Router,Route,Routes } from 'react-router-dom';
function App() {
  return (
    <div className="App">
      <Router>
      <NavBar/> 
      <Routes >
      
      <Route exact path="/" element={<Home/>}/>
      <Route exact path="/contact" element={<Contact/>}/>
      <Route exact path="/menu" element={<Menu/>}/>
      <Route exact path="/about" element={<About/>}/>
      </Routes >
      <Footer/>
     </Router>
    </div>
  );
}

export default App;
