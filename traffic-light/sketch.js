// Traffic Light Starter Code
// Your Name Here
// The Date Here

// GOAL: make a 'traffic light' simulator. For now, just have the light
// changing according to time. You may want to investigate the millis()
// function at https://p5js.org/reference/#/p5/millis

let IsColor = "green";
let lastTime = 0;
const GREEN_LIGHT_DURATION = 2000;
const YELLOW_LIGHT_DURATION = 500;
const RED_LIGHT_DURATION = 3000;

function setup() {
  createCanvas(600, 600);
}

function draw() {
  background(255);
  drawOutlineOfLights();
  displayColor();
  changeState();

}

function changeState(){
  if (IsColor === "green" && millis() > lastTime + GREEN_LIGHT_DURATION){
    IsColor = "yellow";
    lastTime = millis();
    console.log(IsColor);
  }

  else if (IsColor === "yellow" && millis() > lastTime + YELLOW_LIGHT_DURATION){
    IsColor = "red";
    lastTime = millis();
    console.log(IsColor);
  }

  else if (IsColor === "red" && millis() > lastTime + RED_LIGHT_DURATION){
    IsColor = "green";
    lastTime = millis();
    console.log(IsColor);
  }
}

function drawOutlineOfLights() {
  //box
  rectMode(CENTER);
  fill(0);
  rect(width/2, height/2, 75, 200, 10);

 
}

function displayColor() { //lights
  if (IsColor === "green"){
    fill("green");
    ellipse(width/2, height/2 + 65, 50, 50); //bottom
  }
  
  else if (IsColor === "yellow"){
    fill("yellow");
    ellipse(width/2, height/2, 50, 50); //middle
  }

  else if (IsColor === "red"){
    fill("red");
    ellipse(width/2, height/2 - 65, 50, 50); //top
  }
}