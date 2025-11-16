import React, { useRef, useState } from "react";
import "./Navbar.css";
import underline from "../../assets/nav_underline.svg";
import AnchorLink from "react-anchor-link-smooth-scroll";
import open_new from "../../assets/open_new.png";
import close_new from "../../assets/close_new.png";

const Navbar = () => {
  const [menu, setMenu] = useState("home");
  const menuRef = useRef();

  const openMenu = () => {
    menuRef.current.style.right = "0";
  };

  const closeMenu = () => {
    menuRef.current.style.right = "-350px";
  };

  const handleMenuClick = (section) => {
    setMenu(section);
    closeMenu();
  };

  return (
    <div className="navbar">
      <h1 className="nav-logo">Satyam's Portfolio</h1>
      <img src={open_new} onClick={openMenu} className="nav-mob-open" alt="" />

      <ul ref={menuRef} className="nav-menu">
        <img
          src={close_new}
          onClick={closeMenu}
          alt=""
          className="nav-mob-close"
        />

        <li>
          <AnchorLink className="anchor-link" href="#home">
            <p onClick={() => handleMenuClick("home")}>Home</p>
          </AnchorLink>
          {menu === "home" ? <img src={underline} alt="" /> : null}
        </li>

        <li>
          <AnchorLink className="anchor-link" offset={50} href="#about">
            <p onClick={() => handleMenuClick("about")}>About Me</p>
          </AnchorLink>
          {menu === "about" ? <img src={underline} alt="" /> : null}
        </li>

        <li>
          <AnchorLink className="anchor-link" offset={50} href="#projects">
            <p onClick={() => handleMenuClick("project")}>Projects</p>
          </AnchorLink>
          {menu === "project" ? <img src={underline} alt="" /> : null}
        </li>

        <li>
          <AnchorLink className="anchor-link" offset={50} href="#git">
            <p onClick={() => handleMenuClick("git")}>Git</p>
          </AnchorLink>
          {menu === "git" ? <img src={underline} alt="" /> : null}
        </li>

        <li>
          <AnchorLink className="anchor-link" offset={50} href="#contact">
            <p onClick={() => handleMenuClick("contact")}>Contact</p>
          </AnchorLink>
          {menu === "contact" ? <img src={underline} alt="" /> : null}
        </li>
      </ul>

      <div className="nav-connect">
        <AnchorLink className="anchor-link" offset={50} href="#contact">
          Connect With Me
        </AnchorLink>
      </div>
    </div>
  );
};

export default Navbar;
