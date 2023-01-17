import Image from 'next/image';
import { useRef, useState } from 'react';
import arrowButton from '../../public/icons/arrow-button.svg';
import closeButton from '../../public/icons/close-button.svg';

import ModelCard from './ModelCard';

const ModelsSection = ({ allData, title, last }) => {
  const [display, setDisplay] = useState(false);
  const contentRef = useRef();
  let height;
  if (contentRef.current) height = `${contentRef.current.scrollHeight}px`;

  return (
    <section>
      <div className="flex items-center bg-white p-3 gap-3">
        <h2 className="">{title}</h2>
        <button
          className="border-none h-9 m-0 p-0"
          onClick={() => setDisplay((prev) => !prev)}
        >
          <Image
            src={display ? closeButton : arrowButton}
            alt="click to display models"
            className="rotate-180 unselectable"
          />
        </button>
      </div>

      <div
        ref={contentRef}
        className={`transition-[height] delay-100 overflow-hidden `}
        style={{ height: display ? height : '0px' }}
      >
        <div
          className={`flex flex-wrap gap-2 flex-grow bg-white p-3 pb-8 justify-center items-start ${
            last && 'mb-20'
          }`}
        >
          {allData.map((data) => (
            <ModelCard
              maker={data.maker}
              key={data.id}
              model={data.model}
              onClick={() => console.log('clicked')}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default ModelsSection;
