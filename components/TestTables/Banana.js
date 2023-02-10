import TableHeader from '../TableHeader';
import frunkImg from '../../public/headers/frunk.png';
import trunkImg from '../../public/headers/trunk.png';
import seatImg from '../../public/headers/seat.png';

const Banana = ({ tests, className }) => {
  return (
    <div className={className}>
      <table className="min-w-full border-separate border-spacing-2">
        <caption>
          <h3 className="font-bold bg-light-primary-2 text-white p-2 text-left">
            Banana Box
          </h3>
        </caption>
        <thead>
          <tr>
            <th className="absolute top-[-9999px] left-[-9999px] sm:static sm:top-0">
              <TableHeader info="Coffre" imageSrc={trunkImg} />
            </th>
            <th className="absolute top-[-9999px] left-[-9999px] sm:static sm:top-0">
              <TableHeader info="Coffre sièges baissés" imageSrc={seatImg} />
            </th>
            <th className="absolute top-[-9999px] left-[-9999px] sm:static sm:top-0">
              <TableHeader info="Coffre" imageSrc={frunkImg} />
            </th>
          </tr>
        </thead>
        <tbody>
          {tests.map((test, i) => {
            return (
              <tr
                key={i}
                className="even:bg-light-primary-7/50  odd:bg-light-primary-3/50 rounded-3xl m-5 p-5 grid grid-cols-2 sm:table-row"
              >
                <td
                  data-th="Coffre"
                  className="block my-4 font-semibold before:content-[attr(data-th)] before:font-normal before:italic before:block sm:before:content-none sm:table-cell sm:p-2 sm:rounded-lg "
                >
                  {test.Trunk}
                </td>
                <td
                  data-th="Coffre sièges baissés"
                  className="block my-4 font-semibold before:content-[attr(data-th)] before:font-normal before:italic before:block sm:before:content-none sm:table-cell sm:p-2 sm:rounded-lg "
                >
                  {test.SeatsFolded}
                </td>
                <td
                  data-th="Coffre Avant"
                  className="block my-4 font-semibold before:content-[attr(data-th)] before:font-normal before:italic before:block sm:before:content-none sm:table-cell sm:p-2 sm:rounded-lg "
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
