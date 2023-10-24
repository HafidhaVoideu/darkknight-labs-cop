import React from "react";
import Synergy from "./Synergy";
import { synergies } from "../../../../data/synergies";
import { AiOutlineDelete, AiOutlineFileAdd } from "react-icons/ai";
import { FiEdit } from "react-icons/fi";
import { motion } from "framer-motion";

import "./synergies.css";

const Synergies = () => {
  return (
    <motion.section
      initial={{ opacity: 0, y: -24 }}
      animate={{ opacity: 1, y: 0 }}
      className="dashboard-sec "
      transition={{ duration: 0.6, ease: "easeIn" }}
    >
      <div className="dashboard__btns">
        <button className="dashboard__dlt-btn">
          <AiOutlineDelete />
        </button>
        <button className="dashboard__add-btn">
          <AiOutlineFileAdd />
        </button>
        <button className="dashboard__edit-btn">
          <FiEdit />
        </button>
      </div>
      <section className="synergies">
        {synergies.map((syn) => (
          <Synergy key={syn.id} syn={syn} />
        ))}
      </section>
    </motion.section>
  );
};

export default Synergies;
