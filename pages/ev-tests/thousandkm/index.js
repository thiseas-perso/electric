import React from 'react';
import { getOneFileData } from '../../../lib/csvParser';

export async function getStaticProps() {
  const kmData = await getOneFileData('1000KM');
  return { props: { kmData } };
}

const Thousandkm = ({ kmData }) => {
  console.log({ kmData });
  return <div>Thousandkm</div>;
};

export default Thousandkm;
