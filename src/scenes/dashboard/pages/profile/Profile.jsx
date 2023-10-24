import React from "react";
import "./profile.css";
import ProfProject from "./ProfProject";
import { useGlobalContextUser } from "../../../../context/context";
import { motion } from "framer-motion";

const Profile = () => {
  const { user, setUser } = useGlobalContextUser();

  return (
    <motion.section
      initial={{ opacity: 0, y: -24 }}
      animate={{ opacity: 1, y: 0 }}
      className="dashboard-sec "
      transition={{ duration: 0.6, ease: "easeIn" }}
    >
      <section className="profile__projects">
        {user?.projects.map((project) => (
          <ProfProject key={project.id} project={project} />
        ))}
      </section>
    </motion.section>
  );
};

export default Profile;
