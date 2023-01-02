import React from 'react';

const CarDataFieldSet = ({ carType }) => {
  return (
    <fieldset id="carData">
      <legend>
        <h2>
          {carType === 'EV' ? 'Véhicule électrique' : 'Véhicule thérmique'}
        </h2>
      </legend>
      <label htmlFor="purchaseCost">Prix achat</label>
      <input type="number" id="purchaseCost" />
      {carType === 'EV' && (
        <>
          <label htmlFor="ecoBonus">Bonus ecologique</label>
          <input type="number" id="ecoBonus" />
        </>
      )}
      <label htmlFor="consumption">
        Consomation {carType === 'EV' ? 'kWh/100km' : 'lt/100km'}
      </label>
      <input type="number" id="consumption" />
      <label htmlFor="insurance">Assurance</label>
      <input type="number" id="insurance" />
      <label htmlFor="maintenance">Entretien</label>
      <input type="number" id="maintenance" />
    </fieldset>
  );
};

export default CarDataFieldSet;
