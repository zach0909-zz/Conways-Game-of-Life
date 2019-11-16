
export function buildGrid(){
    const grid = [...new Array(50)]; //container for all row arrays
            for(let x = 0; x< grid.length; x++){
                const row = [...new Array(50)]; //specific row
                grid[x] = row.map(() => Math.floor(Math.random() + .5))
            }
    return grid;
}

//     //test grid
//     return [
//         [0,0,0,0,0],[0,0,0,0,0],[0,1,1,1,0],[0,0,0,0,0],[0,0,0,0,0]
//     ];
// }
