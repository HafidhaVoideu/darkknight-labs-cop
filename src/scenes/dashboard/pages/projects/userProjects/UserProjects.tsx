import React from "react";
import { motion } from "framer-motion";
import ProfProject from "../../profile/ProfProject";
import { useGlobalContextUser } from "../../../../../context/context";

const UserProjects = () => {
  const { projects, setProjects } = useGlobalContextUser();

  return (
    <motion.section
      initial={{ opacity: 0, y: -24 }}
      animate={{ opacity: 1, y: 0 }}
      className="dashboard-sec "
      transition={{ duration: 0.6, ease: "easeIn" }}
    >
      <section className="profile__projects">
        {projects?.map((project) => (
          <ProfProject key={project.id} project={project} icons={false} />
        ))}
      </section>
    </motion.section>
  );
};

export default UserProjects;
