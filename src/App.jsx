import React, { useEffect, useState } from "react";
import Navbar from "./Components/Navbar/Navbar";
import Hero from "./Components/Hero/Hero";
import About from "./Components/About/About";
import MyProjects from "./Components/MyProjects/MyProjects";
import GitStatus from "./Components/GitStatus/GitStatus";
import Contact from "./Components/Contact/Contact";
import Footer from "./Components/Footer/Footer";
import useOnlineUsers from "./utils/useOnlineUsers";
import { logVisitor } from "./utils/logVisitor";
import { initTheme } from "./utils/theme";
// import Snowfall from "react-snowfall";
import "./App.css";

const App = () => {
  const onlineUsers = useOnlineUsers();

  useEffect(() => {
    initTheme();
    logVisitor();
  }, []);

  const [icon, setIcon] = useState(
    localStorage.getItem("theme") === "dark" ? "☀️" : "🌙",
  );

  const toggleTheme = () => {
    const current = localStorage.getItem("theme");
    const newTheme = current === "dark" ? "light" : "dark";

    localStorage.setItem("theme", newTheme);
    document.body.classList.toggle("dark-mode");
    setIcon(newTheme === "dark" ? "☀️" : "🌙");
  };

  useEffect(() => {
    const interval = setInterval(() => {
      if (window.box && window.box.height) {
        window.box.height = function () {
          return document.body.scrollHeight;
        };
        clearInterval(interval);
      }
    }, 200);

    return () => clearInterval(interval);
  }, []);

  return (
    <div>
      {/* <div className="snowfall-wrapper">
        <Snowfall color="#82c3d9" snowflakeCount={120} />
      </div> */}

      <Navbar />
      <Hero />
      <About />
      <MyProjects />
      <GitStatus />
      <Contact />
      <Footer />

      <button className="theme-toggle-btn" onClick={toggleTheme}>
        {icon}
      </button>

      <div className="visitor-badge">
        👁️ <span>{onlineUsers}</span>
      </div>
      <div className="visitor-tooltip">Live Users Online</div>

      <button
        id="scrollTopBtn"
        onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
      >
        ⬆
      </button>
    </div>
  );
};

export default App;
