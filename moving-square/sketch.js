// Square moving around the screen
//Sep 19, 2024

let x = 0;
let y = 0;
let size = 50;
let speed = 10;

function setup() {
  createCanvas(400, 400);
}

function draw() {
  background(220);
  fill("red")
  square(x, y, size)
  if (x <= 0  && y <= height - size && y != 0 ){
    y -= speed
  }
  
  if (x > 0  && y >= height - size){
    x -= speed
  }
  
  if (x >= width - size  && y < height - size){
    y += speed
  }
  
  if (x < width - size  && y <= 0){
    x += speed
  }

}