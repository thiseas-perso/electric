import { motion } from 'framer-motion';

const UsageDataFieldSet = ({ state, setState, className, x }) => {
  const total =
    Number(state.usageData.workHomeDistance) *
      Number(state.usageData.dailyCommutes) *
      Number(state.usageData.daysWorkedPerY) +
    Number(state.usageData.weekendKM) * 52 +
    Number(state.usageData.otherKMPerW) * 52;

  return (
    <motion.fieldset
      id="usageData"
      className={className}
      initial={{ x }}
      animate={{ x: 0 }}
      transition={{
        ease: 'easeOut',
      }}
    >
      <h2 className="text-3xl text-white mb-5 p-4 font-poppins font-bold bg-light-primary-2 text-center">
        Vos <span className="text-light-primary-4">trajets</span>
      </h2>
      <div className="flex flex-col px-4 pb-4">
        <label htmlFor="workHomeDistance">
          Distance domicile travail (km):
        </label>
        <input
          className="mb-3"
          required
          placeholder="ex: 45"
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
          className="mb-3"
          required
          placeholder="ex: 2"
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
          className="mb-3"
          min="0"
          max="365"
          required
          placeholder="ex: 150"
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
          className="mb-3"
          min="0"
          type="number"
          id="weekendKM"
          name="weekendKM"
          placeholder="ex: 140"
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
          className="mb-3"
          min="0"
          placeholder="ex: 20"
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
        <div className="text-end">
          <b>Total:</b> {total} km
        </div>
      </div>
    </motion.fieldset>
  );
};

export default UsageDataFieldSet;
