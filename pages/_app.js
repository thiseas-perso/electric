import { useState } from 'react';
import { CarsCtx } from '../context/carsContext';

const App = ({ Component, pageProps }) => {
  const [carsState, setCarsState] = useState([]);

  return (
    <CarsCtx.Provider value={{ carsState, setCarsState }}>
      <Component {...pageProps} />
    </CarsCtx.Provider>
  );
};

export default App;
