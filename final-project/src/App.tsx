import { Routes, Route } from "react-router-dom";
import Home from "./Pages/Home";
import Vehicles from "./Pages/Vehicles";
import Details from "./Pages/Car Details";
import About from "./Pages/About";
import Contact from "./Pages/Contact";


import "./App.css";

function App() {
  return (
    <div className="app">
     
      <main>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/vehicles" element={<Vehicles />} />
          <Route path="/details" element={<Details />} />
          <Route path="/About" element={<About />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
      </main>
      
    </div>
  );
}

export default App;