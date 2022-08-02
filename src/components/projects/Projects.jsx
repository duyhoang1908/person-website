import React from "react";
import { FaGithub } from "react-icons/fa";
import facebookPic from "../../media/facebook.jpg"
import tictacPic from "../../media/tictactoe.jpg"
import "./projects.scss";

const Projects = () => {
  const projects = [
    {
      id: 1,
      name: "Onoff-clone",
      description:
        "This is a project to copy the onoff.vn website and customize it.",
      function: "Main functions such as: sort, cart, login, register...",
      github: "https://github.com/duyhoang1908/onoff-clone",
      img: "https://onoff-clone.netlify.app/static/media/banner.82165e9b.jpg",
    },
    {
      id: 2,
      name: "Facebook-clone",
      description:
        "This is a project to copy the facebook.com website and customize it",
      function:
        "Main functions such as: post, like and comment, register, messenger...",
      github: "https://github.com/duyhoang1908/facebook-clone",
      img: facebookPic,
    },
    {
      id: 3,
      name: "Tic Tac Toe",
      description: "This is a fun game based on tic tac toe game",
      function: "Play with your friend",
      github: "https://github.com/duyhoang1908/tic-tac-toe",
      img: tictacPic,
    },
    {
      id: 4,
      name: "Todo App",
      description: "This is a project to help you record your to-dos",
      function: "Add todo, remove, change",
      github: "https://github.com/duyhoang1908/TodoApp",
      img: "https://i.imgur.com/Nd7sUAp.png",
    },
  ];
  return (
    <div className="projects">
      <div className="content">
        <h1 className="content__title">
          <span></span>
          Projects
        </h1>
        <div className="subtitle">
          I'm a paragraph. Click here to add your own text and edit me. It’s
          easy. Just click “Edit Text” or double click me to add your own
          content and make changes to the font. I’m a great place for you to
          tell a story and let your users know a little more about you.
        </div>

        <div className="projects__item">
          {projects.map((project) => (
            <div key={project.id} className="box">
              <div className="about">
                <div>
                  <h1 className="about__name">{project.name}</h1>
                  <p>{project.description}</p>
                  <p>{project.function}</p>
                </div>
                <a href={project.github} target="_blank">
                  <FaGithub />
                </a>
              </div>
              <div className="project__img">
                <img src={project.img} alt="" />
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Projects;
