import CarsHomeSection from '../../components/cars/CarsHomeSection';
import CustomHead from '../../components/customHead';

import {
  getAllCarNames,
  getAllData,
  getAllFullTestedVersions,
  getAllMakers,
  getCarsByMaker,
  getCarsByMakerLight,
} from '../../lib/csvParser';

export async function getStaticProps() {
  const allData = await getAllData();
  const getFullTested = await getAllFullTestedVersions([
    'range',
    'acceleration',
  ]);
  const allNames = await getAllCarNames();
  const allMakers = await getAllMakers();
  const teslas = await getCarsByMaker('Tesla');
  const teslasLight = await getCarsByMakerLight('Tesla');

  return {
    props: { allData, getFullTested, allNames, allMakers, teslas, teslasLight },
  };
}

const Cars = ({
  allData,
  getFullTested,
  allNames,
  allMakers,
  teslas,
  teslasLight,
}) => {
  console.log({
    allData,
    getFullTested,
    allNames,
    allMakers,
    teslas,
    teslasLight,
  });
  return (
    <>
      <CustomHead title="SOME TITLE" description="some description" />

      <h1 className="text-xl p-2 text-white font-poppins font-extrabold text-center">
        Tous les tests
      </h1>
      <CarsHomeSection stringArr={allMakers} title="Cherchez par marque" />
      <section>
        <div className="flex items-center bg-white p-3 gap-3">
          <h2>Cherchez par test</h2>
        </div>
      </section>
      <section>
        <h2>Voir tous les modèles</h2>
      </section>
    </>
  );
};

export default Cars;
