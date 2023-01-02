import Head from 'next/head';
import CarDataFieldSet from '../../components/calculator/carDataFieldSet';
import EnergyDataFieldSet from '../../components/calculator/energyDataFieldSet';
import UsageDataFieldSet from '../../components/calculator/usageDataFieldSet';
import UsageExpectedFieldSet from '../../components/calculator/usageExpectedFieldSet';

const Calculator = () => {
  return (
    <>
      <Head>
        <title>[TTILE HERE]</title>
        <meta name="description" content="[DESCRIPTION HERE]" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <h1>Calculator</h1>
      <form>
        <CarDataFieldSet carType={'EV'} />
        <CarDataFieldSet carType={'ICE'} />
        <EnergyDataFieldSet />
        <UsageDataFieldSet />
        <UsageExpectedFieldSet />
        <button>Lacer l&lsquo;analyse</button>
      </form>
    </>
  );
};

export default Calculator;
