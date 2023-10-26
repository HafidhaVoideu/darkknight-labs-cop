import React, { useState, useEffect } from "react";
import { BsPerson } from "react-icons/bs";
import Popup from "../../../../components/modal/Popup";

const ProfProject = ({ project, icons = true }) => {
  const [isModal, setIsModal] = useState(false);
  const [modalContent, setModalContent] = useState(null);
  const { id, name, des, img, roles, partnerships } = project;

  const openModal = () => {
    setIsModal(true);
  };
  const closeModal = () => {
    setIsModal(false);
  };
  const handleClick = () => {
    openModal();
    setModalContent(project);
  };

  useEffect(() => {
    const body = document.querySelector("body");
    body.style.overflow = isModal ? "hidden" : "auto";
  }, [isModal]);
  return (
    <>
      {isModal && (
        <Popup closeModal={closeModal} project={project} icons={icons} />
      )}
      <article className="profile__project dropshadow" onClick={handleClick}>
        <img src={img} alt="project-cover" className="profile__project__img" />
        <div className="profile__project__info">
          <h1 className="profile__project__name">{name}</h1>
          {roles && (
            <ul className="profile__project__role  separator ">
              <li>
                <BsPerson />
              </li>
              {roles?.map((r) => (
                <li key={r.id}>{r.label}</li>
              ))}
            </ul>
          )}
          <p className="profile__project__des">{des}</p>

          {partnerships && (
            <ul className="profile__project__partnerships separator">
              <li>Partnerships:</li>
              {partnerships.map((p) => (
                <li key={p.id}>{p.label}</li>
              ))}
            </ul>
          )}
        </div>
      </article>
    </>
  );
};

export default ProfProject;
