import TableHeader from '../TableHeader';
import carFrontImg from '../../public/headers/car_front.png';
import carRearImg from '../../public/headers/car_rear.png';
import weightImg from '../../public/headers/weight.png';
import scaleImg from '../../public/headers/scale.png';
import batteryImg from '../../public/headers/battery_kwh.png';

const Weight = ({ tests, className }) => {
  return (
    <div className={className}>
      <table className="min-w-full border-separate border-spacing-2">
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
              <TableHeader info="Total (kg)" imageSrc={weightImg} />
            </th>
            <th
              className={[
                'absolute top-[-9999px] left-[-9999px] sm:static sm:top-0',
              ]}
            >
              <TableHeader info="Arrière" imageSrc={carRearImg} />
            </th>
            <th
              className={[
                'absolute top-[-9999px] left-[-9999px] sm:static sm:top-0',
              ]}
            >
              <TableHeader info="Avant" imageSrc={carFrontImg} />
            </th>

            <th
              className={[
                'absolute top-[-9999px] left-[-9999px] sm:static sm:top-0',
              ]}
            >
              <TableHeader info="Distribution" imageSrc={scaleImg} />
            </th>
            <th
              className={[
                'absolute top-[-9999px] left-[-9999px] sm:static sm:top-0',
              ]}
            >
              <TableHeader info="Batterie" imageSrc={batteryImg} />
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
                  <TableHeader info="Total (kg)" imageSrc={weightImg} />
                </div>
                <td
                  data-th="Total (kg)"
                  className="block my-4 font-semibold  before:font-normal before:italic before:block sm:before:content-none sm:table-cell sm:p-2 sm:rounded-lg "
                >
                  {test.Total}
                </td>
                <div className="font-extrabold flex justify-center mt-5 sm:hidden hover:cursor-help">
                  <TableHeader info="Arrière" imageSrc={carRearImg} />
                </div>
                <td
                  data-th="Arrière"
                  className="block my-4 font-semibold  before:font-normal before:italic before:block sm:before:content-none sm:table-cell sm:p-2 sm:rounded-lg "
                >
                  {test.Rear}
                </td>
                <div className="font-extrabold flex justify-center mt-5 sm:hidden hover:cursor-help">
                  <TableHeader info="Avant" imageSrc={carFrontImg} />
                </div>
                <td
                  data-th="Avant"
                  className="block my-4 font-semibold  before:font-normal before:italic before:block sm:before:content-none sm:table-cell sm:p-2 sm:rounded-lg "
                >
                  {test.Front}
                </td>
                <div className="font-extrabold flex justify-center mt-5 sm:hidden hover:cursor-help">
                  <TableHeader info="Distribution" imageSrc={scaleImg} />
                </div>
                <td
                  data-th="Distribution"
                  className="block my-4 font-semibold  before:font-normal before:italic before:block sm:before:content-none sm:table-cell sm:p-2 sm:rounded-lg "
                >
                  {test.Distribution}
                </td>
                <div className="font-extrabold flex justify-center mt-5 sm:hidden hover:cursor-help">
                  <TableHeader info="Batterie" imageSrc={batteryImg} />
                </div>
                <td
                  data-th="Batterie"
                  className="block my-4 font-semibold  before:font-normal before:italic before:block sm:before:content-none sm:table-cell sm:p-2 sm:rounded-lg "
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
