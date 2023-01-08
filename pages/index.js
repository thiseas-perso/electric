import Head from 'next/head';
import Link from 'next/link';
import CarsList from '../components/cars/CarsList';
import {
  getAllData,
  getAllFullTestedVersions,
  getAllCarNames,
  getAllMakers,
  getCarsByMaker,
  getCarsByMakerLight,
} from '../lib/csvParser';

export async function getStaticProps() {
  const allData = await getAllData();
  const getFullTested = await getAllFullTestedVersions([
    'RANGE',
    'ACCELERATION',
  ]);
  const allNames = await getAllCarNames();
  const allMakers = await getAllMakers();
  const teslas = await getCarsByMaker('Tesla');
  const teslasLight = await getCarsByMakerLight('Tesla');
  // const bananaData = await getOneFileData('BANANA');
  return {
    props: { allData, getFullTested, allNames, allMakers, teslas, teslasLight },
  };
}

const Home = ({
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
      <Head>
        <title>[TTILE HERE]</title>
        <meta name="description" content="[DESCRIPTION HERE]" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <h1>HOME</h1>
      <div>
        <Link href={'/calculator'}>calculator</Link>
        <Link href={'/electric-cars'}>All cars</Link>
      </div>

      <CarsList allData={allData} />
    </>
  );
};

export default Home;
