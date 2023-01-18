import React from 'react';
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
  return <div>Model</div>;
};

export default Model;
