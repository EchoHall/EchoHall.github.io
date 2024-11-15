// Quan Le
// Dodge William Afton
// use W and S to move the red character up and down. Left click to make a yellow shield appear for 5 seconds to protect the red character. 
// Oct 29, 2024

let grid;
let cellSize;
const GRID_SIZE = 10;

const OPEN_TILE = 0;

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

let lost = false;

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
  //stop the game after losing
  if(!lost) {
    displayGrid(); 
  }
  delayShield();

  moveEnemy(theEnemy.x-1, theEnemy.y);

}

function mousePressed() {
  isProtecting = true;
}

function keyPressed() {
  if (key === "s" && !lost) {
    //move down
    movePlayer(thePlayer.x, thePlayer.y + 1);
  }

  if (key === "w" && !lost) {
    //move up
    movePlayer(thePlayer.x, thePlayer.y - 1);
  }

  if (key === "a" && !lost) {
    //move left
    movePlayer(thePlayer.x - 1, thePlayer.y);
  }

  if (key === "d" && !lost) {
    //move right
    movePlayer(thePlayer.x+1, thePlayer.y);
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

function moveEnemy(x, y){
  let oldX = theEnemy.x;
  let oldY = theEnemy.y;
  
  if(grid[y][x] === PLAYER && !isProtecting){
    lost = true;
  }
  //put enemy back to the beginning
  if(x < 0){
    theEnemy.x = 10;
    theEnemy.y = floor(random(9));
  }
  
  if(x >= 0){

    theEnemy.x = x;
    theEnemy.y = y;

    //reset old location to player if shield is on
    if(grid[oldY][oldX] === PLAYER){
      grid[y][x] = PLAYER;
    }

    //reset old location to open tile
    else{
      grid[oldY][oldX] = OPEN_TILE;
    }

    grid[theEnemy.y][theEnemy.x] = ENEMY;
  }
}


function displayGrid() {
  for (let y = 0; y < GRID_SIZE; y++) {
    for (let x = 0; x < GRID_SIZE; x++) {
      if (grid[y][x] === OPEN_TILE) {
        fill("white");
      }
      
      else if (grid[y][x] === PLAYER) {
        if (isProtecting){
          fill("yellow");
        }

        else{
          fill("red");
        }
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

function delayShield(){
  //shield timing
  if (isProtecting && millis() > lastTimeSwitched+delayTime){
    isProtecting = false;
    lastTimeSwitched = millis();
  }
}