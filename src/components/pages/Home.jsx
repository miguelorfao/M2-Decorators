import React from "react";
import NavigationBar from "../NavBar";
import Hero from "../Hero";
import Services from "../Services";
import About from "../About";
import Contact from "../Contact";
import Gallery from "../Gallery";
import Footer from "../Footer";

function Home() {
  return (
    <div>
      <NavigationBar />
      <Hero />
      <About />
      <Services />
      <Gallery />

      <Contact />
      <Footer />
    </div>
  );
}

export default Home;
