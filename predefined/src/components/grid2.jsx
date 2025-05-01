import { useState } from "react";

export default function Grid2() {
  const initialGrid = [
    [
      { number: 0 },
      { number: 0 },
      { number: 0 },
      { number: 0 },
      { number: 0 },
      { number: 0 },
      { number: 0 },
    ],
    [
      { number: 0 },
      { number: 0 },
      { number: 0 },
      { number: 0 },
      { number: 0 },
      { number: 0 },
      { number: 0 },
    ],
    [
      { number: 0 },
      { number: 0 },
      { number: 0 },
      { number: 1 },
      { number: 0 },
      { number: 0 },
      { number: 0 },
    ],
    [
      { number: 0 },
      { number: 0 },
      { number: 1 },
      { number: 0 },
      { number: 1 },
      { number: 0 },
      { number: 0 },
    ],
    [
      { number: 0 },
      { number: 0 },
      { number: 0 },
      { number: 1 },
      { number: 0 },
      { number: 0 },
      { number: 0 },
    ],
    [
      { number: 0 },
      { number: 0 },
      { number: 0 },
      { number: 0 },
      { number: 0 },
      { number: 0 },
      { number: 0 },
    ],
    [
      { number: 0 },
      { number: 0 },
      { number: 0 },
      { number: 0 },
      { number: 0 },
      { number: 0 },
      { number: 0 },
    ],
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
  return (
    <div id="gridStyle">
      {grid.map((row, rowIndex) => (
        <div key={rowIndex} className="grid-row">
          {row.map((value, colIndex) => (
            <div key={colIndex} className={gridColour(value.number)}></div>
          ))}
        </div>
      ))}
    </div>
  );
}
