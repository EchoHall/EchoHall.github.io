// Array
// Quan Le
// October 8th
//
// SOURCE: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/find
// Extra for Experts:
// - describe what you did to take this project "above and beyond"

let cellSize = 80;

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

  makeOrb();

}

function draw() {


  // makeGrid();
  //makeOrb();

}

function makeGrid(){
  fill("white");
  for (let y = 0; y < 8; y++) {
    for (let x = 0; x < 8; x++) {
      square(boardx + x * cellSize, boardy + y * cellSize, cellSize);
    }
  }
}

// function makeOrb(){
//   let randomLocationX = purpleBall.x;
//   let randomLocationY = purpleBall.y;

//   for(let purple = 0; purple< 8; purple++){
//     fill("purple");

//     circle(randomLocationX, randomLocationY, purpleBall.size);

//     randomLocationX = purpleBall.x + cellSize*random(cellSizeLocationXPurple);
//     randomLocationY = purpleBall.y + cellSize*random(cellSizeLocationYPurple);


//     for(let red= 0; red < 4; red++) {

//       circle(redBall.x + cellSize*random(cellSizeLocationXRed) , redBall.y + cellSize*random(cellSizeLocationYRed), redBall.size);
//       randomLocationX = redBall.x + cellSize*random(cellSizeLocationXRed);
//       randomLocationY = redBall.y + cellSize*random(cellSizeLocationYRed);
//       fill("red");
//     }

//   }
// }

function locateOrbs() {
  for(let orb = 0; orb < 8; orb++) {
    theRandomNumberX = random(movementAmount);
    theRandomNumberY = random(movementAmount);
    
    let newOrbs = {
      x:  theRandomNumberX,
      y:  theRandomNumberY,
      size: 65,
      color: ["red","green", "orange", "blue", "yellow", "black", "white"],
    };
    
    //schellenberg helped with this...
    let isNewLocation = false; 
    while (!isNewLocation) {
      for (let theOrb of theOrbs) {
        if (theOrb.x === newOrbs.x && theOrb.y === newOrbs.y) {
          newOrbs.x = random(movementAmount);
          newOrbs.y = random(movementAmount);
        }
      }
      isNewLocation = true;
    }

    theOrbs.push(newOrbs);

  }
}

// function checkLocation(){
//   let isNewLocation = false; 
//   while (!isNewLocation) {
//     for (let theOrb of theOrbs) {
//       if (theOrb.x === newOrbs.x && theOrb.y === newOrbs.y) {
        
//       }
//     }
//   }
// }

function makeOrb(){
  for(let anOrb of theOrbs){
    circle(+ width/4 + cellSize*anOrb.x, height/8 + cellSize*anOrb.y, anOrb.size);
  }
}
