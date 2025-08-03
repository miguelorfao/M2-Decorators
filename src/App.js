import logo from "./logo.svg";
import "./App.css";
import NavigationBar from "./components/NavBar";
import Hero from "./components/Hero";
import Services from "./components/Services";
import About from "./components/About";
import Contact from "./components/Contact";
import Gallery from "./components/Gallery";
import Footer from "./components/Footer";
import { BrowserRouter } from "react-router-dom";
import Review from "./components/Review";
function App() {
  return (
    <div className="App">
      <NavigationBar />
      <Hero />
      <About />
      <Services />
      <Gallery />
      <Review />
      <Contact />
      <Footer />
    </div>
  );
}

export default App;
