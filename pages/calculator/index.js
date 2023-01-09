import { useState } from 'react';
import { CarEVFieldSet } from '../../components/calculator';
import { CarICEFieldSet } from '../../components/calculator';
import { DurationFieldSet } from '../../components/calculator';
import { EnergyDataFieldSet } from '../../components/calculator';
import { UsageDataFieldSet } from '../../components/calculator';
import { UsageExpectedFieldSet } from '../../components/calculator';
import CustomHead from '../../components/customHead';
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

const initialStateErrors = {
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
    insurance: '',
    maintenance: '',
    consumption: '',
  },
  carDataEV: {
    purchaseCost: '',
    consumption: '',
    insurance: '',
    maintenance: '',
    ecoBonus: '',
  },
  durationStudied: '',
};

const Calculator = () => {
  const [state, setState] = useState(initialState);
  const [errorState, setErrorState] = useState(initialStateErrors);

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
      <CustomHead title="SOME TITLE" description="some description" />
      <h1>Comparateur électrique -thérmique</h1>
      <div id="form-container" className="bg-red-200 ">
        <form className="mx-2 text-lg">
          <CarEVFieldSet
            state={state}
            setState={setState}
            className="bg-white flex flex-col rounded-lg border border-black px-4 pt-2 pb-4 dark:bg-black "
          />
          <CarICEFieldSet
            state={state}
            setState={setState}
            className="bg-white flex flex-col rounded-lg border border-black px-4 pt-2 pb-4 dark:bg-black"
          />
          <EnergyDataFieldSet
            state={state}
            setState={setState}
            className="bg-white flex flex-col rounded-lg border border-black px-4 pt-2 pb-4 dark:bg-black"
          />
          <UsageDataFieldSet
            state={state}
            setState={setState}
            className="bg-white flex flex-col rounded-lg border border-black px-4 pt-2 pb-4 dark:bg-black"
          />
          <UsageExpectedFieldSet
            state={state}
            setState={setState}
            className="bg-white flex flex-col rounded-lg border border-black px-4 pt-2 pb-4 dark:bg-black"
          />
          <DurationFieldSet
            state={state}
            setState={setState}
            className="bg-white flex flex-col rounded-lg border border-black px-4 pt-2 pb-4 dark:bg-black"
          />
          <button type="submit" onClick={(e) => submitHandler(e)}>
            Lancer l&lsquo;analyse
          </button>
        </form>
      </div>
    </>
  );
};

export default Calculator;
