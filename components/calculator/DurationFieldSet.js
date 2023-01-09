function DurationFieldSet({ state, setState, className }) {
  return (
    <fieldset className={className}>
      <h2 className="text-3xl mb-2">Durée de détention</h2>

      <label htmlFor="durationStudied">Années</label>
      <input
        className="mb-2"
        min=""
        step="1"
        type="number"
        id="durationStudied"
        name="durationStudied"
        value={state.durationStudied}
        onChange={(e) =>
          setState((prev) => ({
            ...prev,
            durationStudied: e.target.value,
          }))
        }
      />
    </fieldset>
  );
}

export default DurationFieldSet;
