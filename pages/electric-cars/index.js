import CarsHomeSection from '../../components/cars/CarsHomeSection';
import MakerSection from '../../components/cars/MakerSection';
import CustomHead from '../../components/customHead';

import {
  getAllData,
  getAllFullTestedVersions,
  getAllMakers,
  getAllModelsFromParsedData,
  getAllTestNames,
  getCarsByMaker,
  getCarsByMakerLight,
} from '../../lib/csvParser';

export async function getStaticProps() {
  const allData = await getAllData();
  const getFullTested = await getAllFullTestedVersions([
    'range',
    'acceleration',
  ]);

  const allMakers = await getAllMakers();
  const allModels = await getAllModelsFromParsedData();
  const teslas = await getCarsByMaker('Tesla');
  const teslasLight = await getCarsByMakerLight('Tesla');
  const testNames = getAllTestNames();
  return {
    props: {
      allData,
      getFullTested,
      allModels,
      allMakers,
      teslas,
      teslasLight,
      testNames,
    },
  };
}

const Cars = ({
  allData,
  getFullTested,
  allModels,
  allMakers,
  teslas,
  teslasLight,
  testNames,
}) => {
  console.log({
    allData,
    getFullTested,
    allModels,
    allMakers,
    teslas,
    teslasLight,
    testNames,
  });
  return (
    <>
      <CustomHead title="SOME TITLE" description="some description" />

      <h1 className="text-xl p-2 text-white font-poppins font-extrabold text-center">
        Tous les tests
      </h1>
      <MakerSection stringArr={allMakers} title="Cherchez par marque" />
      <CarsHomeSection stringArr={testNames} title="Cherchez par test" />
      <CarsHomeSection
        stringArr={allModels}
        title="Voir tous les modèles testés"
        last={true}
      />
    </>
  );
};

export default Cars;
