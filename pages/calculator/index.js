import { useEffect, useState } from 'react';

import { CarEVFieldSet } from '../../components/calculator';
import { CarICEFieldSet } from '../../components/calculator';
import { DurationFieldSet } from '../../components/calculator';
import { EnergyDataFieldSet } from '../../components/calculator';
import { UsageDataFieldSet } from '../../components/calculator';
import { UsageExpectedFieldSet } from '../../components/calculator';
import ResultMsgNegative from '../../components/calculator/ReslutMsgNegative';
import ResultMsgNeutral from '../../components/calculator/ReslutMsgNeutral';
import ResultMsgPositive from '../../components/calculator/ReslutMsgPositive';
import ResultData from '../../components/calculator/ResultData';
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

const initialResultsState = {
  carEVCostAtEndOfPeriod: '',
  carEVValueAtEndOfPeriod: '',
  carICECostAtEndOfPeriod: '',
  carICEValueAtEndOfPeriod: '',
  evKMCost: '',
  iceKMCost: '',
  gasIceVSevCostPerY: '',
  totalKMPerY: '',
  carICECostPerKmAtEnd: '',
  carEVCostPerKmAtEnd: '',
};

const Calculator = () => {
  const [state, setState] = useState(initialState);
  const [errorState, setErrorState] = useState(initialStateErrors);
  const [stepState, setStepState] = useState(0);
  const [x, setX] = useState(0);
  const [results, setResults] = useState(initialResultsState);
  const [worthIt, setWorthIt] = useState(
    results.carEVCostAtEndOfPeriod - results.carICECostAtEndOfPeriod
  );
  const [checked, setChecked] = useState(false);

  useEffect(() => {
    if (checked) {
      setWorthIt(
        results.carEVCostAtEndOfPeriod -
          results.carEVValueAtEndOfPeriod -
          (results.carICECostAtEndOfPeriod - results.carICEValueAtEndOfPeriod)
      );
    } else {
      setWorthIt(
        results.carEVCostAtEndOfPeriod - results.carICECostAtEndOfPeriod
      );
    }
  }, [
    results.carEVCostAtEndOfPeriod,
    results.carICECostAtEndOfPeriod,
    checked,
    results.carEVValueAtEndOfPeriod,
    results.carICEValueAtEndOfPeriod,
  ]);

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
    const convertedInputToNumbers = convertDataToNumbers(state);
    console.log('state : ', convertedInputToNumbers);
    console.log(calculator(convertDataToNumbers(state)));
    setResults(() => calculator(convertDataToNumbers(state)));
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
            <UsageExpectedFieldSet
              x={x}
              state={state}
              setState={setState}
              className="bg-white overflow-hidden  min-w-[275px] dark:bg-black"
            />
          )}
          {stepState === 4 && (
            <UsageDataFieldSet
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
            <div className="m-auto relative top-[-42px] flex flex-col items-start gap-3">
              <button
                className="rounded-3xl border-2  overflow-hidden  bg-light-primary-6/10 text-white text-xl transition-colors"
                type="submit"
                onClick={(e) => submitHandler(e)}
              >
                Voir les resultas
              </button>
              <div className="flex">
                <input
                  id="checkbox"
                  type="checkbox"
                  checked={checked}
                  onChange={() => setChecked((prev) => !prev)}
                  className="w-4 h-4 mx-1 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"
                />
                <label
                  htmlFor="checkbox"
                  className="text-white font-normal leading-4"
                >
                  Inclure la valeur <br /> résiduelle des véhicules
                </label>
              </div>
            </div>
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
          className={` min-h-[calc(100vh-48px)] bg-gradient-to-t from-light-primary-start to-light-primary-end`}
        >
          <h2 className="text-xl p-2 text-white font-poppins font-extrabold text-center">
            Résultas
          </h2>
          <div
            id="results-ctn"
            className="grid grid-cols-2 gap-x-2 gap-y-5 mx-4 mt-2"
          >
            <ResultData
              carCostAtEnd={results.carICECostAtEndOfPeriod}
              carType="Thérmique"
              carCostPerKMAtEnd={results.carICECostPerKmAtEnd}
              carValueAtEnd={results.carICEValueAtEndOfPeriod}
              checked={checked}
            />
            <ResultData
              carCostAtEnd={results.carEVCostAtEndOfPeriod}
              carType="Eléctrique"
              carCostPerKMAtEnd={results.carEVCostPerKmAtEnd}
              carValueAtEnd={results.carEVValueAtEndOfPeriod}
              checked={checked}
            />

            {worthIt > 1000 && (
              <ResultMsgNegative
                durationStudied={state.durationStudied}
                worthIt={worthIt}
              />
            )}
            {worthIt < -1000 && (
              <ResultMsgPositive
                durationStudied={state.durationStudied}
                worthIt={worthIt}
              />
            )}
            {worthIt > -1000 && worthIt < 1000 && (
              <ResultMsgNeutral
                durationStudied={state.durationStudied}
                worthIt={worthIt}
              />
            )}
          </div>
        </div>
      )}
    </>
  );
};

export default Calculator;
