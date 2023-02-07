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

            <th className="absolute top-[-9999px] left-[-9999px] sm:static sm:top-0  hover:cursor-help">
              <TableHeader info="Acceleration (secondes)" imageSrc={accImg} />
            </th>

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
                <div className="font-extrabold flex justify-center mt-5 sm:hidden hover:cursor-help">
                  <TableHeader
                    info="Motorisation"
                    imageSrc={driveImg}
                    className
                  />
                </div>
                <td
                  data-th="Motorisation"
                  className="block my-4 font-semibold  before:font-normal before:italic before:block sm:before:content-none sm:table-cell sm:p-2 sm:rounded-lg "
                >
                  {test.Drive}
                </td>

                <div className="font-extrabold flex justify-center mt-5 sm:hidden hover:cursor-help">
                  <TableHeader
                    info="0-100km/h (secondes)"
                    imageSrc={accImg}
                    className
                  />
                </div>
                <td
                  data-th="0-100 (secondes)"
                  className={[
                    'block my-4 font-semibold  before:font-normal before:italic before:block sm:before:content-none sm:table-cell sm:p-2 sm:rounded-lg ',
                  ]}
                >
                  {test.ZeroTo100}
                </td>

                <div className="font-extrabold flex justify-center mt-5 sm:hidden hover:cursor-help">
                  <TableHeader
                    info="0-100 spec. (secondes)"
                    imageSrc={specImg}
                    className
                  />
                </div>
                <td
                  data-th="0-100 Spec (secondes)"
                  className={[
                    'block my-4 font-semibold  before:font-normal before:italic before:block sm:before:content-none sm:table-cell sm:p-2 sm:rounded-lg ',
                  ]}
                >
                  {test.ZeroTo100spec}
                </td>
                <div
                  className={`${
                    showDetails
                      ? 'font-extrabold flex justify-center mt-5 sm:hidden hover:cursor-help'
                      : 'hidden'
                  }`}
                >
                  <TableHeader
                    info="test VS spec"
                    imageSrc={versusImg}
                    className
                  />
                </div>
                <td
                  data-th="test VS spec"
                  className={`${
                    showDetails
                      ? 'block my-4 font-semibold  before:font-normal before:italic before:block sm:before:content-none sm:table-cell sm:p-2 sm:rounded-lg '
                      : 'hidden'
                  }`}
                >
                  {test.TestVsSpec}
                </td>
                <div
                  className={`${
                    showDetails && showMoreDetails
                      ? 'font-extrabold flex justify-center mt-5 sm:hidden hover:cursor-help'
                      : 'hidden'
                  }`}
                >
                  <TableHeader info="Date" imageSrc={calendarImg} className />
                </div>
                <td
                  data-th="Date"
                  className={`${
                    showDetails && showMoreDetails
                      ? 'block my-4 font-semibold  before:font-normal before:italic before:block sm:before:content-none sm:table-cell sm:p-2 sm:rounded-lg '
                      : 'hidden'
                  }`}
                >
                  {test.Date}
                </td>
                <div
                  className={`${
                    showDetails
                      ? 'font-extrabold flex justify-center mt-5 sm:hidden hover:cursor-help'
                      : 'hidden'
                  }`}
                >
                  <TableHeader
                    info="Puissance (cheveaux)"
                    imageSrc={horseImg}
                    className
                  />
                </div>
                <td
                  data-th="Hp"
                  className={`${
                    showDetails
                      ? 'block my-4 font-semibold  before:font-normal before:italic before:block sm:before:content-none sm:table-cell sm:p-2 sm:rounded-lg '
                      : 'hidden'
                  }`}
                >
                  {test.Hp}
                </td>
                <div
                  className={`${
                    showDetails && showMoreDetails
                      ? 'font-extrabold flex justify-center mt-5 sm:hidden hover:cursor-help'
                      : 'hidden'
                  }`}
                >
                  <TableHeader info="Pneux" imageSrc={tiresImg} className />
                </div>
                <td
                  data-th="Pneux"
                  className={`${
                    showDetails && showMoreDetails
                      ? 'block my-4 font-semibold before:font-normal before:italic before:block sm:before:content-none sm:table-cell sm:p-2 sm:rounded-lg '
                      : 'hidden'
                  }`}
                >
                  {test.Tires}
                </td>
                <div className="font-extrabold flex justify-center mt-5 sm:hidden hover:cursor-help">
                  <TableHeader
                    info="Poid (kg)"
                    imageSrc={weightImg}
                    className
                  />
                </div>
                <td
                  data-th="Poid (kg)"
                  className={[
                    'block my-4 font-semibold before:font-normal before:italic before:block sm:before:content-none sm:table-cell sm:p-2 sm:rounded-lg ',
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
