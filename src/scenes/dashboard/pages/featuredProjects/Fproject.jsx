import React, { useState } from "react";
import FeaturedPopup from "./FeaturedPopup";
const Fproject = ({ project }) => {
  const [isModal, setIsModal] = useState(false);

  const openModal = () => {
    setIsModal(true);
  };
  const closeModal = () => {
    setIsModal(false);
  };

  const handleClick = () => {};

  const { name, des, img } = project;
  return (
    <>
      {isModal && <FeaturedPopup closeModal={closeModal} fproject={project} />}
      <article className="profile__project dropshadow" onClick={openModal}>
        <img src={img} alt="project-cover" className="profile__project__img" />
        <div className="profile__project__info">
          <h1 className="profile__project__name">{name}</h1>
          <p className="profile__project__des">{des}</p>
        </div>
      </article>
    </>
  );
};

export default Fproject;
