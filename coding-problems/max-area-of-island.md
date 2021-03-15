# Max area of island

[[0,0,1,0,0,0,0,1,0,0,0,0,0],
 [0,0,0,0,0,0,0,1,1,1,0,0,0],
 [0,1,1,0,1,0,0,0,0,0,0,0,0],
 [0,1,0,0,1,1,0,0,1,0,1,0,0],
 [0,1,0,0,1,1,0,0,1,1,1,0,0],
 [0,0,0,0,0,0,0,0,0,0,1,0,0],
 [0,0,0,0,0,0,0,1,1,1,0,0,0],
 [0,0,0,0,0,0,0,1,1,0,0,0,0]]

 output 6
``` js
var maxAreaOfIsland = function(grid) {
  
  let maxSize = 0;
  
  for (let x = 0; x < grid[0].length; x++) {
    for (let y = 0; y < grid.length; y++) {
      
      const cell = grid[y][x];
      
      if (cell !== 1) return; 
      
      let currentSize = 0
      
      const queue = [[y, x]];
      
      while (queue.length > 0){
        const node = queue.shift();
        const [yy, xx] = node;
        
        
        grid[yy][xx] = -1;
        currentSize++;
        
        // up
        if (checkAdj(grid, x, y - 1)) {
          queue.push([y - 1, x]);
        }
        // left
        if (checkAdj(grid, x - 1, y)) {
          queue.push([y, x - 1]);
        }
        // right
        if (checkAdj(grid, x + 1, y)) {
          queue.push([y, x + 1]);
        }
        // down
        if (checkAdj(grid, x, y + 1)) {
          queue.push([y + 1, x]);
        }
      }
      
      if (currentSize > maxSize) {
        maxSize = currentSize;
      }
    }
  }
  
  return maxSize
    
};

function checkAdj(grid, x, y){
  // if out of bounds
  if (x < 0 || y < 0 || x > grid[0].length - 1 || y > grid.length) return false;
  // if cell is 1 return true, else return false
  return grid[y][x] === 1 
}
```