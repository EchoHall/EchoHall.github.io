//Quan Le



// let width = 750;
// let height = 600;

let radius = 80;
let og_spot_circlex;
let og_spot_circley;

let falling_rate = 5;
let ball_y;
let ball_x;
let falling_length = 0;

function setup() {
  createCanvas(windowWidth, windowHeight);

}

function draw() {
  background(220);

  small_ball();
  
  main_catcher();
  
  fall_small_ball();
}

function main_catcher(){
    //main catcher
  fill("brown");
  og_spot_circlex = mouseX;
  og_spot_circley = height - radius - 3;

  arc(og_spot_circlex, og_spot_circley,radius*2,radius*2,0, PI, CHORD);
  circle(mouseX - radius, height, radius/2)
}

function fall_small_ball(){
    //movement of small ball
  ball_x = radius/2
  ball_x = width/2

  if (ball_y > 0 ) {
    ball_y = ball_y + falling_rate;
  }
  
  if (ball_y > height){
    ball_y = 0 + radius/2;
    ball_x = random(0, width);
    }
}

function small_ball(){
    // small balls
  fill("blue");
  circle(ball_x, 0 + ball_y, radius/2);
}

