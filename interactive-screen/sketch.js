//Quan Le
//

let radius = 80;
let og_spot_circlex;
let og_spot_circley;

let falling_rate = 5;

let cat_x = 500;
let cat_y = radius/2;

function setup() {
  createCanvas(windowWidth, windowHeight);

}

function draw() {
  background("skyblue");
  
  create_cat();
  
  main_catcher();
  fall_cat()
  
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

function fall_cat(){

    if (cat_y > 0 ) {
      cat_y = cat_y + falling_rate;
    }
    
    if (cat_y > height){
      cat_y = 0 + radius/2;
      cat_x = random(0, width);
    }
}

function create_cat(){
  fill("green");
  circle(cat_x, cat_y, radius/2);

  //cat's ear
  triangle(cat_x + radius/2/2, cat_y - radius/2/2, cat_x, cat_y - radius/2/2, cat_x + radius/2/2, cat_y - radius);
  
  triangle(cat_x - radius/2/2, cat_y - radius/2/2, cat_x, cat_y -  radius/2/2, cat_x - radius/2/2, cat_y - radius);
}