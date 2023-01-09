import { motion } from 'framer-motion';

const CarEVFieldSet = ({ state, setState, className, x }) => {
  return (
    <motion.fieldset
      id="carData"
      className={className}
      initial={{ x }}
      animate={{ x: 0 }}
      transition={{
        duration: 0.2,
        ease: 'easeOut',
      }}
    >
      <h2 className="text-3xl mb-2">Véhicule électrique</h2>
      <label htmlFor="purchaseCost">
        <span>Prix achat (€):</span>
      </label>
      <input
        className="mb-2"
        required
        min="0"
        type="number"
        id="purchaseCost"
        name="purchaseCost"
        value={state.carDataEV.purchaseCost}
        onChange={(e) =>
          setState((prev) => ({
            ...prev,
            carDataEV: {
              ...state.carDataEV,
              purchaseCost: e.target.value,
            },
          }))
        }
      />
      <label htmlFor="ecoBonus">
        <span>Bonus ecologique (€):</span>
      </label>
      <input
        className="mb-2"
        required
        min="0"
        type="number"
        id="ecoBonus"
        name="ecoBonus"
        value={state.carDataEV.ecoBonus}
        onChange={(e) =>
          setState((prev) => ({
            ...prev,
            carDataEV: {
              ...state.carDataEV,
              ecoBonus: e.target.value,
            },
          }))
        }
      />
      <label htmlFor="consumption">
        <span>Consomation (kWh/100km):</span>
      </label>
      <input
        className="mb-2"
        required
        min="0"
        type="number"
        id="consumption"
        name="consumption"
        value={state.carDataEV.consumption}
        onChange={(e) =>
          setState((prev) => ({
            ...prev,
            carDataEV: {
              ...state.carDataEV,
              consumption: e.target.value,
            },
          }))
        }
      />
      <label htmlFor="insurance">
        <span>Assurance (€/an):</span>
      </label>
      <input
        className="mb-2"
        required
        min="0"
        type="number"
        id="insurance"
        name="insurance"
        value={state.carDataEV.insurance}
        onChange={(e) =>
          setState((prev) => ({
            ...prev,
            carDataEV: {
              ...state.carDataEV,
              insurance: e.target.value,
            },
          }))
        }
      />
      <label htmlFor="maintenance">
        <span>Entretien (€/an):</span>
      </label>
      <input
        className="mb-2"
        required
        min="0"
        type="number"
        id="maintenance"
        name="maintenance"
        value={state.carDataEV.maintenance}
        onChange={(e) =>
          setState((prev) => ({
            ...prev,
            carDataEV: {
              ...state.carDataEV,
              maintenance: e.target.value,
            },
          }))
        }
      />
    </motion.fieldset>
  );
};

export default CarEVFieldSet;
