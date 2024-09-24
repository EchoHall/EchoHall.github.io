// Traffic Light Starter Code
// Your Name Here
// The Date Here

// GOAL: make a 'traffic light' simulator. For now, just have the light
// changing according to time. You may want to investigate the millis()
// function at https://p5js.org/reference/#/p5/millis

let wait_time_red = 900;
let last_time_red = 0;

let wait_time_gre = 900;
let last_time_gre = 0;

let wait_time_yel = 900;
let last_time_yel = 0;

let IsColorRed = true;
let IsColorGre = true;
let IsColorYel = true;

function setup() {
  createCanvas(600, 600);
}

function draw() {
  background(255);
  drawOutlineOfLights();
}

function drawOutlineOfLights() {
  //box
  rectMode(CENTER);
  fill(0);
  rect(width/2, height/2, 75, 200, 10);

  //lights
  if (millis() > last_time_red + wait_time_red){
    IsColorRed = !IsColorRed
    last_time_red = last_time_red + 2700 + wait_time_red
  }

  if (IsColorRed){
    fill("red")
  }
  else{
    fill(255)
  }
  ellipse(width/2, height/2 - 65, 50, 50); //top

  if (millis() > last_time_yel + wait_time_yel){
    IsColorYel = !IsColorYel
    last_time_yel = last_time_yel + 1800+ wait_time_yel
  }

  if (IsColorYel){
    fill("white")
  }
  else{
    fill("yellow")
  }
  ellipse(width/2, height/2, 50, 50); //middle
  
  if (millis() > last_time_gre + wait_time_gre){
    IsColorGre = !IsColorGre
    last_time_gre = last_time_gre + 900 + wait_time_gre
  }

  if (IsColorGre){
    fill("green")
  }
  else{
    fill(255)
  }
  ellipse(width/2, height/2 + 65, 50, 50); //bottom
}