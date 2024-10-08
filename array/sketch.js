// Array
// Quan Le
// October 8th
//
// Extra for Experts:
// - describe what you did to take this project "above and beyond"

let cellSize;


let purpleBall;

function setup() {
  createCanvas(windowWidth, windowHeight);
  
  if (width > height) {
    cellSize = height/10;
  }
  else {
    cellSize = width/10;
  }
}

function draw() {
  background(220);

  makeGrid();
}

function makeGrid(){
  for (let y = 0; y < 8; y++) {
    for (let x = 0; x < 8; x++) {
      square(width/4 + x * cellSize, height/8+ y * cellSize, cellSize);
    }
  }
}

function makeOrb(){
  
}
