const CarEVFieldSet = ({ state, setState }) => {
  return (
    <fieldset id="carData">
      <legend>
        <h2>Véhicule électrique</h2>
      </legend>
      <label htmlFor="purchaseCost">Prix achat</label>
      <input
        required
        min="0"
        type="number"
        id="purchaseCost"
        name="purchaseCost"
        value={state.carDataEV.purchaseCost}
        onChange={(e) =>
          setState((prev) => ({
            ...prev,
            carDataEV: {
              ...state.carDataEV,
              purchaseCost: e.target.value,
            },
          }))
        }
      />

      <label htmlFor="ecoBonus">Bonus ecologique</label>
      <input
        required
        min="0"
        type="number"
        id="ecoBonus"
        name="ecoBonus"
        value={state.carDataEV.ecoBonus}
        onChange={(e) =>
          setState((prev) => ({
            ...prev,
            carDataEV: {
              ...state.carDataEV,
              ecoBonus: e.target.value,
            },
          }))
        }
      />

      <label htmlFor="consumption">Consomation kWh/100km</label>
      <input
        required
        min="0"
        type="number"
        id="consumption"
        name="consumption"
        value={state.carDataEV.consumption}
        onChange={(e) =>
          setState((prev) => ({
            ...prev,
            carDataEV: {
              ...state.carDataEV,
              consumption: e.target.value,
            },
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
        value={state.carDataEV.insurance}
        onChange={(e) =>
          setState((prev) => ({
            ...prev,
            carDataEV: {
              ...state.carDataEV,
              insurance: e.target.value,
            },
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
        value={state.carDataEV.maintenance}
        onChange={(e) =>
          setState((prev) => ({
            ...prev,
            carDataEV: {
              ...state.carDataEV,
              maintenance: e.target.value,
            },
          }))
        }
      />
      <button type="button">Suivant</button>
    </fieldset>
  );
};

export default CarEVFieldSet;
