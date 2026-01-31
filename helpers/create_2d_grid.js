function create2DGridUsingMap() {
    return Array(3).fill("").map(() => {
        return new Array(3).fill("")
    })
}

console.log(create2DGridUsingMap())

function create2DGridUsingLoop() {
    const arr = []
    for (let i = 0; i < 3; i++) {
        const sub_grid = new Array(3).fill("")
        arr.push(sub_grid)
    }
    return arr
}

console.log(create2DGridUsingLoop())