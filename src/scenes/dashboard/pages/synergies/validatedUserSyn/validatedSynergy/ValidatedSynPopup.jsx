import React, { useState } from "react";
import { AiOutlineClose } from "react-icons/ai";
import CreatableSelect from "react-select/creatable";
import { useGlobalContextUser } from "../../../../../../context/context";

const ValidatedSynPopup = ({ validatedSyn, closeModal }) => {
  const { projects } = useGlobalContextUser();
  const [page, setPage] = useState(0);

  const handleBtn = () => {
    setPage((prev) => (prev = prev + 1));
  };

  const options = [
    { value: "question1", label: "question 1" },
    { value: "question2", label: "question 2" },
    { value: "question3", label: "question 3" },
    { value: "question4", label: "question 4" },
    { value: "question5", label: "question 5" },
  ];
  const options2 = [
    { value: "project1", label: "project 1" },
    { value: "project2", label: "project 2" },
    { value: "project3", label: "project 3" },
    { value: "project4", label: "project 4" },
    { value: "project5", label: "project 5" },
  ];
  const options3 = [
    { value: "role1", label: "role 1" },
    { value: "role2", label: "role 2" },
    { value: "role3", label: "role 3" },
    { value: "role4", label: "role 4" },
    { value: "role5", label: "role 5" },
  ];

  return (
    <div id="myModal" className="modal  ">
      <div className="modal-content dropshadow">
        <div className="modal__icons">
          <button onClick={closeModal} className="popup__close-btn margin--top">
            <AiOutlineClose />
          </button>
        </div>

        {page === 0 && (
          <article className="vsyn__popup ">
            <div className="vsyn__popup__info">
              <h1 className="vsyn__popup__name"> {validatedSyn.name} </h1>
              <img className="vsyn__popup__img" src={validatedSyn.img} />
              <h1 className="vsyn__popup__price"> {validatedSyn.price} </h1>
            </div>
            <button className="vsyn__popup__btn" onClick={handleBtn}>
              Synergize with {validatedSyn.name}
            </button>
          </article>
        )}

        {page === 1 && (
          <article className="vsyn__page ">
            <img className="vsyn__popup__img" src={validatedSyn.img} />

            <h1 className="vsyn__page__name">Partnerships</h1>

            <CreatableSelect
              className="popup-select"
              isMulti
              isClearable
              options={options}
            />
            <h1 className="vsyn__page__name">Projects</h1>

            <Select
              className="popup-select"
              isMulti
              isClearable
              options={options2}
            />

            <button className="vsyn__page__btn"> Validate </button>
          </article>
        )}
      </div>
    </div>
  );
};

export default ValidatedSynPopup;
