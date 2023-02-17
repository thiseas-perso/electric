import Image from 'next/image';
import React, { useEffect, useState } from 'react';

const TableHeader = ({ imageSrc, info }) => {
  const [clicked, setClicked] = useState(false);
  const [timeoutId, setTimeoutId] = useState(null);

  const clickHandler = () => {
    clearTimeout(timeoutId);
    setClicked(() => true);
    const newTimeoutId = setTimeout(() => {
      setClicked(() => false);
    }, 3000);
    setTimeoutId(newTimeoutId);
  };

  useEffect(() => {
    return () => {
      clearTimeout(timeoutId);
    };
  }, [timeoutId]);

  return (
    <div>
      {clicked ? (
        <div>{info}</div>
      ) : (
        <Image
          className="mx-auto unselectable"
          src={imageSrc}
          alt={info}
          onClick={clickHandler}
          height="42"
        />
      )}
    </div>
  );
};

export default TableHeader;
