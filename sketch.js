var navio, mar, marImg, navioAnimation;

function preload(){
  marImg = loadImage("sea.png");
  navioAnimation = loadAnimation("ship-1.png","ship-2.png","ship-3.png","ship-4.png");
}

function setup(){
  createCanvas(400,400);
  mar=createSprite(200,150);
  mar.addImage(marImg);
  mar.scale=0.5; 

  navio=createSprite(100,200);
  navio.addAnimation("nadando", navioAnimation); 
  navio.scale=0.2;
  
  mar.velocityX=-6;
}



function draw() {
  background("blue");
 
 
 

  if(mar.x<0){
    mar.x=mar.width/4; 
                      
  }
    
 drawSprites();
}
