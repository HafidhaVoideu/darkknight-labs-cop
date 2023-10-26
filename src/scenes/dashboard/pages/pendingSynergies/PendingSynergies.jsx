import React from "react";

import { motion } from "framer-motion";
import { useGlobalContextUser } from "../../../../context/context";
import PendingSynergy from "./PendingSynergy";

const PendingSynergies = () => {
  const { pendingSynergies, search, tab } = useGlobalContextUser();

  return (
    <motion.section
      initial={{ opacity: 0, y: -24 }}
      animate={{ opacity: 1, y: 0 }}
      className="dashboard-sec "
      transition={{ duration: 0.6, ease: "easeIn" }}
    >
      <section className="synergies">
        {tab === "Pending Synergies" &&
          search &&
          pendingSynergies
            .filter((p) => p.name.toLowerCase().includes(search.toLowerCase()))
            .map((syn) => <PendingSynergy key={syn.id} pensyn={syn} />)}

        {tab === "Pending Synergies" &&
          !search &&
          pendingSynergies?.map((syn) => (
            <PendingSynergy key={syn.id} pensyn={syn} />
          ))}
      </section>
    </motion.section>
  );
};

export default PendingSynergies;
