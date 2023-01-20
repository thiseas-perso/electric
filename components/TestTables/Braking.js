import React, { useState } from 'react';

const Braking = ({ tests, className }) => {
  const [details, setDetails] = useState(false);
  const [moreDetails, setMoredetails] = useState(false);
  const display = details ? '' : 'hidden';
  const displayMore = moreDetails ? '' : 'hidden';
  return (
    <div className={className}>
      <table className="min-w-full">
        <caption>
          <h3 className="font-bold bg-light-primary-2 text-white p-2 text-left">
            Freins
          </h3>
        </caption>
        <thead>
          <tr>
            <th>100 à 0 km/h (secondes)</th>
            <th>Distance (mètres)</th>
            <th>Surface</th>
            <th className={display}>Poid</th>
            <th className={display}>Température</th>
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
                <td>{test.Secs100to0KmPerH}</td>
                <td>{test.Distance}</td>
                <td>{test.Surface}</td>
                <td className={displayMore}>{test.Weight}</td>
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

export default Braking;
