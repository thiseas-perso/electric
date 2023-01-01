import Head from 'next/head';
import { getAllCarNames, getAllData } from '../../lib/csvParser';

export async function getStaticProps() {
  const allData = await getAllData();
  const allNames = await getAllCarNames();
  return { props: { allNames, allData } };
}

const Cars = ({ allNames, allData }) => {
  console.log({ allNames, allData });
  return (
    <>
      <Head>
        <title>[TTILE HERE]</title>
        <meta name="description" content="[DESCRIPTION HERE]" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <h1>Cars</h1>
    </>
  );
};

export default Cars;
