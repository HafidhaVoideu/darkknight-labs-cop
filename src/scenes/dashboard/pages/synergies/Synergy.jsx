import React from "react";
const Synergy = ({ syn }) => {
  const { img, name, price } = syn;

  return (
    <article className="synergy">
      <img src={img} alt={name} className="synergy__img" />
      <div className="synergy__info">
        <h1 className="synergy__name">{name}</h1>
        <p className="synergy__price">{price} Idrkn </p>
      </div>
    </article>
  );
};

export default Synergy;
