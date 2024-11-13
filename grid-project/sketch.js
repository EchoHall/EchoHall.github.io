// Quan Le
// Galaga kinda
// Oct 29, 2024

let grid;
let cellSize;
const GRID_SIZE = 10;
const OPEN_TILE = 0;
const IMPASSIBLE = 1;
const PLAYER = 9;
let thePlayer = {
  x: 2, 
  y: 0,
};

const ENEMY = 10;
let theEnemy = {
  x: 9,
  y: 9,
};

let isProtecting = false;
let lastTimeSwitched = 0;
let delayTime = 5000;
let enemyMovementTime = 1000;

function setup() {
  if (windowWidth < windowHeight) {
    createCanvas(windowWidth, windowWidth);
  }
  else {
    createCanvas(windowHeight, windowHeight);
  }
  cellSize = height/GRID_SIZE;
  grid = generateGrid(GRID_SIZE, GRID_SIZE);

  //add character to the grid
  grid[thePlayer.y][thePlayer.x] = PLAYER;
  grid[theEnemy.y][theEnemy.x] = ENEMY;
}

function windowResized() {
  if (windowWidth < windowHeight) {
    resizeCanvas(windowWidth, windowWidth);
  }
  else {
    resizeCanvas(windowHeight, windowHeight);
  }
  cellSize = height/GRID_SIZE;
  lastTimeSwitched = millis();
}

function draw() {
  background(220);
  displayGrid();
  loadShield();
  delayShield();
  moveEnemy();
}

function mousePressed() {
  isProtecting = true;
}

function keyPressed() {
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

function moveEnemy(){
  if(theEnemy.x <= 0){
    theEnemy.y = random(9);
    theEnemy.x = 9;
  }

  if(millis() > lastTimeSwitched + enemyMovementTime && theEnemy.x > 0){
    theEnemy.x -= 1;
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
      }
      
      else if(grid[y][x] === ENEMY){
        fill("purple");
      }
      square(x * cellSize, y * cellSize, cellSize);
    }
  }
}


function generateGrid(cols, rows) {
  let newGrid = [];
  for (let y = 0; y < rows; y++) {
    newGrid.push([]);
    for (let x = 0; x < cols; x++) {
      newGrid[y].push(OPEN_TILE);
    }
  }
  return newGrid;
}

function loadShield(){
  for (let y = 0; y < GRID_SIZE; y++) {
    for (let x = 0; x < GRID_SIZE; x++) {
      if (grid[y][x] === PLAYER) {
        if (isProtecting){
          fill("yellow");
        }

        else{
          fill("white");
        }
        square((x+1) * cellSize, y * cellSize, cellSize);
      }
    }
  }
}

function delayShield(){
  if (isProtecting && millis() > lastTimeSwitched+delayTime){
    isProtecting = false;
    lastTimeSwitched = millis();
  }
}