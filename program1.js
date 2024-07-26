const getTotalIsles = function (grid) {


  // write your code here

};

module.exports = getTotalIsles;

// Function to get the total number of islands
function getTotalIsles(grid) {
  if (grid == null || grid.length === 0) {
      return 0;
  }

  let numIslands = 0;

  for (let i = 0; i < grid.length; i++) {
      for (let j = 0; j < grid[i].length; j++) {
          if (grid[i][j] === 'L') {
              numIslands += dfs(grid, i, j);
          }
      }
  }

  return numIslands;
}

// Depth First Search to mark the connected 'L' cells
function dfs(grid, i, j) {
  if (i < 0 || i >= grid.length || j < 0 || j >= grid[i].length || grid[i][j] === 'W') {
      return 0;
  }

  grid[i][j] = 'W'; // Mark the cell as 'W' to indicate it has been visited

  // Check all four directions
  dfs(grid, i - 1, j); // Up
  dfs(grid, i + 1, j); // Down
  dfs(grid, i, j - 1); // Left
  dfs(grid, i, j + 1); // Right

  return 1;
}

module.exports = getTotalIsles;
