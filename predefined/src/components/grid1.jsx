import { useState } from "react";

export default function Grid1() {
  const initialGrid = [
    [0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 1, 0, 0, 0],
    [0, 0, 1, 0, 1, 0, 0],
    [0, 0, 0, 1, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0],
  ];

  const [grid, setGrid] = useState(initialGrid);
  function gridColour(Grid) {
    if (Grid === 0) {
      return "white-cell";
    } else if (Grid === 1) {
      return "grey-cell";
    } else if (Grid === 2) {
      return "green-cell";
    }
  }

  const handleClick = (rowIdx, colIdx) => {
    const newGrid = grid.map((row, r) =>
      row.map((cell, c) => (r === rowIdx && c === colIdx ? cell + 1 : cell))
    );
    setGrid(newGrid);
  };

  return (
    <div id="gridStyle">
      {grid.map((row, rowIndex) => (
        <div key={rowIndex} className="grid-row">
          {row.map((value, colIndex) => (
            <div
              key={colIndex}
              className={gridColour(value)}
              onClick={() => handleClick(rowIndex, colIndex)}
            ></div>
          ))}
        </div>
      ))}
    </div>
  );
}
