const EnergyDataFieldSet = ({ state, setState }) => {
  return (
    <fieldset id="energyData">
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
        value={state.energyData.chargingPriceHC}
        onChange={(e) =>
          setState((prev) => ({
            ...prev,
            energyData: {
              ...state.energyData,
              chargingPriceHC: e.target.value,
            },
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
        value={state.energyData.chargingPriceHP}
        onChange={(e) =>
          setState((prev) => ({
            ...prev,
            energyData: {
              ...state.energyData,
              chargingPriceHP: e.target.value,
            },
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
        value={state.energyData.gasPrice}
        onChange={(e) =>
          setState((prev) => ({
            ...prev,
            energyData: {
              ...state.energyData,
              gasPrice: e.target.value,
            },
          }))
        }
      />
      <button type="button">Suivant</button>
    </fieldset>
  );
};

export default EnergyDataFieldSet;
