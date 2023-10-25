import React from "react";
const Fproject = ({ project }) => {
  const handleClick = () => {};

  const { name, des, img } = project;
  return (
    <article className="profile__project dropshadow" onClick={handleClick}>
      <img src={img} alt="project-cover" className="profile__project__img" />
      <div className="profile__project__info">
        <h1 className="profile__project__name">{name}</h1>
        <p className="profile__project__des">{des}</p>
      </div>
    </article>
  );
};

export default Fproject;
