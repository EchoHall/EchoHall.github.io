// Array
// Quan Le
// October 8th
//
// SOURCE: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/find
// Extra for Experts:
// - describe what you did to take this project "above and beyond"

let cellSize = 80;
// let cellSizeLocationXPurple = [0, 1, 2, 3, 4, 5, 6, 7];
// let cellSizeLocationYPurple = [0, 1, 2, 3, 4, 5, 6, 7];

// let cellSizeLocationXRed = [0, 1, 2, 3, 4, 5, 6, 7];
// let cellSizeLocationYRed = [0, 1, 2, 3, 4, 5, 6, 7];

let theOrbs = [];

const movementAmount = [
  
];


let boardx;
let boardy;
let purpleBall;
let redBall;

function setup() {
  createCanvas(windowWidth, windowHeight);
  //defining
  boardy = height/8;
  boardx = width/4;

  purpleBall = {
    x: boardx + cellSize/2,
    y: boardy + cellSize/2,
    size: 65,
    color: "purple",
    characteristic: [],
  };

  redBall = {
    x: boardx + cellSize/2,
    y: boardy + cellSize/2,
    size: 65,
    color: "red",
  };

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
  for(let purple = 0; purple < 8; purple++) {
    let theRandomNumberX = 0;
    let theRandomNumberY = 0;

    theRandomNumberX = random(movementAmountX);
    theRandomNumberY = random(movementAmountY);

    
    
    theOrbs.push(theRandomNumberX);
  }
}

function makeOrb(){
  for(let purple = 0; purple < 8; purple++){
    circle(purpleBall.x + cellSize*theOrbsX, purpleBall.y + cellSize*theOrbsY, purpleBall.size);
  }
}
