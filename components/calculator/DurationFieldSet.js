import { motion } from 'framer-motion';

function DurationFieldSet({ state, setState, className }) {
  return (
    <motion.fieldset
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
      <h2 className="text-3xl mb-2">Durée de détention</h2>

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
    </motion.fieldset>
  );
}

export default DurationFieldSet;
