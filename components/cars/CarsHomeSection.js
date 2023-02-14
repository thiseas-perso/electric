import Image from 'next/image';
import { useRef, useState } from 'react';
import arrowButton from '../../public/icons/arrow-button.svg';
import closeButton from '../../public/icons/close-button.svg';

const CarsHomeSection = ({ stringArr, last }) => {
  const [display, setDisplay] = useState(false);
  const contentRef = useRef();
  let height;
  if (contentRef.current) height = `${contentRef.current.scrollHeight}px`;

  return (
    <section>
      <div className="flex items-center  p-3 gap-3 dark:bg-transparent">
        <h2 className="" onClick={() => setDisplay((prev) => !prev)}>
          Chercher par test
        </h2>
        <button
          className="border-none h-9 m-0 p-0"
          onClick={() => setDisplay((prev) => !prev)}
        >
          <Image
            src={display ? closeButton : arrowButton}
            alt="click to display brands"
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
          className={`flex flex-wrap gap-2 flex-grow  p-3 pb-8 justify-center ${
            last && 'mb-20'
          } dark:bg-transparent`}
        >
          {stringArr.map((el) => (
            <button
              className={`m-0 bg-light-primary-2 text-white px-5 py-2 rounded-lg border-none `}
              key={el}
            >
              {el}
            </button>
          ))}
        </div>
      </div>
    </section>
  );
};

export default CarsHomeSection;
