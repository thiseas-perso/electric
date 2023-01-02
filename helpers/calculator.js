// const energyData = {
//   chargingPriceHC: '', //EUR
//   chargingPriceHP: '', //EUR
//   gasPrice: '', //EUR/lt
// };

// const usageData = {
//   workHomeDistance: '', //km
//   dailyCommutes: '', //number
//   daysWorkedPerY: '', //number
//   weekendKM: '', //km
//   otherKMPerW: '', //km
// };

// const usageExpected = {
//   totalKMPerY: '', //km
// };

// const carDataICE = {
//   purchaseCost: '', //EUR
//   insurance: '', //EUR
//   maintenance: '', //EUR
//   consumption: '', //lt/100km
// };
// const carDataEV = {
//   consumption: '', //kWh/100km
//   purchaseCost: '', //EUR
//   insurance: '', //EUR
//   maintenance: '', //EUR
//   ecoBonus: '', //EUR
// };

//const durationStudied = '' //years

const carDepreciation = [20, 15, 10, 10, 7, 6];

const calculator = ({
  energyData,
  usageData,
  usageExpected,
  carDataICE,
  carDataEV,
  durationStudied,
}) => {
  console.log({
    energyData,
    usageData,
    usageExpected,
    carDataICE,
    carDataEV,
    durationStudied,
  });
  const totalKMPerY =
    usageExpected.totalKMPerY ||
    usageData.workHomeDistance *
      usageData.dailyCommutes *
      usageData.daysWorkedPerY +
      usageData.weekendKM * 52 +
      usageData.otherKMPerW * 52; // km
  const evConsumptionPerY = (totalKMPerY / 100) * carDataEV.consumption; //kWh
  const chargeEVCostPerY =
    evConsumptionPerY *
    (0.5 * energyData.chargingPriceHC + 0.5 * energyData.chargingPriceHC); //EUR
  const evKMCost =
    ((0.5 * energyData.chargingPriceHC + 0.5 * energyData.chargingPriceHC) *
      carDataEV.consumption) /
    100; //EUR
  const gasICECostPerY =
    ((energyData.gasPrice * carDataICE.consumption) / 100) * totalKMPerY; //EUR
  const iceKMCost = (carDataICE.consumption / 100) * energyData.gasPrice;

  const iceVSevCostPerY = gasICECostPerY - chargeEVCostPerY;

  const carEVCostAtEndOfPeriod =
    carDataEV.purchaseCost +
    (carDataEV.insurance + carDataEV.maintenance) * durationStudied -
    carDataEV.ecoBonus;

  const carEVValueAtEndOfPeriod = (() => {
    let currPrice = carDataEV.purchaseCost;
    console.log({ currPrice });
    for (let i = 0; i < durationStudied; i++) {
      if (carDepreciation[i]) {
        console.log('in if', carDepreciation[i]);
        currPrice = currPrice - (currPrice * carDepreciation[i]) / 100;
      } else {
        currPrice = currPrice - (currPrice * 6) / 100;
      }
    }
    return currPrice;
  })();

  const carICEValueAtEndOfPeriod = (() => {
    let currPrice = carDataICE.purchaseCost;
    for (let i = 0; i < durationStudied; i++) {
      if (carDepreciation[i]) {
        currPrice = currPrice - (currPrice * carDepreciation[i]) / 100;
      } else {
        currPrice = currPrice - (currPrice * 6) / 100;
      }
    }
    return currPrice;
  })();

  const carICECostAtEndOfPeriod =
    carDataICE.purchaseCost +
    (carDataICE.insurance + carDataICE.maintenance) * durationStudied;

  return {
    iceVSevCostPerY,
    carEVCostAtEndOfPeriod,
    carICECostAtEndOfPeriod,
    carEVValueAtEndOfPeriod,
    carICEValueAtEndOfPeriod,
    totalKMPerY,
    evKMCost,
    iceKMCost,
  };
};

export default calculator;
