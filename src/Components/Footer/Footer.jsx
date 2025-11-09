import React, { useState } from "react";
import "./Footer.css";
import user_icon from "../../assets/user_icon.svg";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const Footer = () => {
  const [email, setEmail] = useState("");

  const handleSubscribe = async () => {
    if (!email) {
      toast.warn("⚠️ Please enter your email address.", {
        position: "top-center",
        autoClose: 2000,
      });
      return;
    }

    const endpoint = "https://formspree.io/f/mdkynpza";

    try {
      const res = await fetch(endpoint, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email }),
      });

      if (res.ok) {
        toast.success("✅ Thanks for subscribing!", {
          position: "top-center",
          autoClose: 2000,
        });
        setEmail("");
      } else {
        toast.error("❌ Could not send — please try again.", {
          position: "top-center",
          autoClose: 2000,
        });
      }
    } catch (err) {
      toast.error("🚫 Network error. Please check your connection.", {
        position: "top-center",
        autoClose: 2000,
      });
    }
  };

  return (
    <div className="footer">
      <div className="footer-top">
        <div className="footer-top-left">
          <h2>Satyam Maurya</h2>
          <p>
            I am a devoted student of web development with expertise in React
            and Node.js. I love studying, coding, and creating actual projects.
          </p>
        </div>

        <div className="footer-top-right">
          <div className="footer-email-input">
            <img src={user_icon} alt="" />
            <input
              type="email"
              placeholder="Enter your email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
          </div>
          <button className="footer-subscribe" onClick={handleSubscribe}>
            Subscribe
          </button>
        </div>
      </div>

      <hr />

      <div className="footer-bottom">
        <p className="footer-bottom-left">
          @ 2025 Satyam Maurya. All right reserved.
        </p>
      </div>

      <ToastContainer />
    </div>
  );
};

export default Footer;
