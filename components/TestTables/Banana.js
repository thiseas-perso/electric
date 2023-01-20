import React from 'react';

const Banana = ({ tests, className }) => {
  return (
    <div className={className}>
      <table className="min-w-full">
        <caption>
          <h3 className="font-bold bg-light-primary-2 text-white p-2 text-left">
            Banana Box
          </h3>
        </caption>
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
