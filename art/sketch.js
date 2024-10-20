// Project Title
// Your Name
// Date
//
// Extra for Experts:
// - describe what you did to take this project "above and beyond"

const TITLE_SIZE = 25;
let theTiles = [];

function setup() {
  createCanvas(windowWidth, windowHeight);
  for (let x =0; x< width; x += TITLE_SIZE){
    for (let y = 0; y<height; y+= TITLE_SIZE){
      let someTitle = spawnTile(x,y);
      theTiles.push(someTitle);      
    }
  }

}

function draw() {
  background(220);

  for (let myTile of theTiles) {
    line(myTile.x1, myTile.y1, myTile.x2, myTile.y2);
  }
}

function spawnTile(x,y) {
  let tile;
  let choice = random(100);

  if (choice > 50){
    tile = {
      x1: x - TITLE_SIZE/2,
      y1: y - TITLE_SIZE/2,
      x2: x + TITLE_SIZE/2,
      y2: y + TITLE_SIZE/2,
    };
  }

  else {
    tile = {
      x1: x - TITLE_SIZE/2,
      y1: y + TITLE_SIZE/2,
      x2: x + TITLE_SIZE/2,
      y2: y - TITLE_SIZE/2,
    };
  }

  return tile;
}