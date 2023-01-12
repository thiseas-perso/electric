import { motion } from 'framer-motion';

const CarICEFieldSet = ({ state, className, x, changeHandler }) => {
  return (
    <motion.fieldset
      id="carData"
      className={className}
      initial={{ x, y: 0 }}
      animate={{ x: 0 }}
      transition={{
        ease: 'easeOut',
      }}
    >
      <h2 className="text-3xl text-white mb-5 p-4 font-poppins font-bold bg-light-primary-2 text-center">
        Véhicule <span className="text-light-primary-4">thérmique</span>
      </h2>

      <div className="flex flex-col px-4 pb-4">
        <label htmlFor="purchaseCost">Prix achat (€):</label>
        <input
          className="mb-3"
          placeholder="ex: 35000"
          required
          min="0"
          type="number"
          id="purchaseCost"
          name="purchaseCost"
          value={state.carDataICE.purchaseCost}
          onChange={(e) => changeHandler(e, 'carDataICE', 'purchaseCost')}
        />
        <label htmlFor="consumption">Consomation (lt/100km):</label>
        <input
          className="mb-3"
          placeholder="ex: 5.2"
          required
          min="0"
          type="number"
          id="consumption"
          name="consumption"
          value={state.carDataICE.consumption}
          onChange={(e) => changeHandler(e, 'carDataICE', 'consumption')}
        />
        <label htmlFor="insurance">Assurance (€/an):</label>
        <input
          className="mb-3"
          placeholder="ex: 750"
          required
          min="0"
          type="number"
          id="insurance"
          name="insurance"
          value={state.carDataICE.insurance}
          onChange={(e) => changeHandler(e, 'carDataICE', 'insurance')}
        />
        <label htmlFor="maintenance">Entretien (€/an):</label>
        <input
          className="mb-3"
          placeholder="ex: 700"
          required
          min="0"
          type="number"
          id="maintenance"
          name="maintenance"
          value={state.carDataICE.maintenance}
          onChange={(e) => changeHandler(e, 'carDataICE', 'maintenance')}
        />
      </div>
    </motion.fieldset>
  );
};

export default CarICEFieldSet;
