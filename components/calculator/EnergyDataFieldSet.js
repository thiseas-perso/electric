import React, { useState } from 'react';

const initialState = {
  chargingPriceHC: '1.4',
  chargingPriceHP: '1.8',
  gasPrice: '2',
};

const EnergyDataFieldSet = ({ getData }) => {
  const [state, setState] = useState(initialState);
  const onBlurHandler = (e) => {
    e.stopPropagation();
    if (!e.currentTarget.contains(e.relatedTarget)) {
      console.log('getting data');
      getData(state);
    }
  };
  return (
    <fieldset id="energyData" onBlur={(e) => onBlurHandler(e)}>
      <legend>
        <h2>Données energie</h2>
      </legend>
      <label htmlFor="chargingPriceHC">Cout electricité HC</label>
      <input
        min="0"
        step=".01"
        type="number"
        id="chargingPriceHC"
        name="chargingPriceHC"
        value={state.chargingPriceHC}
        onChange={(e) =>
          setState((prev) => ({
            ...prev,
            chargingPriceHC: e.target.value,
          }))
        }
      />
      <label htmlFor="chargingPriceHP">Cout electricité HP</label>
      <input
        min="0"
        step=".01"
        type="number"
        id="chargingPriceHP"
        name="chargingPriceHP"
        value={state.chargingPriceHP}
        onChange={(e) =>
          setState((prev) => ({
            ...prev,
            chargingPriceHP: e.target.value,
          }))
        }
      />
      <label htmlFor="gasPrice">Cout carburant</label>
      <input
        min="0"
        step=".01"
        type="number"
        id="gasPrice"
        name="gasPrice"
        value={state.gasPrice}
        onChange={(e) =>
          setState((prev) => ({
            ...prev,
            gasPrice: e.target.value,
          }))
        }
      />
      <button type="button" onClick={() => getData(state)}>
        Suivant
      </button>
    </fieldset>
  );
};

export default EnergyDataFieldSet;
