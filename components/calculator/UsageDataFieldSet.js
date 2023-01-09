import { motion } from 'framer-motion';

const UsageDataFieldSet = ({ state, setState, className }) => {
  return (
    <motion.fieldset
      id="usageData"
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
      <h2 className="text-3xl mb-2">Analyse de vos trajets</h2>
      <label htmlFor="workHomeDistance">Distance domicile travail (km):</label>
      <input
        className="mb-2"
        min="0"
        type="number"
        id="workHomeDistance"
        name="workHomeDistance"
        value={state.usageData.workHomeDistance}
        onChange={(e) =>
          setState((prev) => ({
            ...prev,
            usageData: {
              ...state.usageData,
              workHomeDistance: e.target.value,
            },
          }))
        }
      />
      <label htmlFor="dailyCommutes">A/R quotidiens</label>
      <input
        className="mb-2"
        min="0"
        type="number"
        id="dailyCommutes"
        name="dailyCommutes"
        value={state.usageData.dailyCommutes}
        onChange={(e) =>
          setState((prev) => ({
            ...prev,
            usageData: {
              ...state.usageData,
              dailyCommutes: e.target.value,
            },
          }))
        }
      />
      <label htmlFor="daysWorkedPerY">Nombre de jours travaillés/an</label>
      <input
        className="mb-2"
        min="0"
        max="365"
        type="number"
        id="daysWorkedPerY"
        name="daysWorkedPerY"
        value={state.usageData.daysWorkedPerY}
        onChange={(e) =>
          setState((prev) => ({
            ...prev,
            usageData: {
              ...state.usageData,
              daysWorkedPerY: e.target.value,
            },
          }))
        }
      />
      <label htmlFor="weekendKM">Km les weekends</label>
      <input
        className="mb-2"
        min="0"
        type="number"
        id="weekendKM"
        name="weekendKM"
        value={state.usageData.weekendKM}
        onChange={(e) =>
          setState((prev) => ({
            ...prev,
            usageData: {
              ...state.usageData,
              weekendKM: e.target.value,
            },
          }))
        }
      />
      <label htmlFor="otherKMPerW">Autres km par semaine</label>
      <input
        className="mb-2"
        min="0"
        type="number"
        id="otherKMPerW"
        name="otherKMPerW"
        value={state.usageData.otherKMPerW}
        onChange={(e) =>
          setState((prev) => ({
            ...prev,
            usageData: {
              ...state.usageData,
              otherKMPerW: e.target.value,
            },
          }))
        }
      />
    </motion.fieldset>
  );
};

export default UsageDataFieldSet;
