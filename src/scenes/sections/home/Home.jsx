import React from "react";
import { motion } from "framer-motion";
import logo from "../../../assets/logo.png";
import { TypingText } from "../../../components/CustomText";
import { staggerContainer } from "../../../utils/motion";
import "./home.css";
const Home = () => {
  return (
    <section id="home" className="home">
      <div className="home__div">
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.6, ease: "easeIn" }}
        >
          <img src={logo} alt="logo" className=" home__img " />
        </motion.div>

        <a href="#" className="home__btn glow-effect">
          Connect To Discord
          <svg class="glow-container">
            <rect
              pathLength="100"
              stroke-linecap="round"
              class="glow-blur"
            ></rect>
            <rect
              pathLength="100"
              stroke-linecap="round"
              class="glow-line"
            ></rect>
          </svg>
        </a>

        <motion.div
          variants={staggerContainer()}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
        >
          <TypingText title="  The whole is greater than the sum of its parts" />
        </motion.div>
      </div>
    </section>
  );
};

export default Home;
