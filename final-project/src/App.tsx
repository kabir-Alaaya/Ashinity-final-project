import { Routes, Route } from "react-router-dom";
import Home from './Pages/Home'
import Vehicles from './Pages/Vehicles'
import Details from './Pages/Car Details'
import About from './Pages/About'
import Contact from './Pages/Contact'
import Hero from './components/Hero'
import Header from './components/Header'
import Banner from './components/Banner'
import ChooseCar from "./components/ChooseCar";
import Facts from "./components/Facts";
import Footer from "./components/Footer";
import InfoBlock01 from './components/InfoBlock01'
import InfoBlock02 from './components/InfoBlock02'


import './App.css'







 function App() {
  return (
    <div className="app">
      <Header/>
 
      <main>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/Vehicles" element={<Vehicles/>} />
          <Route path="/Details" element={<Details />} />
          <Route path="/About" element={<About/>} />
           <Route path="/Contact" element={<Contact/>} />
        </Routes>
      </main>

      <Hero />
      <Banner/>
      <ChooseCar />
      <Facts/>
      <InfoBlock01/>
      <InfoBlock02/>
      <Footer />
    </div>
  );
}
  
export default App
