import { getOneFileData } from '../../../lib/csvParser';
import TableHeader from '../../../components/TableHeader';

import accImg from '../../../public/headers/acc.png';
import specImg from '../../../public/headers/spec.png';
import driveImg from '../../../public/headers/drive.png';
import weightImg from '../../../public/headers/weight.png';
import horseImg from '../../../public/headers/horse-power.png';
import versusImg from '../../../public/headers/versus.png';
import calendarImg from '../../../public/headers/calendar.png';
import tiresImg from '../../../public/headers/tires.png';
import { Acceleration } from '../../../components/TestTables';

export async function getStaticProps() {
  const data = await getOneFileData('acceleration');
  const sorted = [...data].sort((a, b) => a.Car.localeCompare(b.Car));

  return {
    props: {
      sorted,
    },
  };
}

const AccelerationResults = ({ sorted }) => {
  console.log(sorted);
  return <Acceleration tests={sorted} fullTest={true} className="" />;
};

export default AccelerationResults;
