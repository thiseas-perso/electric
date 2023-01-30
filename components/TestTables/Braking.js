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
            <th
              className={[
                'absolute top-[-9999px] left-[-9999px] sm:static sm:top-0',
              ]}
            >
              100 à 0 km/h (secondes)
            </th>
            <th
              className={[
                'absolute top-[-9999px] left-[-9999px] sm:static sm:top-0',
              ]}
            >
              Distance (mètres)
            </th>
            <th
              className={[
                'absolute top-[-9999px] left-[-9999px] sm:static sm:top-0',
              ]}
            >
              Surface
            </th>
            <th
              className={[
                'absolute top-[-9999px] left-[-9999px] sm:static sm:top-0',
              ]}
            >
              Poid
            </th>
            <th
              className={[
                'absolute top-[-9999px] left-[-9999px] sm:static sm:top-0',
              ]}
            >
              Température
            </th>
            <th
              className={[
                'absolute top-[-9999px] left-[-9999px] sm:static sm:top-0',
              ]}
            >
              Saison
            </th>
            <th
              className={[
                'absolute top-[-9999px] left-[-9999px] sm:static sm:top-0',
              ]}
            >
              Pneux
            </th>
            <th
              className={[
                'absolute top-[-9999px] left-[-9999px] sm:static sm:top-0',
              ]}
            >
              Roue avant
            </th>
            <th
              className={[
                'absolute top-[-9999px] left-[-9999px] sm:static sm:top-0',
              ]}
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
                  className={[
                    'block before:content-[attr(data-th)] before:font-semibold before:block sm:before:content-none sm:table-cell',
                  ]}
                >
                  {test.Secs100to0KmPerH}
                </td>
                <td
                  data-th="Distance (mètres)"
                  className={[
                    'block before:content-[attr(data-th)] before:font-semibold before:block sm:before:content-none sm:table-cell',
                  ]}
                >
                  {test.Distance}
                </td>
                <td
                  data-th="Surface"
                  className={[
                    'block before:content-[attr(data-th)] before:font-semibold before:block sm:before:content-none sm:table-cell',
                  ]}
                >
                  {test.Surface}
                </td>
                <td
                  data-th="Poid"
                  className={[
                    'block before:content-[attr(data-th)] before:font-semibold before:block sm:before:content-none sm:table-cell',
                  ]}
                >
                  {test.Weight}
                </td>
                <td
                  data-th="Température"
                  className={[
                    'block before:content-[attr(data-th)] before:font-semibold before:block sm:before:content-none sm:table-cell',
                  ]}
                >
                  {test.Temp}
                </td>
                <td
                  data-th="Saison"
                  className={[
                    'block before:content-[attr(data-th)] before:font-semibold before:block sm:before:content-none sm:table-cell',
                  ]}
                >
                  {test.Season}
                </td>
                <td
                  data-th="Pneux"
                  className={[
                    'block before:content-[attr(data-th)] before:font-semibold before:block sm:before:content-none sm:table-cell',
                  ]}
                >
                  {test.Tires}
                </td>
                <td
                  data-th="Roue avant"
                  className={[
                    'block before:content-[attr(data-th)] before:font-semibold before:block sm:before:content-none sm:table-cell',
                  ]}
                >
                  {test.WheelFront}
                </td>
                <td
                  data-th="Roue arrière"
                  className={[
                    'block before:content-[attr(data-th)] before:font-semibold before:block sm:before:content-none sm:table-cell',
                  ]}
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
