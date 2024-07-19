// src/App.js
import React, { useState } from 'react';

function App() {
  const [clickedCells, setClickedCells] = useState([]);
  const [allClicked, setAllClicked] = useState(false);

  const handleClick = (index) => {
    if (allClicked) return;

    const newClickedCells = [...clickedCells, index];
    setClickedCells(newClickedCells);

    if (newClickedCells.length === 9) {
      setAllClicked(true);
      setTimeout(() => {
        setClickedCells(newClickedCells);
      }, 1000);
    }
  };

  const handleReset = () => {
    setClickedCells([]);
    setAllClicked(false);
  };

  return (
    <div className='flex flex-col gap-2 justify-center items-center h-screen bg-slate-900'>
      <div className='grid grid-cols-3 gap-2'>
        {Array.from({ length: 9 }).map((_, index) => (
          <div
            key={index}
            onClick={() => handleClick(index)}
            className={`w-20 h-20 flex justify-center items-center border-2 rounded-md ${
              allClicked
                ? 'bg-orange-500'
                : clickedCells.includes(index)
                ? 'bg-green-500'
                : 'bg-gray-200'
            }`}
          ></div>
        ))}
      </div>
      <button
        onClick={handleReset}
        className='px-4 py-2 my-2 bg-slate-500 text-white rounded hover:bg-slate-700'
      >
        Reset
      </button>
    </div>
  );
}

export default App;
