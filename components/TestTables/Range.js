import React, { useState } from 'react';

const Range = ({ tests, className }) => {
  const [details, setDetails] = useState(false);
  const [moreDetails, setMoredetails] = useState(false);
  const display = details ? '' : 'hidden';
  const displayMore = moreDetails ? '' : 'hidden';

  return (
    <div className={className}>
      <table className="min-w-full">
        <caption>
          <h3 className="font-bold bg-light-primary-2 text-white p-2 text-left">
            Autonomie
          </h3>
        </caption>
        <thead>
          <tr>
            <th>Vitesse (km/h)</th>
            <th className={display}>Capacitée réelle (kWh)</th>
            <th className={display}>Température</th>
            <th>Autonomie (km - charge à 100%)</th>
            <th>Autonomie (km - charge à 75%)</th>
            <th>Temps de charge 0 à 75% (minutes)</th>
            <th>Km chargés par heure (charge 0 à 75%)</th>
            <th>Consomation (kWh/km)</th>
            <th className={displayMore}>Surface</th>
            <th className={displayMore}>Saison</th>
            <th className={displayMore}>Pneux</th>
            <th className={displayMore}>Roue avant</th>
            <th className={displayMore}>Roue arrière</th>
          </tr>
        </thead>
        <tbody>
          {tests.map((test, i) => {
            return (
              <tr key={i}>
                <td>{test.Speed}</td>
                <td className={display}>
                  {Number(test.Capacity.replace(',', '.')).toFixed(0)}
                </td>
                <td className={display}>{test.Temp}</td>
                <td>{test.Km}</td>
                <td>{test.Range75}</td>
                <td>{test.ChargingTime75}</td>
                <td>{test.KmPerH75}</td>
                <td>{(Number(test.WhPerKm) / 10).toFixed(1)}</td>
                <td className={displayMore}>{test.Surface}</td>
                <td className={displayMore}>{test.Season}</td>
                <td className={displayMore}>{test.Tires}</td>
                <td className={displayMore}>{test.WheelFront}</td>
                <td className={displayMore}>{test.WheelRear}</td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  );
};

export default Range;
