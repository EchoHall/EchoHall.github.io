//Quan Le



let width = 750;
let height = 600;

let radius = 80;
let og_spot_circlex;
let og_spot_circley = height - radius;

let falling_rate = 5;
let ball_y = radius/2;
let ball_x = width/2;
let falling_length = 0;

function setup() {
  createCanvas(width, height);

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
  arc(og_spot_circlex, og_spot_circley,radius*2,radius*2,0, PI, CHORD);
}

function fall_small_ball(){
    //movement of small ball
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

function draw_background(){
  for(let y = 0; y < height; y++){
    for(let x = 0; x < width; x++){
      circle(x, y, 3)
    }
  }
}