var fixedRect, movingRect;

function setup() {
  createCanvas(1000,700);
  fixedRect=createSprite(600,400,50,80);
  fixedRect.shapeColor="green";
  fixedRect.debug=true;
  movingRect=createSprite(400,200,80,30)
  movingRect.shapeColor="green"
  movingRect.debug="true"
}

function draw() {
  
  background("black");  
  console.log(fixedRect.x-movingRect.x)
  movingRect.x=mouseX;
  movingRect.y=mouseY;

  /*Collision detection algorithm states whenever two objects collide,
  the distance between will be less than or equal to sum of their half of the width/height*/
  if(fixedRect.x-movingRect.x < fixedRect.width/2+movingRect.width/2&&
    movingRect.x-fixedRect.x < fixedRect.width/2+movingRect.width/2&&
    movingRect.y-fixedRect.y < fixedRect.height/2+movingRect.height/2&&
    fixedRect.y-movingRect.y < fixedRect.height/2+movingRect.height/2){
    fixedRect.shapeColor="red";
    movingRect.shapeColor="red"
  }
  else{
    movingRect.shapeColor="green";
    fixedRect.shapeColor="green";
  }


  drawSprites();
}