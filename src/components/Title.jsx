import React from "react";
import { motion } from "framer-motion";
import { textVariant2 } from "../utils/motion";

const Title = ({ text }) => {
  return (
    <div className="flex flex-col items-center gap-3  my-14  lg:my-20">
      <motion.h1
        className=" text-effect title"
        variants={textVariant2}
        initial="hidden"
        whileInView="show"
      >
        {text}
      </motion.h1>
    </div>
  );
};

export default Title;
