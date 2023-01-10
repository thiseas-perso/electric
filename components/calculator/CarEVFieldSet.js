import { motion } from 'framer-motion';

const CarEVFieldSet = ({ state, setState, className, x }) => {
  return (
    <motion.fieldset
      id="carData"
      className={className}
      initial={{ x }}
      animate={{ x: 0 }}
      transition={{
        ease: 'easeOut',
      }}
    >
      <h2 className="text-3xl mb-5 p-4 font-lato font-light bg-light-primary-0 text-center">
        Véhicule <span className="">électrique</span>
      </h2>
      <div className="flex flex-col px-4 pb-4">
        <label htmlFor="purchaseCost">Prix achat (€):</label>
        <input
          className="mb-4"
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
        <label htmlFor="ecoBonus">Bonus ecologique (€):</label>
        <input
          className="mb-4"
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
        <label htmlFor="consumption">Consomation (kWh/100km):</label>
        <input
          className="mb-4"
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
        <label htmlFor="insurance">Assurance (€/an):</label>
        <input
          className="mb-4"
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
        <label htmlFor="maintenance">Entretien (€/an):</label>
        <input
          className="mb-4"
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
      </div>
    </motion.fieldset>
  );
};

export default CarEVFieldSet;
