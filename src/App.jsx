import React from "react";
import Navbar from "./Components/Navbar/Navbar";
import Hero from "./Components/Hero/Hero";
import About from "./Components/About/About";
import MyProjects from "./Components/MyProjects/MyProjects";
import GitStatus from "./Components/GitStatus/GitStatus";
import Contact from "./Components/Contact/Contact";
import Footer from "./Components/Footer/Footer";

const App = () => {
  return (
    <div>
      <Navbar />
      <Hero />
      <About />
      <MyProjects />
      <GitStatus />
      <Contact />
      <Footer />
    </div>
  );
};

export default App;
