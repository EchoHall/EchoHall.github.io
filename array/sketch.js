// Array
// Quan Le
// October 8th
//
// Generate random color orb. When the mouse is clicked, there will be some numbers appear.

let cellSize = 80;

const movementAmount = [0, 1, 2, 3, 4, 5, 6, 7];

let newOrbs; 

let boardx;
let boardy;

let someOrb = [];


function setup() {
  createCanvas(windowWidth, windowHeight);
  //defining
  boardy = height/8;
  boardx = width/4;

  newOrbs = {
    size: 65,
    color:  ["red","green", "orange", "blue", "yellow", "black", "white"],
  };
  //loading 

  makeGrid();
  // locateOrbs();
  makeOrb();

}

function draw() {

}

function makeGrid(){
  fill("white");
  for (let y = 0; y < 8; y++) {
    for (let x = 0; x < 8; x++) {
      square(boardx + x * cellSize, boardy + y * cellSize, cellSize);
    }
  }
}



function makeOrb(){
  for(let y = 0; y < 8; y++){
    for (let x = 0; x < 8; x++){
      fill(random(newOrbs.color));
      circle(cellSize/2 + width/4 + cellSize*x, cellSize/2 + height/8 + cellSize*y, newOrbs.size);

      if (x === y){
        someOrb.push(x/10 + y/10);
      }

      else{
        someOrb.push(x/y);
      }
    }
  }
}

function mousePressed(){
  for(let y = 0; y < 8; y++){
    for (let x = 0; x < 8; x++){
      if (someOrb[y+x] < 0){
        text(someOrb[y+x], cellSize/2 + width/4 + cellSize*x, cellSize/2 + height/8 + cellSize*y);
      }

      else{
        text(someOrb[y+x], cellSize/2 + width/4 + cellSize*x, cellSize/2 + height/8 + cellSize*y);
      }
    }
  }
}

