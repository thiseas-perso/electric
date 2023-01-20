import React from 'react';

const ThousandKM = ({ tests, className }) => {
  return (
    <div className={className}>
      <h3 className="font-bold">1000km</h3>
      <table>
        <thead>
          <tr>
            <th>Temps</th>
            <th>Km/h</th>
            <th>KWh/km</th>
            <th>Temperature</th>
            {/* <th>Date</th> */}
          </tr>
        </thead>
        <tbody>
          {tests.map((test, i) => {
            return (
              <tr key={i}>
                <td>{test.Time}</td>
                <td>{test.kmPerH}</td>
                <td>
                  {(Number(test.WhPerKm.replace(',', '.')) / 10).toFixed(1)}
                </td>
                <td>{test.Temp}</td>
                {/* <td>{test.Date}</td> */}
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  );
};

export default ThousandKM;
