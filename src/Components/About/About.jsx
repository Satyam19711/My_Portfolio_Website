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
              I am a dynamic and adaptable Full Stack Web Developer from India,
              skilled in the MERN stack with a strong focus on JavaScript,
              React.js, and Node.js. I enjoy building both the front-end and
              back-end of modern web applications, creating smooth user
              experiences and reliable server-side logic. I also leverage
              Generative AI tools to speed up development, boost creativity, and
              improve the overall quality of my work.
            </p>

            <p>
              With solid problem-solving skills and attention to detail, I aim
              to build web solutions that are clean, efficient, and scalable. I
              work with technologies like HTML, CSS, Express, and MongoDB while
              constantly learning new tools and best practices. I’m always open
              to exciting opportunities that help me grow further, apply my
              skills, and contribute meaningfully to impactful projects.
            </p>
          </div>

          <div className="about-skills">
            <div className="about-skill-left">
              <h4 className="skill-tech-heading">Tech Skills</h4>
              <div className="about-skill">
                <p>HTML5 & CSS3</p>
              </div>

              <div className="about-skill">
                <p>JavaScript</p>
              </div>

              <div className="about-skill">
                <p>React.js</p>
              </div>
              <div className="about-skill">
                <p>Redux</p>
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
                <p>Mongoose</p>
              </div>
              <div className="about-skill">
                <p>Responsive Design</p>
              </div>

              <div className="about-skill">
                <p>RESTful APIs</p>
              </div>

              <div className="about-skill">
                <p>Git & GitHub</p>
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
                <p>Netlify</p>
              </div>
              <div className="about-teck-tools">
                <p>Vercel</p>
              </div>
              <div className="about-teck-tools">
                <p>Render</p>
              </div>
              <div className="about-teck-tools">
                <p>Postman</p>
              </div>
              <div className="about-teck-tools">
                <p>Thunder Client</p>
              </div>

              <div className="about-teck-tools">
                <p>MongoDB Atlas</p>
              </div>
              <div className="about-teck-tools">
                <p>Firebase</p>
              </div>
              <div className="about-teck-tools">
                <p>CodePen</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
