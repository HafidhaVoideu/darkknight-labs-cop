import React, { useState } from "react";
import Synergy from "./Synergy";
import {
  AiOutlineDelete,
  AiOutlineFileAdd,
  AiOutlineClose,
} from "react-icons/ai";
import { FiEdit } from "react-icons/fi";
import { motion } from "framer-motion";

import "./synergies.css";
import "./adminSynergies/adminSyn.css";

import { useGlobalContextUser } from "../../../../context/context";
import EditSyngergy from "./adminSynergies/EditSyngergy";
import AddSynergy from "./adminSynergies/AddSynergy";
import DeleteSynergy from "./adminSynergies/DeleteSynergy";

const Synergies = () => {
  const { search, tab, synergies, user } = useGlobalContextUser();
  const [operation, setOperation] = useState("");

  const [isModal, setIsModal] = useState(false);
  // console.log("ssynergies", sy)

  return (
    <motion.section
      initial={{ opacity: 0, y: -24 }}
      animate={{ opacity: 1, y: 0 }}
      className="dashboard-sec "
      transition={{ duration: 0.6, ease: "easeIn" }}
    >
      {user.role === "admin" && (
        <div className="dashboard__btns">
          {/* if role === admin */}

          <button
            className="dashboard__add-btn"
            onClick={() => {
              setOperation("add");
              setIsModal("true");
            }}
          >
            <AiOutlineFileAdd />
          </button>
          <button className="dashboard__edit-btn">
            <FiEdit
              onClick={() => {
                setIsModal("true");
                setOperation("edit");
              }}
            />
          </button>
          <button className="dashboard__dlt-btn">
            <AiOutlineDelete
              onClick={() => {
                setOperation("dlt");
                setIsModal("true");
              }}
            />
          </button>
        </div>
      )}

      {isModal && (
        <div className="modal  ">
          <div className="modal-content dropshadow">
            <div className="modal__icons">
              <button
                onClick={() => setIsModal(false)}
                className="popup__close-btn"
              >
                <AiOutlineClose />
              </button>
            </div>

            {operation === "edit" && <EditSyngergy setIsModal={setIsModal} />}
            {operation === "add" && <AddSynergy setIsModal={setIsModal} />}
            {operation === "dlt" && <DeleteSynergy setIsModal={setIsModal} />}
          </div>
        </div>
      )}

      {/* *********************** admin ****************** */}
      <section className="synergies">
        {tab === "Synergies" &&
          search &&
          synergies
            .filter((p) => p.name.toLowerCase().includes(search.toLowerCase()))
            .map((syn) => <Synergy key={syn.id} syn={syn} />)}

        {tab === "Synergies" &&
          !search &&
          synergies?.map((syn) => <Synergy key={syn.id} syn={syn} />)}
      </section>
    </motion.section>
  );
};

export default Synergies;
