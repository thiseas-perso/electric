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
      <h2 className="text-3xl mb-2 p-4 bg-red-400">Durée de détention</h2>

      <div className="flex flex-col px-4 pb-4">
        <label htmlFor="durationStudied">Années</label>
        <input
          className="mb-2"
          min=""
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
