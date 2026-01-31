# Tutorial: Tic Tac Toe in React

This tutorial consists of 5 different ways to write a Tic Tac Toe program in React.

- T1: Everything is encapsulated inside App.jsx with one component called App
- T2: A more hierarchical approach of passing data from squares to board to game
- T3: A generalizable program of Tic Tac Toe (not just 3x3)
- T4: Tic Tac Toe but in TypeScript and React
- T5: A minimax algorithm (human vs. computer)

## T1: Everything is encapsulated inside `App.jsx`

> The key feature of this approach is that all states are updated using 1 function called `handleClick()`. I made this decision because all states are dependent on one another, the change in one state causes the change in the other. For example, click a cell changes the state of the board as a whole, the current player, and who the winner is. As a result, I find it's easier to read and follow than the official tutorial done by React. 

![state_change_v1](/tic-tac-toe-v1/public/ttt1.png)

1. First, think about the tic tac toe board as a container that consists of clickable individual cells
2. When we click on a cell, the whole state of the board will change. As a result, we can use `useState()` a React Hook that lets you add a state variable to your component. The initial state is a 2D matrix (3 rows and 3 columns with no values).
   ```jsx
   const [Board, setBoard] = useState();
   ```
3. `setBoard` is the function to set the state of the component to a new one
4. To update the component to a new state (e.g., visual representation), we need the following information:
   - Which cell has been clicked? (e.g., their position on the board)
   - Which player's turn that was ("X" or "O")?
   - Have we found a winner (e.g., vertical, horizontal, or diagonal line consists of the same symbol)?
5. Step 2-4 is the key to update the UI at each step.

## T2: A more hierarchical approach of passing data from square to board to game