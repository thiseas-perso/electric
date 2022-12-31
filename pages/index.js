import Head from 'next/head';
import { getAllData } from '../utils/csvParser';

export async function getStaticProps() {
  const allData = await getAllData();
  return { props: { allData } };
}

const Home = ({ allData }) => {
  console.log({ allData });
  return (
    <>
      <Head>
        <title>[TTILE HERE]</title>
        <meta name="description" content="[DESCRIPTION HERE]" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <h1>HOME</h1>
    </>
  );
};

export default Home;
