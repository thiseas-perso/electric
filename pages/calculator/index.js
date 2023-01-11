import { useRef, useState } from 'react';

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

  const resultsRef = useRef(null);
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
    const height = window.innerHeight - 42;
    console.log('state : ', convertDataToNumbers(state));
    console.log(calculator(convertDataToNumbers(state)));
    window.scrollBy({ top: height, behavior: 'smooth' });
  };

  const barClassName = (() => {
    switch (stepState) {
      case 6:
        return 'w-0';
      case 5:
        return 'w-1/6';
      case 4:
        return 'w-2/6';
      case 3:
        return 'w-3/6';
      case 2:
        return 'w-4/6';
      case 1:
        return 'w-5/6';
      case 0:
        return 'w-full';
      default:
        return 'w-full';
    }
  })();

  return (
    <>
      <CustomHead title="SOME TITLE" description="some description" />

      <div className="flex flex-col flex-grow justify-between min-h-[calc(100vh-48px)]">
        <div
          id="progress-ctn"
          className="h-4 min-w-full bg-gradient-to-r from-light-primary-8 to-light-primary-success"
        >
          <div
            id="progress-fill"
            className={`bg-light-primary-end h-full ${barClassName} ml-auto`}
          />
        </div>
        <h1 className="text-xl p-2 text-white font-poppins font-extrabold text-center">
          Comparateur VE - VT
        </h1>
        <form className=" text-lg flex flex-col flex-grow  justify-between mt-2 overflow-x-hidden">
          {stepState === 0 && (
            <CarEVFieldSet
              x={x}
              state={state}
              setState={setState}
              className="bg-white overflow-hidden  min-w-[275px]  dark:bg-black "
            />
          )}
          {stepState === 1 && (
            <CarICEFieldSet
              x={x}
              state={state}
              setState={setState}
              className="bg-white overflow-hidden  min-w-[275px] dark:bg-black"
            />
          )}
          {stepState === 2 && (
            <EnergyDataFieldSet
              x={x}
              state={state}
              setState={setState}
              className="bg-white overflow-hidden  min-w-[275px] dark:bg-black"
            />
          )}
          {stepState === 3 && (
            <UsageDataFieldSet
              x={x}
              state={state}
              setState={setState}
              className="bg-white overflow-hidden  min-w-[275px] dark:bg-black"
            />
          )}
          {stepState === 4 && (
            <UsageExpectedFieldSet
              x={x}
              state={state}
              setState={setState}
              className="bg-white overflow-hidden  min-w-[275px] dark:bg-black"
            />
          )}
          {stepState === 5 && (
            <DurationFieldSet
              x={x}
              state={state}
              setState={setState}
              className="bg-white overflow-hidden  min-w-[275px] dark:bg-black"
            />
          )}
          {stepState === 6 && (
            <button
              className="m-auto rounded-3xl border-2 relative top-[-42px] overflow-hidden  bg-light-primary-6/10 text-white text-xl transition-colors"
              type="submit"
              onClick={(e) => submitHandler(e)}
            >
              Voir les resultas
            </button>
          )}
          <div className="flex self-stretch font-bold font-poppins text-white border-t-2 bg-light-primary-start">
            {stepState > 0 && stepState < 7 && (
              <button
                className={`${
                  stepState > 5 ? 'border-0' : 'border-r'
                } flex-1 rounded-none border-0 font-normal`}
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
                className={`${
                  stepState < 1 ? 'border-0' : 'border-l'
                } flex-1 rounded-none border-0 `}
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
      {stepState === 6 && (
        <div
          ref={resultsRef}
          className={` min-h-[calc(100vh-48px)] bg-gradient-to-t from-light-primary-start to-light-primary-end`}
        >
          <div>
            <h2 className="text-xl p-2 text-white font-poppins font-extrabold text-center">
              Resultas
            </h2>
          </div>
        </div>
      )}
    </>
  );
};

export default Calculator;
