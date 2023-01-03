import Head from 'next/head';
import { useState } from 'react';
import CarEVFieldSet from '../../components/calculator/CarEVFieldSet';
import CarICEFieldSet from '../../components/calculator/CarICEFieldSet';
import DurationFieldSet from '../../components/calculator/DurationFieldSet';
import EnergyDataFieldSet from '../../components/calculator/energyDataFieldSet';
import UsageDataFieldSet from '../../components/calculator/usageDataFieldSet';
import UsageExpectedFieldSet from '../../components/calculator/usageExpectedFieldSet';
import calculator from '../../helpers/calculator';

const initialState = {
  energyData: {
    chargingPriceHC: '0.15',
    chargingPriceHP: '0.18',
    gasPrice: '',
  },
  usageData: {
    workHomeDistance: '',
    dailyCommutes: '',
    daysWorkedPerY: '',
    weekendKM: '',
    otherKMPerW: '',
  },
  usageExpected: {
    totalKMPerY: '',
  },
  carDataICE: {
    purchaseCost: '',
    insurancePerY: '',
    maintenancePerY: '',
    iceConsumption: '',
  },
  carDataEV: {
    purchaseCost: '30000',
    evConsumption: '',
    insurancePerY: '',
    maintenancePerY: '',
    ecoBonus: '',
  },
  durationStudied: '',
};

const Calculator = () => {
  const [state, setState] = useState(initialState);

  // const convertDataToNumbers = (obj) => {
  //   const result = Object.fromEntries(
  //     Object.entries(obj).map(([key, value]) => [key, Number(value)])
  //   );
  //   return result;
  // };

  const submitHandler = (e) => {
    e.preventDefault();
    console.log('state : ', state);
    console.log(calculator(state));
  };

  return (
    <>
      <Head>
        <title>[TTILE HERE]</title>
        <meta name="description" content="[DESCRIPTION HERE]" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <h1>Calculator</h1>
      <form onSubmit={(e) => submitHandler(e)}>
        <CarEVFieldSet state={state} setState={setState} />
        <CarICEFieldSet state={state} setState={setState} />
        <EnergyDataFieldSet state={state} setState={setState} />
        <UsageDataFieldSet state={state} setState={setState} />
        <UsageExpectedFieldSet state={state} setState={setState} />
        <DurationFieldSet state={state} setState={setState} />
        <button type="submit">Lancer l&lsquo;analyse</button>
      </form>
    </>
  );
};

export default Calculator;
