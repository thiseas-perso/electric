import React from 'react';

const UsageDataFieldSet = () => {
  return (
    <fieldset id="usageData">
      <legend>
        <h2>Analyse de vos usages</h2>
      </legend>
      <label htmlFor="workHomeDistance">Distance domicile travail</label>
      <input type="number" id="workHomeDistance" />
      <label htmlFor="dailyCommutes">A/R quotidiens</label>
      <input type="number" id="dailyCommutes" />
      <label htmlFor="daysWorkedPerY">Nombre de jours travaillés/an</label>
      <input type="number" id="daysWorkedPerY" />
      <label htmlFor="weekendKM">KM/weekend</label>
      <input type="number" id="weekendKM" />
      <label htmlFor="otherKMPerW">Autres km par semaine</label>
      <input type="number" id="otherKMPerW" />
    </fieldset>
  );
};

export default UsageDataFieldSet;
