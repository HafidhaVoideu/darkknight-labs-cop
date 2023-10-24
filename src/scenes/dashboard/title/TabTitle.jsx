import React from "react";
import "./title.css";

const TabTitle = ({ title, subtitle }) => {
  return (
    <div className="tab">
      <h1 className="tab__name"> {title} </h1>
      <p className="tab__subtitle">{subtitle}</p>
    </div>
  );
};

export default TabTitle;
