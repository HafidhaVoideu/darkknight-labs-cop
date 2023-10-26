import React, { useEffect, useState } from "react";
import Select from "react-select";

import { useGlobalContextUser } from "../../../../../context/context";
const EditSyngergy = ({ setIsModal }) => {
  const [select, setSelect] = useState();
  const [price, setPrice] = useState();

  const { synergies, setSynergies } = useGlobalContextUser();

  const options = synergies.map((p) => {
    return { value: p.id, label: p.name };
  });

  const handleSubmit = (e) => {
    e.preventDefault();

    const temp = synergies.map((s) => {
      if (s.id === select.value) {
        return { ...s, price: Number(price) };
      } else return s;
    });

    setSynergies(temp);
    setIsModal(false);
  };

  return (
    <article className="synergy-op">
      <h1 className="synergy-op__title">Add Price</h1>
      <form
        id="editSynForm"
        onSubmit={handleSubmit}
        className="synergy-op__form"
      >
        <label htmlFor="syn">Synergies</label>
        <Select
          id="syn"
          className="synergy-op__select"
          defaultvalue={select}
          onChange={(select) => setSelect(select)}
          isClearable={false}
          isSearchable={true}
          options={options}
          name="secondary projects"
        />

        <label htmlFor="price">price</label>
        <input
          id="price"
          name="price"
          type="number"
          value={price}
          onChange={(e) => setPrice(e.target.value)}
          placeholder="enter your price"
        />
        <button type="submit">ok</button>
      </form>
    </article>
  );
};

export default EditSyngergy;
