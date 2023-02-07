import React, { useState } from 'react';
import TableHeader from '../TableHeader';
import accImg from '../../public/headers/acc.png';
import specImg from '../../public/headers/spec.png';
import driveImg from '../../public/headers/drive.png';
import weightImg from '../../public/headers/weight.png';
import horseImg from '../../public/headers/horse-power.png';
import versusImg from '../../public/headers/versus.png';
import calendarImg from '../../public/headers/calendar.png';
import tiresImg from '../../public/headers/tires.png';

const Acceleration = ({ tests, className }) => {
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
            Acceleration
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
            <th className="absolute top-[-9999px] left-[-9999px] sm:static sm:top-0  hover:cursor-help">
              <TableHeader info="Motorisation" imageSrc={driveImg} />
            </th>
            {/* <th
              className={`${
                showDetails && showMoreDetails
                  ? 'absolute top-[-9999px] left-[-9999px] sm:static sm:top-0  hover:cursor-help'
                  : 'hidden'
              }`}
            >
              0-10
            </th>
            <th
              className={`${
                showDetails && showMoreDetails
                  ? 'absolute top-[-9999px] left-[-9999px] sm:static sm:top-0  hover:cursor-help'
                  : 'hidden'
              }`}
            >
              0-20
            </th>
            <th
              className={`${
                showDetails && showMoreDetails
                  ? 'absolute top-[-9999px] left-[-9999px] sm:static sm:top-0  hover:cursor-help'
                  : 'hidden'
              }`}
            >
              0-30
            </th>
            <th
              className={`${
                showDetails && showMoreDetails
                  ? 'absolute top-[-9999px] left-[-9999px] sm:static sm:top-0  hover:cursor-help'
                  : 'hidden'
              }`}
            >
              0-40
            </th>
            <th
              className={`${
                showDetails && showMoreDetails
                  ? 'absolute top-[-9999px] left-[-9999px] sm:static sm:top-0  hover:cursor-help'
                  : 'hidden'
              }`}
            >
              0-50
            </th>
            <th
              className={`${
                showDetails && showMoreDetails
                  ? 'absolute top-[-9999px] left-[-9999px] sm:static sm:top-0  hover:cursor-help'
                  : 'hidden'
              }`}
            >
              0-60
            </th>
            <th
              className={`${
                showDetails && showMoreDetails
                  ? 'absolute top-[-9999px] left-[-9999px] sm:static sm:top-0  hover:cursor-help'
                  : 'hidden'
              }`}
            >
              0-70
            </th>
            <th
              className={`${
                showDetails && showMoreDetails
                  ? 'absolute top-[-9999px] left-[-9999px] sm:static sm:top-0  hover:cursor-help'
                  : 'hidden'
              }`}
            >
              0-80
            </th>
            <th
              className={`${
                showDetails && showMoreDetails
                  ? 'absolute top-[-9999px] left-[-9999px] sm:static sm:top-0  hover:cursor-help'
                  : 'hidden'
              }`}
            >
              0-90
            </th> */}
            <th className="absolute top-[-9999px] left-[-9999px] sm:static sm:top-0  hover:cursor-help">
              <TableHeader info="Acceleration (secondes)" imageSrc={accImg} />
            </th>
            {/* <th
              className={`${
                showDetails && showMoreDetails
                  ? 'absolute top-[-9999px] left-[-9999px] sm:static sm:top-0  hover:cursor-help'
                  : 'hidden'
              }`}
            >
              0-100 1-foot (secondes)
            </th> */}
            <th className="absolute top-[-9999px] left-[-9999px] sm:static sm:top-0  hover:cursor-help">
              <TableHeader
                info="Acceleration spec (secondes)"
                imageSrc={specImg}
              />
            </th>
            <th
              className={`${
                showDetails
                  ? 'absolute top-[-9999px] left-[-9999px] sm:static sm:top-0  hover:cursor-help'
                  : 'hidden'
              }`}
            >
              <TableHeader info="test VS spec" imageSrc={versusImg} />
            </th>
            <th
              className={`${
                showDetails && showMoreDetails
                  ? 'absolute top-[-9999px] left-[-9999px] sm:static sm:top-0  hover:cursor-help'
                  : 'hidden'
              }`}
            >
              <TableHeader info="Date" imageSrc={calendarImg} />
            </th>
            <th
              className={`${
                showDetails
                  ? 'absolute top-[-9999px] left-[-9999px] sm:static sm:top-0  hover:cursor-help'
                  : 'hidden'
              }`}
            >
              <TableHeader info="Puissance (chevaux)" imageSrc={horseImg} />
            </th>
            <th
              className={`${
                showDetails && showMoreDetails
                  ? 'absolute top-[-9999px] left-[-9999px] sm:static sm:top-0  hover:cursor-help'
                  : 'hidden'
              }`}
            >
              <TableHeader info="Pneux" imageSrc={tiresImg} />
            </th>
            <th className="absolute top-[-9999px] left-[-9999px] sm:static sm:top-0  hover:cursor-help">
              <TableHeader info="Poid (kg)" imageSrc={weightImg} />
            </th>
            <th
              className={`${
                showDetails && showMoreDetails
                  ? 'absolute top-[-9999px] left-[-9999px] sm:static sm:top-0  hover:cursor-help'
                  : 'hidden'
              }`}
            >
              Roue avant
            </th>
            <th
              className={`${
                showDetails && showMoreDetails
                  ? 'absolute top-[-9999px] left-[-9999px] sm:static sm:top-0  hover:cursor-help'
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
                  data-th="Motorisation"
                  className="block my-4 font-semibold before:content-[attr(data-th)] before:font-normal before:italic before:block sm:before:content-none sm:table-cell sm:p-2 sm:rounded-lg "
                >
                  {test.Drive}
                </td>
                {/* <td
                  data-th="0-10"
                  className={`${
                    showDetails && showMoreDetails
                      ? 'block my-4 font-semibold before:content-[attr(data-th)] before:font-normal before:italic before:block sm:before:content-none sm:table-cell sm:p-2 sm:rounded-lg '
                      : 'hidden'
                  }`}
                >
                  {test.ZeroTo10}
                </td>
                <td
                  data-th="0-20"
                  className={`${
                    showDetails && showMoreDetails
                      ? 'block my-4 font-semibold before:content-[attr(data-th)] before:font-normal before:italic before:block sm:before:content-none sm:table-cell sm:p-2 sm:rounded-lg '
                      : 'hidden'
                  }`}
                >
                  {test.ZeroTo20}
                </td>
                <td
                  data-th="0-30"
                  className={`${
                    showDetails && showMoreDetails
                      ? 'block my-4 font-semibold before:content-[attr(data-th)] before:font-normal before:italic before:block sm:before:content-none sm:table-cell sm:p-2 sm:rounded-lg '
                      : 'hidden'
                  }`}
                >
                  {test.ZeroTo30}
                </td>
                <td
                  data-th="0-40"
                  className={`${
                    showDetails && showMoreDetails
                      ? 'block my-4 font-semibold before:content-[attr(data-th)] before:font-normal before:italic before:block sm:before:content-none sm:table-cell sm:p-2 sm:rounded-lg '
                      : 'hidden'
                  }`}
                >
                  {test.ZeroTo40}
                </td>
                <td
                  data-th="0-50"
                  className={`${
                    showDetails && showMoreDetails
                      ? 'block my-4 font-semibold before:content-[attr(data-th)] before:font-normal before:italic before:block sm:before:content-none sm:table-cell sm:p-2 sm:rounded-lg '
                      : 'hidden'
                  }`}
                >
                  {test.ZeroTo50}
                </td>
                <td
                  data-th="0-60"
                  className={`${
                    showDetails && showMoreDetails
                      ? 'block my-4 font-semibold before:content-[attr(data-th)] before:font-normal before:italic before:block sm:before:content-none sm:table-cell sm:p-2 sm:rounded-lg '
                      : 'hidden'
                  }`}
                >
                  {test.ZeroTo60}
                </td>
                <td
                  data-th="0-70"
                  className={`${
                    showDetails && showMoreDetails
                      ? 'block my-4 font-semibold before:content-[attr(data-th)] before:font-normal before:italic before:block sm:before:content-none sm:table-cell sm:p-2 sm:rounded-lg '
                      : 'hidden'
                  }`}
                >
                  {test.ZeroTo70}
                </td>
                <td
                  data-th="0-80"
                  className={`${
                    showDetails && showMoreDetails
                      ? 'block my-4 font-semibold before:content-[attr(data-th)] before:font-normal before:italic before:block sm:before:content-none sm:table-cell sm:p-2 sm:rounded-lg '
                      : 'hidden'
                  }`}
                >
                  {test.ZeroTo80}
                </td>
                <td
                  data-th="0-90"
                  className={`${
                    showDetails && showMoreDetails
                      ? 'block my-4 font-semibold before:content-[attr(data-th)] before:font-normal before:italic before:block sm:before:content-none sm:table-cell sm:p-2 sm:rounded-lg '
                      : 'hidden'
                  }`}
                >
                  {test.ZeroTo90}
                </td> */}
                <td
                  data-th="0-100 (secondes)"
                  className={[
                    'block my-4 font-semibold before:content-[attr(data-th)] before:font-normal before:italic before:block sm:before:content-none sm:table-cell sm:p-2 sm:rounded-lg ',
                  ]}
                >
                  {test.ZeroTo100}
                </td>
                {/* <td
                  data-th="0-100 1-foot (secondes)"
                  className={`${
                    showDetails && showMoreDetails
                      ? 'block my-4 font-semibold before:content-[attr(data-th)] before:font-normal before:italic before:block sm:before:content-none sm:table-cell sm:p-2 sm:rounded-lg '
                      : 'hidden'
                  }`}
                >
                  {test.ZeroTo100onefoot}
                </td> */}
                <td
                  data-th="0-100 Spec (secondes)"
                  className={[
                    'block my-4 font-semibold before:content-[attr(data-th)] before:font-normal before:italic before:block sm:before:content-none sm:table-cell sm:p-2 sm:rounded-lg ',
                  ]}
                >
                  {test.ZeroTo100spec}
                </td>
                <td
                  data-th="test VS spec"
                  className={`${
                    showDetails
                      ? 'block my-4 font-semibold before:content-[attr(data-th)] before:font-normal before:italic before:block sm:before:content-none sm:table-cell sm:p-2 sm:rounded-lg '
                      : 'hidden'
                  }`}
                >
                  {test.TestVsSpec}
                </td>
                <td
                  data-th="Date"
                  className={`${
                    showDetails && showMoreDetails
                      ? 'block my-4 font-semibold before:content-[attr(data-th)] before:font-normal before:italic before:block sm:before:content-none sm:table-cell sm:p-2 sm:rounded-lg '
                      : 'hidden'
                  }`}
                >
                  {test.Date}
                </td>
                <td
                  data-th="Hp"
                  className={`${
                    showDetails
                      ? 'block my-4 font-semibold before:content-[attr(data-th)] before:font-normal before:italic before:block sm:before:content-none sm:table-cell sm:p-2 sm:rounded-lg '
                      : 'hidden'
                  }`}
                >
                  {test.Hp}
                </td>
                <td
                  data-th="Pneux"
                  className={`${
                    showDetails && showMoreDetails
                      ? 'block my-4 font-semibold before:content-[attr(data-th)] before:font-normal before:italic before:block sm:before:content-none sm:table-cell sm:p-2 sm:rounded-lg '
                      : 'hidden'
                  }`}
                >
                  {test.Tires}
                </td>
                <td
                  data-th="Poid (kg)"
                  className={[
                    'block my-4 font-semibold before:content-[attr(data-th)] before:font-normal before:italic before:block sm:before:content-none sm:table-cell sm:p-2 sm:rounded-lg ',
                  ]}
                >
                  {test.Weight}
                </td>
                <td
                  data-th="Roue avant"
                  className={`${
                    showDetails && showMoreDetails
                      ? 'block my-4 font-semibold before:content-[attr(data-th)] before:font-normal before:italic before:block sm:before:content-none sm:table-cell sm:p-2 sm:rounded-lg '
                      : 'hidden'
                  }`}
                >
                  {test.WheelFront}
                </td>
                <td
                  data-th="Roue arrière"
                  className={`${
                    showDetails && showMoreDetails
                      ? 'block my-4 font-semibold before:content-[attr(data-th)] before:font-normal before:italic before:block sm:before:content-none sm:table-cell sm:p-2 sm:rounded-lg '
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

export default Acceleration;
