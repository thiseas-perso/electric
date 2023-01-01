const energyData = {
  evConsumption: '', //kWh/100km
  chargingPriceHC: '', //EUR
  chargingPriceHP: '', //EUR
  iceConsumption: '', //lt/100km
  gasPrice: '', //EUR/lt
  durationStudied: '', //years
};

const usageData = {
  workHomeDistance: '', //km
  dailyCommutes: '', //number
  daysWorkedPerY: '', //number
  weekendKM: '', //km
  otherKMPerW: '', //km
};

const usageExpected = {
  totalKMPerY: '', //km
};

const carDataICE = {
  purchaseCost: '', //EUR
  insurancePerY: '', //EUR
  maintenancePerY: '', //EUR
};
const carDataEV = {
  purchaseCost: '', //EUR
  insurancePerY: '', //EUR
  maintenancePerY: '', //EUR
  ecoBonus: '', //EUR
};

// const carDepreciation = {
//   '1': -20,
//   '2': -15,
//   '3': -10,
//   '4': -10,
//   '5': -7,
//   '6': -6,
// };
const carDepreciation = [20, 15, 10, 10, 7, 6];

const calculator = () => {
  const totalKMPerY =
    usageExpected.totalKMPerY ||
    usageData.workHomeDistance *
      usageData.dailyCommutes *
      usageData.daysWorkedPerY +
      usageData.weekendKM * 52 +
      usageData.otherKMPerW * 52; // km
  const evConsumptionPerY = (totalKMPerY / 100) * energyData.evConsumption; //kWh
  const chargeEVCostPerY =
    evConsumptionPerY *
    (0.5 * energyData.chargingPriceHC + 0.5 * energyData.chargingPriceHC); //EUR
  const evKMCost =
    ((0.5 * energyData.chargingPriceHC + 0.5 * energyData.chargingPriceHC) *
      energyData.evConsumption) /
    100; //EUR
  const gasICECostPerY =
    ((energyData.gasPrice * energyData.iceConsumption) / 100) * totalKMPerY; //EUR
  const iceKMCost = (energyData.iceConsumption / 100) * energyData.gasPrice;

  const iceVSevCostPerY = gasICECostPerY - chargeEVCostPerY;

  const carEVCostAtEndOfPeriod =
    carDataEV.purchaseCost +
    (carDataEV.insurancePerY + carDataEV.maintenancePerY) *
      energyData.durationStudied -
    carDataEV.ecoBonus;

  const carEVValueAtEndOfPeriod = (() => {
    for (let i = 0; i < energyData.durationStudied; i++) {}
  })();

  const carICECostAtEndOfPeriod =
    carDataICE.purchaseCost +
    (carDataICE.insurancePerY + carDataICE.maintenancePerY) *
      energyData.durationStudied;

  return { iceVSevCostPerY, carEVCostAtEndOfPeriod, carICECostAtEndOfPeriod };
};

export default calculator;
