import { useState } from 'react';
import './App.css';

function calculateWinner(grid, rowIdx, colIdx) {
  const player = grid[rowIdx][colIdx]

  // horizontal
  if (grid[rowIdx].every(val => val == player)) {
    return "The winner is: " + player
  }
  
  // vertical
  if (grid.every(row => row[colIdx] == player)) {
    return "The winner is: " + player
  }

  // main diagonal
  if (rowIdx == colIdx) {
    if (grid.every((row, idx) => row[idx] == player)) {
      return "The winner is: " + player
    }
  }

  if (rowIdx + colIdx == grid.length - 1) {
    if (grid.every((row, idx) => row[grid.length - idx + 1] == player)) {
      return "The winner is: " + player
    }
  }

  return null;

}

function App() {
  const [Board, setBoard] = useState(Array(3).fill("").map(() => new Array(3).fill("")))
  const [player, setPlayer] = useState("X")
  const [winner, setWinner] = useState("")

  const handleClick = (rowIdx, colIdx) => {
    if (winner || Board[rowIdx][colIdx] !== "") return;

    setBoard((prev) => {
      const newGrid = prev.map(row => [...row]);
      newGrid[rowIdx][colIdx] = player;

      const result = calculateWinner(newGrid, rowIdx, colIdx);
      if (result) {
        setWinner(result);
      }

      return newGrid;
    });

    setPlayer(player === "X" ? "O" : "X");
  }

  const handleRestart = () => {
    setBoard(Array(3).fill("").map(() => new Array(3).fill("")))
    setWinner("")
  }

  return (
    <>
      <h1>Tic Tac Toe V1</h1>
      <div className="board-container">
        {
          Board.map((row, rowIdx) => 
            row.map((col, colIdx) => {
              return (
                <div 
                  key={`${rowIdx}${colIdx}`} 
                  onClick={() => handleClick(rowIdx, colIdx)}
                >
                  {col}
                </div>
              )
            }))
        }
      </div>
      <div>
        {winner && <h2>{winner}</h2>}
      </div>
      <button onClick={() => handleRestart()}>Restart</button>
    </>
  )
}

export default App
