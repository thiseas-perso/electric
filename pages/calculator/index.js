import Head from 'next/head';
import { useState } from 'react';
import CarDataFieldSet from '../../components/calculator/carDataFieldSet';
import DurationFieldSet from '../../components/calculator/DurationFieldSet';
import EnergyDataFieldSet from '../../components/calculator/energyDataFieldSet';
import UsageDataFieldSet from '../../components/calculator/usageDataFieldSet';
import UsageExpectedFieldSet from '../../components/calculator/usageExpectedFieldSet';
import calculator from '../../helpers/calculator';

const initialState = {
  energyData: {
    chargingPriceHC: '',
    chargingPriceHP: '',
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
    evConsumption: '',
    purchaseCost: '',
    insurancePerY: '',
    maintenancePerY: '',
    ecoBonus: '',
  },
  durationStudied: '2',
};

const Calculator = () => {
  const [state, setState] = useState(initialState);
  const convertDataToNumbers = (obj) => {
    const result = Object.fromEntries(
      Object.entries(obj).map(([key, value]) => [key, Number(value)])
    );
    console.log({ result });
    return result;
  };
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
        <CarDataFieldSet
          carType={'EV'}
          getData={(data) =>
            setState((prev) => ({
              ...prev,
              carDataEV: convertDataToNumbers(data),
            }))
          }
        />
        <CarDataFieldSet
          carType={'ICE'}
          getData={(data) =>
            setState((prev) => ({
              ...prev,
              carDataICE: convertDataToNumbers(data),
            }))
          }
        />
        <EnergyDataFieldSet
          getData={(data) =>
            setState((prev) => ({
              ...prev,
              energyData: convertDataToNumbers(data),
            }))
          }
        />
        <UsageDataFieldSet
          getData={(data) =>
            setState((prev) => ({
              ...prev,
              usageData: convertDataToNumbers(data),
            }))
          }
        />
        <UsageExpectedFieldSet
          getData={(data) =>
            setState((prev) => ({
              ...prev,
              usageExpected: convertDataToNumbers(data),
            }))
          }
        />
        <DurationFieldSet
          getData={(data) =>
            setState((prev) => ({
              ...prev,
              durationStudied: Number(data),
            }))
          }
        />
        <button type="submit">Lancer l&lsquo;analyse</button>
      </form>
    </>
  );
};

export default Calculator;
