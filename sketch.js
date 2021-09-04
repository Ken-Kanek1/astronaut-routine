
var astronaut,eat,bg,sleep,brush,gym,drink,move,bath;



function preload(){

bg = loadImage("images/iss.png");

sleep = loadAnimation("images/sleep.png");

brush = loadAnimation("images/brush.png");

gym = loadAnimation("images/gym1.png","images/gym2.png");

eat = loadAnimation("images/eat1.png","images/eat2.png");

drink = loadAnimation("images/drink1.png","images/drink2.png");

move = loadAnimation("images/move.png","images/move1.png");

bath = loadAnimation("images/bath1.png","images/bath2.png");

}


function setup() {
  createCanvas(800,400);
  createSprite(400, 200, 50, 50);

  //bg = createSprite(400,200);
 // bg.addImage("background",bg);
  //bg.scale = 1;


  astronaut = createSprite(300,230);
  astronaut.addAnimation("sleeping",sleep);
  astronaut.scale = 0.1;
}

function draw() {
  background(bg); 
  
  edges= createEdgeSprites();
    astronaut.bounceOff(edges);

  

  drawSprites();

  textSize(20);
  
  text("Instructions:",790,10);

  
  
  text("Up arrow = Brushing",790,20);

  
  
  text("Down arrow = Gymming",790,30);

  
  
  text("Left arrow = Eating",790,40);

 
  
  text("Right arrow = Bathing",790,50);

  
  
  text("M key = Moving",790,60);

  if(keyDown("Up")){

    astronaut.addAnimation("brushing",brush);
    astronaut.changeAnimation("brushing");
    astronaut.y = 350;
    astronaut.velocityY = 0;
    astronaut.velocityX = 0;
  }

  if(keyDown("down")){

    astronaut.addAnimation("gymming",gym);
    astronaut.changeAnimation("gymming");
    astronaut.y = 350;
    astronaut.velocityY = 0;
    astronaut.velocityX = 0;
  }

  if(keyDown("left")){

    astronaut.addAnimation("eating",eat);
    astronaut.changeAnimation("eating");
    astronaut.x = 50;
    astronaut.velocityY = 3;
    astronaut.velocityX = 3;
  }

  if(keyDown("right")){

    astronaut.addAnimation("bathing",bath);
    astronaut.changeAnimation("bathing");
    astronaut.x = 350;
    astronaut.velocityY = 0;
    astronaut.velocityX = 0;
  }

  if(keyDown("M")){

    astronaut.addAnimation("moving",move);
    astronaut.changeAnimation("moving");
    astronaut.x = 350;
    astronaut.velocityY = 3;
    astronaut.velocityX = 3;
  }

}