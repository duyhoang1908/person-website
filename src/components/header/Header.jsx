import React from "react";
import {Link} from 'react-router-dom'

import "./header.scss"

const Header = ({route,setRoute}) => {
  console.log(route)
  return (
    <div className="header">
      <Link to="/" className="logo" onClick={() => setRoute("home")}>
        <span></span>
        <p className="name">HOANG DUY</p>
        <p>/</p>
        <p>FRONT-END DEVELOPER</p>
      </Link>

      <div className="menu">
        <Link style={{color:route === "home"?"rgb(0, 80, 255)":"#000000"}} onClick={() => setRoute("home")} to="/" className="menu__item">ABOUT ME</Link>
        <Link style={{color:route === "resume"?"rgb(0, 80, 255)":"#000000"}} onClick={() => setRoute("resume")} to="/resume" className="menu__item">RESUME</Link>
        <Link style={{color:route === "projects"?"rgb(0, 80, 255)":"#000000"}} onClick={() => setRoute("projects")} to="/projects" className="menu__item">PROJECTS</Link>
      </div>
    </div>
  );
};

export default Header;
