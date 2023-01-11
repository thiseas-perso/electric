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
      <h2 className="text-3xl text-white mb-5 p-4 font-poppins font-bold bg-light-primary-2 text-center">
        <span className="text-light-primary-4">Usage</span> attendu
      </h2>

      <div className="flex flex-col px-4 pb-4">
        <label htmlFor="totalKMPerY">Total de KM/an</label>
        <input
          className="mb-3"
          min="0"
          placeholder="ex: 12500"
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
