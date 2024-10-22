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

function draw() {
  background(220);
  displayGrid();

}

function keyPressed(){
  if(key ==="r"){  
    grid = generateRandomGrid(GRIDSIZE, GRIDSIZE);
  }

  if (key ==="e"){
    grid = generateEmptyGrid(GRIDSIZE, GRIDSIZE);
  }
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