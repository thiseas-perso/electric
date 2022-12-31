import { parse } from 'csv-parse';
import fs from 'fs';
import path from 'path';

const dataDirectory = path.join(process.cwd(), 'csvData');

export const getAllData = async () => {
  const data = {};
  //get files (ie filenames)
  const files = fs.readdirSync(dataDirectory);
  for (const file of files) {
    await new Promise((resolve, reject) => {
      fs.createReadStream(`${dataDirectory}/${file}`)
        //by adding the columns option, the first line will be considered as column names
        //The ltrim option is used to trim the whitespace from the data
        .pipe(parse({ delimiter: ';', columns: true, ltrim: true }))
        .on('data', function (row) {
          if (data[row.Car]) {
            //if the car name key does exist in data obj
            //remove file extension to search for filename key
            if (data[row.Car][file.split('.csv')[0]]) {
              //if the car key exist and it already contains a key of filename
              //if value of filename key is already an array
              if (Array.isArray(data[row.Car][file.split('.csv')[0]])) {
                //push the row
                data[row.Car][file.split('.csv')[0]].push(row);
              } else {
                //convert to array and put inside the previous value plus the new row
                data[row.Car][file.split('.')[0]] = [
                  data[row.Car][file.split('.')[0]],
                  row,
                ];
              }
            } else {
              //if car key exists but does NOT containt key of filename
              data[row.Car] = { ...data[row.Car], [file.split('.')[0]]: row };
            }
          } else {
            //if the car name does not exist in data obj, create new key-value pair
            //key -> row car name , value -> filename is key, row is value
            data[row.Car] = { [file.split('.')[0]]: row };
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
  return data;
};
