import Head from 'next/head';
import { useContext, useEffect } from 'react';
import { CarsCtx } from '../../context/carsContext';
import { getAllData } from '../../utils/csvParser';

export async function getStaticProps() {
  const allData = await getAllData();
  return { props: { allData } };
}

const Cars = ({ allData }) => {
  const { carsState, setCarsState } = useContext(CarsCtx);
  useEffect(() => {
    let isMounted = true;
    if (carsState.length === 0 && isMounted) {
      console.log('FETCHING DATA');
      setCarsState(allData);
    }
    return () => {
      isMounted = false;
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
  console.log({ carsState });
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
