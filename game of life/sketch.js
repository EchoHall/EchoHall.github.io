// Project Title
// Your Name
// Date
//
// Extra for Experts:
// - describe what you did to take this project "above and beyond"

// let grid = [[1, 0, 1, 1],
//             [0, 1, 0, 1],
//             [1, 0, 1, 1],
//             [1, 1, 0, 1]];

let grid;

let cellSize;
const GRIDSIZE = 10;
let shouldToggleNeightbours = false;

function setup() {
  if(windowWidth > windowHeight){
    createCanvas(windowWidth, windowHeight);
  }

  else{
    createCanvas(windowHeight, windowWidth);
  }
  cellSize = height/GRIDSIZE;
  grid = generateRandomGrid(GRIDSIZE, GRIDSIZE);

}

function windowResized(){
  if(windowWidth > windowHeight){
    resizeCanvas(windowWidth, windowHeight);
  }

  else{
    resizeCanvas(windowHeight, windowWidth);
  }
  cellSize = height/GRIDSIZE;
}

function draw() {
  background(220);
  displayGrid();

}

function mousePressed(){
  let x = Math.floor(mouseX/cellSize);
  let y = Math.floor(mouseY/cellSize);

  toggleCel(x, y);

  if(shouldToggleNeightbours){
    toggleCel(x-1,y);
    toggleCel(x+1,y);
    toggleCel(x,y-1);
    toggleCel(x,y+1);
  }
}

function toggleCel(x, y){
  //make sure cell in grid
  if(x >= 0 && x < GRIDSIZE && x >= 0 && y < GRIDSIZE){
    if(grid[y][x] === 0){
      grid[y][x] = 1;
    }

    else if (grid[y][x] === 1){
      grid[y][x] = 0;
    }
  }
}

function keyPressed(){
  if(key ==="r"){  
    grid = generateRandomGrid(GRIDSIZE, GRIDSIZE);
  }

  if (key ==="e"){
    grid = generateEmptyGrid(GRIDSIZE, GRIDSIZE);
  }

  if (key === "n"){
    shouldToggleNeightbours = !shouldToggleNeightbours;
  }

  if (key === " "){
    grid = updateGrid();
  }
}

function updateGrid(){
  let nextTurn =  generateEmptyGrid(GRIDSIZE, GRIDSIZE);

  for (let y = 0; y < GRIDSIZE; y++){
    for(let x = 0; x<GRIDSIZE; x++){
      let neighbours = 0;

      for (let i = -1; i <= 1; i++){
        for(let j = -1; j <= 1; j++){
          if (x+j >= 0 && x+j < GRIDSIZE && y+i >= 0 && y+i < GRIDSIZE){
            neighbours += grid[y+i][x+j];
          }
        }
      }
      // dont count myself
      neighbours -= grid[y][x];

      //alive or dead
      if(grid[y][x] === 1){
        if(neighbours === 2|| neighbours === 3){
          nextTurn[y][x] = 1;
        }

        else{
          nextTurn[y][x] = 0;
        }
      }
      
      if(grid[y][x] === 0){
        if(neighbours === 3){
          nextTurn[y][x] = 1;
        }

        else{
          nextTurn[y][x] = 0;
        }
      
    }
  }

  return nextTurn;
}

function displayGrid(){
  for (let y = 0; y < GRIDSIZE; y++){
    for(let x = 0; x < GRIDSIZE; x++){
      if(grid[y][x] === 1){
        fill("black");
      }

      else if(grid[y][x] === 0){
        fill("white");
      }

      square(x*cellSize, y*cellSize, cellSize);
    }
  }
}

function generateRandomGrid(cols, rows){
  let newGrid = [];
  for(let y = 0; y<rows; y++){
    newGrid.push([]);
    for(let x = 0; x< cols; x++){
      if(random(100)<50){
        newGrid[y].push(1);
      }

      else{
        newGrid[y].push(0);
      }
    }
  }
  return newGrid;
}

function generateEmptyGrid(cols, rows){
  let newGrid = [];
  for(let y = 0; y<rows; y++){
    newGrid.push([]);
    for(let x = 0; x< cols; x++){
      newGrid[y].push(0);
    }
  }
  return newGrid;
}