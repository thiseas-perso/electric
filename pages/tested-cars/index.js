import { getAllDataLight, getAllTestNames } from '../../lib/csvParser';

import MakerSection from '../../components/cars/MakerSection';
import ModelsSection from '../../components/cars/ModelsSection';
import CustomHead from '../../components/customHead';
import Header from '../../components/header';
import TestsLinks from '../../components/cars/TestsLinks';

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

const Cars = ({ allDataLight, testNames }) => {
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
      <Header className="flex items-center h-14 bg-light-primary-2 dark:bg-transparent" />
      <div className="min-h-screenNoNav flex flex-col items-center max-w-4xl mx-auto">
        <h1
          aria-label="Tous les tests"
          className="text-xl p-2 mt-[2vh] text-white font-poppins font-extrabold text-center"
        >
          Tous les tests
        </h1>
        <p className="text-lg leading-7 p-4">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime
          mollitia, molestiae quas vel sint commodi repudiandae consequuntur
          voluptatum laborum numquam blanditiis harum quisquam eius sed odit
          fugiat iusto fuga praesentium optio, eaque rerum! Provident similique
          accusantium nemo autem. Veritatis obcaecati tenetur iure eius earum ut
          molestias architecto voluptate aliquam nihil, eveniet aliquid culpa
          officia aut! Impedit sit sunt quaerat, odit, tenetur error, harum
          nesciunt ipsum debitis quas aliquid. Reprehenderit, quia. Quo neque
          error repudiandae fuga? Ipsa laudantium molestias eos sapiente
          officiis modi at sunt excepturi expedita sint?{' '}
        </p>
        <MakerSection dataByMaker={dataByMaker} />
        <TestsLinks stringArr={testNames} />
        <ModelsSection allDataLight={allDataLight} last={true} />
      </div>
    </>
  );
};

export default Cars;
