import Image from 'next/image';
import { useState } from 'react';
import arrowButton from '../../public/icons/arrow-button.svg';

const CarsHomeSection = ({ stringArr, title }) => {
  const [display, setDisplay] = useState(false);
  return (
    <section>
      <div className="flex items-center bg-white p-3 gap-3">
        <h2 className="">{title}</h2>
        <button
          className="border-none h-9 m-0 p-0"
          onClick={() => setDisplay((prev) => !prev)}
        >
          <Image
            src={arrowButton}
            alt="click to display brands"
            className="rotate-180"
          />
        </button>
      </div>

      {display && (
        <div
          className={`flex flex-wrap gap-2 bg-white p-3 pb-8 justify-center `}
        >
          {stringArr.map((el) => (
            <button
              className={`m-0 bg-light-primary-2 text-white px-5 py-2 rounded-lg border-none ${
                display ? 'opacity-1 h-fit' : 'opacity-0 h-0'
              }`}
              key={el}
            >
              {el}
            </button>
          ))}
        </div>
      )}
    </section>
  );
};

export default CarsHomeSection;
