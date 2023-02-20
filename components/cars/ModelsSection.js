import Image from 'next/image';
import { useEffect, useRef, useState } from 'react';
import arrowButton from '../../public/icons/arrow-button.svg';
import closeButton from '../../public/icons/close-button.svg';

import ModelCard from './ModelCard';

const ModelsSection = ({ allDataLight, last }) => {
  const [display, setDisplay] = useState(false);
  const [query, setQuery] = useState('');

  const contentRef = useRef();
  let height;
  if (contentRef.current) height = `${contentRef.current.scrollHeight}px`;

  const dataFiltered = allDataLight.filter((el) =>
    el.id
      .split('-')
      .join(' ')
      .includes(query.toLowerCase().replaceAll('-', ' '))
  );

  return (
    <section>
      <div
        className="flex items-center hover:cursor-pointer p-3 gap-3 dark:bg-transparent"
        onClick={() => setDisplay((prev) => !prev)}
      >
        <h2>Tous les modèles testés</h2>
        <button
          className={`w-8 h-8 m-0 p-0 ${
            display
              ? "bg-[url('/icons/close-button.svg')] dark:bg-[url('/icons/close-button-dark.svg')]"
              : "bg-[url('/icons/arrow-button.svg')] dark:bg-[url('/icons/arrow-button-dark.svg')]"
          } bg-center bg-contain border-none`}
        >
          <span className="sr-only">Tous les modèles testés</span>
        </button>
      </div>

      <div
        ref={contentRef}
        className={`transition-all duration-150 overflow-hidden flex flex-col items-center`}
        style={{ height: display ? height : '0px' }}
      >
        <div className=" w-full p-8 flex justify-center dark:bg-transparent">
          <label className="font-semibold" htmlFor="filter">
            Filtrer :
          </label>
          <input
            className="ml-2 w-32"
            id="filter"
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            maxLength="20"
            autoComplete="off"
          />
        </div>
        <ul
          className={`flex flex-wrap gap-5   p-3 pb-8 justify-center items-start min-w-full h-fit ${
            last && 'mb-20'
          } dark:bg-transparent`}
        >
          {dataFiltered.map((data) => (
            <ModelCard
              maker={data.maker}
              key={data.id}
              model={data.model}
              id={data.id}
              versions={data.versions}
            />
          ))}
        </ul>
      </div>
    </section>
  );
};

export default ModelsSection;
