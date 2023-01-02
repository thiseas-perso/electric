import React, { useState } from 'react';

function DurationFieldSet({ getData }) {
  const [state, setState] = useState('2');
  const onBlurHandler = (e) => {
    e.stopPropagation();
    if (!e.currentTarget.contains(e.relatedTarget)) {
      console.log('getting data');
      getData(state);
    }
  };
  return (
    <fieldset onBlur={(e) => onBlurHandler(e)}>
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
        value={state}
        onChange={(e) => setState(() => e.target.value)}
      />
      <button type="button">Précédent</button>
      <button type="button" onClick={() => getData(state)}>
        Suivant
      </button>
    </fieldset>
  );
}

export default DurationFieldSet;
