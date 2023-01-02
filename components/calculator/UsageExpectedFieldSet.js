import React, { useState } from 'react';

const initialState = {
  totalKMPerY: '',
};

const UsageExpectedFieldSet = ({ getData }) => {
  const [state, setState] = useState(initialState);
  const onBlurHandler = (e) => {
    e.stopPropagation();
    if (!e.currentTarget.contains(e.relatedTarget)) {
      console.log('getting data');
      getData(state);
    }
  };
  return (
    <fieldset id="usageExpected" onBlur={(e) => onBlurHandler(e)}>
      <legend>
        <h2>Usage attendu</h2>
      </legend>
      <label htmlFor="totalKMPerY">Total de KM/an</label>
      <input
        min="0"
        type="number"
        id="totalKMPerY"
        value={state.totalKMPerY}
        onChange={(e) =>
          setState((prev) => ({
            ...prev,
            totalKMPerY: e.target.value,
          }))
        }
      />
      <button type="button">Précédent</button>
      <button type="button" onClick={() => getData(state)}>
        Suivant
      </button>
    </fieldset>
  );
};

export default UsageExpectedFieldSet;
