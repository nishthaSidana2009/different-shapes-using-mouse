function setup() {
  createCanvas(600, 400);
}

function draw() {
  background(0);
  stroke(255);
  strokeWeight(4);
  noFill();
  if(mouseX>300){
    rect(200,200,100,80);
  } else if(mouseX>250){
    ellipse(200,200,100);
  } else if(mouseX>200){
    rect(200,200,100,70,50)
  } else if(mouseX>150){
    triangle(200,200,50,100,100,100)
  }
}