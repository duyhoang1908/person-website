import React from "react";
import {Link} from "react-router-dom"

const RightBar = ({route, setRoute}) => {
  return (
    <div className="rightbar">
      <div className="content">
        <h1>Hello</h1>
        <h2>Here's who I am & what I do</h2>
        <div className="btn__group">
          <Link to="/resume"><button className="active" onClick={() => setRoute("resume")}>RESUME</button></Link>
          <Link to="/projects"><button className="no-active" onClick={() => setRoute("projects")}>PROJECTS</button></Link>
        </div>
        <p>
          Hello I'm Duy. I’m interested in Web Develop. Passionate about
          code, constantly learn and discover new technology. Doing my best in
          order to complete my task and I want to become a expert IT I’m a great
          place for you to tell a story and let your users know a little more
          about you.
          <br />
          <br />
          I’m a great place for you to tell a story and let your users know a
          little more about you.
        </p>
      </div>
    </div>
  );
};

export default RightBar;
