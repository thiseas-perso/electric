import { motion } from 'framer-motion';

const UsageExpectedFieldSet = ({ state, setState, className }) => {
  return (
    <motion.fieldset
      id="usageExpected"
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
      <h2 className="text-3xl mb-2">Usage attendu</h2>

      <label htmlFor="totalKMPerY">Total de KM/an</label>
      <input
        className="mb-2"
        min="0"
        type="number"
        id="totalKMPerY"
        value={state.usageExpected.totalKMPerY}
        onChange={(e) =>
          setState((prev) => ({
            ...prev,
            usageExpected: {
              ...state.usageExpected,
              totalKMPerY: e.target.value,
            },
          }))
        }
      />
    </motion.fieldset>
  );
};

export default UsageExpectedFieldSet;
