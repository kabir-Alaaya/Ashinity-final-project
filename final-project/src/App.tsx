import { Routes, Route } from "react-router-dom";
import Home from "./Pages/Home";
import Vehicles from "./Pages/Vehicles";
import Details from "./Pages/Car Details";
import About from "./Pages/About";
import Contact from "./Pages/Contact";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Hero from "./components/Hero";
import "./App.css";
import InfoBlock from "./components/InfoBlock";
import ChooseCar from "./components/ChooseCar";
import Facts from "./components/Facts";

import Banner from "./components/Banner";
import Download from "./components/Download";

function App() {
  return (
    <div className="app">
      <Header />

      <main>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/vehicles" element={<Vehicles />} />
          <Route path="/details" element={<Details />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
      </main>
      <Hero />
      <InfoBlock />

      <ChooseCar />
      <Facts />
      <Download />
      <Banner />
      <Footer />
    </div>
  );
}

export default App;
