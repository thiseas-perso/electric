import { motion } from 'framer-motion';

const EnergyDataFieldSet = ({ state, setState, className, x }) => {
  return (
    <motion.fieldset
      id="energyData"
      className={className}
      initial={{ x }}
      animate={{ x: 0 }}
      transition={{
        // duration: 0.2,
        ease: 'easeOut',
      }}
    >
      <h2 className="text-3xl mb-2">Cout de l&apos;énergie</h2>

      <label htmlFor="chargingPriceHC">
        Electricité - heures creuses(€/kWh):
      </label>
      <input
        className="mb-2"
        min="0"
        step=".01"
        type="number"
        id="chargingPriceHC"
        name="chargingPriceHC"
        value={state.energyData.chargingPriceHC}
        onChange={(e) =>
          setState((prev) => ({
            ...prev,
            energyData: {
              ...state.energyData,
              chargingPriceHC: e.target.value,
            },
          }))
        }
      />
      <label htmlFor="chargingPriceHP">
        Electricité - heures pleines(€/kWh):
      </label>
      <input
        className="mb-2"
        min="0"
        step=".01"
        type="number"
        id="chargingPriceHP"
        name="chargingPriceHP"
        value={state.energyData.chargingPriceHP}
        onChange={(e) =>
          setState((prev) => ({
            ...prev,
            energyData: {
              ...state.energyData,
              chargingPriceHP: e.target.value,
            },
          }))
        }
      />
      <label htmlFor="gasPrice">Carburant (€/lt):</label>
      <input
        className="mb-2"
        min="0"
        step=".01"
        type="number"
        id="gasPrice"
        name="gasPrice"
        value={state.energyData.gasPrice}
        onChange={(e) =>
          setState((prev) => ({
            ...prev,
            energyData: {
              ...state.energyData,
              gasPrice: e.target.value,
            },
          }))
        }
      />
    </motion.fieldset>
  );
};

export default EnergyDataFieldSet;
