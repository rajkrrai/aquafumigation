import React from "react";
import logo from "../../img/logoipsum-logo-4.svg";
import { NavLink } from "react-router-dom";
const Navbar = () => {
  return (
    <div className="navbar">
      <img src={logo} className="logo-img" alt="Aqua fumigation logo" />

      <nav>
        <ul>
          <li>
            <i></i>
            <a className="navlinks" href="/">
              Home
            </a>
            {/* <NavLink to="/" activeClassName="selectedLink">
              Home
            </NavLink> */}
          </li>
          <li>
            <i></i>
            <a className="navlinks" href="#awards-achievements">
              Awards
            </a>
            {/* <NavLink to="#awards-achievements">Home</NavLink> */}
          </li>
          <li>
            <i></i>
            <a className="navlinks" href="#dimensions-section">
              Dimensions
            </a>
          </li>
          <li>
            <i></i>
            <a className="navlinks" href="/ispm-countries">
              ISPM Countries
            </a>
          </li>
          <li className="pill">
            <i></i>
            <a className="navlinks" href="#corona-info">
              Corona
            </a>
            <span className="pill-text">New</span>
          </li>
          <li>
            <i></i>
            <a className="navlinks" href="/faqs">
              FAQs
            </a>
          </li>
          <li>
            <i></i>
            <a className="navlinks" href="#contact-us">
              Contact us
            </a>
          </li>
        </ul>{" "}
      </nav>
      {/* </div> */}
    </div>
  );
};

export default Navbar;
