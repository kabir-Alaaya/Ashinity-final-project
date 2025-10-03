// Pages/Home.js
import Hero from "../components/Hero";
import InfoBlock from "../components/InfoBlock";
import ChooseCar from "../components/ChooseCar";
import Facts from "../components/Facts";
import Download from "../components/Download";
import Banner from "../components/Banner";
import Footer from "../components/Footer"
import Header from "../components/Header";

function Home() {
  return (
    <div>
      <Header/>
      <Hero />
      <InfoBlock />
      <ChooseCar />
      <Facts />
      <Download />
      <Banner />
      <Footer/>
    </div>
  );
}

export default Home;