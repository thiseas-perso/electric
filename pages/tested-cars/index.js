import { getAllDataLight, getAllTestNames } from '../../lib/csvParser';

import MakerSection from '../../components/cars/MakerSection';
import ModelsSection from '../../components/cars/ModelsSection';
import CustomHead from '../../components/customHead';

import TestsLinks from '../../components/cars/TestsLinks';

export async function getStaticProps() {
  const allDataLight = await getAllDataLight();
  const testNames = getAllTestNames();

  return {
    props: {
      allDataLight,
      testNames,
    },
  };
}

const Cars = ({ allDataLight, testNames }) => {
  const dataByMaker = allDataLight.reduce((acc, cur) => {
    const foundIndex = acc.findIndex((el) => el?.maker === cur.maker);
    if (foundIndex !== -1) {
      const { maker, ...rest } = cur;
      acc[foundIndex].models.push({ ...rest });
    } else {
      const { maker, ...rest } = cur;
      acc.push({ maker: cur.maker, models: [rest] });
    }
    return acc.sort((a, b) => {
      return a.maker.localeCompare(b.maker);
    });
  }, []);

  return (
    <>
      <CustomHead title="SOME TITLE" description="some description" />
      <div className="min-h-screenNoNav flex flex-col items-center max-w-4xl mx-auto p-4 gap-4">
        <h1
          aria-label="Tous les tests"
          className="text-xl p-2 mt-[2vh] text-white font-poppins font-extrabold text-center"
        >
          Tous les tests
        </h1>
        <p className="text-lg leading-7">
          Tous les résultats que vous pouvez trouver sont fournis par{' '}
          <strong>Björn Nyland</strong>, YouTubeur professionnel depuis 2018,
          qui teste pratiquement toutes les voitures électriques qui existent.
        </p>
        <h2 className="text-white">Les tests sont catégorisés ainsi:</h2>
        <ul>
          <li>
            <h3 className="font-bold">Accélération : </h3>{' '}
            <p>
              En combien de temps une voiture peut-elle atteindre les 100km/h ?
            </p>
          </li>
          <li>
            <h3 className="font-bold">Autonomie</h3>
            <ul>
              <li>
                Combien de voiture peut une voiture parcourir en roulant à 90 ou
                120km/h si sa batterie est chargée à 100% ?{' '}
                <li>
                  Et si elle est chargée à 80% comme il est souvent recommandé ?
                </li>
              </li>
              <li>Combien de temps pour la rechargée de 5 à 80 % ?</li>
              <li>Quelle est sa consomation moyenne réelle ?</li>
            </ul>
          </li>
          <li>
            <h3 className="font-bold">1000km</h3>
            <p>
              Un test très parlant : combien de temps pour parcourir 1000 km
              avec la voiture testée, temps de pauses pour recharger comprises.
            </p>
          </li>
          <li>
            <h3 className="font-bold">Poids</h3>
            <p>Le poids de la voiture et sa distribution</p>
          </li>
          <li>
            <h3 className="font-bold">Caisses à bananes</h3>
            <p>
              Encore un test bien sympa. Plutôt que parler en termes de volume
              pour mesurer la capacité de chargement du coffre d&apos;une
              voiture Björn la remplie de caisses à bananes!
            </p>
          </li>
          <li>
            <h3 className="font-bold">Freins</h3>
            <p>
              La sécurité étant tout de même un facteur très important pour
              l&apos;achat d&apos;un véhicule, voici un test qui relève en
              combien de mètres et de secondes une voiture passe de 100km/h à un
              arrêt complet.
            </p>
          </li>
        </ul>
        <MakerSection dataByMaker={dataByMaker} />
        <TestsLinks stringArr={testNames} />
        <ModelsSection allDataLight={allDataLight} last={true} />
      </div>
    </>
  );
};

export default Cars;
