import React from 'react';

const EnergyDataFieldSet = () => {
  return (
    <fieldset id="energyData">
      <legend>
        <h2>Données energie</h2>
      </legend>
      <label htmlFor="chargingPriceHC">Cout electricité HC</label>
      <input type="number" id="chargingPriceHC" />
      <label htmlFor="chargingPriceHP">Cout electricité HP</label>
      <input type="number" id="chargingPriceHP" />
      <label htmlFor="gasPrice">Cout carburant</label>
      <input type="number" id="gasPrice" />
    </fieldset>
  );
};

export default EnergyDataFieldSet;
