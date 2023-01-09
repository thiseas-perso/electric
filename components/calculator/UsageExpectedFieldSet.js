const UsageExpectedFieldSet = ({ state, setState, className }) => {
  return (
    <fieldset id="usageExpected" className={className}>
      <h2 className="text-3xl mb-2">Usage attendu</h2>

      <label htmlFor="totalKMPerY">Total de KM/an</label>
      <input
        className="mb-2"
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
    </fieldset>
  );
};

export default UsageExpectedFieldSet;
