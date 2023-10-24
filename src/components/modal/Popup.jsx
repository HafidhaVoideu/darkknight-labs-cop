import React, { useState } from "react";
import "./popup.css";
import { BiLogoDiscord } from "react-icons/bi";
import { FaXTwitter } from "react-icons/fa6";
import { BsGlobe, BsPerson } from "react-icons/bs";

import { AiFillDelete, AiOutlineClose } from "react-icons/ai";

import { BiEdit } from "react-icons/bi";
import { useGlobalContextUser } from "../../context/context";

const Popup = ({ project, closeModal, icons = true }) => {
  const { id, name, des, img, role, twitter, discord, website, partnerships } =
    project;

  const { user, setUser } = useGlobalContextUser();

  const deleteProject = () => {
    const projectToDelete = user.projects.filter(
      (project) => project.id !== id
    );
    setUser({ ...user, projects: projectToDelete });
  };

  return (
    <div id="myModal" className="modal  ">
      <div className="modal-content dropshadow">
        <div className="modal__icons">
          {icons && (
            <div className="popup__btns">
              <button className="popup__delete-btn" onClick={deleteProject}>
                <AiFillDelete />
              </button>
              <button className="popup__edit-btn">
                <BiEdit />
              </button>
            </div>
          )}

          <button onClick={closeModal} className="popup__close-btn">
            <AiOutlineClose />
          </button>
        </div>

        <article className="profile__project ">
          <img
            src={img}
            alt="project-cover"
            className="profile__project__img"
          />

          <div className="profile__project__info">
            <h1 className="proflie__project__name">{name}</h1>
            {role && (
              <div className="profile__project__role">
                <button>
                  <BsPerson />
                </button>
                <span>{role}</span>
              </div>
            )}
            <p className="profile__project__des">{des}</p>
            {/* <div className="profile__project__partnerships">
              <ul>
                <li>Partnerships:</li>
                {partnerships?.split(",").map((p, index) => (
                  <li key={`${p}-${index}`}>{p}</li>
                ))}
              </ul>
            </div> */}

            <p>
              <span> partnership: </span> {partnerships}{" "}
            </p>
          </div>

          {/* Links */}
          <div className="profile__project__links">
            {/* Discord */}
            <div className="profile__project__link">
              <button>
                <BiLogoDiscord />
              </button>
              <a href="#"> {discord} </a>
            </div>

            {/*Twitter*/}
            <div className="profile__project__link">
              <button>
                <FaXTwitter />
              </button>
              <a href="#"> {twitter} </a>
            </div>

            <div className="profile__project__link">
              <button>
                <BsGlobe />
              </button>
              <a href="#"> {website} </a>
            </div>
          </div>
        </article>
      </div>
    </div>
  );
};

export default Popup;
