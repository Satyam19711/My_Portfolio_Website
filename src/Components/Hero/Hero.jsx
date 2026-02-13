import React, { useEffect } from "react";
import "./Hero.css";
import profile_img from "../../assets/profile_img.png";
import AnchorLink from "react-anchor-link-smooth-scroll";

const Hero = () => {
  useEffect(() => {
    const words = [
      "a Passionate Web Developer",
      "a MERN Stack Developer",
      "a Backend API Developer",
      "a Node.js Developer",
      "a MongoDB & Mongoose Developer",
      "a Full Stack Web Developer",
    ];

    let i = 0;
    let j = 0;
    let isDeleting = false;

    const typeEffect = () => {
      const currentWord = words[i];
      const typingEl = document.querySelector(".typing-text");

      if (!typingEl) return;

      typingEl.innerHTML = currentWord.substring(0, j);

      if (!isDeleting && j < currentWord.length) {
        j++;
        setTimeout(typeEffect, 120);
      } else if (isDeleting && j > 0) {
        j--;
        setTimeout(typeEffect, 60);
      } else {
        isDeleting = !isDeleting;

        if (!isDeleting) i = (i + 1) % words.length;

        setTimeout(typeEffect, 700);
      }
    };

    typeEffect();
  }, []);

  return (
    <div id="home" className="hero">
      <div className="profile-wrapper">
        <img src={profile_img} alt="" />
      </div>

      <h1>
        <span>I'm Satyam Maurya</span> —<span className="typing-text"></span>
      </h1>

      <p>
        I am a MERN Stack Developer with a passion for creating user-friendly
        and visually appealing websites.
      </p>

      <div className="hero-action">
        <div className="hero-connect">
          <AnchorLink className="anchor-link" offset={50} href="#contact">
            Connect With Me
          </AnchorLink>
        </div>

        <div className="hero-resume">
          <a
            href="https://drive.google.com/file/d/1p3nMnDlSF-HKp8-gAitpdaoObeZL0L_n/view?usp=sharing"
            target="_blank"
          >
            My Resume
          </a>
        </div>
      </div>
    </div>
  );
};

export default Hero;
