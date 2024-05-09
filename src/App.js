import About from "./components/About";
import Footer from "./components/Footer";
import Hero from "./components/Hero";
import HowToFind from "./components/HowToFind";
import Navbar from "./components/Navbar";
import Sections from "./components/Sections";

export default function App() {
  return (
    <div className="bg-white">
      <Navbar />
      <Hero  />
      <About />
      <Sections />
      <HowToFind />
      <Footer />
    </div>
  )
}