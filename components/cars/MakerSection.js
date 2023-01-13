import Image from 'next/image';

import { useRef, useState } from 'react';
import arrowButton from '../../public/icons/arrow-button.svg';
import closeButton from '../../public/icons/close-button.svg';
import Modal from '../Modal';
import MakerBtn from './MakerBtn';

const MakerSection = ({ makersObj, title, last }) => {
  const [display, setDisplay] = useState(false);
  const [modalOpen, setModalOpen] = useState(false);
  const [models, setModels] = useState([]);
  const contentRef = useRef();
  let height;
  if (contentRef.current) height = `${contentRef.current.scrollHeight}px`;

  const makers = Object.entries(makersObj).map(([key, _value]) => key);
  makers.sort((a, b) => {
    return a.localeCompare(b);
  });

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
          className={`flex flex-wrap gap-2 flex-grow bg-white p-3 pb-8 justify-center items-start ${
            last && 'mb-20'
          }`}
        >
          {makers.map((maker) => (
            <MakerBtn
              maker={maker}
              makersObj={makersObj}
              key={maker}
              onClick={() => {
                setModalOpen(true);
                setModels(() => makersObj[maker]);
              }}
            />
          ))}
        </div>
      </div>
      <Modal
        open={modalOpen}
        handleClose={() => {
          setModalOpen(false);
          setModels([]);
        }}
      >
        {models.map((el) => (
          <div key={el}>{el}</div>
        ))}
      </Modal>
    </section>
  );
};

export default MakerSection;
