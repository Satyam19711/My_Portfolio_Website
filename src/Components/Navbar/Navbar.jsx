import React, { useState } from "react";
import "./Navbar.css";
import underline from "../../assets/nav_underline.svg";
import AnchorLink from "react-anchor-link-smooth-scroll";
import open_new from "../../assets/open_new.png";
import close_new from "../../assets/close_new.png";

const Navbar = () => {
  const [menu, setMenu] = useState("home");
  const [isOpen, setIsOpen] = useState(false);

  const openMenu = () => setIsOpen(true);
  const closeMenu = () => setIsOpen(false);

  const handleMenuClick = (section) => {
    setMenu(section);
    closeMenu();
  };

  return (
    <div className="navbar">
      <h1 className="nav-logo">Satyam's Portfolio</h1>

      {!isOpen && (
        <img
          src={open_new}
          onClick={openMenu}
          className="nav-mob-open"
          alt="open menu"
        />
      )}

      <ul className={`nav-menu ${isOpen ? "active" : ""}`}>
        <img
          src={close_new}
          onClick={closeMenu}
          alt="close menu"
          className="nav-mob-close"
        />

        <li>
          <AnchorLink href="#home" className="anchor-link">
            <p onClick={() => handleMenuClick("home")}>Home</p>
          </AnchorLink>
          {menu === "home" && <img src={underline} alt="" />}
        </li>

        <li>
          <AnchorLink href="#about" offset={50} className="anchor-link">
            <p onClick={() => handleMenuClick("about")}>About Me</p>
          </AnchorLink>
          {menu === "about" && <img src={underline} alt="" />}
        </li>

        <li>
          <AnchorLink href="#projects" offset={50} className="anchor-link">
            <p onClick={() => handleMenuClick("project")}>Projects</p>
          </AnchorLink>
          {menu === "project" && <img src={underline} alt="" />}
        </li>

        <li>
          <AnchorLink href="#git" offset={50} className="anchor-link">
            <p onClick={() => handleMenuClick("git")}>Git</p>
          </AnchorLink>
          {menu === "git" && <img src={underline} alt="" />}
        </li>

        <li>
          <AnchorLink href="#contact" offset={50} className="anchor-link">
            <p onClick={() => handleMenuClick("contact")}>Contact</p>
          </AnchorLink>
          {menu === "contact" && <img src={underline} alt="" />}
        </li>
      </ul>

      <div className="nav-connect">
        <AnchorLink href="#contact" offset={50} className="anchor-link">
          Connect With Me
        </AnchorLink>
      </div>
    </div>
  );
};

export default Navbar;
