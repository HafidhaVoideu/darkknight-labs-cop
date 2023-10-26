import React, { useState } from "react";

import "./projects.css";
import { motion } from "framer-motion";
import EditProject from "./editProject/EditProject";

import {
  AiOutlineDelete,
  AiOutlineFileAdd,
  AiOutlineMergeCells,
} from "react-icons/ai";

import { BiSelectMultiple } from "react-icons/bi";

import Project from "./project/Project";
import { useGlobalContextUser } from "../../../../context/context";
import FuseProject from "./fuseProject/FuseProject";

const Projects = () => {
  const { projects, setProjects, setAlert, tab, search } =
    useGlobalContextUser();

  const [isAddModal, setIsAddModal] = useState(false);
  const [isFuseModal, setIsFuseModal] = useState(false);

  const [selectedProjects, setSelectedProjects] = useState([]);
  const [isSelectAll, setIsSelectAll] = useState(false);

  const handleDelete = () => {
    if (selectedProjects.length) {
      const temp = projects.filter(
        (p) => !selectedProjects.map((sp) => sp.id).includes(p.id)
      );

      setProjects([...temp]);

      if (selectedProjects.length > 1)
        setAlert({
          isAlert: true,
          alertMessage: "Projects have been Deleted",
        });
      else
        setAlert({
          isAlert: true,
          alertMessage: "Project has been Deleted",
        });
      setSelectedProjects([]);
    }
    //  many delete requests
  };
  const handleSelectAll = () => {
    setIsSelectAll(!isSelectAll);
  };

  // Add Modal Handles

  const closeAddModal = () => {
    setIsAddModal(false);
  };
  const openAddModal = () => {
    setIsAddModal(true);
  };

  // Fuse Modal Handles

  const closeFuseModal = () => {
    setIsFuseModal(false);
  };
  const openFuseModal = () => {
    setIsFuseModal(true);
  };

  // const [page, setPage] = useState(1);

  // const maxProjects = 6;
  return (
    <motion.section
      initial={{ opacity: 0, y: -24 }}
      animate={{ opacity: 1, y: 0 }}
      className="dashboard-sec "
      transition={{ duration: 0.6, ease: "easeIn" }}
    >
      {isAddModal && <EditProject closeModal={closeAddModal} />}
      {isFuseModal && <FuseProject closeModal={closeFuseModal} />}

      <div className="dashboard__btns">
        <button className="dashboard__dlt-btn" onClick={() => handleDelete()}>
          <AiOutlineDelete />
        </button>
        <button onClick={() => openAddModal()} className="dashboard__add-btn">
          <AiOutlineFileAdd />
        </button>
        <button className="dashboard__edit-btn" onClick={() => openFuseModal()}>
          <AiOutlineMergeCells />
        </button>
        <button
          className="dashboard__select-btn"
          onClick={() => handleSelectAll()}
        >
          <BiSelectMultiple />
        </button>
      </div>
      <section className="projects">
        {tab === "Projects" &&
          search &&
          projects
            ?.filter((p) => p.name.toLowerCase().includes(search.toLowerCase()))
            .map((p) => (
              <Project
                key={p.id}
                project={p}
                setSelectedProjects={setSelectedProjects}
                selectedProjects={selectedProjects}
                isSelectAll={isSelectAll}
              />
            ))}

        {tab === "Projects" &&
          !search &&
          projects?.map((p) => (
            <Project
              key={p.id}
              project={p}
              setSelectedProjects={setSelectedProjects}
              selectedProjects={selectedProjects}
              isSelectAll={isSelectAll}
            />
          ))}
      </section>
    </motion.section>
  );
};

export default Projects;
