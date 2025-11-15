import React, { useEffect, useState } from "react";

import Navbar from "./Components/Navbar/Navbar";
import Hero from "./Components/Hero/Hero";
import About from "./Components/About/About";
import MyProjects from "./Components/MyProjects/MyProjects";
import GitStatus from "./Components/GitStatus/GitStatus";
import Contact from "./Components/Contact/Contact";
import Footer from "./Components/Footer/Footer";

import { initTheme } from "./utils/theme";
import { useNotifyOnVisit } from "./utils/notifyVisitor";
import useFirebaseVisitorCount from "./utils/useFirebaseVisitorCount";

const App = () => {
  useNotifyOnVisit();

  const count = useFirebaseVisitorCount();

  useEffect(() => {
    initTheme();
  }, []);

  const [icon, setIcon] = useState(
    localStorage.getItem("theme") === "dark" ? "☀️" : "🌙"
  );

  const toggleTheme = () => {
    const current = localStorage.getItem("theme");
    const newTheme = current === "dark" ? "light" : "dark";

    localStorage.setItem("theme", newTheme);
    document.body.classList.toggle("dark-mode");

    setIcon(newTheme === "dark" ? "☀️" : "🌙");
  };

  useEffect(() => {
    const scrollBtn = document.getElementById("scrollTopBtn");
    if (!scrollBtn) return;

    const checkScroll = () => {
      if (window.scrollY > 300) {
        scrollBtn.classList.add("show-scroll-btn");
      } else {
        scrollBtn.classList.remove("show-scroll-btn");
      }
    };

    window.addEventListener("scroll", checkScroll);
    return () => window.removeEventListener("scroll", checkScroll);
  }, []);

  return (
    <div>
      <Navbar />
      <Hero />
      <About />
      <MyProjects />
      <GitStatus />
      <Contact />
      <Footer />

      <button
        className="theme-toggle-btn"
        onClick={toggleTheme}
        title="Toggle Dark Mode"
      >
        {icon}
      </button>

      <div className="visitor-badge" style={{ userSelect: "none" }}>
        👁️ <span>{count ?? "..."}</span>
      </div>

      <div className="visitor-tooltip">Live Visitor Count</div>

      <button
        id="scrollTopBtn"
        onClick={() => window.scrollTo({ top: 0, left: 0, behavior: "smooth" })}
      >
        ⬆
      </button>
    </div>
  );
};

export default App;
