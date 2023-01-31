const ThousandKM = ({ tests, className }) => {
  return (
    <div className={className}>
      <table className="min-w-full">
        <caption>
          <h3 className="font-bold bg-light-primary-2 text-white p-2 text-left">
            1000km
          </h3>
        </caption>
        <thead>
          <tr>
            <th
              className={[
                'absolute top-[-9999px] left-[-9999px] sm:static sm:top-0',
              ]}
            >
              Durée
            </th>
            <th
              className={[
                'absolute top-[-9999px] left-[-9999px] sm:static sm:top-0',
              ]}
            >
              Km/h
            </th>
            <th
              className={[
                'absolute top-[-9999px] left-[-9999px] sm:static sm:top-0',
              ]}
            >
              KWh/km
            </th>
            <th
              className={[
                'absolute top-[-9999px] left-[-9999px] sm:static sm:top-0',
              ]}
            >
              Température
            </th>
            {/* <th>Date</th> */}
          </tr>
        </thead>
        <tbody>
          {tests.map((test, i) => {
            return (
              <tr key={i}>
                <td
                  data-th="Durée"
                  className={[
                    'block before:content-[attr(data-th)] before:font-semibold before:block sm:before:content-none sm:table-cell',
                  ]}
                >
                  {test.Time}
                </td>
                <td
                  data-th="Km/h"
                  className={[
                    'block before:content-[attr(data-th)] before:font-semibold before:block sm:before:content-none sm:table-cell',
                  ]}
                >
                  {test.kmPerH}
                </td>
                <td
                  data-th="KWh/km"
                  className={[
                    'block before:content-[attr(data-th)] before:font-semibold before:block sm:before:content-none sm:table-cell',
                  ]}
                >
                  {(Number(test.WhPerKm.replace(',', '.')) / 10).toFixed(1)}
                </td>
                <td
                  data-th="Température"
                  className={[
                    'block before:content-[attr(data-th)] before:font-semibold before:block sm:before:content-none sm:table-cell',
                  ]}
                >
                  {test.Temp}
                </td>
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
