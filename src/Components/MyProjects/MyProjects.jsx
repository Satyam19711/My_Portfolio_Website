import React from "react";
import "./MyProjects.css";
import theme_pattern from "../../assets/theme_pattern.svg";
import yt from "../../assets/Yt-home.png";
import spotify from "../../assets/spotifyyyy.png";

const MyProjects = () => {
  return (
    <div id="projects" className="myprojects">
      <div className="project-logo">
        <h1>Projects</h1>
        <img src={theme_pattern} alt="" />
      </div>

      <div className="project-section">
        <div className="project-left">
          <h3>Youtube Clone App</h3>
          <img src={yt} alt="" />

          <p>
            YouTube clone built using React and Tailwind CSS. It offers a clean,
            fully responsive UI with real video playback, a working search bar
            powered by live API data, and category-based browsing like news and
            gaming. The project focuses on smooth navigation, improved UI/UX,
            and a realistic YouTube-style viewing experience.
          </p>
          <div className="link">
            <a href="https://satyam1919-youtube.vercel.app" target="_blank">
              Live link
            </a>
            <a href="https://github.com/Satyam19711/React_YT" target="_blank">
              Github
            </a>
          </div>
        </div>

        <div className="project-right">
          <h3> Spotify Full-Stack Music App</h3>
          <img src={spotify} alt="" />
          <p>
            Built as a full-stack music streaming app with a React frontend and
            Node.js/Express backend. Features responsive album and playlist
            sections, smooth music playback controls, secure audio/image uploads
            via Cloudinary, authentication, and an Admin panel to
            add/update/delete songs and manage content.
          </p>

          <div className="link">
            <a
              href="https://satyam1919-spotify-clone.vercel.app"
              target="_blank"
            >
              Live link
            </a>
            <a
              href="https://github.com/Satyam19711/spotify-clone"
              target="_blank"
            >
              Github
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MyProjects;
