import React, { useState } from 'react';

const initialState = {
  purchaseCost: '45000',
  ecoBonus: '0',
  consumption: '20',
  insurance: '700',
  maintenance: '1000',
};

const CarDataFieldSet = ({ carType, getData }) => {
  const [state, setState] = useState(initialState);

  const onBlurHandler = (e) => {
    e.stopPropagation();
    if (!e.currentTarget.contains(e.relatedTarget)) {
      console.log('getting data');
      getData(state);
    }
  };
  return (
    <fieldset id="carData" onBlur={(e) => onBlurHandler(e)}>
      <legend>
        <h2>
          {carType === 'EV' ? 'Véhicule électrique' : 'Véhicule thérmique'}
        </h2>
      </legend>
      <label htmlFor="purchaseCost">Prix achat</label>
      <input
        required
        min="0"
        type="number"
        id="purchaseCost"
        name="purchaseCost"
        value={state.purchaseCost}
        onChange={(e) =>
          setState((prev) => ({
            ...prev,
            purchaseCost: e.target.value,
          }))
        }
      />
      {carType === 'EV' && (
        <>
          <label htmlFor="ecoBonus">Bonus ecologique</label>
          <input
            required
            min="0"
            type="number"
            id="ecoBonus"
            name="ecoBonus"
            value={state.ecoBonus}
            onChange={(e) =>
              setState((prev) => ({
                ...prev,
                ecoBonus: e.target.value,
              }))
            }
          />
        </>
      )}
      <label htmlFor="consumption">
        Consomation {carType === 'EV' ? 'kWh/100km' : 'lt/100km'}
      </label>
      <input
        required
        min="0"
        type="number"
        id="consumption"
        name="consumption"
        value={state.consumption}
        onChange={(e) =>
          setState((prev) => ({
            ...prev,
            consumption: e.target.value,
          }))
        }
      />
      <label htmlFor="insurance">Assurance</label>
      <input
        required
        min="0"
        type="number"
        id="insurance"
        name="insurance"
        value={state.insurance}
        onChange={(e) =>
          setState((prev) => ({
            ...prev,
            insurance: e.target.value,
          }))
        }
      />
      <label htmlFor="maintenance">Entretien</label>
      <input
        required
        min="0"
        type="number"
        id="maintenance"
        name="maintenance"
        value={state.maintenance}
        onChange={(e) =>
          setState((prev) => ({
            ...prev,
            maintenance: e.target.value,
          }))
        }
      />
      {carType === 'ICE' && <button type="button">Précédent</button>}
      <button type="button" onClick={() => getData(state)}>
        Suivant
      </button>
    </fieldset>
  );
};

export default CarDataFieldSet;
