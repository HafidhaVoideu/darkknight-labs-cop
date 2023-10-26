import React from "react";
import { motion } from "framer-motion";
import ProfProject from "../../profile/ProfProject";
import { useGlobalContextUser } from "../../../../../context/context";

const UserProjects = () => {
  const { projects, tab, search } = useGlobalContextUser();

  return (
    <motion.section
      initial={{ opacity: 0, y: -24 }}
      animate={{ opacity: 1, y: 0 }}
      className="dashboard-sec "
      transition={{ duration: 0.6, ease: "easeIn" }}
    >
      <section className="profile__projects">
        {tab === "Projects" &&
          search &&
          projects
            ?.filter((p) => p.name.toLowerCase().includes(search.toLowerCase()))
            .map((project) => (
              <ProfProject key={project.id} project={project} icons={false} />
            ))}

        {tab === "Projects" &&
          !search &&
          projects?.map((project) => (
            <ProfProject key={project.id} project={project} icons={false} />
          ))}
      </section>
    </motion.section>
  );
};

export default UserProjects;
