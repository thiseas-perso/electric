import Head from 'next/head';
import Link from 'next/link';
import { getAllCarNames, getAllData, getOneFileData } from '../lib/csvParser';

export async function getStaticProps() {
  const allData = await getAllData();
  const allNames = await getAllCarNames();
  const bananaData = await getOneFileData('BANANA');
  return { props: { allNames, allData, bananaData } };
}

const Home = ({ allNames, allData, bananaData }) => {
  console.log({ allNames, allData, bananaData });
  return (
    <>
      <Head>
        <title>[TTILE HERE]</title>
        <meta name="description" content="[DESCRIPTION HERE]" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <h1>HOME</h1>
      <Link href={'/calculator'}>calculator</Link>
    </>
  );
};

export default Home;
