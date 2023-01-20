import React from 'react';

const Weight = ({ tests, className }) => {
  return (
    <div className={className}>
      <table className="min-w-full">
        <caption>
          <h3 className="font-bold bg-light-primary-2 text-white p-2 text-left w-full">
            Poid
          </h3>
        </caption>
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
