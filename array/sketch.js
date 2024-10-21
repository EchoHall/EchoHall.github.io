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

let newOrbs; 

let boardx;
let boardy;


function setup() {
  createCanvas(windowWidth, windowHeight);
  //defining
  boardy = height/8;
  boardx = width/4;

  newOrbs = {
    size: 65,
    color: ["red","green", "orange", "blue", "yellow", "black", "white"],
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

// function locateOrbs() {
//   for(let orb = 0; orb < 64; orb++) {
//     theRandomNumberX = random(movementAmount);
//     theRandomNumberY = random(movementAmount);
//     randomColor = random(color);

//     let newOrbs = {
//       x:  theRandomNumberX,
//       y:  theRandomNumberY,
//       size: 65,
//       color: randomColor,
//     };

//     let isNewLocation = false; 
//     let isNewColor = false;

//     while (!isNewLocation) {
//       newListX = structuredClone(movementAmount);
//       newListY = structuredClone(movementAmount);

//       for (let theOrb of theOrbs) {
//         if (theOrb.x === newOrbs.x) {
//           let leftoverY = newListY.splice(theOrb.y);
//           newOrbs.y = random(newListY);
//         }

//         if (theOrb.y === newOrbs.y) {
//           let leftoverX = newListX.splice(theOrb.x);
//           newOrbs.x = random(newListX);
//         }

//         newListX.push(leftoverX);
//         newListY.push(leftoverY);

//       }
//       isNewLocation = true;
//     }
//     theOrbs.push(newOrbs);
//     makeOrb();
//   }

// }


function makeOrb(){
  for(let y = 0; y < 8; y++){
    for (let x = 0; x < 8; x++){
      fill(random);
      circle(cellSize/2 + width/4 + cellSize*x, cellSize/2 + height/8 + cellSize*y, newOrbs.size);
    }
  }
}
