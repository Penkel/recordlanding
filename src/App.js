import { useState } from "react";
import About from "./components/About";
import Footer from "./components/Footer";
import Hero from "./components/Hero";
import HowToFind from "./components/HowToFind";
import Join from "./components/Join";
import Navbar from "./components/Navbar";
import Sections from "./components/Sections";


export default function App() {
  
  const[club, setClub] = useState('Ф133')

  return (
    <div className="bg-white">
      <Navbar setClub={setClub} />
      <Hero club={club} />
      <About club={club}/>
      <Sections club={club}/>
      <HowToFind club={club}/>
      <Join club={club}/>
      <Footer />
    </div>
  )
}