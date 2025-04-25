import React from "react";
import "./About.css";
import theme_pattern from "../../assets/theme_pattern.svg";
import meNew from "../../assets/meNew.png";

const About = () => {
  return (
    <div id="about" className="about">
      <div className="about-tital">
        <h1>About me</h1>

        <img src={theme_pattern} alt="" />
      </div>

      <div className="about-sections">
        <div className="about-left">
          <img src={meNew} alt="" />
        </div>

        <div className="about-right">
          <div className="about-para">
            <p>
              I am a dedicated Full Stack Web Developer from India, passionate
              about building both the front-end and back-end of modern web
              applications. My skill set includes HTML, CSS, JavaScript, React,
              Node.js, Express, MongoDB, and Python. I enjoy creating seamless
              user experiences and robust server-side logic.
            </p>

            <p>
              With a strong foundation in both design and logic, I strive to
              build web solutions that are not just beautiful but also efficient
              and scalable. I’m constantly learning new technologies and best
              practices, and I’m always open to exciting opportunities that help
              me grow and contribute meaningfully.
            </p>
          </div>

          <div className="about-skills">
            <div className="about-skill-left">
              <h4 className="skill-tech-heading">Tech Skills</h4>
              <div className="about-skill">
                <p>HTML & CSS</p>
              </div>
              <div className="about-skill">
                <p>JavaScript</p>
              </div>
              <div className="about-skill">
                <p>Python</p>
              </div>
              <div className="about-skill">
                <p>React</p>
              </div>
              <div className="about-skill">
                <p>Node.js</p>
              </div>

              <div className="about-skill">
                <p>Express</p>
              </div>

              <div className="about-skill">
                <p>MongoDB</p>
              </div>

              <div className="about-skill">
                <p>Chakra UI</p>
              </div>

              <div className="about-skill">
                <p>material UI</p>
              </div>
            </div>

            <div className="about-skill-right">
              <h4 className="skill-tech-heading">Tech Tools</h4>

              <div className="about-teck-tools">
                <p>VS Code</p>
              </div>
              <div className="about-teck-tools">
                <p>npm</p>
              </div>
              <div className="about-teck-tools">
                <p>Github</p>
              </div>
              <div className="about-teck-tools">
                <p>Replit</p>
              </div>
              <div className="about-teck-tools">
                <p>netlify</p>
              </div>
              <div className="about-teck-tools">
                <p>Vercel</p>
              </div>
              <div className="about-teck-tools">
                <p>Postman</p>
              </div>
              <div className="about-teck-tools">
                <p>Codepen</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
