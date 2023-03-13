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
      {version?.acceleration && (
        <li>
          <Acceleration
            tests={version.acceleration}
            className="border rounded-lg my-14 shadow-md overflow-x-auto overflow-y-hidden dark:bg-dark-primary-0"
          />
        </li>
      )}
      {version?.thousand && (
        <li>
          <ThousandKM
            tests={version.thousand}
            className="border rounded-lg my-14 shadow-md overflow-x-auto overflow-y-hidden dark:bg-dark-primary-0"
          />
        </li>
      )}
      {version?.weight && (
        <li>
          <Weight
            tests={version.weight}
            className="border rounded-lg my-14 shadow-md overflow-x-auto overflow-y-hidden dark:bg-dark-primary-0"
          />
        </li>
      )}
      {version?.banana && (
        <li>
          <Banana
            tests={version.banana}
            className="border rounded-lg my-14 shadow-md overflow-x-auto overflow-y-hidden dark:bg-dark-primary-0"
          />
        </li>
      )}
      {version?.range && (
        <li>
          <Range
            tests={version.range}
            className="border rounded-lg my-14 shadow-md overflow-x-auto overflow-y-hidden dark:bg-dark-primary-0"
          />
        </li>
      )}
      {version?.braking && (
        <li>
          <Braking
            tests={version.braking}
            className="border rounded-lg my-14 shadow-md overflow-x-auto overflow-y-hidden dark:bg-dark-primary-0"
          />
        </li>
      )}
    </>
  );
};

export default VersionsTests;
