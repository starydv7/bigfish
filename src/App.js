import './App.css';
import Navbar from './components/Navbar';
import Footer from './pages/Footer';

import { Routes, Route } from "react-router-dom";
import OurBusiness from './pages/OurBusiness';
import Home from './pages/Home';

function App() {
  return (
    <div className="App">
      <Navbar />
      <Routes>
        <Route path="/" element></Route>
        <Route path="/business" element={<OurBusiness/> }></Route>
        <Route path="/team" element></Route>
        <Route path="/services" element></Route>
      </Routes>
      <Footer/>
    </div>
  );
}

export default App;
