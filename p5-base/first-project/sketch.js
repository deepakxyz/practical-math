//set document title
document.title = "first-project";

// variable
var circleX =  0;
var circleY = 0;
var speed = 1;

function setup() {
  createCanvas(400,400);
  // put setup code here
}

function draw() {
  // put drawing code here
  // map fucn
  background(map(circleY,0,400,0,255));
  // ellipse
  fill(250,200,200);
  rect(circleX,circleY,23,23);

  // new rect
  fill(200,200,200);
  ellipse(100, 100, 100, 100);

  // varibale changes
  if (circleX === 400 || circleX < 0) {
    speed = speed * -1;
  }

  circleX = circleX + speed;
  circleY = circleY + speed;

}
// event
function mousePressed(){
  background(23);
}
