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
            <th
              className={[
                'absolute top-[-9999px] left-[-9999px] sm:static sm:top-0',
              ]}
            >
              Total (kg)
            </th>
            <th
              className={[
                'absolute top-[-9999px] left-[-9999px] sm:static sm:top-0',
              ]}
            >
              Avant
            </th>
            <th
              className={[
                'absolute top-[-9999px] left-[-9999px] sm:static sm:top-0',
              ]}
            >
              Arrière
            </th>
            <th
              className={[
                'absolute top-[-9999px] left-[-9999px] sm:static sm:top-0',
              ]}
            >
              Distribution
            </th>
            <th
              className={[
                'absolute top-[-9999px] left-[-9999px] sm:static sm:top-0',
              ]}
            >
              Batterie
            </th>
          </tr>
        </thead>
        <tbody>
          {tests.map((test, i) => {
            return (
              <tr key={i}>
                <td
                  data-th="Total (kg)"
                  className={[
                    'block before:content-[attr(data-th)] before:font-semibold before:block sm:before:content-none sm:table-cell',
                  ]}
                >
                  {test.Total}
                </td>
                <td
                  data-th="Avant"
                  className={[
                    'block before:content-[attr(data-th)] before:font-semibold before:block sm:before:content-none sm:table-cell',
                  ]}
                >
                  {test.Front}
                </td>
                <td
                  data-th="Arrière"
                  className={[
                    'block before:content-[attr(data-th)] before:font-semibold before:block sm:before:content-none sm:table-cell',
                  ]}
                >
                  {test.Rear}
                </td>
                <td
                  data-th="Distribution"
                  className={[
                    'block before:content-[attr(data-th)] before:font-semibold before:block sm:before:content-none sm:table-cell',
                  ]}
                >
                  {test.Distribution}
                </td>
                <td
                  data-th="Batterie"
                  className={[
                    'block before:content-[attr(data-th)] before:font-semibold before:block sm:before:content-none sm:table-cell',
                  ]}
                >
                  {test.Battery}
                </td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  );
};

export default Weight;
