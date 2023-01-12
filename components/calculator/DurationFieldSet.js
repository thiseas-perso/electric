import { motion } from 'framer-motion';

function DurationFieldSet({ state, setState, className, x }) {
  return (
    <motion.fieldset
      className={className}
      initial={{ x }}
      animate={{ x: 0 }}
      transition={{
        duration: 0.2,
        ease: 'easeOut',
      }}
    >
      <h2 className="text-3xl text-white mb-5 p-4 font-poppins font-bold bg-light-primary-2 text-center">
        Durée de <span className="text-light-primary-4">détention</span>
      </h2>

      <div className="flex flex-col px-4 pb-4">
        <label htmlFor="durationStudied">Années</label>
        <input
          className="mb-3"
          min=""
          placeholder="ex: 8"
          step="1"
          type="number"
          id="durationStudied"
          name="durationStudied"
          value={state.durationStudied}
          onChange={(e) =>
            setState((prev) => ({
              ...prev,
              durationStudied: e.target.value,
            }))
          }
        />
      </div>
    </motion.fieldset>
  );
}

export default DurationFieldSet;
