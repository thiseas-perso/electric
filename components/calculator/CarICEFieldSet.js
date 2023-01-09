import { motion } from 'framer-motion';

const CarICEFieldSet = ({ state, setState, className }) => {
  return (
    <motion.fieldset
      id="carData"
      className={className}
      initial={{ opacity: 0, x: 1000, y: 0 }}
      animate={{ opacity: 1, x: 0, y: 0 }}
      exit={{ opacity: 0, x: -1000, y: 0 }}
      transition={{
        delay: 0.2,
        duration: 0.2,
        ease: 'easeOut',
      }}
    >
      <h2 className="text-3xl mb-2">Véhicule thérmique</h2>

      <label htmlFor="purchaseCost">Prix achat (€):</label>
      <input
        className="mb-2"
        min="0"
        type="number"
        id="purchaseCost"
        name="purchaseCost"
        value={state.carDataICE.purchaseCost}
        onChange={(e) =>
          setState((prev) => ({
            ...prev,
            carDataICE: {
              ...state.carDataICE,
              purchaseCost: e.target.value,
            },
          }))
        }
      />

      <label htmlFor="consumption">Consomation (lt/100km):</label>
      <input
        className="mb-2"
        required
        min="0"
        type="number"
        id="consumption"
        name="consumption"
        value={state.carDataICE.consumption}
        onChange={(e) =>
          setState((prev) => ({
            ...prev,
            carDataICE: {
              ...state.carDataICE,
              consumption: e.target.value,
            },
          }))
        }
      />
      <label htmlFor="insurance">Assurance (€/an):</label>
      <input
        className="mb-2"
        required
        min="0"
        type="number"
        id="insurance"
        name="insurance"
        value={state.carDataICE.insurance}
        onChange={(e) =>
          setState((prev) => ({
            ...prev,
            carDataICE: {
              ...state.carDataICE,
              insurance: e.target.value,
            },
          }))
        }
      />
      <label htmlFor="maintenance">Entretien (€/an):</label>
      <input
        className="mb-2"
        required
        min="0"
        type="number"
        id="maintenance"
        name="maintenance"
        value={state.carDataICE.maintenance}
        onChange={(e) =>
          setState((prev) => ({
            ...prev,
            carDataICE: {
              ...state.carDataICE,
              maintenance: e.target.value,
            },
          }))
        }
      />
    </motion.fieldset>
  );
};

export default CarICEFieldSet;
