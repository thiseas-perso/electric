import { parse } from 'csv-parse';
import fs from 'fs';
import path from 'path';

const dataDirectory = path.join(process.cwd(), 'csvData');

export const getAllData = async () => {
  const data = [];

  const files = fs.readdirSync(dataDirectory);
  for (const file of files) {
    if (file !== 'DEGRADATION.csv' && file !== 'NOISE.csv') {
      await new Promise((resolve, reject) => {
        fs.createReadStream(`${dataDirectory}/${file}`)
          //by adding the columns option, the first line will be considered as column names
          //The ltrim option is used to trim the whitespace from the data
          .pipe(parse({ delimiter: ';', columns: true, ltrim: true }))
          .on('data', function (row) {
            const testName = file.split('.')[0];
            const maker = row.Car.split(' ')[0];
            const modelStart = row.Car.indexOf(' ') + 1;
            let modelEnd = row.Car.indexOf(' - ');
            if (modelEnd === -1) {
              modelEnd = row.Car.length;
            }
            const model = row.Car.substring(modelStart, modelEnd);
            const modelID = model.split(' ').join('-');
            const version = row.Car.substring(modelEnd + 3);
            const versionID = version.split(' ').join('-');
            const modelInArrayIndex = data.findIndex(
              (model) => model.id === modelID
            );
            const modelIsAlsoVersion = modelID === versionID;

            if (modelInArrayIndex === -1) {
              const newRow = {
                maker,
                model,
                id: modelID,
                versions: [
                  {
                    version,
                    id: versionID,
                    [testName]: { ...row },
                  },
                ],
                isModel: true,
              };

              data.push(newRow);
            } else if (modelInArrayIndex > -1) {
              if (data[modelInArrayIndex].versions.length === 0) {
                data[modelInArrayIndex].versions.push({
                  version,
                  id: versionID,
                  [testName]: { ...row },
                });
              } else {
                const versionInModelIndex = data[
                  modelInArrayIndex
                ].versions.findIndex((version) => version.id === versionID);
                if (versionInModelIndex === -1) {
                  data[modelInArrayIndex].versions.push({
                    version,
                    id: versionID,
                    [testName]: { ...row },
                  });
                } else if (versionInModelIndex > 1) {
                  if (
                    data[modelInArrayIndex].versions[
                      versionInModelIndex
                    ].hasOwnProperty(testName)
                  ) {
                    data[modelInArrayIndex].versions[versionInModelIndex][
                      testName
                    ] = {
                      ...data[modelInArrayIndex].versions[versionInModelIndex][
                        testName
                      ],
                      ...row,
                    };
                  } else {
                    data[modelInArrayIndex].versions[versionInModelIndex][
                      testName
                    ] = { ...row };
                  }
                }
              }
              /* const versionInModelIndex = data[
                modelInArrayIndex
              ].versions.findIndex((version) => version.id === versionID);
              if (versionInModelIndex > -1) {
                data[modelInArrayIndex].versions = {
                  ...data[modelInArrayIndex].versions,
                  row,
                };
              } else  */
            }
          })
          .on('error', function (error) {
            reject(error);
          })
          .on('end', function () {
            resolve();
          });
      });
    }
  }

  return data;
};

export const getAllCarNames = async () => {
  const data = new Set();
  //get files (ie filenames)
  const files = fs.readdirSync(dataDirectory);
  for (const file of files) {
    if (file !== 'DEGRADATION.csv')
      await new Promise((resolve, reject) => {
        fs.createReadStream(`${dataDirectory}/${file}`)
          //The ltrim option is used to trim the whitespace from the data
          .pipe(parse({ delimiter: ';', from_line: 2, ltrim: true }))
          .on('data', function (row) {
            data.add(row[0]);
          })
          .on('error', function (error) {
            reject(error);
          })
          .on('end', function () {
            resolve('success');
          });
      });
  }
  return [...data];
};

export const getOneFileData = async (csvName) => {
  const data = [];
  await new Promise((resolve, reject) => {
    fs.createReadStream(`${dataDirectory}/${csvName}.csv`)
      //The ltrim option is used to trim the whitespace from the data
      .pipe(parse({ delimiter: ';', columns: true, ltrim: true }))
      .on('data', function (row) {
        data.push(row);
      })
      .on('error', function (error) {
        reject(error);
      })
      .on('end', function () {
        resolve();
      });
  });
  return data;
};
