import React, { useState } from "react";
import logo from "../../../assets/logo.png";
import { FiSearch } from "react-icons/fi";
import "./dashHeader.css";

const DashHeader = () => {
  const [search, setSearch] = useState("");

  return (
    <header className="dashboard-header">
      <div className="deashboard-search">
        <button className="deashboard-search__btn">
          <FiSearch />
        </button>
        <input
          name="search project"
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          placeholder="search"
        />
      </div>

      <div className="deashboard-header__logo">
        <img src={logo} alt="logo" />
      </div>
    </header>
  );
};

export default DashHeader;
