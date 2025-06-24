import React from "react";
import "./Hero.css";
import profile_img from "../../assets/profile_img.png";
import AnchorLink from "react-anchor-link-smooth-scroll";

const Hero = () => {
  return (
    <div id="home" className="hero">
      <img src={profile_img} alt="" />
      <h1>
        <span>I'm Satyam Maurya</span> — a Passionate Web Developer
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
            href="src/assets/SatyamMaurya-FullStackWebDeveloper-real.pdf"
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
