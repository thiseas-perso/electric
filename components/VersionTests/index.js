import {
  Acceleration,
  Banana,
  Braking,
  Range,
  ThousandKM,
  Weight,
} from '../TestTables';

const VersionsTests = ({ version }) => {
  return (
    <>
      {version?.acceleration && <Acceleration tests={version.acceleration} />}
      {version?.thousand && <ThousandKM tests={version.thousand} />}
      {version?.weight && <Weight tests={version.weight} />}
      {version?.banana && <Banana tests={version.banana} />}
      {version?.range && <Range tests={version.range} />}
      {version?.braking && <Braking tests={version.braking} />}
    </>
  );
};

export default VersionsTests;
