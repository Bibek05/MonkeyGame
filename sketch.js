var monkey, monkeyImage
var bananaImage,bananaGroup
var obstacleImage,obstacleGroup
var bg, bgImage
var invisibleGround


var score = 0;




function preload(){

  bgImage = loadImage("jungle.jpg");
  
  bananaImage = loadImage("banana.png");
  obstacleImage = loadImage("stone.png");
  
  monkeyImage = loadAnimation("Monkey_01.png","Monkey_02.png","Monkey_03.png","Monkey_04.png","Monkey_05.png","Monkey_06.png","Monkey_07.png","Monkey_08.png","Monkey_09.png","Monkey_10.png")
  

}

function setup() {
  createCanvas(600, 400);
  
  obstacleGroup = new Group();
  bananaGroup = new Group();
  
  bg = createSprite(200,200);
  bg.addImage(bgImage);
  bg.velocityX= -4;
  bg.x = bg.width/2;  
  
  
  monkey = createSprite(50,370);
  monkey.addAnimation("running",monkeyImage);
  monkey.scale = 0.1;
  monkey.velocityX = -0.00001;
  
  invisibleGround = createSprite(200,390,1000,10)
  invisibleGround.visible = false;
}

function draw() {
  background(100)
  
  textSize(20)
  text("Score:"+ score,200,200)
  
   
  
  monkey.collide(invisibleGround);
  
  if (bg.x<0){
    bg.x = bg.width/2;
  }
  
  if (keyDown("space")){
    monkey.velocityY = -10;

  }
  
  monkey.velocityY = monkey.velocityY + 0.8
  
  if (obstacleGroup.isTouching(monkey)){
    monkey.velocityX = 0;
    monkey.velocityY = 0; 
    obstacleGroup.setVelocityXEach(0);
    bg.velocityX = 0;
    bananaGroup.setVelocityXEach(0);
  }
  
  if (bananaGroup.isTouching(monkey)){
    score = score+2;
  }
  
  obstacle();
  banana();
  
  drawSprites();
}

function obstacle(){
 if (frameCount % 180 === 0){
   var obstacle = createSprite(500,360);
   obstacle.addImage(obstacleImage);
   obstacle.scale = 0.15;
   obstacle.velocityX = -15;
   
   obstacleGroup.add(obstacle)
 }

}

function banana(){
  if (frameCount % 100 === 0){
    var banana = createSprite(550,200);
    banana.y = Math.round(random(200,250));
    banana.velocityX = -18;
    banana.scale = 0.05;
    banana.addImage(bananaImage);
    
    bananaGroup.add(banana);
  }
  
}