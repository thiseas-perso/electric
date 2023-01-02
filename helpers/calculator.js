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
//   insurancePerY: '', //EUR
//   maintenancePerY: '', //EUR
//   iceConsumption: '', //lt/100km
// };
// const carDataEV = {
//   evConsumption: '', //kWh/100km
//   purchaseCost: '', //EUR
//   insurancePerY: '', //EUR
//   maintenancePerY: '', //EUR
//   ecoBonus: '', //EUR
// };

const carDepreciation = [20, 15, 10, 10, 7, 6];

const calculator = ({
  energyData,
  usageData,
  usageExpected,
  carDataICE,
  carDataEV,
  durationStudied,
}) => {
  const totalKMPerY =
    usageExpected.totalKMPerY ||
    usageData.workHomeDistance *
      usageData.dailyCommutes *
      usageData.daysWorkedPerY +
      usageData.weekendKM * 52 +
      usageData.otherKMPerW * 52; // km
  const evConsumptionPerY = (totalKMPerY / 100) * carDataEV.evConsumption; //kWh
  const chargeEVCostPerY =
    evConsumptionPerY *
    (0.5 * energyData.chargingPriceHC + 0.5 * energyData.chargingPriceHC); //EUR
  const evKMCost =
    ((0.5 * energyData.chargingPriceHC + 0.5 * energyData.chargingPriceHC) *
      carDataEV.evConsumption) /
    100; //EUR
  const gasICECostPerY =
    ((energyData.gasPrice * iceConsumption.iceConsumption) / 100) * totalKMPerY; //EUR
  const iceKMCost = (iceConsumption.iceConsumption / 100) * energyData.gasPrice;

  const iceVSevCostPerY = gasICECostPerY - chargeEVCostPerY;

  const carEVCostAtEndOfPeriod =
    carDataEV.purchaseCost +
    (carDataEV.insurancePerY + carDataEV.maintenancePerY) * durationStudied -
    carDataEV.ecoBonus;

  const carEVValueAtEndOfPeriod = (() => {
    let currPrice = carDataEV.purchaseCost;
    for (let i = 0; i < durationStudied; i++) {
      if (carDepreciation[i]) {
        currPrice = currPrice - (currPrice * carDepreciation[i]) / 100;
      } else {
        currPrice = currPrice - (currPrice * 6) / 100;
      }
    }
  })();

  const carICEValueAtEndOfPeriod = (() => {
    let currPrice = carDataEV.purchaseCost;
    for (let i = 0; i < durationStudied; i++) {
      if (carDepreciation[i]) {
        currPrice = currPrice - (currPrice * carDepreciation[i]) / 100;
      } else {
        currPrice = currPrice - (currPrice * 6) / 100;
      }
    }
  })();

  const carICECostAtEndOfPeriod =
    carDataICE.purchaseCost +
    (carDataICE.insurancePerY + carDataICE.maintenancePerY) * durationStudied;

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
