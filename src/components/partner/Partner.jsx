import React from "react";
import "./partner.css";

import { easeInOut, motion } from "framer-motion";
import brand from "../../assets/brand-logo.png";

import "./partner.css";

const Partner = () => {
  return (
    <motion.article
      initial={{ opacity: 0, y: -22 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{
        ease: easeInOut,
        delay: 0.1,
      }}
    >
      <div className="partner  shadow">
        <img
          src={brand}
          alt="brand-logo"
          className="w-[40px] sm:w-[60px] h-auto"
        />
      </div>

      <h1 className="partner__title">BItcoin Max</h1>
    </motion.article>
  );
};

export default Partner;
