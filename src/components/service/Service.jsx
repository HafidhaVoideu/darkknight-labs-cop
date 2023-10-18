import React from "react";
import { motion, easeIn } from "framer-motion";
import "./service.css";
const Service = ({ name, des, Icon }) => {
  return (
    <motion.article
      initial={{ y: -29, opacity: 0 }}
      whileInView={{ y: 0, opacity: 1 }}
      transition={{
        ease: easeIn,
        type: "spring",
        stiffness: 90,
        delay: 0.1,
        damping: 10,
      }}
      className={` text-grey  service `}
    >
      <div className="service__info ">
        <div className="service__icon ">
          <Icon />
        </div>
        <h1 className="service__title 2">{name}</h1>
      </div>

      <p className=" service__des ">{des}</p>
    </motion.article>
  );
};

export default Service;
