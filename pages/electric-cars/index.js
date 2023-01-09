import CustomHead from '../../components/customHead';
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
      <CustomHead title="SOME TITLE" description="some description" />
      <h1>Cars</h1>
    </>
  );
};

export default Cars;
