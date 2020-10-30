var fixedRect, movingRect;
var obj1,obj2;
function setup() {
  createCanvas(1200,800);
  fixedRect = createSprite(400, 100, 50, 80);
  fixedRect.shapeColor = "green";
  fixedRect.debug = true;
  movingRect = createSprite(400, 800,80,30);
  movingRect.shapeColor = "green";
  movingRect.debug = true;

  movingRect.velocityY = -5;
  fixedRect.velocityY = +5;

  obj1 = createSprite(700,100,50,50);
  obj2 = createSprite(700,800,50,50);
  obj1.velocityY=+10;
  obj2.velocityY=-10;
}

function draw() {
  background(0,0,0);  
bounceOff(movingRect,fixedRect);
bounceOff(obj1,obj2); 
  drawSprites();
}