import React, { useState } from 'react';

const Acceleration = ({ tests, className }) => {
  const [details, setDetails] = useState(false);
  const [moreDetails, setMoredetails] = useState(false);

  return (
    <div className={className}>
      <table className=" min-w-full">
        <caption>
          <h3 className="font-bold bg-light-primary-2 text-white p-2 text-left">
            Acceleration
          </h3>
        </caption>
        <thead>
          <tr>
            <th
              className={[
                'absolute top-[-9999px] left-[-9999px] sm:static sm:top-0',
              ]}
            >
              Motorisation
            </th>
            <th
              className={[
                'absolute top-[-9999px] left-[-9999px] sm:static sm:top-0',
              ]}
            >
              0-10
            </th>
            <th
              className={[
                'absolute top-[-9999px] left-[-9999px] sm:static sm:top-0',
              ]}
            >
              0-20
            </th>
            <th
              className={[
                'absolute top-[-9999px] left-[-9999px] sm:static sm:top-0',
              ]}
            >
              0-30
            </th>
            <th
              className={[
                'absolute top-[-9999px] left-[-9999px] sm:static sm:top-0',
              ]}
            >
              0-40
            </th>
            <th
              className={[
                'absolute top-[-9999px] left-[-9999px] sm:static sm:top-0',
              ]}
            >
              0-50
            </th>
            <th
              className={[
                'absolute top-[-9999px] left-[-9999px] sm:static sm:top-0',
              ]}
            >
              0-60
            </th>
            <th
              className={[
                'absolute top-[-9999px] left-[-9999px] sm:static sm:top-0',
              ]}
            >
              0-70
            </th>
            <th
              className={[
                'absolute top-[-9999px] left-[-9999px] sm:static sm:top-0',
              ]}
            >
              0-80
            </th>
            <th
              className={[
                'absolute top-[-9999px] left-[-9999px] sm:static sm:top-0',
              ]}
            >
              0-90
            </th>
            <th
              className={[
                'absolute top-[-9999px] left-[-9999px] sm:static sm:top-0',
              ]}
            >
              0-100
            </th>
            <th
              className={[
                'absolute top-[-9999px] left-[-9999px] sm:static sm:top-0',
              ]}
            >
              0-100 (1ft)
            </th>
            <th
              className={[
                'absolute top-[-9999px] left-[-9999px] sm:static sm:top-0',
              ]}
            >
              0-100 (spec)
            </th>
            <th
              className={[
                'absolute top-[-9999px] left-[-9999px] sm:static sm:top-0',
              ]}
            >
              test VS spec
            </th>
            <th
              className={[
                'absolute top-[-9999px] left-[-9999px] sm:static sm:top-0',
              ]}
            >
              Date
            </th>
            <th
              className={[
                'absolute top-[-9999px] left-[-9999px] sm:static sm:top-0',
              ]}
            >
              Hp
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
              Poid (kg)
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
                  data-th="Motorisation"
                  className={[
                    'block before:content-[attr(data-th)] before:font-semibold before:block sm:before:content-none sm:table-cell',
                  ]}
                >
                  {test.Drive}
                </td>
                <td
                  data-th="0-10"
                  className={[
                    'block before:content-[attr(data-th)] before:font-semibold before:block sm:before:content-none sm:table-cell',
                  ]}
                >
                  {test.ZeroTo10}
                </td>
                <td
                  data-th="0-20"
                  className={[
                    'block before:content-[attr(data-th)] before:font-semibold before:block sm:before:content-none sm:table-cell',
                  ]}
                >
                  {test.ZeroTo20}
                </td>
                <td
                  data-th="0-30"
                  className={[
                    'block before:content-[attr(data-th)] before:font-semibold before:block sm:before:content-none sm:table-cell',
                  ]}
                >
                  {test.ZeroTo30}
                </td>
                <td
                  data-th="0-40"
                  className={[
                    'block before:content-[attr(data-th)] before:font-semibold before:block sm:before:content-none sm:table-cell',
                  ]}
                >
                  {test.ZeroTo40}
                </td>
                <td
                  data-th="0-50"
                  className={[
                    'block before:content-[attr(data-th)] before:font-semibold before:block sm:before:content-none sm:table-cell',
                  ]}
                >
                  {test.ZeroTo50}
                </td>
                <td
                  data-th="0-60"
                  className={[
                    'block before:content-[attr(data-th)] before:font-semibold before:block sm:before:content-none sm:table-cell',
                  ]}
                >
                  {test.ZeroTo60}
                </td>
                <td
                  data-th="0-70"
                  className={[
                    'block before:content-[attr(data-th)] before:font-semibold before:block sm:before:content-none sm:table-cell',
                  ]}
                >
                  {test.ZeroTo70}
                </td>
                <td
                  data-th="0-80"
                  className={[
                    'block before:content-[attr(data-th)] before:font-semibold before:block sm:before:content-none sm:table-cell',
                  ]}
                >
                  {test.ZeroTo80}
                </td>
                <td
                  data-th="0-90"
                  className={[
                    'block before:content-[attr(data-th)] before:font-semibold before:block sm:before:content-none sm:table-cell',
                  ]}
                >
                  {test.ZeroTo90}
                </td>
                <td
                  data-th="0-100"
                  className={[
                    'block before:content-[attr(data-th)] before:font-semibold before:block sm:before:content-none sm:table-cell',
                  ]}
                >
                  {test.ZeroTo100}
                </td>
                <td
                  data-th="0-100 (1 foot)"
                  className={[
                    'block before:content-[attr(data-th)] before:font-semibold before:block sm:before:content-none sm:table-cell',
                  ]}
                >
                  {test.ZeroTo100onefoot}
                </td>
                <td
                  data-th="0-100 (spec)"
                  className={[
                    'block before:content-[attr(data-th)] before:font-semibold before:block sm:before:content-none sm:table-cell',
                  ]}
                >
                  {test.ZeroTo100spec}
                </td>
                <td
                  data-th="test VS spec"
                  className={[
                    'block before:content-[attr(data-th)] before:font-semibold before:block sm:before:content-none sm:table-cell',
                  ]}
                >
                  {test.TestVsSpec}
                </td>
                <td
                  data-th="Date"
                  className={[
                    'block before:content-[attr(data-th)] before:font-semibold before:block sm:before:content-none sm:table-cell',
                  ]}
                >
                  {test.Date}
                </td>
                <td
                  data-th="Hp"
                  className={[
                    'block before:content-[attr(data-th)] before:font-semibold before:block sm:before:content-none sm:table-cell',
                  ]}
                >
                  {test.Hp}
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
                  data-th="Poid (kg)"
                  className={[
                    'block before:content-[attr(data-th)] before:font-semibold before:block sm:before:content-none sm:table-cell',
                  ]}
                >
                  {test.Weight}
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

export default Acceleration;
