// walker oop


class Walker{
  constructor(x, y, color){
    this.x = x;
    this.y = y;
    this.speed = 8;
    this.radius = 5;
    this.color = color;
  }

  display(){
    noStroke();
    fill(this.color);
    circle(this.x, this.y, this.radius*2);
  }

  move(){
    let choice = random(100);
    if(choice < 25){
      this.y -=this.speed;
    }

    else if(choice<50){
      this.y +=this.speed;
    }

    else if (choice<75){
      this.x +=this.speed;
    }

    else {
      this.x -=this.speed;
    }

  }
}

let walkerArray = [];


function setup() {
  createCanvas(windowWidth, windowHeight);
  let winston = new Walker(width/2, height/2, "red");
  walkerArray.push(winston);
}

function draw() {
  for(let theWalker of walkerArray){
    theWalker.display();
    theWalker.move();
  }
}

function mousePressed(){
  let randomColor = color(random(255), random(255), random(255));
  let someWalker = new Walker(mouseX, mouseY, randomColor);
  walkerArray.push(someWalker);
}