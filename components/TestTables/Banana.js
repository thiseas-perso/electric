import React from 'react';

const Banana = ({ tests, className }) => {
  return (
    <div className={className}>
      <h3 className="font-bold">Banana Box</h3>
      <table>
        <thead>
          <tr>
            <th>Coffre</th>
            <th>Coffre sièges baissés</th>
            <th>Coffre Avant</th>
          </tr>
        </thead>
        <tbody>
          {tests.map((test, i) => {
            return (
              <tr key={i}>
                <td>{test.Trunk}</td>
                <td>{test.SeatsFolded}</td>
                <td>{test.Frunk || 0}</td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  );
};

export default Banana;
