import React from "react";
import "./profile.css";
import ProfProject from "./ProfProject";
import { useGlobalContextUser } from "../../../../context/context";
import { motion } from "framer-motion";

const Profile = () => {
  const { user, tab, search } = useGlobalContextUser();

  return (
    <motion.section
      initial={{ opacity: 0, y: -24 }}
      animate={{ opacity: 1, y: 0 }}
      className="dashboard-sec "
      transition={{ duration: 0.6, ease: "easeIn" }}
    >
      <section className="profile__projects">
        {tab === "My Projects" &&
          search &&
          user.projects
            .filter((p) => p.name.toLowerCase().includes(search.toLowerCase()))
            .map((project) => (
              <ProfProject key={project.id} project={project} icons={true} />
            ))}

        {tab === "My Projects" &&
          !search &&
          user.projects?.map((project) => (
            <ProfProject key={project.id} project={project} icons={true} />
          ))}
      </section>
    </motion.section>
  );
};

export default Profile;
