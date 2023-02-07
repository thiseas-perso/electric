import React, { useState } from 'react';

const Range = ({ tests, className }) => {
  const [showMoreDetails, setShowMoreDetails] = useState(false);
  const [showDetails, setShowDetails] = useState(false);
  const [btnTxt, setBtnTxt] = useState('détails');

  const clickHandler = () => {
    if (!showDetails && !showMoreDetails) {
      setShowDetails(true);
      setBtnTxt('+ de détails');
    } else if (showDetails && !showMoreDetails) {
      setShowMoreDetails(true);
      setBtnTxt('- de détails');
    } else if (showDetails && showMoreDetails) {
      setShowDetails(false);
      setShowMoreDetails(false);
      setBtnTxt('détails');
    }
  };

  return (
    <div className={className}>
      <table className="min-w-full border-separate border-spacing-2">
        <caption>
          <h3 className="font-bold bg-light-primary-2 text-white p-2 text-left flex items-center gap-x-4">
            Autonomie
            <button
              className="font-light hover:bg-white/25"
              onClick={clickHandler}
            >
              {btnTxt}
            </button>
          </h3>
        </caption>
        <thead>
          <tr>
            <th className="absolute top-[-9999px] left-[-9999px] sm:static sm:top-0 ">
              Vitesse <span className="italic inline-block">(km/h)</span>
            </th>
            <th className="absolute top-[-9999px] left-[-9999px] sm:static sm:top-0 ">
              Capacitée réelle{' '}
              <span className="italic inline-block">(kWh)</span>
            </th>
            <th
              className={`${
                showDetails
                  ? 'absolute top-[-9999px] left-[-9999px] sm:static sm:top-0 '
                  : 'hidden'
              }`}
            >
              Température <span className="italic inline-block">(°C)</span>
            </th>
            <th className="absolute top-[-9999px] left-[-9999px] sm:static sm:top-0 ">
              Autonomie en km{' '}
              <span className="italic inline-block">(100% à 0%)</span>
            </th>
            <th className="absolute top-[-9999px] left-[-9999px] sm:static sm:top-0 ">
              Autonomie en km{' '}
              <span className="italic inline-block">(75% à 0%)</span>
            </th>
            <th className="absolute top-[-9999px] left-[-9999px] sm:static sm:top-0 ">
              Temps de charge 0 à 75%{' '}
              <span className="italic inline-block">(minutes)</span>
            </th>
            <th className="absolute top-[-9999px] left-[-9999px] sm:static sm:top-0 ">
              Km chargés par heure{' '}
              <span className="italic inline-block">(charge 0 à 75%)</span>
            </th>
            <th className="absolute top-[-9999px] left-[-9999px] sm:static sm:top-0 ">
              Consomation <span className="italic inline-block">(kWh/km)</span>
            </th>
            <th
              className={`${
                showMoreDetails
                  ? 'absolute top-[-9999px] left-[-9999px] sm:static sm:top-0 '
                  : 'hidden'
              }`}
            >
              Surface
            </th>
            <th
              className={`${
                showMoreDetails
                  ? 'absolute top-[-9999px] left-[-9999px] sm:static sm:top-0 '
                  : 'hidden'
              }`}
            >
              Saison
            </th>
            <th
              className={`${
                showMoreDetails
                  ? 'absolute top-[-9999px] left-[-9999px] sm:static sm:top-0 '
                  : 'hidden'
              }`}
            >
              Pneux
            </th>
            <th
              className={`${
                showMoreDetails
                  ? 'absolute top-[-9999px] left-[-9999px] sm:static sm:top-0 '
                  : 'hidden'
              }`}
            >
              Roue avant
            </th>
            <th
              className={`${
                showMoreDetails
                  ? 'absolute top-[-9999px] left-[-9999px] sm:static sm:top-0 '
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
              <tr
                key={i}
                className="even:bg-light-primary-7/50  odd:bg-light-primary-3/50 "
              >
                <td
                  className="block my-4 font-semibold before:content-[attr(data-th)] before:font-normal before:italic before:block sm:before:content-none sm:table-cell sm:p-2 sm:rounded-lg "
                  data-th="Vitesse (km/h)"
                >
                  {test.Speed}
                </td>
                <td
                  className="block my-4 font-semibold before:content-[attr(data-th)] before:font-normal before:italic before:block sm:before:content-none sm:table-cell sm:p-2 sm:rounded-lg "
                  data-th="Capacitée réelle (kWh)"
                >
                  {Number(test.Capacity.replace(',', '.')).toFixed(0)}
                </td>
                <td
                  className={`${
                    showDetails
                      ? 'block my-4 font-semibold before:content-[attr(data-th)] before:font-normal before:italic before:block sm:before:content-none sm:table-cell sm:p-2 sm:rounded-lg '
                      : 'hidden'
                  }`}
                  data-th="Température (°C)"
                >
                  {test.Temp}
                </td>
                <td
                  className="block my-4 font-semibold before:content-[attr(data-th)] before:font-normal before:italic before:block sm:before:content-none sm:table-cell sm:p-2 sm:rounded-lg "
                  data-th="Autonomie (100% à 0%)"
                >
                  {test.Km}
                </td>
                <td
                  className="block my-4 font-semibold before:content-[attr(data-th)] before:font-normal before:italic before:block sm:before:content-none sm:table-cell sm:p-2 sm:rounded-lg "
                  data-th="Autonomie (75% à 0%)"
                >
                  {test.Range75}
                </td>
                <td
                  className="block my-4 font-semibold before:content-[attr(data-th)] before:font-normal before:italic before:block sm:before:content-none sm:table-cell sm:p-2 sm:rounded-lg "
                  data-th="Temps de charge 0 à 75% (minutes)"
                >
                  {test.ChargingTime75}
                </td>
                <td
                  className="block my-4 font-semibold before:content-[attr(data-th)] before:font-normal before:italic before:block sm:before:content-none sm:table-cell sm:p-2 sm:rounded-lg "
                  data-th="Km chargés par heure (charge 0 à 75%)"
                >
                  {test.KmPerH75}
                </td>
                <td
                  className="block my-4 font-semibold before:content-[attr(data-th)] before:font-normal before:italic before:block sm:before:content-none sm:table-cell sm:p-2 sm:rounded-lg "
                  data-th="Consomation (kWh/km)"
                >
                  {(Number(test.WhPerKm) / 10).toFixed(1)}
                </td>
                <td
                  className={`${
                    showMoreDetails
                      ? 'block my-4 font-semibold before:content-[attr(data-th)] before:font-normal before:italic before:block sm:before:content-none sm:table-cell sm:p-2 sm:rounded-lg '
                      : 'hidden'
                  }`}
                  data-th="Surface"
                >
                  {test.Surface}
                </td>
                <td
                  className={`${
                    showMoreDetails
                      ? 'block my-4 font-semibold before:content-[attr(data-th)] before:font-normal before:italic before:block sm:before:content-none sm:table-cell sm:p-2 sm:rounded-lg '
                      : 'hidden'
                  }`}
                  data-th="Saison"
                >
                  {test.Season}
                </td>
                <td
                  className={`${
                    showMoreDetails
                      ? 'block my-4 font-semibold before:content-[attr(data-th)] before:font-normal before:italic before:block sm:before:content-none sm:table-cell sm:p-2 sm:rounded-lg '
                      : 'hidden'
                  }`}
                  data-th="Pneux"
                >
                  {test.Tires}
                </td>
                <td
                  className={`${
                    showMoreDetails
                      ? 'block my-4 font-semibold before:content-[attr(data-th)] before:font-normal before:italic before:block sm:before:content-none sm:table-cell sm:p-2 sm:rounded-lg '
                      : 'hidden'
                  }`}
                  data-th="Roue avant"
                >
                  {test.WheelFront}
                </td>
                <td
                  className={`${
                    showMoreDetails
                      ? 'block my-4 font-semibold before:content-[attr(data-th)] before:font-normal before:italic before:block sm:before:content-none sm:table-cell sm:p-2 sm:rounded-lg '
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
