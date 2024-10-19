// Array
// Quan Le
// October 8th
//
// SOURCE: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/find
// Extra for Experts:
// - describe what you did to take this project "above and beyond"

let cellSize = 80;
let orbColor = ["red","green", "orange", "blue", "yellow", "black", "white"];
let theOrbs = [];

const movementAmount = [0, 1, 2, 3, 4, 5, 6, 7];


let boardx;
let boardy;
let purpleBall;
let redBall;

function setup() {
  createCanvas(windowWidth, windowHeight);
  //defining
  boardy = height/8;
  boardx = width/4;
  //loading 

  makeGrid();
  locateOrbs();

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

function locateOrbs() {
  for(let orb = 0; orb < 8; orb++) {
    theRandomNumberX = random(movementAmount);
    theRandomNumberY = random(movementAmount);
    randomColor = random(orbColor);

    let newOrbs = {
      x:  theRandomNumberX,
      y:  theRandomNumberY,
      size: 65,
      color: randomColor,
    };

    let isNewLocation = false; 
    let isNewColor = false;

    while (!isNewLocation) {
      for (let theOrb of theOrbs) {
        if (theOrb.x === newOrbs.x && theOrb.y === newOrbs.y) {
          newOrbs.x = random(movementAmount);
          newOrbs.y = random(movementAmount);
        }
      }
      isNewLocation = true;
    }

    while (!isNewColor){
      for(let moreOrbs of theOrbs){
        if (newOrbs.color === moreOrbs.color){
          newOrbs.color = orbColor[random(0,8)];       
        }
      }
    }
    fill(randomColor);
    theOrbs.push(newOrbs);
    makeOrb();
  }

}


function makeOrb(){
  for(let anOrb of theOrbs){
    circle(cellSize/2 + width/4 + cellSize*anOrb.x, cellSize/2 + height/8 + cellSize*anOrb.y, anOrb.size);
  }
}
