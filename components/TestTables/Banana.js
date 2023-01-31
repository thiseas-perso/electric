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
            <th className="absolute top-[-9999px] left-[-9999px] sm:static sm:top-0">
              Coffre
            </th>
            <th className="absolute top-[-9999px] left-[-9999px] sm:static sm:top-0">
              Coffre sièges baissés
            </th>
            <th className="absolute top-[-9999px] left-[-9999px] sm:static sm:top-0">
              Coffre Avant
            </th>
          </tr>
        </thead>
        <tbody>
          {tests.map((test, i) => {
            return (
              <tr key={i}>
                <td
                  data-th="Coffre"
                  className="block before:content-[attr(data-th)] before:font-semibold before:block sm:before:content-none sm:table-cell"
                >
                  {test.Trunk}
                </td>
                <td
                  data-th="Coffre sièges baissés"
                  className="block before:content-[attr(data-th)] before:font-semibold before:block sm:before:content-none sm:table-cell"
                >
                  {test.SeatsFolded}
                </td>
                <td
                  data-th="Coffre Avant"
                  className="block before:content-[attr(data-th)] before:font-semibold before:block sm:before:content-none sm:table-cell"
                >
                  {test.Frunk || 0}
                </td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  );
};

export default Banana;
