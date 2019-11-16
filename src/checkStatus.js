import _ from "lodash";

export function checkStatus(grid){
    
        const newGrid = _.cloneDeep(grid); //needed for deeply nested arrays
         
        for (let x = 0; x < grid.length; x++){
            for(let y = 0; y < grid[x].length; y++){
                let live_neighbors = 0;
                //check left
                if (x !== 0 && grid[x][y-1] === 1){
                    live_neighbors++;
                }
                //check topLeft
                if (x !== 0 && y !== 0 && grid[x-1][y-1] === 1){
                    live_neighbors++;
                }
                //check top
                if (x !== 0 && grid[x - 1][y] === 1){
                    live_neighbors++;
                }
                //check topRight
                if(x !== 0 && y !== grid[x].length - 1 && grid[x-1][y+1] === 1){
                    live_neighbors++;
                }
                //check right
                if(y !== grid[x].length - 1 && grid[x][y+1] === 1){
                    live_neighbors++;
                }
                //check bottomRight
                if(y !== grid[x].length - 1 && x !== grid.length - 1 && grid[x+1][y+1] === 1){
                    live_neighbors++;
                }
                //check bottom
                if(x !== grid.length - 1 && grid[x + 1][y] === 1){
                    live_neighbors++;
                }
                //check bottomLeft
                if(y !== 0 && x !== grid.length - 1 && grid[x + 1][y - 1] === 1){
                    live_neighbors++
                }
                
                //kills live cells based on neighbors
                if (grid[x][y] === 1 && (live_neighbors < 2 || live_neighbors > 3)){
                    newGrid[x][y] = 0;
                }

                //resurrects dead cells based on neighbors
                if (grid[x][y] === 0 && live_neighbors === 3){
                    newGrid[x][y] = 1;
                }
            }
        }
        return newGrid;
}
          