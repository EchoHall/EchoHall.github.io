
// Galaga kinda
// Oct 29, 2024

let grid;
let cellSize;
const GRID_SIZE = 10;
const OPEN_TILE = 0;
const IMPASSIBLE = 1;
const PLAYER = 9;
let thePlayer = {
  x: 0, 
  y: 0,
};


function setup() {
  if (windowWidth < windowHeight) {
    createCanvas(windowWidth, windowWidth);
  }
  else {
    createCanvas(windowHeight, windowHeight);
  }
  cellSize = height/GRID_SIZE;
  grid = generateRandomGrid(GRID_SIZE, GRID_SIZE);

  //add player to the grid
  grid[thePlayer.y][thePlayer.x] = PLAYER;
}

function windowResized() {
  if (windowWidth < windowHeight) {
    resizeCanvas(windowWidth, windowWidth);
  }
  else {
    resizeCanvas(windowHeight, windowHeight);
  }
  cellSize = height/GRID_SIZE;
}

function draw() {
  background(220);
  displayGrid();
}

function mousePressed() {
  let y = Math.floor(thePlayer.y/cellSize);

  shootLaser(y);
}

function shootLaser(y) {
  grid[y] = laser;
}

function keyPressed() {
  if (key === "r") {
    grid = generateRandomGrid(GRID_SIZE, GRID_SIZE);
  }
  if (key === "e") {
    grid = generateEmptyGrid(GRID_SIZE, GRID_SIZE);
  }


  if (key === "s") {
    //move down
    movePlayer(thePlayer.x, thePlayer.y + 1);
  }

  if (key === "w") {
    //move up
    movePlayer(thePlayer.x, thePlayer.y - 1);
  }
}

function movePlayer(x, y) {
  //don't move off grid, and only move in open tiles
  if (x >= 0 && x < GRID_SIZE && y >= 0 && y < GRID_SIZE && grid[y][x] === OPEN_TILE) {
    
    //previous player location
    let oldX = thePlayer.x;
    let oldY = thePlayer.y;
  
    //keeping track of where the player is
    thePlayer.x = x;
    thePlayer.y = y;
  
    //reset the old location to be an empty tile
    grid[oldY][oldX] = OPEN_TILE;
  
    //put the player into the grid
    grid[thePlayer.y][thePlayer.x] = PLAYER;
  }

}


function displayGrid() {
  for (let y = 0; y < GRID_SIZE; y++) {
    for (let x = 0; x < GRID_SIZE; x++) {
      if (grid[y][x] === OPEN_TILE) {
        fill("white");
      }
      else if (grid[y][x] === PLAYER) {
        fill("red");
        square(x * cellSize, y * cellSize, cellSize);
      }
    }
  }
}


function generateRandomGrid(cols, rows) {
  let newGrid = [];
  for (let y = 0; y < rows; y++) {
    newGrid.push([]);
    for (let x = 0; x < cols; x++) {
      newGrid[y].push(OPEN_TILE);
    }
  }
  return newGrid;
}

function generateEmptyGrid(cols, rows) {
  let newGrid = [];
  for (let y = 0; y < rows; y++) {
    newGrid.push([]);
    for (let x = 0; x < cols; x++) {
      newGrid[y].push(OPEN_TILE);
    }
  }
  return newGrid;
}
