import React, { useState } from "react";
import { BsPerson } from "react-icons/bs";
import Popup from "../../../../components/modal/Popup";

const ProfProject = ({ project }) => {
  const [isModal, setIsModal] = useState(false);
  const [modalContent, setModalContent] = useState(null);

  const { id, name, des, img, role, partnerships } = project;
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

  return (
    <>
      {isModal && <Popup closeModal={closeModal} project={project} />}
      <article className="profile__project dropshadow" onClick={handleClick}>
        <img src={img} alt="project-cover" className="profile__project__img" />
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

          <p className="profile__project__partnerships">
            {" "}
            <span> partnership: </span> {partnerships}{" "}
          </p>
          {/* <div className="profile__project__partnerships">
            <ul>
              <li>Partnerships:</li>
              {partnerships.split(",").map((p, index) => (
                <li key={`${p}-${index}`}>{p}</li>
              ))}
            </ul>
          </div> */}
        </div>
      </article>
    </>
  );
};

export default ProfProject;
