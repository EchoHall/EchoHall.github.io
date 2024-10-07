// terrain

let terrain = [];
const NUMBER_OF_RECT = 1000;

function setup() {
  createCanvas(windowWidth, windowHeight);
  let widthOfRect = width/NUMBER_OF_RECT;
  gernerateTerrain(widthOfRect);
}

function draw() {
  background(220);

  for(let someRect of terrain){
    rect(someRect.x, someRect.y, someRect.w, someRect.h);
  }
}

function gernerateTerrain(widthOfRect){
  let time = 0;
  let deltatime = 0.001;

  for(let x = 0; x < width; x += widthOfRect) {
    let theHeight = noise(time) * height;
    let someRect = spawnRectangle(x, theHeight, widthOfRect);
    terrain.push(someRect);

    time += deltatime;
  }
}

function spawnRectangle(leftSide,rectHeight, rectWidth){
  let theRect = {
    x: leftSide,
    y: height - rectHeight,
    w: rectWidth,
    h: rectHeight,
  };

  return theRect;
}