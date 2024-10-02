//Quan Le
//

let radius = 80;
let og_spot_circlex;
let og_spot_circley;

let falling_rate = 5;

let rain_y = radius/2;
let rain_x = 500;


let cat_x = -500;
let cat_y = -radius/2;

let Iscat = false;

function setup() {
  createCanvas(windowWidth, windowHeight);

}

function draw() {
  background("skyblue");
  create_cat();
  small_ball();
  
  main_catcher();
  if (keyIsDown(65)){
    Iscat = !Iscat;
  }
  fall_small_rain_or_cat();
  
}

function main_catcher(){
  //main catcher
  fill("brown");
  og_spot_circlex = mouseX;
  og_spot_circley = height - radius - radius/2;

  //body
  arc(og_spot_circlex, og_spot_circley,radius*2,radius*2,0, PI, CHORD);

  //wheels
  circle(mouseX - radius, height - radius/2, radius);
  circle(mouseX + radius, height - radius/2, radius);
}

function fall_small_rain_or_cat(){
  //movement of small rain
  if (!Iscat){
    if (rain_y > 0 ) {
      rain_y = rain_y + falling_rate;
    }
    
    if (rain_y > height){
      rain_y = 0 + radius/2;
      rain_x = random(0, width);
    }
  }
  //movement of cats
  else if (Iscat){
    
    if (cat_y > 0 ) {
      cat_y = cat_y + falling_rate;
    }
    
    if (cat_y > height){
      cat_y = 0 + radius/2;
      cat_x = random(0, width);
    }
  }
}
  


function small_ball(){
  // small balls
  fill("blue");
  if(keyIsDown(65)){
    rain_x = -rain_x
    rain_y = -rain_y
  }
  circle(rain_x, rain_y, radius/2);
}

function create_cat(){
  fill("green");
  if(keyIsDown(65)){a
    cat_x = -cat_x
    cat_y = -cat_y
  }
  circle(cat_x, cat_y, radius/2);

  //cat's ear
  triangle(cat_x + radius/2/2, cat_y - radius/2/2, cat_x, cat_y - radius/2/2, cat_x + radius/2/2, cat_y - radius);
  
  triangle(cat_x - radius/2/2, cat_y - radius/2/2, cat_x, cat_y -  radius/2/2, cat_x - radius/2/2, cat_y - radius);
}