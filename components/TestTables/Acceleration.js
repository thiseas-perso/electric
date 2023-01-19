import React, { useState } from 'react';

const Acceleration = ({ tests }) => {
  const [details, setDetails] = useState(true);
  const [moreDetails, setMoredetails] = useState(false);
  const display = details ? '' : 'hidden';
  const displayMore = moreDetails ? '' : 'hidden';
  return (
    <div>
      <h3 className="font-bold">Acceleration</h3>
      <table>
        <thead>
          <tr>
            <th>Drive</th>
            <th className={`${displayMore}`}>0-10</th>
            <th className={`${displayMore}`}>0-20</th>
            <th className={`${displayMore}`}>0-30</th>
            <th className={`${displayMore}`}>0-40</th>
            <th className={`${displayMore}`}>0-50</th>
            <th className={`${displayMore}`}>0-60</th>
            <th className={`${displayMore}`}>0-70</th>
            <th className={`${displayMore}`}>0-80</th>
            <th className={`${displayMore}`}>0-90</th>
            <th>0-100</th>
            <th className={`${display}`}>0-100 (1ft)</th>
            <th>0-100 (spec)</th>
            <th className={`${display}`}>test VS spec</th>
            <th className={`${display}`}>Date</th>
            <th className={`${display}`}>Hp</th>
            <th className={`${display}`}>Pneux</th>
            <th>Poid (kg)</th>
            <th className={`${display}`}>Roue avant</th>
            <th className={`${display}`}>Roue arrière</th>
          </tr>
        </thead>
        <tbody>
          {tests.map((test, i) => {
            return (
              <tr key={i}>
                <td>{test.Drive}</td>
                <td className={`${displayMore}`}>{test.ZeroTo10}</td>
                <td className={`${displayMore}`}>{test.ZeroTo20}</td>
                <td className={`${displayMore}`}>{test.ZeroTo30}</td>
                <td className={`${displayMore}`}>{test.ZeroTo40}</td>
                <td className={`${displayMore}`}>{test.ZeroTo50}</td>
                <td className={`${displayMore}`}>{test.ZeroTo60}</td>
                <td className={`${displayMore}`}>{test.ZeroTo70}</td>
                <td className={`${displayMore}`}>{test.ZeroTo80}</td>
                <td className={`${displayMore}`}>{test.ZeroTo90}</td>
                <td>{test.ZeroTo100}</td>
                <td className={`${display}`}>{test.ZeroTo100onefoot}</td>
                <td>{test.ZeroTo100spec}</td>
                <td className={`${display}`}>{test.TestVsSpec}</td>
                <td className={`${display}`}>{test.Date}</td>
                <td className={`${display}`}>{test.Hp}</td>
                <td className={`${display}`}>{test.Tires}</td>
                <td>{test.Weight}</td>
                <td className={`${display}`}>{test.WheelFront}</td>
                <td className={`${display}`}>{test.WheelRear}</td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  );
};

export default Acceleration;
