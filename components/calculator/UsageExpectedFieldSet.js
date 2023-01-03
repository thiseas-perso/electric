const UsageExpectedFieldSet = ({ state, setState }) => {
  return (
    <fieldset id="usageExpected">
      <legend>
        <h2>Usage attendu</h2>
      </legend>
      <label htmlFor="totalKMPerY">Total de KM/an</label>
      <input
        min="0"
        type="number"
        id="totalKMPerY"
        value={state.usageExpected.totalKMPerY}
        onChange={(e) =>
          setState((prev) => ({
            ...prev,
            usageExpected: {
              ...state.usageExpected,
              totalKMPerY: e.target.value,
            },
          }))
        }
      />
      <button type="button">Précédent</button>
      <button type="button">Suivant</button>
    </fieldset>
  );
};

export default UsageExpectedFieldSet;
