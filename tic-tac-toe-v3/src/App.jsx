import { useState } from "react"
import "./App.css"

function createBoard(input) {
  const n = parseInt(input, 10)
  return Array.from({ length: n }, () => Array(n).fill(""))
}

function calculateWinner(grid, rowIdx, colIdx) {
  const player = grid[rowIdx][colIdx]
  if (!player) return null

  // horizontal
  if (grid[rowIdx].every(val => val === player)) return player

  // vertical
  if (grid.every(row => row[colIdx] === player)) return player

  // main diagonal
  if (rowIdx === colIdx) {
    if (grid.every((row, idx) => row[idx] === player)) return player
  }

  // anti-diagonal
  if (rowIdx + colIdx === grid.length - 1) {
    if (grid.every((row, idx) => row[grid.length - 1 - idx] === player)) return player
  }

  return null
}

function App() {
  const [userInput, setInput] = useState(3)
  const [currentBoard, setBoard] = useState(createBoard(3))
  const [currentPlayer, setPlayer] = useState("X")
  const [winner, setWinner] = useState("")

  const handleChange = (e) => setInput(e.target.value)

  const handleCreate = () => {
    setWinner("")
    setPlayer("X")
    setBoard(createBoard(userInput))
  }

  const handleClick = (rowIdx, colIdx) => {
    if (winner) return
    if (!currentBoard[rowIdx]) return
    if (currentBoard[rowIdx][colIdx] !== "") return

    setBoard(prev => {
      const newGrid = prev.map(row => [...row])
      newGrid[rowIdx][colIdx] = currentPlayer

      const w = calculateWinner(newGrid, rowIdx, colIdx)
      if (w) setWinner(w)

      return newGrid
    })

    setPlayer(prev => (prev === "X" ? "O" : "X"))
  }

  return (
    <>
      <h1>Tic Tac Toe V3</h1>

      <div className="input-section">
        <input type="number" value={userInput} onChange={handleChange} />
        <button onClick={handleCreate}>Create Board</button>
      </div>

      <div className="board-container" style={{ "--size": userInput }}>
        {currentBoard.map((row, rowIdx) =>
          row.map((cell, colIdx) => (
            <div
              key={`${rowIdx}-${colIdx}`}
              onClick={() => handleClick(rowIdx, colIdx)}
            >
              {cell}
            </div>
          ))
        )}
      </div>

      <div>
        <h2>Winner is {winner ? winner : "—"}</h2>
      </div>
    </>
  )
}

export default App
