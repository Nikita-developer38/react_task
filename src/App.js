import { BrowserRouter } from 'react-router-dom';
import './App.css';
import Navbar from "./component/javascript/Navbar.jsx"
import { Route, Routes } from 'react-router-dom'
import Explore from './Explore.js';
import About from './About.js';
import Contact from './Contact.js';
import Board from './component/javascript/Board.jsx';



function App() {
  return (

    <BrowserRouter>
      <Navbar />

      <Routes>
        <Route path="/" element={<Board />} />
        <Route path='/explore' element={<Explore />} />
        <Route path='/about' element={<About />} />
        <Route path='/contact' element={<Contact />} />
      </Routes>
      <Board />
    </BrowserRouter >



  );
}

export default App;
