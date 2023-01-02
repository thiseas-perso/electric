import Head from 'next/head';

const Calculator = () => {
  return (
    <>
      <Head>
        <title>[TTILE HERE]</title>
        <meta name="description" content="[DESCRIPTION HERE]" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <h1>Calculator</h1>
      <form>
        <fieldset id="carData">
          <label htmlFor="purchaseCost">prix achat</label>
          <input type="number" id="purchaseCost" />
          <label htmlFor="ecoBonus">bonus ecologique</label>
          <input type="number" id="ecoBonus" />
          <label htmlFor="consumption">consomation</label>
          <input type="number" id="consumption" />
          <label htmlFor="insurance">assurance</label>
          <input type="number" id="insurance" />
          <label htmlFor="maintenance">entretien</label>
          <input type="number" id="maintenance" />
        </fieldset>
        <fieldset id="energyData">
          <label htmlFor="chargingPriceHC">cout electricité HC</label>
          <input type="number" id="chargingPriceHC" />
          <label htmlFor="chargingPriceHP">cout electricité HP</label>
          <input type="number" id="chargingPriceHP" />
          <label htmlFor="gasPrice">cout carburant</label>
          <input type="number" id="gasPrice" />
        </fieldset>
        <fieldset id="usageData"> </fieldset>
        <fieldset id="usageExpected"> </fieldset>
      </form>
    </>
  );
};

export default Calculator;
