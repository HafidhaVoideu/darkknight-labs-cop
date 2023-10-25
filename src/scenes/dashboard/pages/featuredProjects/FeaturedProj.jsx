import React, { useEffect, useState } from "react";
import "./featured.css";
import { motion } from "framer-motion";
import Fproject from "./Fproject";

import { useGlobalContextUser } from "../../../../context/context";

const FeaturedProj = () => {
  const { projects, tab, search } = useGlobalContextUser();
  const [featuredProjects, setFeaturedProjects] = useState();

  useEffect(() => {
    const temp = projects.filter((p) => p.featured);
    setFeaturedProjects(temp);
  }, [projects]);

  return (
    <motion.section
      initial={{ opacity: 0, y: -24 }}
      animate={{ opacity: 1, y: 0 }}
      className="dashboard-sec "
      transition={{ duration: 0.6, ease: "easeIn" }}
    >
      <section className="profile__projects">
        {tab === "Featured Projects" &&
          search &&
          featuredProjects
            .filter((p) => p.name.toLowerCase().includes(search.toLowerCase()))
            .map((project) => <Fproject key={project.id} project={project} />)}

        {tab === "Featured Projects" &&
          !search &&
          featuredProjects?.map((project) => (
            <Fproject key={project.id} project={project} />
          ))}
      </section>
    </motion.section>
  );
};

export default FeaturedProj;
