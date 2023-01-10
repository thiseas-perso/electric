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
  const [stepState, setStepState] = useState(0);
  const [x, setX] = useState(0);

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

  const barClassName = (() => {
    switch (stepState) {
      case 0:
        return 'w-0';
      case 1:
        return 'w-1/6';
      case 2:
        return 'w-2/6';
      case 3:
        return 'w-3/6';
      case 4:
        return 'w-4/6';
      case 5:
        return 'w-5/6';
      case 6:
        return 'w-full';
      default:
        return 'w-full';
    }
  })();
  console.log({ barClassName });

  return (
    <>
      <CustomHead title="SOME TITLE" description="some description" />
      <h1>Comparateur électrique -thérmique</h1>
      <div
        id="form-container"
        className="bg-gradient-to-t from-light-primary-start to-light-primary-end flex flex-col overflow-x-hidden flex-grow"
      >
        <form className=" text-lg flex flex-col flex-grow items-center justify-between">
          <div id="progress-ctn" className="h-4 min-w-full">
            <div
              id="progress-fill"
              className={`bg-red-600 h-full ${barClassName}`}
            />
          </div>
          {stepState === 0 && (
            <CarEVFieldSet
              x={x}
              state={state}
              setState={setState}
              className="bg-white flex flex-col rounded-lg mt-10  border border-black px-4 pt-2 pb-4 dark:bg-black "
            />
          )}
          {stepState === 1 && (
            <CarICEFieldSet
              x={x}
              state={state}
              setState={setState}
              className="bg-white flex flex-col rounded-lg mt-10 border border-black px-4 pt-2 pb-4 dark:bg-black"
            />
          )}
          {stepState === 2 && (
            <EnergyDataFieldSet
              x={x}
              state={state}
              setState={setState}
              className="bg-white flex flex-col rounded-lg mt-10 border border-black px-4 pt-2 pb-4 dark:bg-black"
            />
          )}
          {stepState === 3 && (
            <UsageDataFieldSet
              x={x}
              state={state}
              setState={setState}
              className="bg-white flex flex-col rounded-lg mt-10 border border-black px-4 pt-2 pb-4 dark:bg-black"
            />
          )}
          {stepState === 4 && (
            <UsageExpectedFieldSet
              x={x}
              state={state}
              setState={setState}
              className="bg-white flex flex-col rounded-lg mt-10 border border-black px-4 pt-2 pb-4 dark:bg-black"
            />
          )}
          {stepState === 5 && (
            <DurationFieldSet
              x={x}
              state={state}
              setState={setState}
              className="bg-white flex flex-col rounded-lg mt-10 border border-black px-4 pt-2 pb-4 dark:bg-black"
            />
          )}

          {stepState === 6 && (
            <button type="submit" onClick={(e) => submitHandler(e)}>
              Lancer l&lsquo;analyse
            </button>
          )}

          <div>
            {stepState > 0 && stepState < 7 && (
              <button
                type="button"
                onClick={() => {
                  setStepState((prev) => prev - 1), setX(() => -1000);
                }}
              >
                Back
              </button>
            )}
            {stepState < 6 && (
              <button
                type="button"
                onClick={() => {
                  setStepState((prev) => prev + 1), setX(() => 1000);
                }}
              >
                Next
              </button>
            )}
          </div>
        </form>
      </div>
    </>
  );
};

export default Calculator;
