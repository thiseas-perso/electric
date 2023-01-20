import React from 'react';
import StudioImage from '../../../components/StudioImage';
import Version from '../../../components/Version';
import VersionsTests from '../../../components/VersionTests';
import {
  getAllModelIds,
  getAllTestNames,
  getModelData,
} from '../../../lib/csvParser';

export async function getStaticPaths() {
  const paths = await getAllModelIds();
  return {
    paths,
    fallback: false,
  };
}

export async function getStaticProps({ params }) {
  const testNames = getAllTestNames();
  const modelData = await getModelData(params.id);
  return {
    props: {
      modelData,
      testNames,
    },
  };
}

const Model = ({ modelData, testNames }) => {
  console.log({ modelData, testNames });
  return (
    <div>
      <div className="w-full h-fit px-4 flex flex-col items-center">
        <StudioImage
          model={modelData.model}
          maker={modelData.maker}
          width={1200}
          height={100}
          zoomType={'fullscreen'}
          priority={true}
          className={'unselectable w-full max-w-3xl object-cover'}
        />
        <h1 className="relative top-[-30px] text-5xl">
          {modelData.maker}{' '}
          <span className="text-light-primary-4">{modelData.model}</span>
        </h1>
      </div>
      <div className="bg-white min-w-ful px-4 max-w-full">
        {modelData.versions.map((version) => {
          return (
            <Version key={version.id} version={version} testNames={testNames} />
          );
        })}
      </div>
    </div>
  );
};

export default Model;
