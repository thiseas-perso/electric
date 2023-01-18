import React from 'react';
import StudioImage from '../../../components/StudioImage';
import { getAllModelIds, getModelData } from '../../../lib/csvParser';

export async function getStaticPaths() {
  const paths = await getAllModelIds();
  return {
    paths,
    fallback: false,
  };
}

export async function getStaticProps({ params }) {
  const modelData = await getModelData(params.id);
  return {
    props: {
      modelData,
    },
  };
}

const Model = ({ modelData }) => {
  console.log(modelData);
  return (
    <div>
      <div className="w-full  flex flex-col items-center">
        <StudioImage
          model={modelData.model}
          maker={modelData.maker}
          width={2600}
          height={500}
          zoomType={'fullscreen'}
          className={'  w-full max-w-5xl object-cover'}
        />
        <h1 className="relative top-[-30px] text-5xl">
          {modelData.maker}{' '}
          <span className="text-light-primary-4">{modelData.model}</span>
        </h1>
      </div>
      <div className="bg-black w-full h-12"></div>
    </div>
  );
};

export default Model;
