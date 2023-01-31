import React, { useState } from 'react';

const Braking = ({ tests, className }) => {
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
      <table className="min-w-full">
        <caption>
          <h3 className="font-bold bg-light-primary-2 text-white p-2 text-left flex items-center gap-x-4">
            Freins
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
            <th className="absolute top-[-9999px] left-[-9999px] sm:static sm:top-0">
              100 à 0 km/h (secondes)
            </th>
            <th className="absolute top-[-9999px] left-[-9999px] sm:static sm:top-0">
              Distance (mètres)
            </th>
            <th className="absolute top-[-9999px] left-[-9999px] sm:static sm:top-0">
              Surface
            </th>
            <th
              className={`${
                showDetails
                  ? 'absolute top-[-9999px] left-[-9999px] sm:static sm:top-0'
                  : 'hidden'
              }`}
            >
              Poid
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
            <th
              className={`${
                showDetails && showMoreDetails
                  ? 'absolute top-[-9999px] left-[-9999px] sm:static sm:top-0'
                  : 'hidden'
              }`}
            >
              Saison
            </th>
            <th className="absolute top-[-9999px] left-[-9999px] sm:static sm:top-0">
              Pneux
            </th>
            <th
              className={`${
                showDetails && showMoreDetails
                  ? 'absolute top-[-9999px] left-[-9999px] sm:static sm:top-0'
                  : 'hidden'
              }`}
            >
              Roue avant
            </th>
            <th
              className={`${
                showDetails && showMoreDetails
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
                  data-th="100 à 0 km/h (secondes)"
                  className="block before:content-[attr(data-th)] before:font-semibold before:block sm:before:content-none sm:table-cell"
                >
                  {test.Secs100to0KmPerH}
                </td>
                <td
                  data-th="Distance (mètres)"
                  className="block before:content-[attr(data-th)] before:font-semibold before:block sm:before:content-none sm:table-cell"
                >
                  {test.Distance}
                </td>
                <td
                  data-th="Surface"
                  className="block before:content-[attr(data-th)] before:font-semibold before:block sm:before:content-none sm:table-cell"
                >
                  {test.Surface}
                </td>
                <td
                  data-th="Poid"
                  className={`${
                    showDetails
                      ? 'block before:content-[attr(data-th)] before:font-semibold before:block sm:before:content-none sm:table-cell'
                      : 'hidden'
                  }`}
                >
                  {test.Weight}
                </td>
                <td
                  data-th="Température"
                  className={`${
                    showDetails
                      ? 'block before:content-[attr(data-th)] before:font-semibold before:block sm:before:content-none sm:table-cell'
                      : 'hidden'
                  }`}
                >
                  {test.Temp}
                </td>
                <td
                  data-th="Saison"
                  className={`${
                    showDetails && showMoreDetails
                      ? 'block before:content-[attr(data-th)] before:font-semibold before:block sm:before:content-none sm:table-cell'
                      : 'hidden'
                  }`}
                >
                  {test.Season}
                </td>
                <td
                  data-th="Pneux"
                  className="block before:content-[attr(data-th)] before:font-semibold before:block sm:before:content-none sm:table-cell"
                >
                  {test.Tires}
                </td>
                <td
                  data-th="Roue avant"
                  className={`${
                    showDetails && showMoreDetails
                      ? 'block before:content-[attr(data-th)] before:font-semibold before:block sm:before:content-none sm:table-cell'
                      : 'hidden'
                  }`}
                >
                  {test.WheelFront}
                </td>
                <td
                  data-th="Roue arrière"
                  className={`${
                    showDetails && showMoreDetails
                      ? 'block before:content-[attr(data-th)] before:font-semibold before:block sm:before:content-none sm:table-cell'
                      : 'hidden'
                  }`}
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

export default Braking;
