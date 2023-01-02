import React, { useState } from 'react';

const initialState = {
  workHomeDistance: '50',
  dailyCommutes: '2',
  daysWorkedPerY: '200',
  weekendKM: '60',
  otherKMPerW: '70',
};
const UsageDataFieldSet = ({ getData }) => {
  const [state, setState] = useState(initialState);
  const onBlurHandler = (e) => {
    e.stopPropagation();
    if (!e.currentTarget.contains(e.relatedTarget)) {
      console.log('getting data');
      getData(state);
    }
  };
  return (
    <fieldset id="usageData" onBlur={(e) => onBlurHandler(e)}>
      <legend>
        <h2>Analyse de vos usages</h2>
      </legend>
      <label htmlFor="workHomeDistance">Distance domicile travail</label>
      <input
        min="0"
        type="number"
        id="workHomeDistance"
        name="workHomeDistance"
        value={state.workHomeDistance}
        onChange={(e) =>
          setState((prev) => ({
            ...prev,
            workHomeDistance: e.target.value,
          }))
        }
      />
      <label htmlFor="dailyCommutes">A/R quotidiens</label>
      <input
        min="0"
        type="number"
        id="dailyCommutes"
        name="dailyCommutes"
        value={state.dailyCommutes}
        onChange={(e) =>
          setState((prev) => ({
            ...prev,
            dailyCommutes: e.target.value,
          }))
        }
      />
      <label htmlFor="daysWorkedPerY">Nombre de jours travaillés/an</label>
      <input
        min="0"
        max="365"
        type="number"
        id="daysWorkedPerY"
        name="daysWorkedPerY"
        value={state.daysWorkedPerY}
        onChange={(e) =>
          setState((prev) => ({
            ...prev,
            daysWorkedPerY: e.target.value,
          }))
        }
      />
      <label htmlFor="weekendKM">KM/weekend</label>
      <input
        min="0"
        type="number"
        id="weekendKM"
        name="weekendKM"
        value={state.weekendKM}
        onChange={(e) =>
          setState((prev) => ({
            ...prev,
            weekendKM: e.target.value,
          }))
        }
      />
      <label htmlFor="otherKMPerW">Autres km par semaine</label>
      <input
        min="0"
        type="number"
        id="otherKMPerW"
        name="otherKMPerW"
        value={state.otherKMPerW}
        onChange={(e) =>
          setState((prev) => ({
            ...prev,
            otherKMPerW: e.target.value,
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

export default UsageDataFieldSet;
