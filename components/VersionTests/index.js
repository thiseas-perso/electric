import React from 'react';

const VersionsTests = ({ version, testNames }) => {
  const tests = [];
  testNames.forEach((test) => {
    if (version[test]) {
      tests.push({ test, tests: version[test] });
    }
  });
  console.log({ tests });

  return (
    <>
      {tests.map((el) => {
        return (
          <li key={el.test}>
            <h3 className="font-bold">{el.test}</h3>

            {el.tests.map((elT, idx) => {
              return (
                <ul key={idx} className="border">
                  {Object.keys(elT).map((objKey, idxT) => {
                    return (
                      <li key={idxT}>
                        {objKey} : {elT[objKey]}
                      </li>
                    );
                  })}
                </ul>
              );
            })}
          </li>
        );
      })}
    </>
  );
};

export default VersionsTests;
