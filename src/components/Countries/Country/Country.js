import React from "react";
import "./Country.css";

const Country = (props) => {
  const { area, region, population, name } = props.country;
  return (
    <div className="country">
      <h2>Country name: {name.common}</h2>
      <p>Population: {population}</p>
      <p>
        <small>Area: {area}</small>
      </p>
      <p>Region: {region}</p>
    </div>
  );
};

export default Country;
