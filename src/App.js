import logo from "./logo.svg";
import "./App.css";
import NavigationBar from "./components/NavBar";
import Hero from "./components/Hero";
import Services from "./components/Services";
import About from "./components/About";
import Contact from "./components/Contact";
import Marquees from "./components/Marquees";
function App() {
  return (
    <div className="App">
      <NavigationBar />
      <Hero />
      <Services />
      <About />
      <Marquees />
      <Contact />
    </div>
  );
}

export default App;
