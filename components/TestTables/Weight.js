import React from 'react';

const Weight = ({ tests, className }) => {
  return (
    <div className={className}>
      <h3 className="font-bold">Poid</h3>
      <table>
        <thead>
          <tr>
            <th>Total</th>
            <th>Avant</th>
            <th>Arrière</th>
            <th>Distribution</th>
            <th>Batterie</th>
          </tr>
        </thead>
        <tbody>
          {tests.map((test, i) => {
            return (
              <tr key={i}>
                <td>{test.Total}</td>
                <td>{test.Front}</td>
                <td>{test.Rear}</td>
                <td>{test.Distribution}</td>
                <td>{test.Battery}</td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  );
};

export default Weight;
