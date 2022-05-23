import React from "react";
import Location from "./Icons/Location";
import { useState } from "react";

const ChooseCity = ({ chosenCity, setChosenCity }) => {
  return (
    <div>
      <select
        name="city"
        value={chosenCity}
        onChange={(e) => setChosenCity(e.target.value)}
      >
        <option>Välj stad</option>
        <option value="Alla">Alla städer</option>
        <option value="Stockholm">Stockholm</option>
        <option value="Göteborg">Göteborg</option>
        <option value="Malmö">Malmö</option>
        <option value="Uppsala">Uppsala</option>
        <option value="Västerås">Västerås</option>
        <option value="Örebro">Örebro</option>
        <option value="Linköping">Linköping</option>
        <option value="Lund">Lund</option>
        <option value="Jönköping">Jönköping</option>
        <option value="Umeå">Umeå</option>
      </select>
      <p>{chosenCity}</p>
    </div>
  );
};

export default ChooseCity;
