//Quan Le


let radius = 80;
let og_spot_circlex;
let og_spot_circley;

let falling_rate = 5;
let ball_y = radius/2;
let ball_x = 500;
let falling_length = 0;

let cloudX = 500;
let cloudY = radius/2;

function setup() {
  createCanvas(windowWidth, windowHeight);
  
}

function draw() {
  background("skyblue");

  small_ball();
  
  main_catcher();
  
  fall_small_ball();

  cloud();
}

function main_catcher(){
  //main catcher
  fill("brown");
  og_spot_circlex = mouseX;
  og_spot_circley = height - radius - radius/2;

  arc(og_spot_circlex, og_spot_circley,radius*2,radius*2,0, PI, CHORD);
  circle(mouseX - radius, height - radius/2, radius);
  circle(mouseX + radius, height - radius/2, radius);
}

function fall_small_ball(){
  //movement of small ball
  if (ball_y > 0 ) {
    ball_y = ball_y + falling_rate;
  }
  
  if (ball_y > height){
    ball_y = 0 + radius/2;
    ball_x = cloudX;
  }
}

function small_ball(){
  // small balls
  fill("blue");
  circle(ball_x, 0 + ball_y, radius/2);
}

function cloud(){
  fill(255);
  arc(cloudX, cloudY, radius, radius, 0, PI, CHORD);

}