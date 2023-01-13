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
  const [maker, setMaker] = useState('');
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
              models={makersObj[maker]}
              key={maker}
              onClick={() => {
                setModalOpen(true);
                setModels(() => makersObj[maker]);
                setMaker(() => maker);
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
          setMaker();
        }}
      >
        <div className="bg-gradient-to-tr from-pink-500 via-red-500 to-yellow-500 p-1  overflow-hidden">
          <div className="bg-white pt-0  overflow-hidden flex flex-col min-w-[200px] font-sans h-full w-full">
            <div className="">
              <h1 className="text-3xl text-white mb-5 p-4 font-poppins font-bold bg-light-primary-2 text-center">
                Les modèles{' '}
                <span className="text-light-primary-4">{maker}</span>
              </h1>
              {/* //TODO: transform into table */}
              <ul className="">
                {models.map((el) => (
                  <li key={el.id}>
                    <button className="border-none rounded-none mb-2 w-full bg-gradient-to-r from-light-primary-start to-light-primary-end p-0">
                      <div className="bg-none transition-colors hover:bg-white/40">
                        <span className="font-bold">{el.model}</span>{' '}
                        <span className="italic font-light">
                          ({el.totalVersions} version
                          {el.totalVersions > 1 && 's'})
                        </span>
                      </div>
                    </button>
                  </li>
                ))}
              </ul>
            </div>
            <button
              className="rounded-none border-none bg-light-primary-2 text-white mt-4 "
              onClick={() => setModalOpen(false)}
            >
              Close
            </button>
          </div>
        </div>
      </Modal>
    </section>
  );
};

export default MakerSection;
