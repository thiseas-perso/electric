const CarICEFieldSet = ({ state, setState }) => {
  return (
    <fieldset id="carData">
      <legend>
        <h2>Véhicule thérmique</h2>
      </legend>
      <label htmlFor="purchaseCost">Prix achat</label>
      <input
        required
        min="0"
        type="number"
        id="purchaseCost"
        name="purchaseCost"
        value={state.carDataICE.purchaseCost}
        onChange={(e) =>
          setState((prev) => ({
            ...prev,
            carDataICE: {
              ...state.carDataICE,
              purchaseCost: e.target.value,
            },
          }))
        }
      />

      <label htmlFor="consumption">lt/100km</label>
      <input
        required
        min="0"
        type="number"
        id="consumption"
        name="consumption"
        value={state.carDataICE.consumption}
        onChange={(e) =>
          setState((prev) => ({
            ...prev,
            carDataICE: {
              ...state.carDataICE,
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
        value={state.carDataICE.insurance}
        onChange={(e) =>
          setState((prev) => ({
            ...prev,
            carDataICE: {
              ...state.carDataICE,
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
        value={state.carDataICE.maintenance}
        onChange={(e) =>
          setState((prev) => ({
            ...prev,
            carDataICE: {
              ...state.carDataICE,
              maintenance: e.target.value,
            },
          }))
        }
      />
      <button type="button">Précédent</button>
      <button type="button">Suivant</button>
    </fieldset>
  );
};

export default CarICEFieldSet;
