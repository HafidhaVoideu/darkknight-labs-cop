import React from "react";
import { AnimatePresence, motion, useCycle } from "framer-motion";
import profile from "../../../assets/profile.png";
import { FaFacebookSquare, FaTelegramPlane, FaInstagram } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";

import { AiOutlineClose } from "react-icons/ai";
import { FiMenu } from "react-icons/fi";
import { useNavigate } from "react-router-dom";

import "./sidebar.css";

const Sidebar = ({ tab, setTab }) => {
  const [open, cycleOpen] = useCycle(false, true);

  const navigate = useNavigate();

  const links = [
    { name: " My Projects", to: "/myprojects", id: 1 },
    { name: "Projects", to: "/projects", id: 2 },
    { name: "Synergies", to: "/synergies", id: 3 },
    { name: "Ruffles", to: "#", id: 4 },
    { name: "Auctions", to: "#", id: 5 },
    { name: "FAQ", to: "#", id: 6 },
  ];
  const itemVariants = {
    closed: {
      opacity: 0,
    },
    open: { opacity: 1 },
  };
  const sideVariants = {
    closed: {
      transition: {
        staggerChildren: 0.2,
        staggerDirection: -1,
      },
    },
    open: {
      transition: {
        staggerChildren: 0.2,
        staggerDirection: 1,
      },
    },
  };
  return (
    <main>
      <AnimatePresence>
        {open && (
          <motion.aside
            className="dashboard-aside"
            initial={{ width: 0 }}
            animate={{
              width: 300,
            }}
            exit={{
              width: 0,
              transition: { delay: 0.7, duration: 0.3 },
            }}
          >
            <div className="dashboard-aside__info">
              <img
                src={profile}
                alt="profile"
                className="dashboard-aside__img"
              />

              <div className="dashboard-aside__user">
                <p>Super Marxist</p>
                <p>(user)</p>
              </div>

              <div className="dashboard-aside__wallet">
                <p>
                  Drkn Wallet:
                  <span> 3000 drkn </span>
                </p>
                <p>
                  Idrkn Wallet:
                  <span> 5000 Idrkn </span>
                </p>
              </div>
            </div>

            <button
              className="dashboard-aside__btn dashboard-aside__btn--close "
              onClick={() => cycleOpen()}
            >
              <AiOutlineClose />
            </button>
            <motion.div
              className="dashboard-aside__list"
              initial="closed"
              animate="open"
              exit="closed"
              variants={sideVariants}
            >
              {links.map(({ name, to, id }) => (
                <motion.a
                  key={id}
                  href="#"
                  whileHover={{ scale: 1.1 }}
                  variants={itemVariants}
                  onClick={() => {
                    setTab(name);
                    navigate(to);
                  }}
                >
                  {name}
                </motion.a>
              ))}

              <div className="dashboard-aside__socials">
                <a href="#">
                  <FaXTwitter />
                </a>
                <a href="#">
                  <FaTelegramPlane />
                </a>
                <a href="#">
                  <FaInstagram />
                </a>
                <a href="#">
                  <FaFacebookSquare />
                </a>
              </div>
            </motion.div>
          </motion.aside>
        )}
      </AnimatePresence>
      <button
        className="dashboard-aside__btn dashboard-aside__btn--open   "
        onClick={() => cycleOpen()}
      >
        <FiMenu />
      </button>
    </main>
  );
};

export default Sidebar;