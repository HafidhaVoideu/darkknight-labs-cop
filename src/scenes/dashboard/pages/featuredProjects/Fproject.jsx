import React, { useState, useEffect } from "react";
import FeaturedPopup from "./FeaturedPopup";

const Fproject = ({ project }) => {
  const [isModal, setIsModal] = useState(false);

  const openModal = () => {
    setIsModal(true);
  };
  const closeModal = () => {
    setIsModal(false);
  };

  useEffect(() => {
    const body = document.querySelector("body");
    body.style.overflow = isModal ? "hidden" : "auto";
  }, [isModal]);

  const { name, des, img } = project;
  return (
    <>
      {isModal && <FeaturedPopup closeModal={closeModal} fproject={project} />}
      <article className="profile__project" onClick={openModal}>
        <img src={img} alt="project-cover" className="profile__project__img" />
        <div className="profile__project__info">
          <h1 className="profile__project__name">{name}</h1>
          <p className="profile__project__des">
            {des.substring(0, 190)}
            <span> ...Read More</span>
          </p>
        </div>
      </article>
    </>
  );
};

export default Fproject;
