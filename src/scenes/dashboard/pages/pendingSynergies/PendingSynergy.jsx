import React, { useState } from "react";
import PopupPendingSynergy from "./PopupPendingSynergy";

const PendingSynergy = ({ pensyn }) => {
  const { img, name, price } = pensyn;
  const [isModal, setIsModal] = useState(false);
  const openModal = () => {
    setIsModal(true);
  };
  const closeModal = () => {
    console.log("close");
    setIsModal(false);
  };
  return (
    <>
      {isModal && (
        <PopupPendingSynergy closeModal={closeModal} pendingSyn={pensyn} />
      )}
      <article className="synergy " onClick={openModal}>
        <img src={img} alt={name} className="synergy__img" />

        <div className="synergy__info">
          <h1 className="synergy__name">{name}</h1>
          <p className="synergy__price">{price}</p>
        </div>
      </article>
    </>
  );
  p;
};

export default PendingSynergy;
