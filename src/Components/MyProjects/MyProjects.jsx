import React from 'react'
import './MyProjects.css'
import theme_pattern from '../../assets/theme_pattern.svg'

import yt from '../../Assets/yt.png'
import spotify from '../../Assets/spotifyyyy.png'

const MyProjects = () => {
  return (
    <div id='projects' className='myprojects'>

        <div className='project-logo'>
            <h1>Projects</h1>
            <img src={theme_pattern} alt="" />

        </div>

        <div className="project-section">
        
            <div className="project-left">
            

            <h3>Youtube Clone</h3>
            <img src={yt} alt="" />

            <p>YouTube clone built using React and Tailwind CSS. It features a clean, responsive UI with video playback support, category-based browsing like news and gaming, and a familiar layout. The project focuses on UI/UX design and seamless user interaction for a realistic experience.</p>
            <div className="link">
            <a href="https://ytubee.vercel.app/" target="_blank">Live link</a>
            <a href="https://github.com/Satyam19711/React_YT" target="_blank">Github</a>
            </div>
            </div>

        <div className="project-right">
            <h3>Spotify Clone</h3>
            <img src={spotify} alt="" />
            <p>Welcome to the Spotify Clone project! This is a frontend application built to replicate the core features of the popular music streaming platform, utilizing React and Tailwind CSS with a focus on responsive design, album sections, and basic music playback controls.</p>
            
            <div className="link">
            <a href="https://satyamspotifyclone.netlify.app/" target="_blank">Live link</a>
            <a href="https://github.com/Satyam19711/spotify-clone" target="_blank">Github</a>
            </div>


        </div>
    

        </div>

    </div>
  )
}

export default MyProjects