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
    gasPrice: '1.7',
  },
  usageData: {
    workHomeDistance: '50',
    dailyCommutes: '2',
    daysWorkedPerY: '150',
    weekendKM: '100',
    otherKMPerW: '150',
  },
  usageExpected: {
    totalKMPerY: '10000',
  },
  carDataICE: {
    purchaseCost: '30000',
    insurance: '500',
    maintenance: '1000',
    consumption: '5',
  },
  carDataEV: {
    purchaseCost: '30000',
    consumption: '20',
    insurance: '500',
    maintenance: '500',
    ecoBonus: '5000',
  },
  durationStudied: '4',
};

const Calculator = () => {
  const [state, setState] = useState(initialState);

  const convertDataToNumbers = (obj) => {
    const newObj = {};
    for (const key in obj) {
      const element = obj[key];
      if (typeof element === 'object') {
        newObj[key] = convertDataToNumbers(element);
      } else {
        newObj[key] = Number(Number(element).toFixed(2));
      }
    }
    return newObj;
  };

  const submitHandler = (e) => {
    e.preventDefault();
    console.log('state : ', convertDataToNumbers(state));
    console.log(calculator(convertDataToNumbers(state)));
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
