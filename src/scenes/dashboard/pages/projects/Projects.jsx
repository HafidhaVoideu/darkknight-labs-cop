import React, { useEffect, useState } from "react";

import "./projects.css";

import Pagination from "../../../../components/pagination/Pagination";
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

const Projects = () => {
  const [isAddModal, setIsAddModal] = useState(false);
  const { projects, setProjects, setAlert } = useGlobalContextUser();
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

  const handleFusion = () => {
    if (!isSelectAll) {
      if (selectedProjects.length) {
        const temp = projects.filter(
          (p) =>
            !selectedProjects
              .slice(1, selectedProjects.length)
              .map((sp) => sp.id)
              .includes(p.id)
        );

        setProjects(temp);
        setSelectedProjects([]);
        setAlert({
          isAlert: true,
          alertMessage: `Projects have been fused with ${
            selectedProjects.slice(0)[0].name
          } `,
        });
      }
    } else
      setAlert({
        isAlert: true,
        alertMessage: "Select only the projects you want to fuse !",
      });
  };

  const closeAddModal = () => {
    setIsAddModal(false);
  };
  const openAddModal = () => {
    setIsAddModal(true);
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

      <div className="dashboard__btns">
        <button className="dashboard__dlt-btn" onClick={() => handleDelete()}>
          <AiOutlineDelete />
        </button>
        <button onClick={() => openAddModal()} className="dashboard__add-btn">
          <AiOutlineFileAdd />
        </button>
        <button className="dashboard__edit-btn" onClick={() => handleFusion()}>
          <AiOutlineMergeCells />
        </button>
        <button
          className="dashboard__select-btn"
          onClick={() => handleSelectAll()}
        >
          <BiSelectMultiple />
        </button>
      </div>

      <section className="  projects">
        {projects?.length === 0 ? (
          <p className="projects__unavailable">No projects Available</p>
        ) : (
          projects?.map((p) => (
            <Project
              key={`${p.id}-pro`}
              project={p}
              setSelectedProjects={setSelectedProjects}
              selectedProjects={selectedProjects}
              isSelectAll={isSelectAll}
            />
          ))
        )}
      </section>
    </motion.section>
  );
};

export default Projects;
