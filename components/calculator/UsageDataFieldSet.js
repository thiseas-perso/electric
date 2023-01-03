const UsageDataFieldSet = ({ state, setState }) => {
  return (
    <fieldset id="usageData">
      <legend>
        <h2>Analyse de vos usages</h2>
      </legend>
      <label htmlFor="workHomeDistance">Distance domicile travail</label>
      <input
        min="0"
        type="number"
        id="workHomeDistance"
        name="workHomeDistance"
        value={state.usageData.workHomeDistance}
        onChange={(e) =>
          setState((prev) => ({
            ...prev,
            usageData: {
              ...state.usageData,
              workHomeDistance: e.target.value,
            },
          }))
        }
      />
      <label htmlFor="dailyCommutes">A/R quotidiens</label>
      <input
        min="0"
        type="number"
        id="dailyCommutes"
        name="dailyCommutes"
        value={state.usageData.dailyCommutes}
        onChange={(e) =>
          setState((prev) => ({
            ...prev,
            usageData: {
              ...state.usageData,
              dailyCommutes: e.target.value,
            },
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
        value={state.usageData.daysWorkedPerY}
        onChange={(e) =>
          setState((prev) => ({
            ...prev,
            usageData: {
              ...state.usageData,
              daysWorkedPerY: e.target.value,
            },
          }))
        }
      />
      <label htmlFor="weekendKM">KM/weekend</label>
      <input
        min="0"
        type="number"
        id="weekendKM"
        name="weekendKM"
        value={state.usageData.weekendKM}
        onChange={(e) =>
          setState((prev) => ({
            ...prev,
            usageData: {
              ...state.usageData,
              weekendKM: e.target.value,
            },
          }))
        }
      />
      <label htmlFor="otherKMPerW">Autres km par semaine</label>
      <input
        min="0"
        type="number"
        id="otherKMPerW"
        name="otherKMPerW"
        value={state.usageData.otherKMPerW}
        onChange={(e) =>
          setState((prev) => ({
            ...prev,
            usageData: {
              ...state.usageData,
              otherKMPerW: e.target.value,
            },
          }))
        }
      />
      <button type="button">Précédent</button>
      <button type="button">Suivant</button>
    </fieldset>
  );
};

export default UsageDataFieldSet;
