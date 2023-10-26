import React from "react";
import { synergies } from "../../../../../../data/synergies";
import { motion } from "framer-motion";

import ValidatedSyn from "../validatedSynergy/ValidatedSyn";

const ValidatedSynergies = () => {
  return (
    <motion.section
      initial={{ opacity: 0, y: -24 }}
      animate={{ opacity: 1, y: 0 }}
      className="dashboard-sec "
      transition={{ duration: 0.6, ease: "easeIn" }}
    >
      <section className="synergies">
        {synergies.map((syn) => (
          <ValidatedSyn key={syn.id} syn={syn} />
        ))}
      </section>
    </motion.section>
  );
};

export default ValidatedSynergies;
