function printGridValues(grid) {
    // IMPORTANT: always RETURN when using map()
    return grid.map((row, rowIdx) => 
            row.map((col, colIdx) => `Row is ${row} with index ${rowIdx}. Column is ${col} with index ${colIdx}`
        ))
}

grid = [[1,2,3], [4,5,6], [7,8,9]]
console.log(printGridValues(grid))