import CarsHomeSection from '../../components/cars/CarsHomeSection';
import MakerSection from '../../components/cars/MakerSection';
import ModelsSection from '../../components/cars/ModelsSection';
import CustomHead from '../../components/customHead';

import { getAllDataLight, getAllTestNames } from '../../lib/csvParser';

export async function getStaticProps() {
  const allDataLight = await getAllDataLight();
  const testNames = getAllTestNames();

  return {
    props: {
      allDataLight,
      testNames,
    },
  };
}

const Cars = ({ allDataLight, testNames, allData }) => {
  console.log({
    allDataLight,
    testNames,
  });

  const dataByMaker = allDataLight.reduce((acc, cur) => {
    const foundIndex = acc.findIndex((el) => el?.maker === cur.maker);
    if (foundIndex !== -1) {
      const { maker, ...rest } = cur;
      acc[foundIndex].models.push({ ...rest });
    } else {
      const { maker, ...rest } = cur;
      acc.push({ maker: cur.maker, models: [rest] });
    }
    return acc.sort((a, b) => {
      return a.maker.localeCompare(b.maker);
    });
  }, []);

  return (
    <>
      <CustomHead title="SOME TITLE" description="some description" />

      <div className="min-h-[calc(100vh-48px)]">
        <h1 className="text-xl p-2 text-white font-poppins font-extrabold text-center">
          Tous les tests
        </h1>
        <MakerSection dataByMaker={dataByMaker} title="Cherchez par marque" />
        <CarsHomeSection stringArr={testNames} title="Cherchez par test" />
        <ModelsSection
          allData={allDataLight}
          title="Tous les modèles testés"
          last={true}
        />
      </div>
    </>
  );
};

export default Cars;
