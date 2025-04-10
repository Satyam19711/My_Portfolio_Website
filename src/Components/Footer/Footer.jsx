import React from 'react'
import './Footer.css'
import user_icon from '../../assets/user_icon.svg'


const Footer = () => {
  return (
    <div className='footer'>
        <div className="footer-top">
            <div className="footer-top-left">
                <h2>Satyam Maurya</h2>
                <p>I am a devoted student of web development with expertise in React and Node.js. I love studying, coding, and creating actual projects.</p>
            </div>
            <div className="footer-top-right">
                <div className="footer-email-input">
                    <img src={user_icon} alt="" />
                    <input type="email"  placeholder='Enter your email'/>
                </div>
                <button className='footer-subscribe'>Subscribe</button>
            </div>
        </div>

<hr />

    <div className="footer-bottom">
        <p className="footer-bottom-left">@ 2025 Satyam Maurya. All right reserved.</p>

        <div className="footer-bottom-right">
            <p>Term of Services</p>
            <p>Privacy Policy</p>
            <p>Connect with me</p>
        </div>

    </div>

    </div>
  )
}

export default Footer