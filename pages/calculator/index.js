import { useEffect, useState } from 'react';

import { CarEVFieldSet } from '../../components/calculator';
import { CarICEFieldSet } from '../../components/calculator';
import { DurationFieldSet } from '../../components/calculator';
import { EnergyDataFieldSet } from '../../components/calculator';
import { UsageDataFieldSet } from '../../components/calculator';
import { UsageExpectedFieldSet } from '../../components/calculator';
import {
  initialResultsState,
  initialState,
  initialStateErrors,
} from '../../components/calculator/initialStates';
import NavButtons from '../../components/calculator/NavButtons';
import ProgressBar from '../../components/calculator/ProgressBar';
import ResultPage from '../../components/calculator/ResultPage';
import SubmitPage from '../../components/calculator/SubmitPage';
import CustomHead from '../../components/customHead';
import calculator from '../../helpers/calculator';

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

  const changeHandler = (e, objName, fieldName) => {
    setState((prev) => ({
      ...prev,
      [objName]: {
        ...prev[objName],
        [fieldName]: e.target.value,
      },
    }));
  };

  return (
    <>
      <CustomHead title="SOME TITLE" description="some description" />

      <div className="flex flex-col flex-grow justify-between min-h-[calc(100vh-48px)]">
        <ProgressBar stepState={stepState} />
        <h1 className="text-xl p-2 text-white font-poppins font-extrabold text-center">
          Comparateur VE - VT
        </h1>
        <form className=" text-lg flex flex-col flex-grow  justify-between mt-2 overflow-x-hidden">
          {stepState === 0 && (
            <CarEVFieldSet
              x={x}
              state={state}
              className="bg-white overflow-hidden  min-w-[275px]  dark:bg-black "
              changeHandler={changeHandler}
            />
          )}
          {stepState === 1 && (
            <CarICEFieldSet
              x={x}
              state={state}
              className="bg-white overflow-hidden  min-w-[275px] dark:bg-black"
              changeHandler={changeHandler}
            />
          )}
          {stepState === 2 && (
            <EnergyDataFieldSet
              x={x}
              state={state}
              changeHandler={changeHandler}
              className="bg-white overflow-hidden  min-w-[275px] dark:bg-black"
            />
          )}
          {stepState === 3 && (
            <UsageExpectedFieldSet
              x={x}
              state={state}
              changeHandler={changeHandler}
              className="bg-white overflow-hidden  min-w-[275px] dark:bg-black"
            />
          )}
          {stepState === 4 && (
            <UsageDataFieldSet
              x={x}
              state={state}
              changeHandler={changeHandler}
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
            <SubmitPage
              submitHandler={submitHandler}
              checked={checked}
              setChecked={setChecked}
            />
          )}
          <NavButtons
            stepState={stepState}
            setStepState={setStepState}
            setX={setX}
          />
        </form>
      </div>
      {stepState === 6 && (
        <ResultPage
          results={results}
          checked={checked}
          worthIt={worthIt}
          state={state}
        />
      )}
    </>
  );
};

export default Calculator;
