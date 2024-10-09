// Array
// Quan Le
// October 8th
//
// Extra for Experts:
// - describe what you did to take this project "above and beyond"

let cellSize = 80;

let boardx;
let boardy;
let purpleBall;

function setup() {
  createCanvas(windowWidth, windowHeight);
 
  boardy = height/8;
  boardx = width/4;


  purpleBall = {
    x: boardx + cellSize/2,
    y: boardy + cellSize/2,
    size: 65,
    color: "purple",
  };

}

function draw() {
  background(220);

  makeGrid();

  makeOrb();
}

function makeGrid(){
  for (let y = 0; y < 8; y++) {
    for (let x = 0; x < 8; x++) {
      square(boardx + x * cellSize, boardy + y * cellSize, cellSize);
    }
  }
}

function makeOrb(){
  circle(purpleBall.x, purpleBall.y, purpleBall.size);
  fill(purpleBall.color);
}
