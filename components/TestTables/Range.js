import React, { useState } from 'react';

const Range = ({ tests, className }) => {
  const [showMoreDetails, setShowMoreDetails] = useState(false);
  const [showDetails, setShowDetails] = useState(false);

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
            <th className="absolute top-[-9999px] left-[-9999px] sm:static sm:top-0">
              Vitesse (km/h)
            </th>
            <th className="absolute top-[-9999px] left-[-9999px] sm:static sm:top-0">
              Capacitée réelle (kWh)
            </th>
            <th
              className={`${
                showDetails
                  ? 'absolute top-[-9999px] left-[-9999px] sm:static sm:top-0'
                  : 'hidden'
              }`}
            >
              Température
            </th>
            <th className="absolute top-[-9999px] left-[-9999px] sm:static sm:top-0">
              Autonomie (km - charge à 100%)
            </th>
            <th className="absolute top-[-9999px] left-[-9999px] sm:static sm:top-0">
              Autonomie (km - charge à 75%)
            </th>
            <th className="absolute top-[-9999px] left-[-9999px] sm:static sm:top-0">
              Temps de charge 0 à 75% (minutes)
            </th>
            <th className="absolute top-[-9999px] left-[-9999px] sm:static sm:top-0">
              Km chargés par heure (charge 0 à 75%)
            </th>
            <th className="absolute top-[-9999px] left-[-9999px] sm:static sm:top-0">
              Consomation (kWh/km)
            </th>
            <th
              className={`${
                showMoreDetails
                  ? 'absolute top-[-9999px] left-[-9999px] sm:static sm:top-0'
                  : 'hidden'
              }`}
            >
              Surface
            </th>
            <th
              className={`${
                showMoreDetails
                  ? 'absolute top-[-9999px] left-[-9999px] sm:static sm:top-0'
                  : 'hidden'
              }`}
            >
              Saison
            </th>
            <th
              className={`${
                showMoreDetails
                  ? 'absolute top-[-9999px] left-[-9999px] sm:static sm:top-0'
                  : 'hidden'
              }`}
            >
              Pneux
            </th>
            <th
              className={`${
                showMoreDetails
                  ? 'absolute top-[-9999px] left-[-9999px] sm:static sm:top-0'
                  : 'hidden'
              }`}
            >
              Roue avant
            </th>
            <th
              className={`${
                showMoreDetails
                  ? 'absolute top-[-9999px] left-[-9999px] sm:static sm:top-0'
                  : 'hidden'
              }`}
            >
              Roue arrière
            </th>
          </tr>
        </thead>
        <tbody>
          {tests.map((test, i) => {
            return (
              <tr key={i}>
                <td
                  className="block before:content-[attr(data-th)] before:font-semibold before:block sm:before:content-none sm:table-cell"
                  data-th="Vitesse (km/h)"
                >
                  {test.Speed}
                </td>
                <td
                  className="block before:content-[attr(data-th)] before:font-semibold before:block sm:before:content-none sm:table-cell"
                  data-th="Capacitée réelle (kWh)"
                >
                  {Number(test.Capacity.replace(',', '.')).toFixed(0)}
                </td>
                <td
                  className={`${
                    showDetails
                      ? 'block before:content-[attr(data-th)] before:font-semibold before:block sm:before:content-none sm:table-cell'
                      : 'hidden'
                  }`}
                  data-th="Température"
                >
                  {test.Temp}
                </td>
                <td
                  className="block before:content-[attr(data-th)] before:font-semibold before:block sm:before:content-none sm:table-cell"
                  data-th="Autonomie (km - charge à 100%)"
                >
                  {test.Km}
                </td>
                <td
                  className="block before:content-[attr(data-th)] before:font-semibold before:block sm:before:content-none sm:table-cell"
                  data-th="Autonomie (km - charge à 75%)"
                >
                  {test.Range75}
                </td>
                <td
                  className="block before:content-[attr(data-th)] before:font-semibold before:block sm:before:content-none sm:table-cell"
                  data-th="Temps de charge 0 à 75% (minutes)"
                >
                  {test.ChargingTime75}
                </td>
                <td
                  className="block before:content-[attr(data-th)] before:font-semibold before:block sm:before:content-none sm:table-cell"
                  data-th="Km chargés par heure (charge 0 à 75%)"
                >
                  {test.KmPerH75}
                </td>
                <td
                  className="block before:content-[attr(data-th)] before:font-semibold before:block sm:before:content-none sm:table-cell"
                  data-th="Consomation (kWh/km)"
                >
                  {(Number(test.WhPerKm) / 10).toFixed(1)}
                </td>
                <td
                  className={`${
                    showMoreDetails
                      ? 'block before:content-[attr(data-th)] before:font-semibold before:block sm:before:content-none sm:table-cell'
                      : 'hidden'
                  }`}
                  data-th="Surface"
                >
                  {test.Surface}
                </td>
                <td
                  className={`${
                    showMoreDetails
                      ? 'block before:content-[attr(data-th)] before:font-semibold before:block sm:before:content-none sm:table-cell'
                      : 'hidden'
                  }`}
                  data-th="Saison"
                >
                  {test.Season}
                </td>
                <td
                  className={`${
                    showMoreDetails
                      ? 'block before:content-[attr(data-th)] before:font-semibold before:block sm:before:content-none sm:table-cell'
                      : 'hidden'
                  }`}
                  data-th="Pneux"
                >
                  {test.Tires}
                </td>
                <td
                  className={`${
                    showMoreDetails
                      ? 'block before:content-[attr(data-th)] before:font-semibold before:block sm:before:content-none sm:table-cell'
                      : 'hidden'
                  }`}
                  data-th="Roue avant"
                >
                  {test.WheelFront}
                </td>
                <td
                  className={`${
                    showMoreDetails
                      ? 'block before:content-[attr(data-th)] before:font-semibold before:block sm:before:content-none sm:table-cell'
                      : 'hidden'
                  }`}
                  data-th="Roue arrière"
                >
                  {test.WheelRear}
                </td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  );
};

export default Range;
