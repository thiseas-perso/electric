import React from 'react';

const UsageExpectedFieldSet = () => {
  return (
    <fieldset id="usageExpected">
      <legend>
        <h2>Usage attendu</h2>
      </legend>
      <label htmlFor="totalKMPerY">Total de KM/an</label>
      <input type="number" id="totalKMPerY" />
    </fieldset>
  );
};

export default UsageExpectedFieldSet;
