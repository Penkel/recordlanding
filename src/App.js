import About from "./components/About";
import Footer from "./components/Footer";
import Hero from "./components/Hero";
import HowToFind from "./components/HowToFind";
import Join from "./components/Join";
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
      <Join />
      <Footer />
    </div>
  )
}