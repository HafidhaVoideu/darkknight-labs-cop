import React, { useEffect, useState } from "react";
import "./project.css";
import EditProject from "../editProject/EditProject";
import Popup from "../../../../../components/modal/Popup";
import { useGlobalContextUser } from "../../../../../context/context";

import { FiMoreHorizontal } from "react-icons/fi";
import { BiEdit } from "react-icons/bi";

// todo ****************************************************************

const Project = ({
  project,
  setSelectedProjects,
  selectedProjects,
  isSelectAll,
}) => {
  const [isEditModal, setIsEditModal] = useState(false);
  const [isMoreModal, setIsMoreModal] = useState(false);
  const [isChecked, setIsChecked] = useState(false);
  const { name, discord, img, partnerships } = project;
  const { projects } = useGlobalContextUser();

  const closeEditModal = () => {
    setIsEditModal(false);
  };
  const closeMoreModal = () => {
    setIsMoreModal(false);
  };
  const openEditModal = () => {
    setIsEditModal(true);
  };
  const openMoreModal = () => {
    setIsMoreModal(true);
  };

  const handleCheckbox = () => {
    setIsChecked(!isChecked);
  };

  useEffect(() => {
    if (isChecked) {
      setSelectedProjects([...selectedProjects, project]);
    } else {
      const filteredProjects = selectedProjects.filter(
        (p) => p.id !== project.id
      );
      setSelectedProjects([...filteredProjects]);
    }
  }, [isChecked]);

  useEffect(() => {
    if (!selectedProjects.length) setIsChecked(false);
  }, [selectedProjects.length]);

  useEffect(() => {
    if (isSelectAll) {
      setIsChecked(true);
      setSelectedProjects([...projects]);
    } else {
      setIsChecked(false);
      setSelectedProjects([]);
    }
  }, [isSelectAll]);
  return (
    <article className="project">
      <div className="project__select">
        <input
          type="checkbox"
          checked={isChecked}
          onChange={() => handleCheckbox()}
        />
      </div>

      <img src={img} alt={name} className="project__img" />
      <p className="project__name">{name}</p>
      <p className="project__discord">{discord}</p>

      <p className="project__partnerships">{partnerships}</p>
      {/* <ul className="project__partnerships">
        {partnerships?.map((p, index) => (
          <li key={index} className="project__partnership"></li>
        ))}
      </ul> */}

      {isMoreModal && (
        <Popup project={project} closeModal={closeMoreModal} icons={false} />
      )}
      {isEditModal && (
        <EditProject project={project} closeModal={closeEditModal} />
      )}

      <div className="project__btns">
        <button className="project__btn" onClick={() => openEditModal()}>
          <BiEdit />
        </button>
        <button className="project__btn " onClick={() => openMoreModal()}>
          <FiMoreHorizontal />
        </button>
      </div>
    </article>
  );
};

export default Project;
