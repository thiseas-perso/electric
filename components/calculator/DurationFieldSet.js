function DurationFieldSet({ state, setState }) {
  return (
    <fieldset>
      <legend>
        <h2>Durée de détention étudiee</h2>
      </legend>
      <label htmlFor="durationStudied">Années</label>
      <input
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
      <button type="button">Précédent</button>
      <button type="button">Suivant</button>
    </fieldset>
  );
}

export default DurationFieldSet;
