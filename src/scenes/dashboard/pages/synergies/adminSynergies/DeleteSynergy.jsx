import React, { useEffect, useState } from "react";
import Select from "react-select";
import { useGlobalContextUser } from "../../../../../context/context";
const DeleteSynergy = ({ setIsModal }) => {
  const [multipleSelect, setMultipleSelect] = useState([]);
  const { synergies, setSynergies } = useGlobalContextUser();

  const options = synergies.map((p) => {
    return { value: p.id, label: p.name };
  });

  const handleSubmit = (e) => {
    e.preventDefault();

    const temp = synergies.filter(
      (s) => !multipleSelect.map((ms) => ms.value).includes(s.id)
    );

    setSynergies(temp);
    setIsModal(false);
  };
  return (
    <article className="synergy-op">
      <h1 className="synergy-op__title">Delete Synergies </h1>
      <form
        id="dltSynForm"
        onSubmit={handleSubmit}
        className="synergy-op__form"
      >
        <label htmlFor="syn">Synergies</label>
        <Select
          className="fuse-panel__select"
          value={multipleSelect}
          onChange={(multipleSelect) => setMultipleSelect(multipleSelect)}
          isClearable={true}
          isSearchable={true}
          options={options}
          isMulti
          name="master project"
        />

        <button type="submit">ok</button>
      </form>
    </article>
  );
};

export default DeleteSynergy;
