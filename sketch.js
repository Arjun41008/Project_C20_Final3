var bg,bgImg;
var sleep,brush,gym;
var eat,drink,move;
var astronaut;
var edges;

function preload(){
  bgImg = loadImage("iss.png");
  bath = loadAnimation("bath1.png", "bath2.png");
  sleep = loadAnimation("sleep.png");
  move = loadAnimation("move1.png", "move2.png");
  eat = loadAnimation("eat1.png", "eat2.png");
  brush = loadAnimation("brush.png");
  gym = loadAnimation("gym1.png","gym2.png");
}


function setup() {
  createCanvas(windowWidth, windowHeight);

  bg = createSprite(650,200,windowWidth, windowHeight);
  bg.addImage(bgImg);
  bg.scale = 0.3;
  
  astronaut = createSprite(windowWidth/2, windowHeight/2);
  astronaut.addAnimation("sleeping", sleep);
  astronaut.scale = 0.1;


  edges = createEdgeSprites();
 
}


function draw() {
  background(255,255,255); 

  astronaut.bounceOff(edges);
  
  if(keyDown("UP_ARROW")){
    astronaut.addAnimation("brushing", brush);
    astronaut.changeAnimation("brushing");
    astronaut.y = 490;
    astronaut.velocityX = 0;
    astronaut.velocityY = 0;
  }

  if(keyDown("DOWN_ARROW")){
    astronaut.addAnimation("gymming", gym);
    astronaut.changeAnimation("gymming");
    astronaut.y = 490;
    astronaut.velocityX = 0;
    astronaut.velocityY = 0;
  }

  if(keyDown("LEFT_ARROW")){
    astronaut.addAnimation("eating", eat);
    astronaut.changeAnimation("eating");
    astronaut.y = 490;
    astronaut.velocityX = 2;
    astronaut.velocityY = 3;
  }

  if(keyDown("RIGHT_ARROW")){
    astronaut.addAnimation("bathing", bath);
    astronaut.changeAnimation("bathing");
    astronaut.y = 490;
    astronaut.velocityX = 0;
    astronaut.velocityY = 0;
   }

  if(keyDown("M")){
    astronaut.addAnimation("moving", move);
    astronaut.changeAnimation("moving");
    astronaut.y = 490;
    astronaut.velocityX = 1;
    astronaut.velocityY = -2;
   }

  drawSprites();

  fill(255);
  stroke(0);
  textSize(30);
  text("Instructions:",10,50);

  fill(255);
  stroke(0);
  textSize(20);
  text("UP ARROW = Brushing",10,80);
  text("DOWN ARROW = Gymming",10,110);
  text("LEFT ARROW = Eating",10,140);
  text("RIGHT ARROW = Bathing",10,170);
  text("M Key = Move",10,200);

}