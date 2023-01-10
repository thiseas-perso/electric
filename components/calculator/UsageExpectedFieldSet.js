import { motion } from 'framer-motion';

const UsageExpectedFieldSet = ({ state, setState, className, x }) => {
  return (
    <motion.fieldset
      id="usageExpected"
      className={className}
      initial={{ opacity: 0, x, y: 0 }}
      animate={{ opacity: 1, x: 0 }}
      transition={{
        duration: 0.2,
        ease: 'easeOut',
      }}
    >
      <h2 className="text-3xl mb-2 p-4 bg-red-400">Usage attendu</h2>

      <div className="flex flex-col px-4 pb-4">
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
      </div>
    </motion.fieldset>
  );
};

export default UsageExpectedFieldSet;
